// Linkable research assets — price index, timelines, checklists, dietary matrix.
// Designed for citations by planners, villa managers and travel writers.

export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  table?: { headers: string[]; rows: string[][] };
  list?: string[];
}

export interface Resource {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  intro: string;
  sections: ResourceSection[];
  faq?: { q: string; a: string }[];
  related: { label: string; to: string }[];
}

export const resources: Resource[] = [
  {
    slug: 'bali-villa-catering-price-index-2026',
    title: '2026 Bali Villa Catering Price Index',
    metaTitle: 'Bali Villa Catering Prices 2026 | Private Chef & Wedding Cost Index',
    metaDescription:
      'Transparent 2026 price bands for Bali villa catering: private chef dinners, fine dining, BBQ, weddings, waitstaff and travel surcharges by area.',
    primaryKeyword: 'private chef bali cost 2026',
    intro:
      'This index collates typical 2026 market bands for catering Bali villa stays — private chef dinners, fine dining, BBQ, wedding packages, staffing and travel surcharges. Figures are editorial ranges based on operator quotes across Canggu, Seminyak, Ubud and Uluwatu. They are not a binding rate card; always confirm an itemised quote for your date and villa.',
    sections: [
      {
        heading: 'How to read these bands',
        paragraphs: [
          'Per-person rates usually include menu planning, shopping, cooking, plating and kitchen cleanup for the named format. Wine, spirits, floral, specialty rentals and government tax/service (commonly ++ 11% tax + 10% service) are often extra unless the quote says inclusive.',
          'Canggu and Seminyak sit at the competitive end for mid-tier dinners. Uluwatu and remote Bukit addresses commonly add travel. Peak months (July–August, late December) can push both rates and minimum guest counts up 10–20%.',
        ],
      },
      {
        heading: 'Core food formats (IDR per person, 2026)',
        paragraphs: [
          'Use the table below as a calibration tool when comparing WhatsApp quotes. If a premium operator is far below the fine-dining band, ask what is excluded. If a mid-tier dinner is far above BBQ rates without staffing or imported product, ask why.',
        ],
        table: {
          headers: ['Format', 'Typical guests', 'From (IDR/pp)', 'Premium band (IDR/pp)', 'Usually includes'],
          rows: [
            ['Casual private chef dinner (3 courses)', '2–10', '350,000', '900,000', 'Chef + helper, groceries, cleanup'],
            ['Staffed villa dinner (3–4 courses)', '6–20', '700,000', '1,500,000', 'Chef, FOH, soft drinks/water often'],
            ['Fine dining tasting (5–7 courses)', '5–12', '950,000', '2,500,000+', 'Brigade, plated service, premium product'],
            ['BBQ / live grill', '10–40', '350,000', '1,200,000', 'Grill chef, proteins, sides, basic service'],
            ['Wedding catering (ceremony + dinner arc)', '20–150', '1,200,000', '4,500,000', 'Canapés, dinner, staffing; bar often separate'],
            ['Daily villa chef (per person/day, multi-meal)', '2–8', 'varies by plan', 'package rates', 'Meals agreed; groceries often at cost'],
          ],
        },
      },
      {
        heading: 'Staffing add-ons (IDR)',
        paragraphs: [
          'Food-only quotes fail when headcount rises. Budget front-of-house and bar as separate lines so the dinner does not collapse into self-service.',
        ],
        table: {
          headers: ['Role', 'Typical rate (2026)', 'Notes'],
          rows: [
            ['Waiter / server', '250,000 / hour (market mid)', 'Often 3–4 hour minimum; 1 per ~8–10 guests plated'],
            ['Bartender', '350,000 / hour or 1.5–2.5M / 4h package', 'Rig sometimes included; alcohol usually client-supplied'],
            ['Butler / host', 'Day or shift rates', 'Best for multi-day villas and VIP guest flow'],
            ['Sommelier / wine service', 'Shift rates', 'Pairings; wine cost separate'],
          ],
        },
      },
      {
        heading: 'Travel surcharges by cluster',
        paragraphs: [
          'Operators based in Canggu/Seminyak commonly treat that cluster as home base. Expect published or quoted travel for Uluwatu, Ubud, Nusa Dua, Sanur and east-coast addresses. Multi-day bookings sometimes waive day-two travel.',
        ],
        table: {
          headers: ['Destination from Canggu hub', 'Typical surcharge (IDR)'],
          rows: [
            ['Canggu / Berawa / Pererenan', '0'],
            ['Seminyak / Kerobokan', '0 – low'],
            ['Uluwatu / Bukit', '750,000 – 1,500,000'],
            ['Ubud', '1,000,000 – 2,000,000'],
            ['Nusa Dua / Sanur', '750,000 – 1,500,000'],
          ],
        },
      },
      {
        heading: 'What “good” transparency looks like',
        paragraphs: [
          'A trustworthy quote lists guest count, menu tier, staffing headcount, travel, ++ tax/service, deposit %, cancellation windows and whether groceries are included or at cost. Same-day replacement or refund language is a reliability signal for villa dinners where there is no restaurant backup.',
          'For published operator tables you can cross-check against this index, see transparent pricing on mychef.id — useful even when you still collect two comparison quotes.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why do villa catering prices exceed restaurant menus?',
        a: 'You are paying for a brigade that relocates to your kitchen, plus shopping, transport, service and full cleanup. Per-person rates often run 30–60% above a restaurant equivalent for the same dish quality.',
      },
      {
        q: 'Are these prices inclusive of tax?',
        a: 'Most Bali hospitality quotes are ++ (plus 11% government tax and 10% service) unless marked inclusive. Always ask.',
      },
      {
        q: 'How often is this index updated?',
        a: 'Editorial review is annual with mid-year notes after peak season. Treat it as a planning tool, not a live inventory.',
      },
    ],
    related: [
      { label: 'Budget guide', to: '/guide/budget-guide-catering-bali-villa' },
      { label: 'How to book', to: '/guide/how-to-book-catering-bali-villa' },
      { label: 'Wedding catering', to: '/catering/bali-wedding-villa-catering' },
      { label: 'Private chef villa', to: '/catering/private-chef-bali-villa' },
    ],
  },
  {
    slug: 'villa-wedding-fb-timeline',
    title: 'Villa Wedding Day-of F&B Timeline',
    metaTitle: 'Bali Villa Wedding Catering Timeline | Day-of F&B Schedule',
    metaDescription:
      'Printable day-of food and beverage timeline for Bali villa weddings: load-in, canapés, dinner service, late snacks and cleanup checkpoints.',
    primaryKeyword: 'bali villa wedding catering timeline',
    intro:
      'Use this day-of food and beverage timeline as a shared document between couple, planner, villa manager and catering lead. Times assume a 5:00pm ceremony and 7:30pm dinner — slide the whole schedule if your ceremony moves. The goal is one owner of the clock, not four vendors improvising.',
    sections: [
      {
        heading: 'T-minus schedule (sample)',
        paragraphs: ['Adjust for guest count, plated vs family-style, and whether bar opens before ceremony.'],
        table: {
          headers: ['Time', 'Kitchen / F&B', 'Villa / planner'],
          rows: [
            ['10:00–12:00', 'Final shop; protein & produce QC', 'Confirm power, water, fridge space, parking'],
            ['13:00', 'Brigade arrives; load-in; station setup', 'House rules briefing; banjar/noise windows'],
            ['14:30', 'Canapé prep; sauce work; dessert finish', 'Table plan final; dietary cards to FOH lead'],
            ['16:00', 'Ceremony canapé tray ready; water stations', 'Guest arrival flow; ushers briefed'],
            ['17:00', 'Ceremony: still water / welcome drinks', 'Ceremony start'],
            ['17:45', 'Cocktail hour canapés + bar open', 'Photos; family groups'],
            ['19:00', 'Guests seated; first course fire', 'Speeches window agreed'],
            ['19:30–21:30', 'Plated or family-style service', 'Timeline buffer for speeches'],
            ['21:45', 'Late-night snack or dessert station', 'Dance floor / DJ cue'],
            ['22:30–23:30', 'Breakdown; kitchen deep clean', 'Vendor load-out coordination'],
          ],
        },
      },
      {
        heading: 'Staffing checkpoints',
        list: [
          'Confirm headcount lock 7 days out; dietary final 5 days out',
          'Name one FOH lead who holds the dietary matrix and allergy notes',
          'Bar opens only when glassware, ice and water stations are live',
          'Speeches never start during main-course fire without kitchen sign-off',
          'Cleanup complete means bins out, surfaces wiped, and villa fridge restored',
        ],
        paragraphs: [
          'For packages that cover ceremony canapés through late kitchen under one brigade, review wedding catering ranges before you design florals around an empty pass.',
        ],
      },
      {
        heading: 'Common failure points',
        paragraphs: [
          'Understaffed cocktail hours, alcohol arriving after guests, and dessert plated during speeches are the three most common villa wedding F&B failures. Build 15-minute buffers between ceremony end and dinner seat — traffic and photos always eat the gap.',
        ],
      },
    ],
    faq: [
      {
        q: 'How early should the catering team arrive?',
        a: 'For 40+ guests, plan load-in 5–6 hours before dinner service. Intimate dinners under 20 guests can compress to 3 hours if the villa kitchen is fully equipped.',
      },
      {
        q: 'Who owns the timeline document?',
        a: 'One person — usually the planner or catering coordinator — not a shared WhatsApp free-for-all. Version the PDF the morning of the event.',
      },
    ],
    related: [
      { label: 'Wedding catering guide', to: '/catering/bali-wedding-villa-catering' },
      { label: 'Event planning service', to: '/services/event-planning-bali-villa-service' },
      { label: 'Price index 2026', to: '/resources/bali-villa-catering-price-index-2026' },
      { label: 'Dietary matrix', to: '/resources/dietary-matrix-villa-catering' },
    ],
  },
  {
    slug: 'villa-kitchen-readiness-checklist',
    title: 'Villa Kitchen Readiness Checklist for Hosts',
    metaTitle: 'Villa Kitchen Checklist Bali | Host Guide for Private Chefs',
    metaDescription:
      'Printable kitchen readiness checklist for Bali villa hosts and managers: appliances, prep space, power, water, waste and guest flow before a private chef arrives.',
    primaryKeyword: 'villa kitchen checklist bali',
    intro:
      'Print this checklist for villa managers and Airbnb hosts before a private chef or catering team arrives. A ready kitchen saves 30–45 minutes of setup and prevents menu changes on the day.',
    sections: [
      {
        heading: 'Appliances & power',
        list: [
          'Working gas hob or induction with enough burners for the menu',
          'Oven that reaches temperature (test the day before)',
          'Stable power — note any inverter/generator quirks',
          'At least two free plug points near prep area',
          'Extractor or cross-breeze plan for smoke/grill menus',
        ],
        paragraphs: ['Flag outdoor-only grilling early if indoor extraction is weak.'],
      },
      {
        heading: 'Cold storage & water',
        list: [
          'Fridge space cleared (one full shelf minimum for under 10 guests; more for events)',
          'Freezer space if ice cream or advance prep is planned',
          'Drinking water for cooking and staff',
          'Ice plan for bar service (machine, bags, or supplier drop)',
        ],
        paragraphs: ['Seafood and dairy menus fail without cold chain space — confirm before menu lock.'],
      },
      {
        heading: 'Prep, service & waste',
        list: [
          'Clear counter prep space (~1.5m continuous ideal)',
          'Basic cookware present or confirmed brought by team',
          'Dining table capacity matches guest count',
          'Pathway from kitchen to table without guest bottlenecks',
          'Bin bags and waste staging away from guest photos',
          'Restroom access for staff',
          'Parking / load-in instructions shared on WhatsApp map pin',
        ],
        paragraphs: [
          'Hosts who complete this list get cleaner service and higher guest review scores. Pair with a preferred chef partner so guests are not hunting freelancers on arrival day.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do chefs bring all equipment?',
        a: 'They bring knives, specialty tools and often chinaware for fine dining. Your villa still needs heat, refrigeration and prep space.',
      },
      {
        q: 'What if the kitchen fails the checklist?',
        a: 'Tell the caterer early. Menus can shift to grill-forward or drop-off formats, or the team can bring portable kit — at a cost.',
      },
    ],
    related: [
      { label: 'How to book', to: '/guide/how-to-book-catering-bali-villa' },
      { label: 'Private chef villa', to: '/catering/private-chef-bali-villa' },
      { label: 'Waitstaff guide', to: '/services/villa-catering-waitstaff-bali' },
      { label: 'Full-service packages', to: '/services/full-service-villa-catering-bali' },
    ],
  },
  {
    slug: 'dietary-matrix-villa-catering',
    title: 'Dietary Matrix for Bali Villa Catering',
    metaTitle: 'Bali Villa Catering Dietary Guide | Vegan Halal GF Allergy Matrix',
    metaDescription:
      'Practical dietary matrix for Bali villa catering: vegan, vegetarian, halal, gluten-free, allergies and kids menus with lead times and kitchen notes.',
    primaryKeyword: 'bali villa catering dietary requirements',
    intro:
      'Share this matrix with your catering team when you enquire. Bali kitchens handle complex dietaries daily — failures almost always come from late notice, not lack of skill.',
    sections: [
      {
        heading: 'Requirement matrix',
        paragraphs: ['Lead times assume a standard villa dinner. Weddings and 40+ guest events should add a week.'],
        table: {
          headers: ['Requirement', 'Lead time', 'Kitchen notes', 'Surcharge norm'],
          rows: [
            ['Vegetarian', '7–14 days', 'Separate protein board; share oils carefully', 'Usually none'],
            ['Vegan / plant-forward', '10–14 days', 'Check stock, butter, fish sauce in sambals', 'Usually none for 1–3 guests'],
            ['Halal', '14 days', 'Supply chain confirmation; no shared grill with pork', 'May affect protein cost'],
            ['Gluten-free', '10–14 days', 'Soy sauce swaps; fryer oil discipline', 'Usually none'],
            ['Nut allergy', '14 days + written brief', 'Separate prep zone; label boards', 'None; non-negotiable protocol'],
            ['Shellfish / fish allergy', '14 days + written brief', 'No shared pans; FOH cards', 'None'],
            ['Kids menus', '7 days', 'Mild heat; familiar carbs; smaller portions', 'Often reduced pp rate'],
            ['Low-FODMAP / medical', '14–21 days', 'Requires written constraints; may limit menu', 'Possible custom fee'],
          ],
        },
      },
      {
        heading: 'What to put in the first enquiry message',
        list: [
          'Date and service time',
          'Guest count + ages of children',
          'Villa area and kitchen notes',
          'Each dietary tag with guest initials',
          'Severity (preference vs anaphylaxis)',
          'Whether alcohol is served',
        ],
        paragraphs: [
          'For anaphylaxis, provide emergency medication plan to the FOH lead at arrival. Do not rely on verbal-only briefings during load-in chaos.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can one kitchen serve pork and halal at the same event?',
        a: 'Only with strict separation plans agreed in writing. Many teams prefer two protein tracks with separate utensils and grill zones — confirm before booking.',
      },
      {
        q: 'Are dietaries more expensive in Bali?',
        a: 'Standard vegetarian, vegan and gluten-free swaps are usually free. Rare imported substitutes and fully separate allergy brigades can add cost.',
      },
    ],
    related: [
      { label: 'Dietary options guide', to: '/guide/dietary-options-catering-bali-villa' },
      { label: 'Menu planning', to: '/guide/menu-planning-bali-villa-catering' },
      { label: 'Ubud area (wellness)', to: '/areas/ubud-villa-catering' },
      { label: 'Wedding F&B timeline', to: '/resources/villa-wedding-fb-timeline' },
    ],
  },
];

export function findResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
