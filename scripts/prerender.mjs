#!/usr/bin/env node
// Post-build prerender: writes per-route index.html files with route-specific
// title, meta description, canonical, OG tags and JSON-LD baked into the raw HTML.
// Body stays as <div id="root"> for client hydration.
// This delivers proper per-page SEO without a full SSR pipeline.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const SITE_URL = 'https://www.villa-catering-bali.online';
const OG_IMAGE = `${SITE_URL}/img-hero-villa.jpg`;

if (!existsSync(distDir)) {
  console.error('prerender: dist/ does not exist. Run vite build first.');
  process.exit(1);
}

// Mirror of hubs + topics from src/content/topics.ts. Keep in sync.
const hubs = [
  {
    slug: 'catering',
    navLabel: 'CATERING',
    title: 'Catering for Bali Villas',
    metaTitle: 'Catering Bali Villa | Private Chefs, Dinners & Weddings',
    metaDescription:
      'Complete guide to catering Bali villa stays. Private chefs, villa dinners, weddings and luxury fine dining — what each option covers and what it costs.',
    primaryKeyword: 'catering Bali villa',
    topics: [
      {
        slug: 'private-chef-bali-villa',
        title: 'Private Chef Catering for Bali Villas',
        metaTitle: 'Private Chef Catering Bali Villa | Personal Chefs at Home 2025',
        metaDescription:
          'Hire a private chef for catering Bali villa stays. Personalised menus, in-villa cooking, market-fresh produce and dedicated service in Canggu, Seminyak, Uluwatu and Ubud.',
        image: '/img-villa-canggu.jpg',
        primaryKeyword: 'catering Bali villa',
        faq: true,
      },
      {
        slug: 'villa-dinner-catering-bali',
        title: 'Villa Dinner Catering in Bali',
        metaTitle: 'Villa Dinner Catering Bali Villa | Sunset & Group Dining',
        metaDescription:
          'Book villa dinner catering Bali villa services. Sit-down dinners, family-style spreads, sunset cocktail dinners and BBQ nights — fully staffed and stress-free.',
        image: '/img-villa-seminyak.jpg',
        primaryKeyword: 'catering Bali villa',
        faq: true,
      },
      {
        slug: 'bali-wedding-villa-catering',
        title: 'Wedding Catering for Bali Villas',
        metaTitle: 'Wedding Catering Bali Villa | Intimate Villa Weddings 2025',
        metaDescription:
          'Plan wedding catering Bali villa days the right way. Cocktail hour, plated dinners, late-night snacks and bar packages for elopements through 150-guest celebrations.',
        image: '/img-villa-uluwatu.jpg',
        primaryKeyword: 'catering Bali villa',
        faq: true,
      },
      {
        slug: 'luxury-villa-catering-bali',
        title: 'Luxury Villa Catering in Bali',
        metaTitle: 'Luxury Catering Bali Villa | Fine Dining & Premium Service',
        metaDescription:
          'Luxury catering Bali villa experiences — Michelin-trained chefs, imported produce, sommelier-paired wines and white-glove service in private villa settings.',
        image: '/img-villa-ubud.jpg',
        primaryKeyword: 'catering Bali villa',
        faq: true,
      },
    ],
  },
  {
    slug: 'services',
    navLabel: 'SERVICES',
    title: 'Catering Services in Bali',
    metaTitle: 'Catering Bali Villa Service | Full-Service, Bar, Waitstaff, Planning',
    metaDescription:
      'Catering Bali villa service options — full-service packages, bartender hire, waitstaff and event planning. Compare what each service tier delivers.',
    primaryKeyword: 'catering Bali villa service',
    topics: [
      {
        slug: 'full-service-villa-catering-bali',
        title: 'Full-Service Villa Catering',
        metaTitle: 'Full-Service Catering Bali Villa Service | End-to-End Hosting',
        metaDescription:
          'Full-service catering Bali villa service covers chef, waitstaff, bartender, styling and cleanup. One vendor, one invoice, zero stress for your villa stay.',
        image: '/img-menu-mediterranean.jpg',
        primaryKeyword: 'catering Bali villa service',
        faq: true,
      },
      {
        slug: 'bali-villa-bartender-service',
        title: 'Bartender Service for Villa Catering',
        metaTitle: 'Bartender Catering Bali Villa Service | Cocktail Bars at Home',
        metaDescription:
          'Bartender catering Bali villa service for events, dinners and parties. Bali mixologists build custom cocktail lists and run full bar service in your villa.',
        image: '/img-villa-seminyak.jpg',
        primaryKeyword: 'catering Bali villa service',
        faq: true,
      },
      {
        slug: 'villa-catering-waitstaff-bali',
        title: 'Waitstaff for Villa Catering',
        metaTitle: 'Waitstaff Catering Bali Villa Service | Trained Servers for Events',
        metaDescription:
          'Hire trained waitstaff as part of catering Bali villa service. Front-of-house servers, runners and event leads for villa dinners, weddings and parties.',
        image: '/img-villa-canggu.jpg',
        primaryKeyword: 'catering Bali villa service',
        faq: true,
      },
      {
        slug: 'event-planning-bali-villa-service',
        title: 'Event Planning Inside Villa Catering',
        metaTitle: 'Event Planning Catering Bali Villa Service | Villa Coordinators',
        metaDescription:
          'Event planning as part of catering Bali villa service. Coordinators who handle timeline, vendors, styling and on-day flow for villa dinners and celebrations.',
        image: '/img-hero-villa.jpg',
        primaryKeyword: 'catering Bali villa service',
        faq: true,
      },
    ],
  },
  {
    slug: 'suppliers',
    navLabel: 'SUPPLIERS',
    title: 'Catering Suppliers in Bali',
    metaTitle: 'Catering Bali Villa Suppliers | Vendors, Produce, Seafood & Wine',
    metaDescription:
      'The catering Bali villa suppliers behind every great villa dinner — vendors, farms, seafood, wine and beverage importers operating across the island.',
    primaryKeyword: 'catering Bali villa suppliers',
    topics: [
      {
        slug: 'best-catering-bali-villa-suppliers',
        title: 'Best Catering Suppliers for Bali Villas',
        metaTitle: 'Best Catering Bali Villa Suppliers | Vetted Vendors 2025',
        metaDescription:
          'Top catering Bali villa suppliers across Canggu, Seminyak, Uluwatu and Ubud. Independent vendor list with strengths, pricing tiers and what they are best for.',
        image: '/img-menu-asian.jpg',
        primaryKeyword: 'catering Bali villa suppliers',
        faq: true,
      },
      {
        slug: 'local-produce-bali-catering-suppliers',
        title: 'Local Produce Suppliers Behind Bali Catering',
        metaTitle: 'Local Produce Catering Bali Villa Suppliers | Farm-to-Villa',
        metaDescription:
          "Local farms and produce networks feeding catering Bali villa suppliers. Bedugul, Plaga and Kintamani farms that power the island's top villa kitchens.",
        image: '/img-menu-balinese.jpg',
        primaryKeyword: 'catering Bali villa suppliers',
        faq: true,
      },
      {
        slug: 'seafood-suppliers-bali-villa-catering',
        title: 'Seafood Suppliers Behind Villa Catering',
        metaTitle: 'Seafood Catering Bali Villa Suppliers | Fresh Daily Catch',
        metaDescription:
          'Seafood catering Bali villa suppliers — fishing co-ops, dive boats and importers feeding villa menus across the island. Daily catch, sustainability and pricing.',
        image: '/img-menu-western.jpg',
        primaryKeyword: 'catering Bali villa suppliers',
        faq: true,
      },
      {
        slug: 'wine-beverage-bali-villa-suppliers',
        title: 'Wine and Beverage Suppliers for Villa Catering',
        metaTitle: 'Wine Catering Bali Villa Suppliers | Wine, Beer & Spirits',
        metaDescription:
          "Wine and beverage catering Bali villa suppliers. Importers, sommeliers and bar programmes feeding the island's top villa events and dinners.",
        image: '/img-villa-seminyak.jpg',
        primaryKeyword: 'catering Bali villa suppliers',
        faq: true,
      },
    ],
  },
  {
    slug: 'guide',
    navLabel: 'GUIDE',
    title: 'The Bali Villa Catering Guide',
    metaTitle: 'Catering Bali Villa Guide | Booking, Menus, Budget, Dietaries',
    metaDescription:
      'The complete catering Bali villa guide. Booking timelines, menu planning, budget breakdown and dietary handling for a flawless villa event.',
    primaryKeyword: 'catering Bali villa guide',
    topics: [
      {
        slug: 'how-to-book-catering-bali-villa',
        title: 'How to Book Catering for a Bali Villa',
        metaTitle: 'How to Book Catering Bali Villa Guide | Step-by-Step 2025',
        metaDescription:
          'Step-by-step catering Bali villa guide to booking the right team. Timelines, deposits, contracts and questions to ask before you pay anything.',
        image: '/img-villa-uluwatu.jpg',
        primaryKeyword: 'catering Bali villa guide',
        faq: true,
      },
      {
        slug: 'menu-planning-bali-villa-catering',
        title: 'Menu Planning for Villa Catering',
        metaTitle: 'Menu Planning Catering Bali Villa Guide | Build the Perfect Menu',
        metaDescription:
          'Catering Bali villa guide to menu planning. Course structure, dietary considerations, flavour balance and how to brief your chef for the best result.',
        image: '/img-menu-asian.jpg',
        primaryKeyword: 'catering Bali villa guide',
        faq: true,
      },
      {
        slug: 'budget-guide-catering-bali-villa',
        title: 'Budget Guide for Villa Catering in Bali',
        metaTitle: 'Budget Catering Bali Villa Guide | Cost Breakdown 2025',
        metaDescription:
          'Catering Bali villa guide to budgeting. Per-person ranges, hidden costs, what drives the price up and how to right-size the spend for your event.',
        image: '/img-villa-ubud.jpg',
        primaryKeyword: 'catering Bali villa guide',
        faq: true,
      },
      {
        slug: 'dietary-options-catering-bali-villa',
        title: 'Dietary Options in Villa Catering',
        metaTitle: 'Dietary Options Catering Bali Villa Guide | Vegan, Halal, Allergies',
        metaDescription:
          'Catering Bali villa guide to dietary options. Vegetarian, vegan, halal, gluten-free, child-friendly and serious allergies handled across Bali villa caterers.',
        image: '/img-menu-balinese.jpg',
        primaryKeyword: 'catering Bali villa guide',
        faq: true,
      },
    ],
  },
];

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  );
}

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

