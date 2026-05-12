#!/usr/bin/env tsx
// Post-build prerender: writes per-route index.html files with route-specific
// title, meta description, canonical, OG tags, JSON-LD AND full article body
// content baked into the raw HTML. Body is replaced by React on the client.
// This delivers proper per-page SEO without a full SSR runtime.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { hubs, type Hub, type Topic } from '../src/content/topics';

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
  `;
}

function renderHubBody(hub: Hub): string {
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
  `;
}

function renderTopicBody(hub: Hub, topic: Topic): string {
  const imageTag = topic.image
    ? `<figure><img src="${escapeHtml(topic.image)}" alt="${escapeHtml(topic.title)} — ${escapeHtml(hub.title)}" width="1100" height="618" /></figure>`
    : '';

  const sections = topic.sections
    .map(
      (s) => `
        <section>
          <h2>${escapeHtml(s.heading)}</h2>
          ${s.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n          ')}
        </section>
      `
    )
    .join('\n      ');

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
      ${faq}
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

console.log('prerender: 21 pages written with full body content');
