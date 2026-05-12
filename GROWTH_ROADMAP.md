# Villa Catering Bali — Growth Roadmap

What's live today and what can be added next, prioritised by SEO/traffic impact.

## Currently live

- **Domain**: https://www.villa-catering-bali.online (apex + www attached on Vercel)
- **Pages**: 21 total
  - 1 home (with 24-question FAQ section across 6 categories)
  - 4 hubs (Catering, Services, Suppliers, Guide)
  - 16 topic articles (4 per hub) at ~600 words each
- **Total indexed content**: ~12,000+ words
- **Build pipeline**: Vite + TypeScript + Tailwind, prerendered to static HTML per route
- **SEO**:
  - Per-page title, meta description, canonical in raw HTML
  - Per-page JSON-LD: WebSite, Organization, CollectionPage, Article, BreadcrumbList, FAQPage
  - Sitemap.xml (21 URLs), robots.txt, llms.txt
  - Open Graph + Twitter cards per page with og:image
  - SVG favicon
- **Hosting**: Vercel auto-deploy from GitHub main branch

## Tier 1 — Highest SEO impact

### 1. Connect Google Search Console
- Verify domain ownership via DNS TXT record (Vercel manages DNS so easy)
- Submit `https://www.villa-catering-bali.online/sitemap.xml`
- Monitor indexed pages, search impressions, click-through rates
- Submit individual URLs for faster indexing via Indexing API

### 2. Connect Google Analytics 4
- Create GA4 property
- Add measurement ID to a `<script>` block in `index.html`
- Wire enhanced ecommerce events (booking clicks, contact form submits)

### 3. Build out the GUIDE hub with 4 more topic articles
Current: 4 topics. Recommended additions, each targeting a distinct long-tail keyword:
- `/guide/wedding-planning-bali-villa` → "Bali villa wedding planning"
- `/guide/birthday-party-bali-villa-guide` → "Bali villa birthday party"
- `/guide/corporate-retreat-bali-villa` → "Bali villa corporate retreat"
- `/guide/wellness-retreat-bali-villa` → "Bali villa wellness retreat"

### 4. Add 4 more topic articles to each existing hub
Catering, Services, Suppliers can each carry 8-10 topic articles before they feel padded:
- More region-specific articles (Canggu catering / Seminyak catering / Uluwatu catering / Ubud catering)
- Cuisine-specific articles (Italian villa catering / Japanese villa catering / Mediterranean villa catering)
- Occasion-specific articles (sunset dinner catering / poolside lunch catering / breakfast catering)

### 5. Programmatic location pages
- `/villas-in-canggu`, `/villas-in-seminyak`, `/villas-in-uluwatu`, `/villas-in-ubud`, `/villas-in-sanur`, `/villas-in-nusa-dua`, `/villas-in-bingin`, `/villas-in-amed`
- Each ~600 words covering: villa scene, catering options, price ranges, top 3 caterers serving that area
- Adds 8 location pages + clean internal linking back to hubs

## Tier 2 — Content & authority

### 6. Vendor directory with profile pages
A page per real catering operator (10-20 operators initially):
- Schema: `LocalBusiness` with priceRange, areaServed, address, telephone
- Editorial review + pricing tier
- Photos, sample menu, contact form
- Links to each vendor from the relevant hub

### 7. Real client review collection
- Add a `Review` JSON-LD block to vendor profiles
- Embed an aggregate rating widget
- Collect via simple Google Form or Tally form

### 8. Editorial blog (`/journal`)
- Weekly editorial cadence: trends, vendor news, seasonal menus
- Each post 800-1200 words
- 12 posts in the first 3 months = 12 long-tail entry points
- Each post links to 2-3 hub/topic pages

### 9. Hreflang + Bahasa Indonesia version
- Add `<link rel="alternate" hreflang>` once you have a second language
- Translate top 5 hub/topic pages to Bahasa Indonesia
- Targets local search ("catering villa Bali") which gets significant volume

## Tier 3 — Performance & UX

### 10. AI-generated topic images via Flux
- Currently reusing 9 stock-style villa/menu photos across 16 topics
- With a working FAL_KEY in MCP config, regenerate 16 unique high-resolution images
- Use Flux Schnell ($0.003/image) or Flux Pro ($0.025/image) — total cost 5¢-40¢

### 11. Self-host Google Fonts
- Drop the Google Fonts CDN dependency
- Subset Playfair Display + Inter to Latin only (saves ~70%)
- Preload the critical font for faster LCP

### 12. Code-split the route bundles
- Lazy-load HubPage + TopicPage in App.tsx via React.lazy
- Initial home bundle drops from 343kB to ~180kB

### 13. Real 1200×630 OG image per topic
- Currently uses hero villa photo for all
- Generate a templated card per topic with title overlay (HTML → screenshot via Vercel OG Image)

## Tier 4 — Acquisition channels

### 14. Pinterest pin generation
- Each topic article gets 3 vertical pins (1000×1500)
- Linked back to the topic URL
- Bali catering / villa imagery historically performs well on Pinterest

### 15. Lead capture
- Sticky CTA on every topic page: "Match me with a caterer"
- Form collects date, guest count, area, budget → emails the user a shortlist
- Becomes the conversion mechanism

### 16. Email newsletter
- Lead magnet: "The Bali Villa Catering Pricing Guide 2025" (PDF)
- Capture email, send PDF, drip 3 follow-up emails over 2 weeks
- Ongoing monthly newsletter to subscribers

### 17. Affiliate / referral programme
- Disclosure already in footer ("This site contains affiliate links")
- Partner with 5-10 caterers on revenue share for tracked referrals
- Track via URL parameter (`?ref=villacateringbali`)

## What needs you to act

| Item | Why I can't do it alone |
|---|---|
| Google Search Console verification | Needs your Google account auth |
| Google Analytics property creation | Needs your Google account auth |
| SEOdata.app data pull | The token `pi_*` you provided is a Stripe Payment Intent, not a SEOdata JWT. Get the real API JWT from Settings → Account → API on seodata.app |
| Flux image generation | The FAL_KEY in your MCP config is placeholder text (`YOUR_FAL_KEY_HERE`). Add a real FAL.ai API key |
| Lead capture form backend | Decide between Formspree / Tally / custom Vercel API route |
| Real vendor partnerships | You decide which Bali caterers to feature |

For Tier 1 items 1 and 2, give me your Google account access (OAuth or a service account JSON), or paste the GA4 measurement ID once you create the property and I'll wire it in.
