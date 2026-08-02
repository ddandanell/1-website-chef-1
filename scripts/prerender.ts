#!/usr/bin/env tsx
// Post-build prerender: writes per-route index.html files with route-specific
// title, meta description, canonical, OG tags, JSON-LD AND full article body
// content baked into the raw HTML. Body is replaced by React on the client.
// This delivers proper per-page SEO without a full SSR runtime.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { hubs, type Hub, type Topic } from '../src/content/topics';
import { homeFaqCategories } from '../src/content/homeFaq';
import {
  topicRecommendations,
  hubRecommendations,
  getRecommendationHref,
  topicInternalLinks,
  areaMychefPaths,
} from '../src/content/recommendations';
import { areas, type Area } from '../src/content/areas';
import { resources, type Resource } from '../src/content/resources';
import { MYCHEF_PATHS, mychefUrl } from '../src/lib/links';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const SITE_URL = 'https://www.villa-catering-bali.online';
const OG_IMAGE = `${SITE_URL}/img-hero-villa.jpg`;

if (!existsSync(distDir)) {
  console.error('prerender: dist/ does not exist. Run vite build first.');
  process.exit(1);
}

function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string
  );
}

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

interface BuildPageArgs {
  title: string;
  description: string;
  canonical: string;
  jsonLd: unknown;
  ogImage?: string;
  bodyHtml: string;
}

function buildPage({ title, description, canonical, jsonLd, ogImage, bodyHtml }: BuildPageArgs): string {
  const img = ogImage ?? OG_IMAGE;
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${escapeHtml(description)}">`
  );
  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${escapeHtml(title)}">`
  );
  html = html.replace(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${escapeHtml(description)}">`
  );
  html = html.replace(
    /<meta\s+property="og:url"[^>]*>/,
    `<meta property="og:url" content="${escapeHtml(canonical)}">`
  );
  html = html.replace(
    /<meta\s+property="og:image"[^>]*>/,
    `<meta property="og:image" content="${escapeHtml(img)}">`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"[^>]*>/,
    `<meta name="twitter:image" content="${escapeHtml(img)}">`
  );
  html = html.replace(
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`
  );
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  );
  // Inject static SEO body inside the root container. Crawlers index this HTML
  // directly; sighted users don't see the unstyled flash because we hide it
  // via inline CSS, and React's createRoot wipes the contents on hydration.
  // The content here is semantically equivalent to what React renders, so
  // Google has no quality issue with the hide-via-display:none pattern.
  const seoHideStyle = '<style>[data-seo-static]{position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;}</style>';
  html = html.replace('</head>', `${seoHideStyle}</head>`);
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root"><div data-seo-static aria-hidden="true">${bodyHtml}</div></div>`
  );
  return html;
}

function writePage(filepath: string, contents: string): void {
  mkdirSync(dirname(filepath), { recursive: true });
  writeFileSync(filepath, contents);
  console.log(`  wrote ${filepath.replace(distDir, '')}`);
}

const ORG_LD = {
  '@type': 'Organization',
  name: 'Villa Catering Bali',
  url: SITE_URL + '/',
  logo: `${SITE_URL}/favicon.svg`,
};

// === Body content renderers (plain HTML, no React) ===

function renderHomeBody(): string {
  const faqHtml = homeFaqCategories
    .map(
      (cat) => `
        <section>
          <h3>${escapeHtml(cat.title)}</h3>
          ${cat.items
            .map(
              (item) =>
                `<div><p><strong>${escapeHtml(item.q)}</strong></p><p>${escapeHtml(item.a)}</p></div>`
            )
            .join('\n          ')}
        </section>
      `
    )
    .join('\n      ');

  return `
    <header>
      <p>BALI PRIVATE CATERING GUIDE — 2025</p>
      <h1>Private Catering in Your Bali Villa</h1>
      <p>Everything you need to know about hiring private chefs and catering services for villas in Bali. From birthday parties to corporate dinners, we cover the best options across Canggu, Seminyak, Uluwatu and Ubud.</p>
    </header>
    <section>
      <h2>What this guide covers</h2>
      <p>The four chapters below break down catering Bali villa stays into the practical decisions every host needs to make: which chef to hire, which services to book, which suppliers to trust, and how to plan the evening from menu to budget.</p>
      <ul>
        ${hubs
          .map(
            (h) =>
              `<li><a href="/${h.slug}"><strong>${escapeHtml(h.title)}</strong> — ${escapeHtml(h.intro)}</a></li>`
          )
          .join('\n        ')}
      </ul>
    </section>
    <section>
      <h2>Frequently asked about catering Bali villa</h2>
      ${faqHtml}
    </section>
  `;
}

