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

const seminyakArea: Area = {
  slug: 'seminyak-villa-catering',
  name: 'Seminyak',
  title: 'Private Chef & Villa Catering in Seminyak, Bali',
  metaTitle: 'Private Chef Seminyak | Villa Catering Bali Guide 2026',
  metaDescription:
    'Hire a private chef in Seminyak, Bali. Upscale villa dinners, celebration catering and fine dining service from Petitenget to Oberoi with minimal travel fees.',
  primaryKeyword: 'private chef Seminyak',
  image: '/img-villa-seminyak.jpg',
  subAreas: ['Petitenget', 'Oberoi', 'Kayu Aya', 'Kerobokan edge'],
  surcharge:
    'Usually no or low travel surcharge — Seminyak sits next to the main operator cluster. Confirm if your villa is deep Kerobokan or north of the main belt.',
  intro:
    'Seminyak is Bali’s polished entertaining district: larger villas, celebration energy and guests who expect plated service as much as the food itself. Private chef Seminyak bookings skew toward anniversaries, proposals and family milestones rather than casual surf BBQs.',
  sections: [
    {
      heading: 'What the Seminyak villa scene looks like',
      paragraphs: [
        'Seminyak villas favour outdoor dining courtyards, long tables and night lighting that rewards formal plating. Petitenget and Oberoi hold many of the highest-spec kitchens; Kayu Aya and the Kerobokan edge mix design villas with slightly tighter access for load-in vans.',
        'Compared with Canggu, menus here read more celebration-forward: five-course plated dinners, wagyu moments and wine service. Family-style still works for large Indian or multi-gen groups, but the default guest expectation is restaurant pacing in a private garden.',
      ],
    },
    {
      heading: 'Operators and pricing',
      paragraphs: [
        'Mid-to-premium operators dominate. Expect staffed villa dinners commonly from 700,000–1,500,000 IDR per person and fine dining tasting from ~950,000 IDR per person upward. Travel is rarely the budget problem; staffing ratios and imported product are.',
        'Book three to four weeks ahead for Saturday celebration dinners in peak season. Same-week bookings are possible but limit the best brigades.',
      ],
    },
    {
      heading: 'Menu styles that work in Seminyak',
      paragraphs: [
        'Mediterranean and modern European tasting menus, Japanese-leaning seafood, and Italian regional pastas perform well. Balinese ceremonial feasts work for cultural weddings when the villa allows longer service windows.',
        'Confirm glassware and table count with the villa manager — many “luxury” listings still under-equip for twelve-person plated service.',
      ],
    },
    {
      heading: 'Booking logistics specific to Seminyak',
      paragraphs: [
        'Evening traffic on Sunset Road and beach-belt one-ways can delay load-in. Target chef arrival mid-afternoon for 7:30–8:00pm dinners. Noise and banjar rules vary by street — the villa manager should state curfew before you plan a live band or late bar.',
        'Beach clubs nearby sometimes tempt hybrid canapé drops; keep mains fully in-villa if temperature and plating quality matter.',
      ],
    },
  ],
  recommendedMenus: [
    {
      name: 'Celebration tasting (5 courses)',
      description: 'Amuse, seafood, pasta or risotto, main, dessert. 950,000–1,800,000 IDR per person with FOH.',
    },
    {
      name: 'Wagyu or premium grill night',
      description: 'Shared starters, grilled premium mains, composed sides. Strong for 8–16 guests.',
    },
    {
      name: 'Italian regional table',
      description: 'Handmade pasta, antipasti, slow mains — fits Seminyak’s long-table villas.',
    },
  ],
  faq: [
    {
      q: 'How much does a private chef cost in Seminyak?',
      a: 'Staffed dinners commonly start around 700,000 IDR per person; fine dining tasting menus from roughly 950,000 IDR per person. Premium product and full bar push totals higher.',
    },
    {
      q: 'Is Seminyak good for wedding dinners?',
      a: 'Yes for intimate and mid-size villa weddings. Confirm guest caps, noise windows and neighbour rules with the villa before catering deposits.',
    },
    {
      q: 'Do I need travel surcharge in Seminyak?',
      a: 'Usually no for operators based in the Canggu–Seminyak belt. Always confirm on the quote line items.',
    },
  ],
};

