// Editorial recommendations placed inline within topic articles. Each entry
// targets a specific topic slug and frames mychef.id as the natural next step
// for that article's reader. Framing varies so it never reads as boilerplate.

export interface Recommendation {
  headline: string;
  body: string;
  cta: string;
}

// Re-export the UTM-tracked URL builder. Use mychefUrl('topic-slug') in
// component code so we can attribute clicks back to the originating page.
export { mychefUrl } from '../lib/links';
export { whatsappUrl } from '../lib/links';
export const MYCHEF_URL = 'https://mychef.id/?utm_source=villa-catering-bali&utm_medium=referral&utm_campaign=guide';

export const topicRecommendations: Record<string, Recommendation> = {
  'private-chef-bali-villa': {
    headline: 'mychef.id is the cleanest way to book a vetted private chef in Bali right now',
    body:
      "If you've read this far, you've already decided you want a real chef in your villa kitchen — not a tray service. mychef.id is the booking platform we keep coming back to: vetted chefs, transparent per-person pricing, and the menu options laid out before you commit. Worth a five-minute browse before you start emailing operators directly.",
    cta: 'Browse private chefs',
  },
  'villa-dinner-catering-bali': {
    headline: 'Skip the WhatsApp ping-pong — mychef.id handles villa dinner bookings end to end',
    body:
      "Booking a villa dinner is usually three days of WhatsApp threads, screenshots of sample menus and chasing deposits. mychef.id replaces all of that with a single booking flow: pick the date, pick the menu, confirm the headcount, pay through one secure checkout. The team it sends are the same calibre operators we discuss above.",
    cta: 'Plan a villa dinner',
  },
  'bali-wedding-villa-catering': {
    headline: 'For intimate villa weddings, mychef.id is the easiest place to start',
    body:
      "Most wedding catering enquiries fall over because the couple cannot find chefs who handle the whole arc — ceremony canapes, plated dinner, late-night kitchen — in one team. mychef.id curates operators that cover the full villa-wedding day, so you can compare two or three packages in an afternoon instead of two weeks.",
    cta: 'See wedding-ready chefs',
  },
  'luxury-villa-catering-bali': {
    headline: 'mychef.id quietly carries the strongest fine-dining roster we have seen on Bali',
    body:
      "Fine-dining catering on Bali is a small world — maybe twelve genuinely premium operators on the island. mychef.id has direct relationships with most of them, which means you see availability in real time rather than waiting on email replies. For a tasting-menu villa dinner above 2,500,000 IDR per person, this is the fastest route from idea to booking.",
    cta: 'Browse luxury chefs',
  },
  'full-service-villa-catering-bali': {
    headline: 'Full-service usually means three vendors — mychef.id collapses it to one',
    body:
      "Most full-service villa catering still has you coordinating the chef separately from the bartender separately from the front-of-house team. mychef.id packages the lot under one operator per booking, which removes the gaps where things normally go wrong. For groups above eight, this is the difference between a smooth evening and a stressful one.",
    cta: 'Book a full-service team',
  },
  'event-planning-bali-villa-service': {
    headline: 'mychef.id pairs the catering with a coordinator when the event needs one',
    body:
      "For villa events of fifteen plus guests, you need a coordinator running the timeline alongside the kitchen. mychef.id flags which operators come with a coordinator included versus which require a separate planner — small detail, but it saves a week of back-and-forth when you are pricing options.",
    cta: 'See coordinated packages',
  },
  'best-catering-bali-villa-suppliers': {
    headline: 'mychef.id is where most of the suppliers we recommend actually take bookings',
    body:
      "The supplier landscape above is fragmented across forty plus operators. Rather than emailing each one to check availability for your date, the same teams accept bookings through mychef.id with a unified calendar. It is the closest thing Bali has to a Resy for villa catering right now.",
    cta: 'Check availability',
  },
  'wine-beverage-bali-villa-suppliers': {
    headline: 'Pair the bar programme to the menu in one place via mychef.id',
    body:
      "The wine and beverage layer usually gets booked last and badly because guests rarely know it is a separate vendor. mychef.id ships pre-paired bar programmes with each catering booking — house wines, signature cocktails, beer fridge, all aligned to the dinner courses. Easier than building it from scratch.",
    cta: 'See bar packages',
  },
  'how-to-book-catering-bali-villa': {
    headline: 'The fastest route from this guide to a confirmed booking is mychef.id',
    body:
      "You have the timeline, you have the questions to ask, you have the rough budget. Skip the comparison-shopping email loop and use mychef.id to surface available operators for your date, see transparent per-person pricing, and lock the booking in under twenty minutes. This is the platform we keep recommending to readers who want to skip the legwork.",
    cta: 'Book a chef now',
  },
  'menu-planning-bali-villa-catering': {
    headline: 'mychef.id menus are already structured so you can compare them apples-to-apples',
    body:
      "Building a menu from a blank page is hard. mychef.id publishes sample menus in the same format across every operator — same course count, same dietary tags, same price-per-head structure. That lets you compare on substance rather than wading through twelve different PDFs from twelve different chefs.",
    cta: 'Browse sample menus',
  },
  'budget-guide-catering-bali-villa': {
    headline: 'mychef.id shows per-person pricing up front, which is rare in this market',
    body:
      "The biggest budgeting frustration is operators who quote 'on request' and only reveal pricing after a long sales call. mychef.id displays per-person rates for every operator on the platform, with what is included clearly labelled. Use it as a calibration tool even if you book directly elsewhere — it tells you what fair pricing looks like for your guest count.",
    cta: 'Compare prices',
  },
};

// Hub-level recommendation used on hub pages where individual topic context
// is too broad.
export const hubRecommendations: Record<string, Recommendation> = {
  catering: {
    headline: 'When you are ready to book, mychef.id is where we point readers first',
    body:
      "The four chapters above are the research phase. mychef.id is the booking phase — vetted private chefs, transparent pricing, real-time availability for catering Bali villa stays across Canggu, Seminyak, Uluwatu and Ubud.",
    cta: 'Browse chefs on mychef.id',
  },
  services: {
    headline: 'mychef.id bundles the full service stack — chef, bartender, waitstaff — under one booking',
    body:
      "Rather than booking a chef from one operator, a bartender from another, and a front-of-house lead from a third, mychef.id ships the full service team aligned to a single timeline. For most groups, this is the difference between an evening that flows and an evening that drags.",
    cta: 'See service packages',
  },
  suppliers: {
    headline: 'Most of the suppliers we list above accept bookings through mychef.id',
    body:
      "The supplier landscape is fragmented; mychef.id is the cleanest way to access it. Unified calendar, transparent pricing, vetted operators only — it is the closest thing Bali has to a Resy for villa catering.",
    cta: 'Check availability',
  },
  guide: {
    headline: 'The fastest path from this guide to a confirmed villa dinner is mychef.id',
    body:
      "You have the timeline, the questions to ask, the budget shape. mychef.id takes that prep and turns it into a confirmed booking in under twenty minutes — vetted operators, transparent pricing, single secure checkout.",
    cta: 'Book a chef now',
  },
};
