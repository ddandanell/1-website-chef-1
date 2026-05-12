// Bali villa-area pages. Each targets a high-intent location-modified keyword
// pattern ("private chef Canggu", "Uluwatu villa catering"). Content is built
// from operational experience: cluster characteristics, surcharge structure,
// menu styles that fit the area, and logistics quirks.

export interface Area {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  intro: string;
  image: string;
  subAreas: string[];
  surcharge: string;
  sections: { heading: string; paragraphs: string[] }[];
  recommendedMenus: { name: string; description: string }[];
  faq: { q: string; a: string }[];
}

const cangguArea: Area = {
  slug: 'canggu-villa-catering',
  name: 'Canggu',
  title: 'Private Chef & Villa Catering in Canggu, Bali',
  metaTitle: 'Private Chef Canggu | Villa Catering Bali Guide 2025',
  metaDescription:
    'Hire a private chef in Canggu, Bali. The most catering operators on the island, casual surf-town energy, modern global menus and the best per-person value from Berawa to Pererenan.',
  primaryKeyword: 'private chef Canggu',
  image: '/img-villa-canggu.jpg',
  subAreas: ['Berawa', 'Echo Beach', 'Batu Bolong', 'Pererenan', 'Padang Linjong'],
  surcharge:
    'No travel surcharge — Canggu is the home base for most Bali catering operators, which is why per-person rates here are the most competitive on the island.',
  intro:
    'Canggu has the highest concentration of villa catering operators on Bali. Private chefs, BBQ teams, full-service caterers and event planners all base out of the Canggu / Berawa / Pererenan cluster. For most travellers, this is where the per-person value and operator depth are best — and where the menu range runs widest, from casual beach BBQ to Michelin-trained tasting menus.',
  sections: [
    {
      heading: 'What the Canggu villa scene looks like',
      paragraphs: [
        'The Canggu villa market splits into four loose neighbourhoods that matter for catering. Berawa carries the most premium villas — large compounds with proper chef kitchens, ten-plus bedrooms, and the budget that supports fine-dining catering. Batu Bolong and Echo Beach skew younger and more design-forward, with mid-size villas that suit casual sharing-style dinners and brunches. Pererenan is the newest growth area — rice-paddy edge villas, wedding-friendly, and where most of 2025\'s new openings landed. Padang Linjong sits in between, residential and quieter, popular with longer-stay families.',
        "For private chef Canggu bookings, the surf-town energy of the area shapes menu choice. Casual sharing-style spreads outperform plated three-course dinners in this cluster — boards of charcuterie, grilled mains and salads down the centre of the table, eaten in swimwear straight off the pool. Save the formal plated dinners for Seminyak or Uluwatu where the villas are built for that pace.",
      ],
    },
    {
      heading: 'Operators and pricing',
      paragraphs: [
        'Canggu has approximately forty active private chef operators and twenty-plus catering teams. Mid-tier dinners (700,000 — 1,200,000 IDR per person with full service) are the densest segment. Casual BBQ catering starts around 350,000 IDR per person here, the lowest entry point on the island. Premium fine-dining caterers operate in Canggu but mostly serve Berawa villas above the 2,500,000 IDR per person mark.',
        'Travel surcharge from Canggu to other clusters: 750,000 — 1,000,000 IDR to Uluwatu, 1,500,000 — 2,000,000 IDR to Ubud. When booking from Canggu, every villa in the cluster is local and surcharge-free, which keeps per-event spend tight.',
      ],
    },
    {
      heading: 'Menu styles that work in Canggu',
      paragraphs: [
        'The strongest Canggu catering menus lean modern global — Mediterranean sharing boards, Japanese omakase, plant-forward Californian-style spreads. These match the surf-town demographic and the open-air villa kitchens, which favour grill and raw work over heavy classical cooking. Modern Balinese executions are popular too, especially the lighter pesisir-coast preparations rather than the slow-braised mountain dishes.',
        'Wood-fire and grill setups are common in Canggu villas — most rentals above the mid-tier have outdoor grills built in. Caterers will often plan menus around the equipment available rather than trucking in their own, which keeps the booking faster and the food at peak temperature. Confirm the grill setup with your villa manager before locking the menu.',
      ],
    },
    {
      heading: 'Booking logistics specific to Canggu',
      paragraphs: [
        "Two Canggu-specific logistics points worth knowing. First, banjar fees: many Canggu villas charge a small mandatory community contribution (50,000 — 200,000 IDR) for events with external vendors. Confirm with the villa manager before booking — it is not always disclosed up front. Second, traffic timing: Canggu traffic congests sharply between 5pm and 7.30pm. Caterers will plan arrival around 3.30pm to beat the rush; book your dinner service for 7pm or 8pm rather than 6pm to align with chef arrival.",
        "Beach-club delivery and pickup is sometimes available for Canggu events — caterers will integrate dishes from La Brisa, Atlas, or other named venues into a villa menu. This works best for cocktail-hour canapes rather than mains, which lose quality in transit. For an all-villa kitchen night, skip the beach club outsourcing.",
      ],
    },
  ],
  recommendedMenus: [
    {
      name: 'Casual Mediterranean sharing',
      description: 'Grilled prawns, hummus and mezze, wood-fired flatbreads, Greek salad, lamb skewers. Family-style boards down the centre of the table. 600,000 — 900,000 IDR per person.',
    },
    {
      name: 'Modern Balinese pesisir-coast',
      description: 'Sate lilit, grilled snapper with sambal matah, urap salad, nasi bakar, lawar. Lighter than mountain Balinese and built for hot evenings. 500,000 — 800,000 IDR per person.',
    },
    {
      name: 'Plant-forward Californian',
      description: 'Roasted vegetable boards, grain bowls, fermented sides, raw seafood crudo for non-vegans. Suits the wellness-leaning Canggu crowd. 700,000 — 1,100,000 IDR per person.',
    },
  ],
  faq: [
    {
      q: 'How much does a private chef cost in Canggu?',
      a: 'Private chef Canggu rates run 350,000 IDR per person for casual sharing menus, 700,000 — 1,200,000 IDR per person for mid-tier plated dinners, and 1,500,000 — 3,000,000 IDR per person for fine dining. Casual BBQ catering starts around 350,000 IDR. Canggu has the lowest entry point on the island.',
    },
    {
      q: 'Is there a travel surcharge for catering in Canggu?',
      a: 'No. Canggu is home base for the majority of Bali catering operators, so there is no travel surcharge for bookings inside the Canggu / Berawa / Pererenan cluster. Surcharges only apply when booking a Canggu operator into Uluwatu, Ubud or further afield.',
    },
    {
      q: 'How far in advance should I book catering in Canggu?',
      a: 'Three to four weeks in advance for standard dinners, six to eight weeks during peak season (July-August, December). Canggu has the deepest supply of operators so last-minute (48-hour) bookings are sometimes possible here when they would not be elsewhere on the island.',
    },
    {
      q: 'Which villas in Canggu are best for private chef dinners?',
      a: 'Look for Berawa-area villas with proper chef kitchens (gas hob, working oven, prep counter), pool-facing dining areas, and outdoor grills. Most premium rentals above 200USD/night meet these criteria. The villa management company can confirm kitchen specs before booking.',
    },
  ],
};

export const areas: Area[] = [cangguArea];

export function findArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