function renderEditorPick(headline: string, body: string, cta: string, href: string): string {
  return `
    <aside aria-label="Editor's pick">
      <p>EDITOR'S PICK</p>
      <p><strong>${escapeHtml(headline)}</strong></p>
      <p>${escapeHtml(body)}</p>
      <p><a href="${escapeHtml(href)}" rel="noopener external">${escapeHtml(cta)} →</a></p>
    </aside>
  `;
}

function renderHubBody(hub: Hub): string {
  const rec = hubRecommendations[hub.slug];
  return `
    <nav aria-label="breadcrumb">
      <a href="/">Home</a> / <span>${escapeHtml(hub.navLabel)}</span>
    </nav>
    <header>
      <p>BALI PRIVATE CATERING — ${escapeHtml(hub.navLabel)}</p>
      <h1>${escapeHtml(hub.title)}</h1>
      <p>${escapeHtml(hub.intro)}</p>
    </header>
    <section>
      ${hub.topics
        .map(
          (t, idx) => `
        <article>
          <p>${String(idx + 1).padStart(2, '0')} — ${escapeHtml(hub.navLabel)}</p>
          <h2><a href="/${hub.slug}/${t.slug}">${escapeHtml(t.title)}</a></h2>
          <p>${escapeHtml(t.intro)}</p>
          <p><a href="/${hub.slug}/${t.slug}">Read more →</a></p>
        </article>
      `
        )
        .join('\n      ')}
    </section>
    ${
      rec
        ? renderEditorPick(
            rec.headline,
            rec.body,
            rec.cta,
            getRecommendationHref(rec, hub.slug),
          )
        : ''
    }
  `;
}

function renderTopicBody(hub: Hub, topic: Topic): string {
  const imageTag = topic.image
    ? `<figure><img src="${escapeHtml(topic.image)}" alt="${escapeHtml(topic.title)} — ${escapeHtml(hub.title)}" width="1100" height="618" /></figure>`
    : '';

  const rec = topicRecommendations[topic.slug];
  const sections = topic.sections
    .map(
      (s, idx) => `
        <section>
          <h2>${escapeHtml(s.heading)}</h2>
          ${s.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n          ')}
        </section>
        ${
          idx === 1 && rec
            ? renderEditorPick(
                rec.headline,
                rec.body,
                rec.cta,
                getRecommendationHref(rec, topic.slug),
              )
            : ''
        }
      `
    )
    .join('\n      ');

  const related = topicInternalLinks[topic.slug];
  const relatedHtml =
    related && related.length > 0
      ? `
        <section>
          <h2>Related guides</h2>
          <ul>
            ${related.map((l) => `<li><a href="${escapeHtml(l.to)}">${escapeHtml(l.label)}</a></li>`).join('\n            ')}
          </ul>
        </section>
      `
      : '';

  const faq =
    topic.faq && topic.faq.length > 0
      ? `
        <section>
          <h2>Frequently asked</h2>
          ${topic.faq
            .map((f) => `<div><p><strong>${escapeHtml(f.q)}</strong></p><p>${escapeHtml(f.a)}</p></div>`)
            .join('\n          ')}
        </section>
      `
      : '';

  return `
    <nav aria-label="breadcrumb">
      <a href="/">Home</a> / <a href="/${hub.slug}">${escapeHtml(hub.navLabel)}</a> / <span>${escapeHtml(topic.title)}</span>
    </nav>
    <header>
      <h1>${escapeHtml(topic.title)}</h1>
      <p>${escapeHtml(topic.intro)}</p>
    </header>
    ${imageTag}
    <article>
      ${sections}
      ${relatedHtml}
      ${faq}
    </article>
  `;
}

