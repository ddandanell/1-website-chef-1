// Editorial recommendations placed inline within topic articles. Each entry
// targets a specific topic slug and deep-links to the matching mychef.id page.

import { MYCHEF_PATHS, mychefUrl } from '../lib/links';

export interface Recommendation {
  headline: string;
  body: string;
  cta: string;
  /** Path on mychef.id (e.g. /private-chef-bali) */
  path: string;
  /** utm_content override; defaults to topic/hub slug */
  utmContent?: string;
}

export { mychefUrl } from '../lib/links';
export { whatsappUrl } from '../lib/links';

/** @deprecated Prefer recommendation.href via getRecommendationHref — kept for rare homepage CTAs */
export const MYCHEF_URL = mychefUrl('guide-home', MYCHEF_PATHS.privateChef);

export function getRecommendationHref(rec: Recommendation, fallbackContent: string): string {
  return mychefUrl(rec.utmContent ?? fallbackContent, rec.path);
}

export const topicRecommendations: Record<string, Recommendation> = {
  'private-chef-bali-villa': {
    headline: 'Ready to hire? Start with published private chef rates on mychef.id',
    body:
      "If you've decided you want a real chef in the villa kitchen — not a tray drop — browse hire rates, what's included, and the same-day replacement guarantee on mychef.id. One team shops, cooks, serves and cleans; you keep the evening.",
    cta: 'See private chef rates in Bali',
    path: MYCHEF_PATHS.privateChef,
  },
  'villa-dinner-catering-bali': {
    headline: 'Compare villa dinner prices before you open WhatsApp',
    body:
      'Most villa dinners die in message threads: menus as screenshots, deposits unclear, headcount never locked. Use the published price tables first, then request a fixed quote for your date, guest count and villa area.',
    cta: 'Open transparent dinner pricing',
    path: MYCHEF_PATHS.pricing,
  },
  'bali-wedding-villa-catering': {
    headline: 'Villa wedding catering works when one brigade owns the full day',
    body:
      'Ceremony canapés, plated dinner and a late kitchen rarely succeed when three freelancers share a group chat. Review wedding catering packages with staffing ratios, then shape the menu around your guest list and villa access.',
    cta: 'View wedding catering packages',
    path: MYCHEF_PATHS.weddingPackages,
  },
  'luxury-villa-catering-bali': {
    headline: 'Premium villa nights start with real tasting menus — not vague “fine dining” quotes',
    body:
      'For multi-course Italian, French, Mediterranean or Wagyu dinners in your villa, browse fine dining menus with clear per-person floors before you commit above the 2,500,000 IDR range.',
    cta: 'Browse fine dining villa menus',
    path: MYCHEF_PATHS.fineDining,
  },
  'full-service-villa-catering-bali': {
    headline: 'Full-service usually means three vendors — one events team collapses it',
    body:
      'Most full-service villa catering still has you coordinating the chef separately from the bartender and front-of-house. For groups above eight, book an events hospitality team that owns the whole timeline under one quote.',
    cta: 'Explore events & full hospitality',
    path: MYCHEF_PATHS.events,
  },
  'bali-villa-bartender-service': {
    headline: 'Standalone bartender hire is cleaner when rates are published',
    body:
      'Bar programmes get booked last and badly when guests treat them as an afterthought. mychef.id lists bartender hire rates (with hour minimums) so you can attach a bar shift to any villa dinner without a second sales process.',
    cta: 'See bartender hire rates',
    path: MYCHEF_PATHS.bartenders,
  },
  'villa-catering-waitstaff-bali': {
    headline: 'Waitstaff ratios make or break a villa dinner',
    body:
      'One server per roughly ten guests is the industry standard for plated villa service. Browse waiter, butler and sommelier shift rates before you lock a menu that needs real front-of-house support.',
    cta: 'Browse waitstaff & butlers',
    path: MYCHEF_PATHS.inVilla,
  },
  'event-planning-bali-villa-service': {
    headline: 'Above fifteen guests you need a coordinated hospitality timeline',
    body:
      'For villa events of fifteen-plus guests, kitchen timing and service flow need a single owner. Events packages on mychef.id cover chef brigade, staffing, setup and cleanup so the planner is not juggling four vendors.',
    cta: 'See event hospitality packages',
    path: MYCHEF_PATHS.events,
  },
  'best-catering-bali-villa-suppliers': {
    headline: 'When you are ready to book, skip the fragmented operator map',
    body:
      'The supplier landscape above is fragmented across dozens of WhatsApp lines. For a single vetted team with transparent pricing and backup cover, start with mychef.id private chef or catering pages rather than cold-emailing every vendor.',
    cta: 'Check private chef availability',
    path: MYCHEF_PATHS.privateChef,
  },
  'local-produce-bali-catering-suppliers': {
    headline: 'Daily villa chef service bills groceries at cost with receipts',
    body:
      'If farm-to-table sourcing matters, daily and multi-day chef arrangements that shop the same morning and bill produce at cost are the cleanest model. See published daily rates and what is included.',
    cta: 'View daily villa chef service',
    path: MYCHEF_PATHS.privateChef,
  },
  'seafood-suppliers-bali-villa-catering': {
    headline: 'Seafood-forward tasting menus need a kitchen that lands product same-day',
    body:
      'Premium seafood menus only work when the team has landing relationships and a same-day shop. Fine dining villa menus on mychef.id are built around that supply chain — not frozen inventory.',
    cta: 'Explore fine dining seafood menus',
    path: MYCHEF_PATHS.fineDining,
  },
  'wine-beverage-bali-villa-suppliers': {
    headline: 'Pair the bar programme to the menu in one staffing plan',
    body:
      'Wine and cocktails usually get booked last. Attach bartender or sommelier shifts to the same hospitality team as the kitchen so pairings and service timing actually align.',
    cta: 'See bar & beverage staffing',
    path: MYCHEF_PATHS.bartenders,
  },
  'how-to-book-catering-bali-villa': {
    headline: 'The fastest path from this checklist to a fixed quote',
    body:
      'You have the timeline, the questions to ask and the rough budget. Request a structured quote with date, guest count and villa area — no deposit required to start planning.',
    cta: 'Request a structured quote',
    path: MYCHEF_PATHS.quote,
  },
  'menu-planning-bali-villa-catering': {
    headline: 'Compare sample menus on the same price structure',
    body:
      'Building a menu from a blank page is hard. Start with published fine dining and catering formats, then customise dietary needs in the quote — same course counts, same transparency on what is included.',
    cta: 'Browse sample menus & formats',
    path: MYCHEF_PATHS.fineDining,
  },
  'budget-guide-catering-bali-villa': {
    headline: 'Calibrate your budget against published price tables',
    body:
      "The biggest budgeting frustration is operators who quote 'on request' only after a long sales call. mychef.id publishes per-person floors for dinners, tasting menus, BBQ and weddings — use them even if you compare elsewhere.",
    cta: 'Open transparent price tables',
    path: MYCHEF_PATHS.pricing,
  },
  'dietary-options-catering-bali-villa': {
    headline: 'Dietary requirements should be designed into the menu, not patched on the day',
    body:
      'Vegan, gluten-free, halal, allergies and kids menus are routine when flagged two weeks ahead. Book a team that builds the menu around restrictions at no surcharge for standard adjustments.',
    cta: 'Book a chef who designs for dietaries',
    path: MYCHEF_PATHS.privateChef,
  },
  'villa-kitchen-readiness-checklist': {
    headline: 'Kitchen ready? Book the team that works with villa managers every week',
    body:
      'Once your oven, hob, fridge space and service area check out, the next step is a vetted brigade that already knows Bali villa logistics. Start with published rates and a fixed quote.',
    cta: 'Hire a private chef for your villa',
    path: MYCHEF_PATHS.privateChef,
  },
  'bali-villa-catering-price-index-2026': {
    headline: 'Want live quote bands instead of ranges?',
    body:
      'This index gives market-wide bands. For itemised, date-specific quotes with staffing included, use the published tables and quote flow on mychef.id.',
    cta: 'Get an itemised quote',
    path: MYCHEF_PATHS.pricing,
  },
  'villa-wedding-fb-timeline': {
    headline: 'Pair this timeline with wedding catering packages',
    body:
      'A day-of F&B timeline only works when the kitchen and front-of-house are the same team. Review wedding catering packages, then customise guest count and villa access.',
    cta: 'See wedding catering packages',
    path: MYCHEF_PATHS.weddingPackages,
  },
  'dietary-matrix-villa-catering': {
    headline: 'Share this matrix with your chef when you enquire',
    body:
      'Copy the dietary tags into your first message (date, guests, area, dietaries). Teams that publish transparent rates will build the menu around them without a separate discovery call.',
    cta: 'Start a dietary-aware quote',
    path: MYCHEF_PATHS.quote,
  },
};

