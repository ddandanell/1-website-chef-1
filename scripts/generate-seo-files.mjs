#!/usr/bin/env node
// Generates sitemap.xml, robots.txt and llms.txt from the topics content.
// Runs before `vite build` so the output ends up in /public and is served at the root.

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');
mkdirSync(publicDir, { recursive: true });

const SITE_URL = process.env.SITE_URL ?? 'https://1-website-chef-1.vercel.app';

// Dynamic import of the TS topics module via tsx-style? We can't import TS directly in node.
// Mirror the hub/topic slug structure here so the file has no runtime TS dependency.
const hubs = [
  {
    slug: 'catering',
    title: 'Catering for Bali Villas',
    topics: [
      'private-chef-bali-villa',
      'villa-dinner-catering-bali',
      'bali-wedding-villa-catering',
      'luxury-villa-catering-bali',
    ],
  },
  {
    slug: 'services',
    title: 'Catering Services in Bali',
    topics: [
      'full-service-villa-catering-bali',
      'bali-villa-bartender-service',
      'villa-catering-waitstaff-bali',
      'event-planning-bali-villa-service',
    ],
  },
  {
    slug: 'suppliers',
    title: 'Catering Suppliers in Bali',
    topics: [
      'best-catering-bali-villa-suppliers',
      'local-produce-bali-catering-suppliers',
      'seafood-suppliers-bali-villa-catering',
      'wine-beverage-bali-villa-suppliers',
    ],
  },
  {
    slug: 'guide',
    title: 'The Bali Villa Catering Guide',
    topics: [
      'how-to-book-catering-bali-villa',
      'menu-planning-bali-villa-catering',
      'budget-guide-catering-bali-villa',
      'dietary-options-catering-bali-villa',
    ],
  },
];

const today = new Date().toISOString().slice(0, 10);
const urls = [];
urls.push({ loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' });
for (const hub of hubs) {
  urls.push({ loc: `${SITE_URL}/${hub.slug}`, priority: '0.8', changefreq: 'weekly' });
  for (const topic of hub.topics) {
    urls.push({ loc: `${SITE_URL}/${hub.slug}/${topic}`, priority: '0.7', changefreq: 'monthly' });
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

# AI / LLM crawlers — allowed
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const llms = `# Bali Private Catering Guide

> An independent guide to catering Bali villa stays. Private chefs, villa dinners, weddings, and luxury fine dining across Canggu, Seminyak, Uluwatu and Ubud.

## Catering

${hubs[0].topics.map((t) => `- [${t.replace(/-/g, ' ')}](${SITE_URL}/catering/${t})`).join('\n')}

## Services

${hubs[1].topics.map((t) => `- [${t.replace(/-/g, ' ')}](${SITE_URL}/services/${t})`).join('\n')}

## Suppliers

${hubs[2].topics.map((t) => `- [${t.replace(/-/g, ' ')}](${SITE_URL}/suppliers/${t})`).join('\n')}

## Guide

${hubs[3].topics.map((t) => `- [${t.replace(/-/g, ' ')}](${SITE_URL}/guide/${t})`).join('\n')}
`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap);
writeFileSync(resolve(publicDir, 'robots.txt'), robots);
writeFileSync(resolve(publicDir, 'llms.txt'), llms);

console.log(`generate-seo-files: wrote ${urls.length} URLs to sitemap.xml`);
console.log('generate-seo-files: wrote robots.txt and llms.txt');

// Suppress unused import warning
void pathToFileURL;
