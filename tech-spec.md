# Tech Spec — Bali Private Catering

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | React DOM renderer |
| vite | ^6.0.0 | Build tool |
| @vitejs/plugin-react | ^4.3.0 | Vite React plugin |
| tailwindcss | ^4.0.0 | Utility CSS |
| gsap | ^3.12.0 | Core animation engine (includes ScrollTrigger) |
| lenis | ^1.1.0 | Smooth scroll with inertia |
| three | ^0.170.0 | WebGL rendering for smoke effect |
| @types/three | ^0.170.0 | Three.js TypeScript definitions |
| imagesloaded | ^5.0.0 | Image load detection for grid layout |
| @types/imagesloaded | ^5.0.0 | TypeScript definitions |
| typescript | ^5.6.0 | Type checking |
| @types/react | ^18.3.0 | React types |
| @types/react-dom | ^18.3.0 | React DOM types |

**Fonts** (loaded via Google Fonts `<link>` in index.html, no npm packages):
- Playfair Display (weight 400)
- Inter (weights 400, 500)

## Component Inventory

### Layout

| Component | Source | Reuse |
|-----------|--------|-------|
| Navigation | Custom | Single instance, fixed top |
| Footer | Custom | Single instance |
| SmoothScrollProvider | Custom (wraps Lenis) | Single instance, initializes GSAP ScrollTrigger integration |

### Sections

| Component | Notes |
|-----------|-------|
| HeroSection | Two-column asymmetric. Contains SmokeWispCanvas. Uses ScrollTrigger pin. |
| TrustedVillasSection | Full-width dark band. 6 inline SVG logos. |
| WhatWeDoSection | Two-column sticky heading + service list. |
| EditorialSplitSection | 50/50 black/white split. Custom SideBySideColumnReveal animation. |
| HowItWorksSection | 3-column card grid on linen background. Card 02 has video background. |
| MenuShowcaseSection | Asymmetric two-column with offset. Uses DramaticClipReveal per card. |
| VillaAreasSection | 4-column card grid on linen. Uses DramaticClipReveal. |
| TestimonialsSection | Centered quote. Uses QuoteFocus variant of clip reveal + enhanced ink bleed. |
| CTASection | Simple centered content. |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| InkBleedHeading | Custom | All major headings (Hero, Editorial Split, How It Works heading, Menu titles, Villa titles, Testimonial quote, CTA heading) |
| DramaticClipReveal | Custom | MenuShowcase cards, VillaAreas cards, TestimonialsSection |
| SideBySideColumnReveal | Custom | EditorialSplitSection |
| SmokeWispCanvas | Custom (Three.js) | HeroSection only |
| ServiceItem | Custom | WhatWeDoSection |
| MenuCard | Custom | MenuShowcaseSection |
| VillaCard | Custom | VillaAreasSection |
| ProcessCard | Custom | HowItWorksSection (Cards 01, 03 text-only; Card 02 wraps video) |
| FloralDoodle | Inline SVG | MenuShowcaseSection |
| VillaLogo | Inline SVG (6 variants) | TrustedVillasSection |

### Hooks