export const hubRecommendations: Record<string, Recommendation> = {
  catering: {
    headline: 'When you are ready to book, start with private chef or catering formats',
    body:
      'The four chapters above are the research phase. mychef.id is the booking phase — vetted teams, transparent pricing and clear formats for dinners, BBQ and groups across Canggu, Seminyak, Uluwatu and Ubud.',
    cta: 'Browse private chef service',
    path: MYCHEF_PATHS.privateChef,
  },
  services: {
    headline: 'Bundle chef, bartender and waitstaff under one hospitality plan',
    body:
      'Rather than booking a chef from one operator and a bartender from another, align the full service stack to a single timeline. In-villa staffing rates sit alongside kitchen packages on mychef.id.',
    cta: 'Explore in-villa staffing',
    path: MYCHEF_PATHS.inVilla,
  },
  suppliers: {
    headline: 'Suppliers matter — the booking still needs one accountable kitchen',
    body:
      'Use the supplier landscape to understand what you are paying for. When you are ready to book, a single vetted operator with same-day shopping and cleanup is cleaner than managing farms and freelancers yourself.',
    cta: 'Book a vetted villa kitchen team',
    path: MYCHEF_PATHS.catering,
  },
  guide: {
    headline: 'The fastest path from this guide to a confirmed villa dinner',
    body:
      'You have the timeline, the questions to ask and the budget shape. Request a structured quote — vetted operators, transparent pricing, no deposit required to start planning.',
    cta: 'Request a structured quote',
    path: MYCHEF_PATHS.quote,
  },
  resources: {
    headline: 'Use these tools, then lock a real quote',
    body:
      'Price indexes and checklists are research. When dates are real, move to published rates and an itemised quote so staffing and groceries are not guesswork.',
    cta: 'Open pricing & quote',
    path: MYCHEF_PATHS.pricing,
  },
};