const ubudArea: Area = {
  slug: 'ubud-villa-catering',
  name: 'Ubud',
  title: 'Private Chef & Villa Catering in Ubud, Bali',
  metaTitle: 'Private Chef Ubud | Villa Catering & Wellness Menus 2026',
  metaDescription:
    'Hire a private chef in Ubud, Bali. Plant-forward, wellness and jungle-villa catering with travel surcharge guidance and menu styles that fit cooler highland evenings.',
  primaryKeyword: 'private chef Ubud',
  image: '/img-villa-ubud.jpg',
  subAreas: ['Central Ubud', 'Penestanan', 'Sayan', 'Nyuh Kuning', 'Kedewatan'],
  surcharge:
    'Expect 1,000,000–2,000,000 IDR travel when the brigade is based on the coast. Local Ubud teams may reduce or waive this — ask which base the quote assumes.',
  intro:
    'Ubud’s catering culture is wellness-aware, produce-driven and quieter than the coast. Private chef Ubud bookings favour plant-forward menus, retreat meal plans and long-stay daily chefs as much as one-off celebration dinners.',
  sections: [
    {
      heading: 'What the Ubud villa scene looks like',
      paragraphs: [
        'Jungle and rice-terrace villas in Sayan, Penestanan and Kedewatan offer cooler evenings and dramatic settings — and sometimes trickier access for large catering vans. Central Ubud walk-ups may lack full chef kitchens; always checklist appliances before menu lock.',
        'Guests often request vegetarian, vegan, gluten-free and “clean” menus. That is normal here; flag medical allergies with the same seriousness as anywhere else.',
      ],
    },
    {
      heading: 'Operators and pricing',
      paragraphs: [
        'Local Ubud operators compete well on plant-based and Indonesian modern menus. Coastal fine-dining brigades add travel. Multi-day retreat catering is usually cheaper per person per day than stacked one-off celebration rates.',
        'Book wellness retreats weeks ahead; single romantic dinners can often be confirmed inside two weeks outside peak ceremony season.',
      ],
    },
    {
      heading: 'Menu styles that work in Ubud',
      paragraphs: [
        'Plant-forward Californian, modern Indonesian, Balinese vegetarian, and light Mediterranean spreads fit the climate and guest psyche. Heavy French tasting menus work for special nights but are not the default ask.',
        'Farm partnerships and morning markets support same-day produce stories — ask chefs which farms they actually buy from, not just marketing language.',
      ],
    },
    {
      heading: 'Booking logistics specific to Ubud',
      paragraphs: [
        'Rain can hit hard in afternoons; plan covered dining or flexible indoor backup. Steep driveways need a load-in plan. Ceremony days in nearby venues create traffic — pad travel times.',
        'For multi-day retreats, lock breakfast and lunch windows early so grocery logistics and guest yoga schedules do not collide.',
      ],
    },
  ],
  recommendedMenus: [
    {
      name: 'Plant-forward tasting',
      description: 'Seasonal vegetables, grains, fermented sides, optional fish course. Ideal for wellness groups.',
    },
    {
      name: 'Modern Indonesian feast',
      description: 'Shared sambals, grilled fish, base genep aromatics — excellent for mixed international tables.',
    },
    {
      name: 'Daily chef wellness plan',
      description: 'Breakfast + lunch or full board across a retreat week; groceries often at cost with receipts.',
    },
  ],
  faq: [
    {
      q: 'Is there a travel surcharge for Ubud?',
      a: 'Often yes if the team is coastal-based (commonly 1–2M IDR). Local Ubud teams may not charge the same line — compare quotes carefully.',
    },
    {
      q: 'Can I get fully vegan catering in Ubud?',
      a: 'Yes — Ubud is the strongest cluster on the island for plant-based villa catering when you give 10–14 days notice.',
    },
  ],
};