| Hook | Purpose |
|------|---------|
| useLenis | Access Lenis instance for scroll velocity readings |
| useScrollVelocity | Reads Lenis velocity, returns smoothed value for ink-bleed blur modulation |
| useMousePosition | Normalized mouse coords with damping lerp for smoke effect |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Smoke-Wisp Text Distortion | Three.js (ShaderMaterial) | Custom vertex/fragment shaders on PlaneGeometry(3.4, 2.1, 100, 100). Pre-render text to canvas texture. 3-layer fbm noise for UV distortion, alpha modulation, vertex displacement. Mouse uniform with 0.03 damping. | **High** |
| Ink-Bleed Typography | CSS + GSAP ScrollTrigger | `::before` pseudo-element per heading duplicates text, applies `filter: blur(var(--blur))`, opacity 0.15, offset 2px. CSS custom property `--blur` driven by scroll velocity (Lenis velocity * 0.1, clamped 0–10px). RAF updates via useScrollVelocity. | **Medium** |
| Hero Pinning | GSAP ScrollTrigger | `pin: true`, `pinSpacing: false`, `end: "+=100px"` on HeroSection wrapper. | **Low** |
| Scroll-Based Theming | GSAP ScrollTrigger | One ScrollTrigger per dark section (TrustedVillas, EditorialSplit-left) toggles `.nav-light` class on nav bar. `onEnter`/`onLeaveBack` callbacks. | **Low** |
| Navigation Hide/Show | GSAP ScrollTrigger | ScrollTrigger with `onUpdate` reading direction. TranslateY nav -60px on down, 0 on up. 300ms transition. | **Low** |
| Nav Background Transition | CSS transition | ScrollTrigger `start: "top 60%"` on section below hero toggles class. `backdrop-filter: blur(10px)` + `background: rgba(255,255,255,0.95)`. | **Low** |
| Side-By-Side Column Reveal | GSAP ScrollTrigger (scrub) | Left column `::after` pseudo-element (white bg) animates `scaleX: 0 → 1`, pushing right column into view. Right column content `opacity: 0 → 1` at 60% progress. `scrub: 1`, `start: "top 80%"`, `end: "top 20%"`. | **Medium** |
| Dramatic Clip Reveal | GSAP ScrollTrigger (scrub) | Per-card `::after` overlay (section bg color) animates `scaleY: 1 → 0` (origin top). Inner image animates `scale: 1.6 → 1`. `scrub: 1`, staggered timeline offsets (100ms per card). | **Medium** |
| Quote Focus | DramaticClipReveal + enhanced InkBleed | Same clip reveal as above. Bleed layer blur cap raised to 12px (vs 10px default). Attribution fade-in with 200ms delay after quote reveal. | **Medium** |
| Smoke Canvas Fade-Out | GSAP ScrollTrigger | Tied to hero unpin. Canvas opacity 1→0, scale 1→0.95, `ease: "power1.in"` over 200px scroll. | **Low** |

## State & Logic Plan

### Scroll Velocity Bridge

Lenis emits a `velocity` value on each scroll event. This needs to reach every InkBleedHeading instance to drive the `--blur` CSS property. Architecture:

1. `SmoothScrollProvider` initializes Lenis and stores the instance in a React context.
2. `useScrollVelocity` hook reads from Lenis context, subscribes to scroll events, maintains a ref with the latest velocity.
3. On each RAF tick, velocity is multiplied by 0.1 and clamped to [0, 10] to produce the blur value.
4. Each `InkBleedHeading` receives the blur value as a CSS custom property on its root element. CSS handles the `::before` blur via `filter: blur(var(--blur, 0px))`.
5. The hook uses a small interpolation factor (0.1) so blur doesn't snap — it trails the actual velocity.

### Navigation Theme Detection

The nav must switch text color (black/white) based on which section is under it. Approach:

1. Each dark section has a `data-nav-theme="dark"` attribute.
2. A single ScrollTrigger is created per dark section with `onEnter` / `onLeaveBack` toggling a `"nav-light"` class on the nav element.
3. The nav uses CSS to switch colors: `.nav-light` changes text to white and border to `rgba(255,255,255,0.08)`.
4. No React state — purely class-based toggling via ScrollTrigger callbacks.

### WebGL Lifecycle

The SmokeWispCanvas is a self-contained Three.js scene:

1. Canvas element created via React ref.
2. Three.js scene, camera, renderer initialized in a `useEffect`.
3. Text pre-rendered to a canvas texture in a separate function (creates canvas, draws text, returns `THREE.CanvasTexture`).
4. Mouse tracking via `mousemove` on the canvas, normalized to [-1, 1], smoothed with `lerp(0.03)` per frame.
5. Animation loop runs via `requestAnimationFrame`, driven by `THREE.Clock` for elapsed time.
6. Cleanup disposes geometry, material, texture, and renderer on unmount.
7. ScrollTrigger fades the canvas container div (not the renderer) via GSAP.

## Other Key Decisions

- **No shadcn/ui** — the design is entirely custom editorial. No standard UI patterns (dialogs, dropdowns, tables) are needed. All components are bespoke.
- **ImagesLoaded** is needed only for the MenuShowcaseSection where images affect the asymmetric two-column offset layout. It ensures layout calculations happen after images load.
- **Three.js over R3F** — the smoke effect is a single static shader plane with no 3D scene complexity. Vanilla Three.js avoids the overhead of React Three Fiber for this use case.
- **Font loading** — Use `<link rel="preload">` in `index.html` for Playfair Display and Inter to prevent FOUT on the oversized display headings. `font-display: swap` as fallback.
- **Smooth scroll with Lenis** — Lenis provides both the smooth scroll feel and the velocity value needed for the ink-bleed effect. GSAP ScrollSmoother is not needed since Lenis handles the smoothing and integrates cleanly with ScrollTrigger.