/** Area slug → mychef location path */
export const areaMychefPaths: Record<string, string> = {
  'canggu-villa-catering': MYCHEF_PATHS.canggu,
  'seminyak-villa-catering': MYCHEF_PATHS.seminyak,
  'ubud-villa-catering': MYCHEF_PATHS.ubud,
  'uluwatu-villa-catering': MYCHEF_PATHS.uluwatu,
};

/** Cross-hub internal links for topic pages (guide mesh). */
export const topicInternalLinks: Record<string, { label: string; to: string }[]> = {
  'private-chef-bali-villa': [
    { label: 'Villa dinner formats', to: '/catering/villa-dinner-catering-bali' },
    { label: 'Budget guide', to: '/guide/budget-guide-catering-bali-villa' },
    { label: 'How to book', to: '/guide/how-to-book-catering-bali-villa' },
    { label: 'Canggu area guide', to: '/areas/canggu-villa-catering' },
  ],
  'villa-dinner-catering-bali': [
    { label: 'Private chef model', to: '/catering/private-chef-bali-villa' },
    { label: 'Waitstaff ratios', to: '/services/villa-catering-waitstaff-bali' },
    { label: 'Menu planning', to: '/guide/menu-planning-bali-villa-catering' },
    { label: 'Price index 2026', to: '/resources/bali-villa-catering-price-index-2026' },
  ],
  'bali-wedding-villa-catering': [
    { label: 'Day-of F&B timeline', to: '/resources/villa-wedding-fb-timeline' },
    { label: 'Event planning service', to: '/services/event-planning-bali-villa-service' },
    { label: 'Luxury villa catering', to: '/catering/luxury-villa-catering-bali' },
    { label: 'Budget guide', to: '/guide/budget-guide-catering-bali-villa' },
  ],
  'luxury-villa-catering-bali': [
    { label: 'Private chef villa', to: '/catering/private-chef-bali-villa' },
    { label: 'Wine & beverage suppliers', to: '/suppliers/wine-beverage-bali-villa-suppliers' },
    { label: 'Uluwatu area guide', to: '/areas/uluwatu-villa-catering' },
    { label: 'Price index 2026', to: '/resources/bali-villa-catering-price-index-2026' },
  ],
  'full-service-villa-catering-bali': [
    { label: 'Bartender service', to: '/services/bali-villa-bartender-service' },
    { label: 'Waitstaff', to: '/services/villa-catering-waitstaff-bali' },
    { label: 'Event planning', to: '/services/event-planning-bali-villa-service' },
    { label: 'Wedding catering', to: '/catering/bali-wedding-villa-catering' },
  ],
  'bali-villa-bartender-service': [
    { label: 'Full-service packages', to: '/services/full-service-villa-catering-bali' },
    { label: 'Wine suppliers', to: '/suppliers/wine-beverage-bali-villa-suppliers' },
    { label: 'Villa dinner catering', to: '/catering/villa-dinner-catering-bali' },
  ],
  'villa-catering-waitstaff-bali': [
    { label: 'Full-service packages', to: '/services/full-service-villa-catering-bali' },
    { label: 'Private chef model', to: '/catering/private-chef-bali-villa' },
    { label: 'Kitchen readiness checklist', to: '/resources/villa-kitchen-readiness-checklist' },
  ],
  'event-planning-bali-villa-service': [
    { label: 'Wedding catering', to: '/catering/bali-wedding-villa-catering' },
    { label: 'F&B timeline', to: '/resources/villa-wedding-fb-timeline' },
    { label: 'How to book', to: '/guide/how-to-book-catering-bali-villa' },
  ],
  'best-catering-bali-villa-suppliers': [
    { label: 'Local produce', to: '/suppliers/local-produce-bali-catering-suppliers' },
    { label: 'Seafood suppliers', to: '/suppliers/seafood-suppliers-bali-villa-catering' },
    { label: 'Private chef villa', to: '/catering/private-chef-bali-villa' },
  ],
  'local-produce-bali-catering-suppliers': [
    { label: 'Dietary options', to: '/guide/dietary-options-catering-bali-villa' },
    { label: 'Ubud area guide', to: '/areas/ubud-villa-catering' },
    { label: 'Menu planning', to: '/guide/menu-planning-bali-villa-catering' },
  ],
  'seafood-suppliers-bali-villa-catering': [
    { label: 'Luxury catering', to: '/catering/luxury-villa-catering-bali' },
    { label: 'Jimbaran-adjacent logistics', to: '/areas/uluwatu-villa-catering' },
    { label: 'Fine dining formats', to: '/catering/luxury-villa-catering-bali' },
  ],
  'wine-beverage-bali-villa-suppliers': [
    { label: 'Bartender service', to: '/services/bali-villa-bartender-service' },
    { label: 'Luxury villa catering', to: '/catering/luxury-villa-catering-bali' },
    { label: 'Budget guide', to: '/guide/budget-guide-catering-bali-villa' },
  ],
  'how-to-book-catering-bali-villa': [
    { label: 'Budget guide', to: '/guide/budget-guide-catering-bali-villa' },
    { label: 'Kitchen checklist', to: '/resources/villa-kitchen-readiness-checklist' },
    { label: 'Private chef villa', to: '/catering/private-chef-bali-villa' },
    { label: 'Dietary matrix', to: '/resources/dietary-matrix-villa-catering' },
  ],
  'menu-planning-bali-villa-catering': [
    { label: 'Dietary options', to: '/guide/dietary-options-catering-bali-villa' },
    { label: 'Dietary matrix', to: '/resources/dietary-matrix-villa-catering' },
    { label: 'Villa dinners', to: '/catering/villa-dinner-catering-bali' },
  ],
  'budget-guide-catering-bali-villa': [
    { label: 'Price index 2026', to: '/resources/bali-villa-catering-price-index-2026' },
    { label: 'How to book', to: '/guide/how-to-book-catering-bali-villa' },
    { label: 'Wedding catering', to: '/catering/bali-wedding-villa-catering' },
  ],
  'dietary-options-catering-bali-villa': [
    { label: 'Dietary matrix', to: '/resources/dietary-matrix-villa-catering' },
    { label: 'Menu planning', to: '/guide/menu-planning-bali-villa-catering' },
    { label: 'Ubud wellness catering', to: '/areas/ubud-villa-catering' },
  ],
};