const uluwatuArea: Area = {
  slug: 'uluwatu-villa-catering',
  name: 'Uluwatu',
  title: 'Private Chef & Villa Catering in Uluwatu, Bali',
  metaTitle: 'Private Chef Uluwatu | Cliff Villa Catering Guide 2026',
  metaDescription:
    'Hire a private chef in Uluwatu and the Bukit. Cliff-villa dinners, wedding catering logistics, travel surcharges and menu styles for dramatic outdoor settings.',
  primaryKeyword: 'private chef Uluwatu',
  image: '/img-villa-uluwatu.jpg',
  subAreas: ['Uluwatu', 'Pecatu', 'Bingin', 'Ungasan', 'Nusa Dua edge'],
  surcharge:
    'Budget 750,000–1,500,000 IDR travel from Canggu/Seminyak hubs. Some operators keep Bukit-based crews — prefer those for multi-day events.',
  intro:
    'Uluwatu and the Bukit peninsula deliver Bali’s most dramatic villa dining: cliffs, wind and sunset timing. Private chef Uluwatu bookings need logistics discipline — travel time, wind plans and generator quirks matter as much as the menu.',
  sections: [
    {
      heading: 'What the Uluwatu villa scene looks like',
      paragraphs: [
        'Cliff and hill villas in Pecatu, Bingin and Ungasan host honeymoons, proposals and wedding dinners. Kitchens vary wildly: some are resort-grade, others are show kitchens not built for a brigade. Run the kitchen readiness checklist before locking a tasting menu.',
        'Wind and salt air affect candles, paper menus and lightweight tableware. Weighted settings and indoor backup seating are professional defaults, not optional flourishes.',
      ],
    },
    {
      heading: 'Operators and pricing',
      paragraphs: [
        'Premium pricing is common because travel and time-on-road are real. Fine dining and wedding arcs dominate enquiries. BBQ and casual grill still work for surf-villa groups when wind allows outdoor fire.',
        'Book weddings and 30+ guest dinners as early as possible — Bukit peak dates fill both villas and quality brigades.',
      ],
    },
    {
      heading: 'Menu styles that work in Uluwatu',
      paragraphs: [
        'Seafood-forward tasting, grill-centric celebrations, and sunset canapé-to-dinner arcs fit the setting. Avoid overly delicate sugar work if the pass is fully outdoor and humid.',
        'For weddings, design ceremony canapés that survive wind and a dinner service with clear speech buffers — see the day-of F&B timeline resource.',
      ],
    },
    {
      heading: 'Booking logistics specific to Uluwatu',
      paragraphs: [
        'From Canggu, plan 60–90 minutes for load-in traffic on event days. Confirm generator capacity if the villa browns out under induction + lighting load. Cliff stairs may require porterage time for equipment.',
        'Neighbour and banjar noise rules can be strict in villa estates — align bar close times with the property before promising a late dance floor.',
      ],
    },
  ],
  recommendedMenus: [
    {
      name: 'Sunset seafood tasting',
      description: 'Lighter openers, premium fish/shellfish, composed desserts. Time mains for after golden hour photos.',
    },
    {
      name: 'Cliff-side grill celebration',
      description: 'Live fire, shared salads, premium proteins — strong for 12–30 guests with wind plan.',
    },
    {
      name: 'Intimate wedding dinner arc',
      description: 'Canapés, plated dinner, late snack — staff for ceremony-to-midnight hospitality.',
    },
  ],
  faq: [
    {
      q: 'How much extra is travel to Uluwatu?',
      a: 'Often 750,000–1,500,000 IDR from coastal hubs. Ask if the operator has a Bukit-based team.',
    },
    {
      q: 'Can we do a cliff-edge plated dinner?',
      a: 'Yes with wind plan, weighted settings and a kitchen that can plate indoors if gusts rise. Always walk the site with the chef lead when possible.',
    },
  ],
};

export const areas: Area[] = [cangguArea, seminyakArea, ubudArea, uluwatuArea];

export function findArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