function renderResourceBody(resource: Resource): string {
  const rec = topicRecommendations[resource.slug];
  const sections = resource.sections
    .map((s, idx) => {
      const list = s.list
        ? `<ul>${s.list.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`
        : '';
      const table = s.table
        ? `<table><thead><tr>${s.table.headers
            .map((h) => `<th>${escapeHtml(h)}</th>`)
            .join('')}</tr></thead><tbody>${s.table.rows
            .map((row) => `<tr>${row.map((c) => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`)
            .join('')}</tbody></table>`
        : '';
      return `
        <section>
          <h2>${escapeHtml(s.heading)}</h2>
          ${s.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n          ')}
          ${list}
          ${table}
        </section>
        ${
          idx === 1 && rec
            ? renderEditorPick(
                rec.headline,
                rec.body,
                rec.cta,
                getRecommendationHref(rec, resource.slug),
              )
            : ''
        }
      `;
    })
    .join('\n');

  const faq =
    resource.faq && resource.faq.length > 0
      ? `<section><h2>Frequently asked</h2>${resource.faq
          .map((f) => `<div><p><strong>${escapeHtml(f.q)}</strong></p><p>${escapeHtml(f.a)}</p></div>`)
          .join('')}</section>`
      : '';

  const related = `<section><h2>Related on this guide</h2><ul>${resource.related
    .map((r) => `<li><a href="${escapeHtml(r.to)}">${escapeHtml(r.label)}</a></li>`)
    .join('')}</ul></section>`;

  return `
    <nav aria-label="breadcrumb">
      <a href="/">Home</a> / <a href="/resources">Resources</a> / <span>${escapeHtml(resource.title)}</span>
    </nav>
    <header>
      <h1>${escapeHtml(resource.title)}</h1>
      <p>${escapeHtml(resource.intro)}</p>
    </header>
    <article>
      ${sections}
      ${faq}
      ${related}
    </article>
  `;
}

// === Generate all 21 pages ===

// Home
{
  const title = 'Catering Bali Villa | Private Chefs, Villa Dinners & Suppliers Guide 2025';
  const description =
    'The complete guide to catering Bali villa stays. Private chefs, villa dinners, weddings and luxury fine dining across Canggu, Seminyak, Uluwatu and Ubud.';
  const canonical = `${SITE_URL}/`;
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  };
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Villa Catering Bali',
      description,
      url: canonical,
      inLanguage: 'en',
      publisher: { '@context': 'https://schema.org', ...ORG_LD },
    },
    {
      '@context': 'https://schema.org',
      ...ORG_LD,
    },
    faqLd,
  ];
  writePage(
    resolve(distDir, 'index.html'),
    buildPage({
      title,
      description,
      canonical,
      jsonLd,
      bodyHtml: renderHomeBody(),
    })
  );
}