function buildPage({ title, description, canonical, jsonLd, ogImage }) {
  const img = ogImage ?? OG_IMAGE;
  let html = template;
  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${escapeHtml(description)}">`
  );
  // Replace OG tags
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
  // Replace canonical
  html = html.replace(
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`
  );
  // Replace the existing JSON-LD WebSite schema with route-specific structured data.
  // Strip the original WebSite block and inject the new one.
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  );
  return html;
}

function writePage(filepath, contents) {
  mkdirSync(dirname(filepath), { recursive: true });
  writeFileSync(filepath, contents);
  console.log(`  wrote ${filepath.replace(distDir, '')}`);
}

// Home — overwrite dist/index.html with full website schema
{
  const title = 'Catering Bali Villa | Private Chefs, Villa Dinners & Suppliers Guide 2025';
  const description =
    'The complete guide to catering Bali villa stays. Private chefs, villa dinners, weddings and luxury fine dining across Canggu, Seminyak, Uluwatu and Ubud.';
  const canonical = `${SITE_URL}/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Villa Catering Bali',
    description,
    url: canonical,
    inLanguage: 'en',
  };
  writePage(resolve(distDir, 'index.html'), buildPage({ title, description, canonical, jsonLd }));
}

// Hubs
for (const hub of hubs) {
  const canonical = `${SITE_URL}/${hub.slug}`;
  const jsonLd = {
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
  };
  writePage(
    resolve(distDir, hub.slug, 'index.html'),
    buildPage({
      title: hub.metaTitle,
      description: hub.metaDescription,
      canonical,
      jsonLd,
    })
  );

  // Topics
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
      publisher: {
        '@type': 'Organization',
        name: 'Villa Catering Bali',
        url: SITE_URL + '/',
      },
    };
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: hub.navLabel,
          item: `${SITE_URL}/${hub.slug}`,
        },
        { '@type': 'ListItem', position: 3, name: topic.title, item: tCanonical },
      ],
    };
    const jsonLd = [articleLd, breadcrumbLd];
    writePage(
      resolve(distDir, hub.slug, topic.slug, 'index.html'),
      buildPage({
        title: topic.metaTitle,
        description: topic.metaDescription,
        canonical: tCanonical,
        jsonLd,
        ogImage: tImage,
      })
    );
  }
}

console.log('prerender: 21 pages written');