// Hubs and topics
for (const hub of hubs) {
  const canonical = `${SITE_URL}/${hub.slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: hub.title,
      description: hub.metaDescription,
      url: canonical,
      inLanguage: 'en',
      hasPart: hub.topics.map((t) => ({
        '@type': 'Article',
        name: t.title,
        url: `${SITE_URL}/${hub.slug}/${t.slug}`,
        description: t.metaDescription,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: hub.navLabel, item: canonical },
      ],
    },
  ];
  writePage(
    resolve(distDir, hub.slug, 'index.html'),
    buildPage({
      title: hub.metaTitle,
      description: hub.metaDescription,
      canonical,
      jsonLd,
      bodyHtml: renderHubBody(hub),
    })
  );

  for (const topic of hub.topics) {
    const tCanonical = `${SITE_URL}/${hub.slug}/${topic.slug}`;
    const tImage = topic.image ? `${SITE_URL}${topic.image}` : OG_IMAGE;
    const articleLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: topic.title,
      description: topic.metaDescription,
      mainEntityOfPage: tCanonical,
      inLanguage: 'en',
      keywords: topic.primaryKeyword,
      articleSection: hub.title,
      image: tImage,
      publisher: { '@context': 'https://schema.org', ...ORG_LD },
    };
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: hub.navLabel, item: `${SITE_URL}/${hub.slug}` },
        { '@type': 'ListItem', position: 3, name: topic.title, item: tCanonical },
      ],
    };
    const jsonLdParts: unknown[] = [articleLd, breadcrumbLd];
    if (topic.faq && topic.faq.length > 0) {
      jsonLdParts.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: topic.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      });
    }

    writePage(
      resolve(distDir, hub.slug, topic.slug, 'index.html'),
      buildPage({
        title: topic.metaTitle,
        description: topic.metaDescription,
        canonical: tCanonical,
        jsonLd: jsonLdParts,
        ogImage: tImage,
        bodyHtml: renderTopicBody(hub, topic),
      })
    );
  }
}

// About page
{
  const title = 'About Villa Catering Bali | Editorial Guide by myCHEF Indonesia';
  const description =
    "Villa Catering Bali is an editorial guide published by myCHEF Indonesia — Bali's longest-running private chef service since 2012. Who we are, how we research, and why we recommend what we do.";
  const canonical = `${SITE_URL}/about`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Villa Catering Bali',
      url: canonical,
      publisher: {
        '@type': 'Organization',
        name: 'myCHEF Indonesia',
        url: 'https://mychef.id/',
        foundingDate: '2012',
        areaServed: 'Bali, Indonesia',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'myCHEF Indonesia',
      url: 'https://mychef.id/',
      priceRange: 'IDR 350,000 — 6,000,000 per person',
      areaServed: ['Canggu', 'Seminyak', 'Uluwatu', 'Ubud', 'Sanur', 'Nusa Dua', 'Jimbaran'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denpasar',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
      sameAs: ['https://mychef.id/'],
    },
  ];
  const aboutBody = `
    <header>
      <p>ABOUT THIS GUIDE</p>
      <h1>Why this guide exists, and who wrote it</h1>
      <p>Villa Catering Bali is an editorial guide published by myCHEF Indonesia — Bali's longest-running private chef and villa catering operator since 2012. We built this site because the catering market on Bali has fragmented into hundreds of operators with wildly inconsistent quality, and travellers planning a villa dinner had no neutral, evidence-led resource to start with. This is that resource.</p>
    </header>
    <section>
      <h2>Who runs it</h2>
      <p>myCHEF Indonesia has been running private chef and villa catering on Bali for over a decade. We have plated more than 10,000 villa dinners across Canggu, Seminyak, Uluwatu, Ubud and the rest of the island.</p>
      <p>Disclosure: when we recommend a booking platform, we recommend <a href="https://mychef.id/?utm_source=villa-catering-bali&utm_medium=referral&utm_campaign=guide&utm_content=about" rel="noopener external">mychef.id</a> — the platform we operate.</p>
    </section>
    <section>
      <h2>How we research</h2>
      <p>Pricing is sourced from active operator quotes collected across 2025. Supplier intelligence comes from our own purchasing relationships with farms in Bedugul, Plaga and Kintamani, and fishing cooperatives in Jimbaran, Kedonganan and Amed.</p>
    </section>
    <section>
      <h2>Editorial policy</h2>
      <p>We do not accept paid placements. We do not run sponsored content. When we recommend mychef.id we disclose that it is the platform we operate.</p>
    </section>
  `;
  writePage(
    resolve(distDir, 'about', 'index.html'),
    buildPage({ title, description, canonical, jsonLd, bodyHtml: aboutBody })
  );
}

// Area pages
function renderAreaBody(area: Area): string {
  const sections = area.sections
    .map(
      (s, idx) => `
        <section>
          <h2>${escapeHtml(s.heading)}</h2>
          ${s.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n          ')}
        </section>
        ${
          idx === 1
            ? renderEditorPick(
                `Private chef service in ${area.name} — transparent rates, local logistics`,
                `Operators serving ${area.name} are scattered across personal WhatsApp lines. For a vetted team with published pricing and ${area.name} coverage, start on mychef.id.`,
                `Private chef ${area.name}`,
                mychefUrl(
                  area.slug,
                  areaMychefPaths[area.slug] ?? MYCHEF_PATHS.privateChef,
                ),
              )
            : ''
        }
      `
    )
    .join('\n      ');

  const menus = area.recommendedMenus
    .map(
      (m) => `<div><h3>${escapeHtml(m.name)}</h3><p>${escapeHtml(m.description)}</p></div>`
    )
    .join('\n      ');

  const faq = area.faq
    .map((f) => `<div><p><strong>${escapeHtml(f.q)}</strong></p><p>${escapeHtml(f.a)}</p></div>`)
    .join('\n      ');

  return `
    <nav aria-label="breadcrumb">
      <a href="/">Home</a> / <span>Areas</span> / <span>${escapeHtml(area.name)}</span>
    </nav>
    <header>
      <p>BALI VILLA AREAS — ${escapeHtml(area.name.toUpperCase())}</p>
      <h1>${escapeHtml(area.title)}</h1>
      <p>${escapeHtml(area.intro)}</p>
      <p>Sub-areas covered: ${area.subAreas.map(escapeHtml).join(', ')}.</p>
    </header>
    <figure><img src="${escapeHtml(area.image)}" alt="${escapeHtml(area.title)}" width="1100" height="618" /></figure>
    <aside>
      <p><strong>Travel surcharge:</strong> ${escapeHtml(area.surcharge)}</p>
    </aside>
    ${sections}
    <section>
      <h2>Menu styles that work best in ${escapeHtml(area.name)}</h2>
      ${menus}
    </section>
    <section>
      <h2>Frequently asked about catering in ${escapeHtml(area.name)}</h2>
      ${faq}
    </section>
  `;
}

for (const area of areas) {
  const canonical = `${SITE_URL}/areas/${area.slug}`;
  const aImage = `${SITE_URL}${area.image}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: area.title,
      description: area.metaDescription,
      mainEntityOfPage: canonical,
      inLanguage: 'en',
      keywords: area.primaryKeyword,
      articleSection: `Bali Catering Areas — ${area.name}`,
      image: aImage,
      publisher: { '@context': 'https://schema.org', ...ORG_LD },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Areas', item: `${SITE_URL}/areas` },
        { '@type': 'ListItem', position: 3, name: area.name, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: area.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
  writePage(
    resolve(distDir, 'areas', area.slug, 'index.html'),
    buildPage({
      title: area.metaTitle,
      description: area.metaDescription,
      canonical,
      jsonLd,
      ogImage: aImage,
      bodyHtml: renderAreaBody(area),
    })
  );
}

// Resources hub + resource articles
{
  const canonical = `${SITE_URL}/resources`;
  writePage(
    resolve(distDir, 'resources', 'index.html'),
    buildPage({
      title: 'Bali Villa Catering Resources | Price Index, Timelines & Checklists',
      description:
        'Free research tools for Bali villa catering: 2026 price index, wedding F&B timeline, kitchen readiness checklist and dietary matrix.',
      canonical,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Bali Villa Catering Resources',
        url: canonical,
        hasPart: resources.map((r) => ({
          '@type': 'Article',
          name: r.title,
          url: `${SITE_URL}/resources/${r.slug}`,
        })),
      },
      bodyHtml: `
        <header>
          <h1>Resources hosts, planners and guests actually reuse</h1>
          <p>Price bands, day-of timelines, kitchen checklists and dietary matrices.</p>
        </header>
        <section>
          <ul>
            ${resources
              .map(
                (r) =>
                  `<li><a href="/resources/${r.slug}"><strong>${escapeHtml(r.title)}</strong> — ${escapeHtml(r.intro)}</a></li>`,
              )
              .join('\n            ')}
          </ul>
        </section>
      `,
    }),
  );
}

for (const resource of resources) {
  const canonical = `${SITE_URL}/resources/${resource.slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: resource.title,
      description: resource.metaDescription,
      mainEntityOfPage: canonical,
      inLanguage: 'en',
      keywords: resource.primaryKeyword,
      publisher: { '@context': 'https://schema.org', ...ORG_LD },
    },
  ];
  writePage(
    resolve(distDir, 'resources', resource.slug, 'index.html'),
    buildPage({
      title: resource.metaTitle,
      description: resource.metaDescription,
      canonical,
      jsonLd,
      bodyHtml: renderResourceBody(resource),
    }),
  );
}

console.log(
  `prerender: hubs+topics+home+about areas=${areas.length} resources=${resources.length} pages written with full body content`,
);
