export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface Topic {
  slug: string;
  hub: HubSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  intro: string;
  image?: string;
  sections: TopicSection[];
  faq?: { q: string; a: string }[];
}

export interface Hub {
  slug: HubSlug;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  intro: string;
  topics: Topic[];
}

export type HubSlug = 'catering' | 'services' | 'suppliers' | 'guide';

const cateringTopics: Topic[] = [
  {
    slug: 'private-chef-bali-villa',
    hub: 'catering',
    title: 'Private Chef Catering for Bali Villas',
    metaTitle: 'Private Chef Catering Bali Villa | Personal Chefs at Home 2025',
    metaDescription: 'Hire a private chef for catering Bali villa stays. Personalised menus, in-villa cooking, market-fresh produce and dedicated service in Canggu, Seminyak, Uluwatu and Ubud.',
    primaryKeyword: 'catering Bali villa',
    image: '/img-villa-canggu.jpg',
    intro:
      'A private chef brings the full restaurant experience inside the four walls of your rental. For most travellers, this is the most flexible form of catering Bali villa hosts can offer: one chef, one menu, one evening built around your group.',
    sections: [
      {
        heading: 'What a private chef actually does in your villa',
        paragraphs: [
          'A private chef arrives with everything required to plate a multi-course dinner in your villa kitchen. The visit usually starts two to three hours before service: groceries are brought in already cleaned and portioned, the kitchen is set up, and the chef briefs the housekeeper or villa manager on plating times. Most chefs in Bali handle three to five courses for groups of two up to twenty, scaling staff with the headcount.',
          'For catering Bali villa stays, this is where the difference between a chef and a caterer shows up. A private chef cooks, plates and serves from your kitchen in real time, so the food reaches the table at exact temperature. A caterer drops pre-prepared trays. You pick a chef when you want quality and theatre, a caterer when you want volume.',
        ],
      },
      {
        heading: 'How menus are built',
        paragraphs: [
          'Almost every private chef working catering Bali villa bookings will send a sample menu, then adjust it to your guest list. Standard menu styles include Mediterranean, modern Balinese, Japanese omakase, French bistro, Italian regional and a raw-bar seafood option. Chefs often layer in one or two signature dishes that justify their price point: hand-cut tuna, slow-braised short rib, fresh handmade pasta.',
          'Dietary requirements are handled at the menu stage. Vegetarian, vegan, gluten-free, halal, low-FODMAP and child-friendly courses are routine in Bali — flag everything in your initial enquiry so the menu lands right the first time. A good chef will adjust without surcharges for one or two adjustments per booking.',
        ],
      },
      {
        heading: 'Pricing private chefs in Bali',
        paragraphs: [
          'Private chef rates in Bali start around 350,000 IDR per person for a three-course casual dinner and scale to 1,800,000 IDR per person for a tasting menu using imported produce, wagyu or premium seafood. Most chefs working catering Bali villa contracts include groceries, cooking, plating, basic clean-up and one helper. Wine and spirits are almost always charged separately.',
          'Sundays and public holidays generally carry a 10 to 20 percent surcharge. Bookings under 48 hours get a rush fee. Booking three to four weeks in advance gives you the best chefs at the standard rate and a real chance to refine the menu before guests arrive.',
        ],
      },
    ],
    faq: [
      { q: 'How many guests can one private chef handle?', a: 'A solo chef comfortably plates for up to eight guests. From ten upwards a kitchen assistant or sous-chef joins. Above twenty guests, expect a small brigade of two to three plus dedicated service staff.' },
      { q: 'Do private chefs bring their own equipment?', a: 'They bring knives, fine tools and specialty items like sous-vide bags or smokers. Your villa kitchen needs a working oven, gas hob, fridge space and basic cookware. Most luxury villas in Bali already meet this bar.' },
    ],
  },
  {
    slug: 'villa-dinner-catering-bali',
    hub: 'catering',
    title: 'Villa Dinner Catering in Bali',
    metaTitle: 'Villa Dinner Catering Bali Villa | Sunset & Group Dining',
    metaDescription: 'Book villa dinner catering Bali villa services. Sit-down dinners, family-style spreads, sunset cocktail dinners and BBQ nights — fully staffed and stress-free.',
    primaryKeyword: 'catering Bali villa',
    image: '/img-villa-seminyak.jpg',
    intro:
      'Dinner is the centrepiece of a villa stay, and dinner catering Bali villa providers have built their entire calendar around it. From quiet two-person dinners on a sun deck to twenty-person family-style spreads, this is the most-booked category in private hospitality on the island.',
    sections: [
      {
        heading: 'Dinner formats that work in a villa setting',
        paragraphs: [
          'Three formats dominate villa dinners in Bali. First, the plated three to five course — formal, paced and ideal for couples or anniversaries. Second, the family-style sharing menu — large boards of charcuterie, salads, grilled mains and sides set down the middle of the table. Third, the live grill or BBQ dinner — staff cooking by the pool while guests eat in shifts.',
          'For catering Bali villa dinners with mixed groups, the family-style spread usually wins. It scales easily, keeps energy high, and removes the awkward gap between courses that can drag in a plated format with chatty guests. Plated dinners shine when the menu is the point — birthdays, proposals, milestone moments.',
        ],
      },
      {
        heading: 'Staff and service standards',
        paragraphs: [
          'A proper villa dinner is staffed at one server per six guests, plus the chef and at least one kitchen assistant. Above ten guests, add a dedicated bartender if you want cocktails poured properly. The best catering Bali villa operators send a runner to set the table thirty minutes before service: linen, candles, glassware, charger plates, full cutlery. They also leave the kitchen cleaner than they found it.',
          'Service in English is standard. The strongest teams will also brief the table at each course — naming the dishes, sourcing and pairings. This single detail is the difference between a meal and an experience.',
        ],
      },
      {
        heading: 'What dinner catering really costs',
        paragraphs: [
          'Expect 450,000 to 1,200,000 IDR per person for a fully staffed villa dinner with three to four courses, soft drinks and water included. Premium menus with imported beef, fresh oysters or omakase sushi land between 1,500,000 and 2,500,000 IDR per person. Add a flat 1,500,000 to 3,000,000 IDR for table styling and floral arrangements if you want the dinner to look magazine-ready.',
          'Tipping is appreciated but not expected on Bali. A 10 percent gratuity on the food bill, paid in cash to the lead chef at the end of the night, covers the team in line with local hospitality norms.',
        ],
      },
    ],
    faq: [
      { q: 'How early should I book a villa dinner?', a: 'Two to four weeks ahead for standard menus. Six to eight weeks for peak season July, August and December, and for any group above twelve guests.' },
      { q: 'Can the team handle dietary requirements?', a: 'Yes. Bali catering teams handle vegetarian, vegan, halal, kosher-friendly, gluten-free and most allergies as standard. Confirm everything in writing one week before the dinner.' },
    ],
  },
  {
    slug: 'bali-wedding-villa-catering',
    hub: 'catering',
    title: 'Wedding Catering for Bali Villas',
    metaTitle: 'Wedding Catering Bali Villa | Intimate Villa Weddings 2025',
    metaDescription: 'Plan wedding catering Bali villa days the right way. Cocktail hour, plated dinners, late-night snacks and bar packages for elopements through 150-guest celebrations.',
    primaryKeyword: 'catering Bali villa',
    image: '/img-villa-uluwatu.jpg',
    intro:
      'Bali has quietly become the top private wedding destination in Southeast Asia, and most of those weddings happen in villas — not hotels. Wedding catering Bali villa providers are the operators behind that scene, running cocktail hours, plated dinners and late-night kitchens for groups from ten to one hundred and fifty.',
    sections: [
      {
        heading: 'The villa wedding day timeline, food-side',
        paragraphs: [
          'A typical villa wedding day breaks the food brief into four distinct stages. Brunch or late lunch for the wedding party and immediate family, around 1pm. Canapes and cocktail hour for arriving guests, around 4pm. Plated or family-style dinner at sunset, around 6.30pm. Late-night snack service from 10pm, usually street-food style — nasi goreng, satay, sliders, gelato carts.',
          'For catering Bali villa weddings, the canape and dinner courses carry the most weight. Caterers send a tasting menu to the couple six to eight weeks ahead. The dinner course is usually three plated courses or four family-style boards depending on table layout and group dynamics.',
        ],
      },
      {
        heading: 'Bar packages and beverages',
        paragraphs: [
          'Most villa wedding caterers offer three bar tiers. The standard bar covers beer, sparkling, two house wines, soft drinks and water for around 350,000 IDR per person. The cocktail bar adds three to five signature cocktails plus a bartender for 600,000 to 900,000 IDR per person. The premium bar adds spirits, champagne and a curated wine list for 1,200,000 IDR and above per person.',
          'Welcome drinks during cocktail hour are almost always served by tray-passing staff rather than from the bar — keep the bar focused on dinner and dancing service. Imported wines and champagne carry duty, so expect a real price step up versus what the same bottle costs in Singapore or Sydney.',
        ],
      },
      {
        heading: 'Costs and what shapes them',
        paragraphs: [
          'Wedding catering Bali villa packages run from 1,200,000 IDR per person at the budget end up to 4,500,000 IDR per person for premium menus with imported produce, signature wines and full styling. The single biggest cost driver is staff count: at one staff member per six to eight guests, a hundred-guest wedding needs twelve to seventeen front-of-house plus the kitchen brigade.',
          'Book the caterer first, then the florist and stylist around them. Many caterers offer all-in packages bundling catering, bar, linen, glassware and a coordinator, which is generally cheaper than assembling each vendor separately for catering Bali villa weddings under fifty guests.',
        ],
      },
    ],
    faq: [
      { q: 'Do villa caterers handle the wedding ceremony food too?', a: 'Yes, the same caterer typically covers the welcome drinks served during the ceremony and the canape hour that follows.' },
      { q: 'How far in advance to book a wedding caterer in Bali?', a: 'Lock the date six to twelve months ahead. Tastings happen six to eight weeks before the wedding. Final guest count and menu are confirmed two weeks out.' },
    ],
  },
  {
    slug: 'luxury-villa-catering-bali',
    hub: 'catering',
    title: 'Luxury Villa Catering in Bali',
    metaTitle: 'Luxury Catering Bali Villa | Fine Dining & Premium Service',
    metaDescription: 'Luxury catering Bali villa experiences — Michelin-trained chefs, imported produce, sommelier-paired wines and white-glove service in private villa settings.',
    primaryKeyword: 'catering Bali villa',
    image: '/img-villa-ubud.jpg',
    intro:
      'At the top end of catering Bali villa, the brief moves from "feed the group" to "build a private restaurant inside this villa for one evening." This is fine-dining catering with imported produce, a brigade of three to five in the kitchen, dedicated service staff and a sommelier walking the table.',
    sections: [
      {
        heading: 'What distinguishes luxury villa catering',
        paragraphs: [
          'Luxury catering Bali villa operators send Michelin-trained or hotel-trained chefs, often ex Mandapa, COMO Uma, The Mulia or restaurants like Locavore and Mauri. They build five to nine course tasting menus around a single theme — coastal Mediterranean, Japanese kaiseki, modern Balinese fine dining — and source ingredients from a tighter, more curated supplier list.',
          'Service is the second differentiator. Expect at least one server per four guests, full silver service, custom-fitted linen, hand-cut crystal glassware, and a kitchen that arrives a full day ahead for prep. Many premium teams will also deliver bespoke menu cards and table styling without it being a separate line item.',
        ],
      },
      {
        heading: 'Menu and ingredient sourcing',
        paragraphs: [
          'Premium menus pull on imported and rare ingredients: French oysters air-freighted from Sydney, Spanish gambas, Hokkaido scallops, Australian Wagyu, Iberico jamón, Périgord truffles in season. On the local side, expect island-grown produce from established farms in Bedugul and Plaga, Bali fishing-cooperative seafood, and craft cheeses from Bali Buda Farm or Lupii.',
          'Wine programmes get serious at this tier. A sommelier will pre-select pairings two to three weeks ahead, drawing from boutique importers like Vin de Garde, Vinum or Cellardoor. Cellaring is handled at the importer warehouse and bottles arrive at the right temperature in transit cooling.',
        ],
      },
      {
        heading: 'Pricing and how to book',
        paragraphs: [
          'Luxury catering Bali villa pricing runs 2,500,000 IDR per person at the entry point of fine dining and crosses 6,000,000 IDR per person for a full tasting menu with prestige wine pairing. Minimum spends often apply: 25,000,000 to 50,000,000 IDR per dinner is common at this level, regardless of guest count.',
          'Book through a concierge or villa manager wherever possible — they know which operators deliver and which oversell. Tastings are usually arranged in town at the chef\'s home restaurant or in your villa at full cost. Final menu, table layout and wine list lock two weeks before service.',
        ],
      },
    ],
    faq: [
      { q: 'Can luxury caterers handle very small groups?', a: 'Yes, two- and four-person dinners are common at this tier and often more profitable for chefs than mid-size groups. Minimum spends still apply.' },
      { q: 'Are tasting fees deductible from the final bill?', a: 'Sometimes. About half of premium operators credit the tasting against the booking; half charge it separately. Confirm in writing.' },
    ],
  },
];

const servicesTopics: Topic[] = [
  {
    slug: 'full-service-villa-catering-bali',
    hub: 'services',
    title: 'Full-Service Villa Catering',
    metaTitle: 'Full-Service Catering Bali Villa Service | End-to-End Hosting',
    metaDescription: 'Full-service catering Bali villa service covers chef, waitstaff, bartender, styling and cleanup. One vendor, one invoice, zero stress for your villa stay.',
    primaryKeyword: 'catering Bali villa service',
    image: '/img-menu-mediterranean.jpg',
    intro:
      'Full-service is the umbrella term for the version of catering Bali villa service where one operator handles everything from grocery sourcing through to dish-pit cleanup. For groups that want the dinner to "just happen", this is the route.',
    sections: [
      {
        heading: 'What is included in a full-service package',
        paragraphs: [
          'A standard full-service catering Bali villa service contract includes menu consultation, full grocery sourcing, in-villa cooking, plated or family-style service, beverage service including a basic bar, table styling with linen and floral, and a complete kitchen reset at the end of the night. Many operators will also include valet parking direction, welcome drinks at arrival and post-dinner liqueur service if requested.',
          'The point of going full-service is consolidation. Instead of coordinating a chef, a florist, a styling team, a bartender and a cleaning crew, you book one provider and one point of contact. For multi-day trips with multiple meals per day, this consolidation saves hours of admin and avoids the gaps that emerge when separate vendors are handing off to each other.',
        ],
      },
      {
        heading: 'How the day runs',
        paragraphs: [
          'The supplier team typically arrives four hours before service for a dinner event. Two staff begin kitchen prep, one front-of-house lead handles table setup and floral, and a bartender starts mise-en-place at the bar. The villa manager or housekeeper is briefed once on access, timings and any house rules. From that point, the catering Bali villa service team operates independently.',
          'Service begins with a welcome drink and canapes, then transitions to the table. Between courses, the front-of-house lead checks pacing with the host. After dessert, coffee and digestifs are served at the table or moved poolside. The kitchen reset happens during the last course so the team leaves around thirty minutes after the final guest stands up.',
        ],
      },
      {
        heading: 'Pricing and packages',
        paragraphs: [
          'Full-service packages start around 900,000 IDR per person for casual dinners and climb to 3,000,000 IDR per person for premium menus with curated bar service. Group minimums apply: most operators have a six-guest minimum or a flat-rate floor for smaller bookings. Multi-day packages — say a three-night trip with two dinners and two lunches — can drop the per-person rate by ten to fifteen percent.',
          'Cancellations follow a standard tier: free outside four weeks, 25 percent within four weeks, 50 percent within two weeks, 100 percent within seventy-two hours. Always confirm the cancellation policy in writing before paying any deposit on a catering Bali villa service contract.',
        ],
      },
    ],
    faq: [
      { q: 'Is staffing included in the per-person price?', a: 'Yes, staff costs are bundled into the package rate at standard ratios. Custom requests for extra service staff are quoted separately.' },
      { q: 'Can full-service catering handle breakfast and lunch too?', a: 'Yes, many operators run all-day catering packages. Breakfast and lunch typically use a smaller staff brigade than dinner.' },
    ],
  },
  {
    slug: 'bali-villa-bartender-service',
    hub: 'services',
    title: 'Bartender Service for Villa Catering',
    metaTitle: 'Bartender Catering Bali Villa Service | Cocktail Bars at Home',
    metaDescription: 'Bartender catering Bali villa service for events, dinners and parties. Bali mixologists build custom cocktail lists and run full bar service in your villa.',
    primaryKeyword: 'catering Bali villa service',
    image: '/img-villa-seminyak.jpg',
    intro:
      'Standalone bartender hire is one of the most underrated parts of a catering Bali villa service stack. For dinners over eight guests, putting one trained bartender behind the bar transforms how the evening flows — and it costs less than most people expect.',
    sections: [
      {
        heading: 'What a Bali villa bartender actually delivers',
        paragraphs: [
          'A villa bartender brings the mixology rig — shakers, jiggers, strainers, peelers, citrus press — plus pre-batched syrups, fresh garnishes and ice. They build a custom cocktail list of four to six signature drinks during pre-event consultation, then run service from arrival through to the last guest leaving.',
          'The skill level on Bali has stepped up over the last five years. Many bartenders now have hotel bar backgrounds from W Bali, Locavore, Apéritif or NUSANTARA, and bring real technique: spherical ice, fat-washing, milk clarification, smoke serves. Catering Bali villa service contracts that include a bartender are noticeably better-rated by guests for this reason.',
        ],
      },
      {
        heading: 'Cocktail list design',
        paragraphs: [
          'Start the menu design with three anchor drinks: one citrus-forward (margarita, daiquiri, Bali sour), one spirit-forward (negroni, old fashioned, manhattan), one signature (lemongrass gin fizz, tamarind martini, jamu spritz). Add one non-alcoholic option using local ingredients like butterfly pea, coconut water or fresh-pressed pineapple — this matters more on Bali because of the volume of pregnant guests, non-drinkers and recovering guests on retreat trips.',
          'For weddings and milestone parties, name two of the cocktails after the hosts or the event. This costs nothing and consistently gets photographed by guests. A good bartender will draft printed cocktail cards as part of the catering Bali villa service if asked.',
        ],
      },
      {
        heading: 'Pricing the bar',
        paragraphs: [
          'Standalone bartender hire runs 1,500,000 to 2,500,000 IDR for a four-hour service window in Canggu, Seminyak or Uluwatu. The bartender handles the work; you provide the alcohol or buy it through them at retail plus a small surcharge. Stocking the bar for a fifteen-person dinner with full cocktail service typically lands between 5,000,000 and 9,000,000 IDR depending on spirit quality.',
          'For groups above twenty guests, hire two bartenders. The single bartender can keep up with twenty drinks an hour, which is the practical ceiling once dinner finishes and the bar gets busy. Two bartenders move that ceiling to fifty an hour and remove the bottleneck most catering Bali villa service evenings hit around 10pm.',
        ],
      },
    ],
    faq: [
      { q: 'Do bartenders bring their own ice?', a: 'They bring clear cocktail ice and sphere ice. Standard pebble ice for soft drinks usually comes from the villa or is purchased on the day from a local supplier.' },
      { q: 'Can the bartender handle non-alcoholic events?', a: 'Yes, mocktail-only services are increasingly common for retreats, family events and bookings in Ubud.' },
    ],
  },
  {
    slug: 'villa-catering-waitstaff-bali',
    hub: 'services',
    title: 'Waitstaff for Villa Catering',
    metaTitle: 'Waitstaff Catering Bali Villa Service | Trained Servers for Events',
    metaDescription: 'Hire trained waitstaff as part of catering Bali villa service. Front-of-house servers, runners and event leads for villa dinners, weddings and parties.',
    primaryKeyword: 'catering Bali villa service',
    image: '/img-villa-canggu.jpg',
    intro:
      'Waitstaff are the silent backbone of any catering Bali villa service. A great chef and a strong menu only land if the food gets to the table on time, plated correctly, and at the right temperature. That is the waitstaff job.',
    sections: [
      {
        heading: 'Roles inside a villa service team',
        paragraphs: [
          'A typical villa service team has three distinct roles. The front-of-house lead, sometimes called the maître d\', runs the floor: greets guests, paces service, briefs the table and handles any issues. The servers carry food and drinks, clear courses, and reset the table between sittings. The runner shuttles between the kitchen and the dining area, and is usually the most junior member of the brigade.',
          'For catering Bali villa service contracts, the front-of-house lead is the role that justifies the price point. A weak lead means dinner runs late, courses cool down at the pass, and the host ends up checking in with the kitchen mid-event. A strong lead means none of that happens.',
        ],
      },
      {
        heading: 'Ratios and standards',
        paragraphs: [
          'Industry-standard staffing for plated villa dinners is one server per six guests, plus a front-of-house lead from twelve guests upwards. Family-style service can stretch to one server per eight guests because clearing is faster. Cocktail-style service with passed canapes needs one server per ten to twelve guests.',
          'Uniforms matter. The default in Bali is black trousers, white shirt, black apron, soft-soled shoes. For premium catering Bali villa service, expect more tailored uniforms with the operator\'s subtle branding. Always confirm the dress code in writing if you want a specific style — beach-formal, all-white, traditional Balinese — for your evening.',
        ],
      },
      {
        heading: 'Pricing waitstaff and standalone bookings',
        paragraphs: [
          'When bundled into a full catering package, waitstaff are not a separate line item. When booked standalone — for example, if you have your own chef and only need front-of-house — expect 750,000 to 1,200,000 IDR per server for a four-hour shift, and 1,500,000 to 2,200,000 IDR for a front-of-house lead. Overtime is charged at 150,000 to 250,000 IDR per hour per server beyond the contracted window.',
          'Gratuity is not built into the day rate. A 10 percent tip on the total food and beverage bill, split among the service team by the lead, is the established norm for catering Bali villa service across the island.',
        ],
      },
    ],
    faq: [
      { q: 'Do waitstaff speak English?', a: 'Yes, English is the working language for villa events in Bali. Most teams also have Mandarin or Russian-speaking staff available on request.' },
      { q: 'Can I book waitstaff without using the operator for the food?', a: 'Yes, although many operators prefer to package the staff and chef together. Standalone staff bookings are easier when you go through agencies rather than restaurant-led teams.' },
    ],
  },
  {
    slug: 'event-planning-bali-villa-service',
    hub: 'services',
    title: 'Event Planning Inside Villa Catering',
    metaTitle: 'Event Planning Catering Bali Villa Service | Villa Coordinators',
    metaDescription: 'Event planning as part of catering Bali villa service. Coordinators who handle timeline, vendors, styling and on-day flow for villa dinners and celebrations.',
    primaryKeyword: 'catering Bali villa service',
    image: '/img-hero-villa.jpg',
    intro:
      'Larger villa events — weddings, multi-day birthdays, retreat closings — need a coordinator on top of the catering team. Event planning catering Bali villa service is the discipline of running the whole evening, not just the food.',
    sections: [
      {
        heading: 'When you need a coordinator versus when you do not',
        paragraphs: [
          'A coordinator earns their fee from around fifteen guests upwards, or any event with more than two service moments — for example, a ceremony plus dinner plus late-night snack. Below that, the catering operator\'s front-of-house lead can usually handle the timeline without extra help.',
          'Above the threshold, the coordinator owns the run-sheet: when guests arrive, when canapes start, when the host gives a toast, when dinner is served, when speeches happen, when the cake comes out, when the bar pivots from cocktail to spirits-led. Without one person owning this, the evening drifts and the catering Bali villa service team is left guessing.',
        ],
      },
      {
        heading: 'What planners coordinate beyond the food',
        paragraphs: [
          'A villa event coordinator typically also handles florals, table styling, lighting, DJ and AV, transport scheduling and any villa-specific issues like quiet hours in residential areas or generator backups. Strong planners maintain shortlists of vetted vendors and book directly through their accounts at preferential rates.',
          'For multi-day events the planner runs the upstream logistics: villa walk-through, vendor delivery windows, parking management, guest welcome bags. The catering Bali villa service team gets a clean brief and a single point of contact, which keeps the dinner running smoothly even when something upstream goes sideways.',
        ],
      },
      {
        heading: 'Cost and how to engage',
        paragraphs: [
          'Coordinator rates run from 8,000,000 IDR for a single dinner event to 60,000,000 IDR and above for a multi-day villa wedding. Many caterers offer a half-day "day-of coordination" package at 6,000,000 to 12,000,000 IDR which gets you the timeline management without the full vendor sourcing — useful when you have already booked the vendors yourself.',
          'Engage the coordinator early. Once vendor contracts are signed, the planner\'s leverage to negotiate timing, costs and inclusions drops sharply. The cheapest mistake is to book a planner six weeks out and pay them to clean up decisions you already locked in. The most expensive is to book no planner at all for a fifty-guest villa wedding.',
        ],
      },
    ],
    faq: [
      { q: 'Do caterers double as event planners?', a: 'Some do. Full-service operators often have an in-house coordinator. Restaurant-led caterers typically do not, and expect you to bring your own planner.' },
      { q: 'Should I hire a planner if my villa manager is involved?', a: 'Villa managers handle the property. They do not run events. For anything more elaborate than a small dinner, a dedicated coordinator is worth the spend.' },
    ],
  },
];

const suppliersTopics: Topic[] = [
  {
    slug: 'best-catering-bali-villa-suppliers',
    hub: 'suppliers',
    title: 'Best Catering Suppliers for Bali Villas',
    metaTitle: 'Best Catering Bali Villa Suppliers | Vetted Vendors 2025',
    metaDescription: 'Top catering Bali villa suppliers across Canggu, Seminyak, Uluwatu and Ubud. Independent vendor list with strengths, pricing tiers and what they are best for.',
    primaryKeyword: 'catering Bali villa suppliers',
    image: '/img-menu-asian.jpg',
    intro:
      'The catering Bali villa suppliers market has expanded fast. There are now over a hundred operators with active websites and bookable menus. Quality is uneven. This is the landscape, broken into tiers by how the experienced concierge market actually rates them.',
    sections: [
      {
        heading: 'How to read the market',
        paragraphs: [
          'Catering Bali villa suppliers split into four broad tiers. Tier one is the boutique fine-dining operators with hotel-trained chefs and minimum spends — small operations, high quality, hard to book in peak season. Tier two is the mid-market full-service caterers: bigger teams, broader menus, good repeat-booking businesses with retreats and weddings. Tier three is restaurant-led catering, where a known Bali restaurant runs an off-site catering arm. Tier four is the high-volume budget operators serving large group events.',
          'For most travellers, tier two is the sweet spot. They have the staff depth to run a clean evening, the menu range to cover mixed groups, and the price point to make the spend feel proportional to the trip. Tier one shines for milestone events; tier three is great when you want food from a specific restaurant brought to your villa.',
        ],
      },
      {
        heading: 'What to evaluate before booking',
        paragraphs: [
          'Three signals separate strong catering Bali villa suppliers from weak ones. First, a written sample menu with clear sourcing. If a caterer cannot tell you where the beef, fish and produce comes from, treat it as a red flag. Second, a published staffing plan. The number of cooks, servers, bartenders and the lead per event should be confirmed in writing. Third, a documented food safety setup — proper transport coolers, in-villa temperature checks, allergen labelling. The good operators volunteer all of this; the weak ones go quiet when asked.',
          'Reviews matter, but read them carefully. Look for repeat-booking language ("we used them again", "third year in a row"). One-off glowing reviews from new accounts can be staged. Look at total review volume per platform — strong operators have fifty plus genuine reviews across Google, TripAdvisor and Instagram.',
        ],
      },
      {
        heading: 'Region by region',
        paragraphs: [
          'Canggu and Berawa have the densest cluster of mid-market and modern-Asian catering Bali villa suppliers, leaning towards casual sharing menus, beach BBQs and brunch services for retreats and family villas. Seminyak and Petitenget hold most of the premium operators — fine dining, wedding caterers, formal service. Uluwatu has fewer suppliers but the ones present specialise in cliff-villa weddings and high-spec sunset dinners. Ubud is dominated by plant-forward, retreat-aligned caterers — strong on raw food, vegan, ayurvedic and macrobiotic programmes.',
          'Booking a Seminyak caterer to drive to Uluwatu is normal and not a problem; the round-trip surcharge is usually 750,000 to 1,500,000 IDR. Booking a Canggu operator into Ubud usually triggers a higher surcharge and may not be worth the saving. Match suppliers to the area when possible.',
        ],
      },
    ],
    faq: [
      { q: 'Should I book direct or through a concierge?', a: 'For tier one and tier two suppliers, booking direct is usually fine. For weddings and multi-vendor events, a concierge or planner is worth the modest commission.' },
      { q: 'How transparent are suppliers about pricing?', a: 'Top-tier suppliers publish per-person rates with package inclusions. Tier four operators tend to quote on enquiry; expect to compare three quotes.' },
    ],
  },
  {
    slug: 'local-produce-bali-catering-suppliers',
    hub: 'suppliers',
    title: 'Local Produce Suppliers Behind Bali Catering',
    metaTitle: 'Local Produce Catering Bali Villa Suppliers | Farm-to-Villa',
    metaDescription: 'Local farms and produce networks feeding catering Bali villa suppliers. Bedugul, Plaga and Kintamani farms that power the island\'s top villa kitchens.',
    primaryKeyword: 'catering Bali villa suppliers',
    image: '/img-menu-balinese.jpg',
    intro:
      'The food on your villa table starts upstream of the catering kitchen. The strongest catering Bali villa suppliers source from a tight network of island farms and direct-from-grower co-ops, mostly clustered in the cooler highlands of Bedugul, Plaga and Kintamani.',
    sections: [
      {
        heading: 'Where the produce comes from',
        paragraphs: [
          'Three highland regions feed most premium villa kitchens. Bedugul, at around 1,400 metres, produces the strawberries, lettuces, herbs, tomatoes and brassicas that show up in any farm-to-table style menu. Plaga, slightly lower, grows the broader range of root vegetables, brassicas and chillies. Kintamani is best known for coffee, citrus and the volcanic-soil tomatoes that command a premium in catering Bali villa suppliers\' menus.',
          'Coastal sourcing handles seafood, coconuts and tropical fruit: Jimbaran, Kedonganan and Benoa for fish, the south coast for pineapple and papaya, the east coast around Amed for the small-boat tuna landings. The best caterers map their menu against this geography rather than ordering everything through a single wholesale broker.',
        ],
      },
      {
        heading: 'How the supply chain runs',
        paragraphs: [
          'For top-tier suppliers, the workflow looks like this: chef issues a weekly menu plan; produce buyer places orders with named farms 48 to 72 hours ahead; produce is harvested early morning and delivered to a central cool room in Denpasar or Canggu the same day; on event day, the chef pulls the produce for that booking and transports it to the villa in coolers.',
          'The lower-tier catering Bali villa suppliers skip this and buy from wholesale markets in Denpasar or Bedugul. The price is lower and the quality varies day to day. You can usually taste the difference at the table — herbs are less aromatic, tomatoes flatter, fish slightly older. For premium events, ask suppliers in writing whether produce is sourced direct from named farms or via wholesale.',
        ],
      },
      {
        heading: 'Imports and what gets brought in',
        paragraphs: [
          'Bali produces a lot, but not everything. Most premium catering Bali villa suppliers still import select ingredients: stone fruits in Australian winter, French butter, Italian flours, Spanish hams, specific cheeses, prime aged beef cuts, certain wines and spirits. These are brought in through customs by established food importers with cold-chain handling.',
          'Imported produce raises menu cost meaningfully. A dish that includes Australian wagyu, French butter and imported truffle can carry an ingredient cost two to three times the price of a locally sourced equivalent. This is why per-person prices at the premium tier scale so quickly — the supplier cost upstream is doing most of that work.',
        ],
      },
    ],
    faq: [
      { q: 'Are suppliers transparent about which farms they use?', a: 'Top-tier yes, mid-tier sometimes, budget tier rarely. The good caterers will name farms in tasting menus and event proposals.' },
      { q: 'Can I request a fully local-sourced menu?', a: 'Yes. Many catering Bali villa suppliers can build a 100 percent local menu and it usually lowers cost by 20 to 30 percent versus an import-heavy menu.' },
    ],
  },
  {
    slug: 'seafood-suppliers-bali-villa-catering',
    hub: 'suppliers',
    title: 'Seafood Suppliers Behind Villa Catering',
    metaTitle: 'Seafood Catering Bali Villa Suppliers | Fresh Daily Catch',
    metaDescription: 'Seafood catering Bali villa suppliers — fishing co-ops, dive boats and importers feeding villa menus across the island. Daily catch, sustainability and pricing.',
    primaryKeyword: 'catering Bali villa suppliers',
    image: '/img-menu-western.jpg',
    intro:
      'Seafood is the highest-stakes ingredient in any villa menu. Sourcing for catering Bali villa suppliers is split between local fishing cooperatives, import channels for oysters and crustaceans, and a small set of dive-boat operators delivering on commission for the premium tier.',
    sections: [
      {
        heading: 'Local fishing cooperatives',
        paragraphs: [
          'Three coastal hubs handle most of the local catch. Jimbaran and Kedonganan in the south, Benoa near the harbour, and Amed on the east coast. Jimbaran is the easiest to buy from for caterers based in Seminyak or Uluwatu; Amed is the strongest for line-caught yellowfin tuna landed by small boats early in the morning.',
          'Catering Bali villa suppliers working at the premium level usually have a named buyer at one of these hubs. The buyer meets the boats at landing, inspects the fish, packs on ice, and delivers to the catering kitchen by 9am. The lower tier of caterers buys from the wholesale market a few hours later, which means the fish has already passed through two or three middlemen by the time it arrives.',
        ],
      },
      {
        heading: 'Imports for oysters, crustaceans and specialty fish',
        paragraphs: [
          'Local sourcing covers tuna, mahi-mahi, snapper, grouper, mackerel, squid and most prawn species. For oysters, scallops, mussels, certain crab species, lobster and high-end specialty fish like Hokkaido scallops or Tasmanian salmon, premium suppliers import via cold chain from Sydney or Singapore.',
          'Imports carry a duty and a logistics premium. Expect catering Bali villa suppliers using imported oysters to charge in the range of 80,000 to 150,000 IDR per oyster on tasting menus, versus around 25,000 to 40,000 IDR per oyster from local farms. The flavour profile is meaningfully different, which is why many premium tasting menus use both — a comparison plate of local versus imported as the second course.',
        ],
      },
      {
        heading: 'Sustainability and what to ask',
        paragraphs: [
          'Sustainability practice in Bali seafood is improving but uneven. Strong catering Bali villa suppliers will work only with line-caught tuna, avoid undersized snapper and grouper, and refuse certain species in spawning season. Some caterers participate in the Bali Sustainable Seafood programme — worth asking about for any premium booking.',
          'For a more responsible menu, request line-caught yellowfin instead of farmed tuna, local oysters over imported, and rotate between snapper, mahi-mahi and mackerel rather than ordering a single species in volume. This puts less pressure on any one stock and rewards the caterers and fishing cooperatives that practice rotational sourcing.',
        ],
      },
    ],
    faq: [
      { q: 'Can the caterer arrange a beach-side fresh-catch dinner?', a: 'Yes. Several Bali catering suppliers will run a Jimbaran-style fresh catch dinner in your villa, with the fish purchased that morning by the host as a viewing experience.' },
      { q: 'How safe is raw fish sourced through villa caterers?', a: 'Safe at the premium and mid-tier when cold chain is maintained. Avoid raw preparations from low-cost operators that buy from wholesale markets without temperature documentation.' },
    ],
  },
  {
    slug: 'wine-beverage-bali-villa-suppliers',
    hub: 'suppliers',
    title: 'Wine and Beverage Suppliers for Villa Catering',
    metaTitle: 'Wine Catering Bali Villa Suppliers | Wine, Beer & Spirits',
    metaDescription: 'Wine and beverage catering Bali villa suppliers. Importers, sommeliers and bar programmes feeding the island\'s top villa events and dinners.',
    primaryKeyword: 'catering Bali villa suppliers',
    image: '/img-villa-seminyak.jpg',
    intro:
      'Beverage is the second biggest spend on most villa events after food, and the layer where the most money gets wasted on the wrong choices. Catering Bali villa suppliers either run their own bar programme or partner with a small number of importers — knowing which is which matters.',
    sections: [
      {
        heading: 'The importer landscape',
        paragraphs: [
          'Indonesia\'s wine market is dominated by a handful of licensed importers. Vin de Garde, Vinum, Cellardoor and a few smaller boutique players bring in the majority of premium wine consumed at villa events. These importers stock the cellars that catering Bali villa suppliers and restaurants draw from for events.',
          'Direct retail purchase is also possible. Wine shops like Cellardoor in Seminyak and The Wine Place in Sanur stock the same labels and sell direct to consumers at retail. For larger events, going through the caterer is usually simpler because they handle delivery, ice, glassware and service in one line item.',
        ],
      },
      {
        heading: 'Spirits, beer and the local picture',
        paragraphs: [
          'Bali has a thriving local distilling and brewing scene that pairs well with villa menus. Local arak and brem are easy to integrate into cocktail menus. For beer, Stark and Albens are the two craft labels most often poured at premium events; standard pours are Bintang and Bali Hai. Most catering Bali villa suppliers can mix local and imported beers in the bar programme without complaint.',
          'On the spirits side, expect a duty premium of around 200 to 300 percent on imported spirits versus retail prices in Sydney, Singapore or London. The price you pay for a bottle of Hendrick\'s, Don Julio or Macallan at a villa event will look high — this is the structural reality of beverage cost on Bali, not a markup by the supplier.',
        ],
      },
      {
        heading: 'Building the beverage plan',
        paragraphs: [
          'A clean approach: start with a sparkling welcome wine, white and red house wines for dinner, three to five signature cocktails for the bar, a basic beer fridge, and a curated spirits backbar. Walk the catering Bali villa suppliers through the guest mix in advance — number of cocktail drinkers, wine drinkers, beer drinkers, non-drinkers — and let them quantify volumes.',
          'Most operators will recommend buying 30 to 40 percent more beverage than the strict per-head calculation. Leftovers can be left at the villa, returned to the caterer for credit on the next booking, or gifted to the staff. Running out of wine or beer mid-dinner is the cheapest mistake to avoid and the easiest one to make.',
        ],
      },
    ],
    faq: [
      { q: 'Can I bring my own wine to a villa catering event?', a: 'Yes, although most operators charge a corkage fee of 200,000 to 500,000 IDR per bottle. Confirm in advance — some restaurants pricing out catering refuse external alcohol entirely.' },
      { q: 'Do villa caterers run alcohol-free events?', a: 'Yes, especially in Ubud where retreat trips often want a strong mocktail and tea programme. Bali caterers handle this routinely.' },
    ],
  },
];

const guideTopics: Topic[] = [
  {
    slug: 'how-to-book-catering-bali-villa',
    hub: 'guide',
    title: 'How to Book Catering for a Bali Villa',
    metaTitle: 'How to Book Catering Bali Villa Guide | Step-by-Step 2025',
    metaDescription: 'Step-by-step catering Bali villa guide to booking the right team. Timelines, deposits, contracts and questions to ask before you pay anything.',
    primaryKeyword: 'catering Bali villa guide',
    image: '/img-villa-uluwatu.jpg',
    intro:
      'Booking catering well is mostly about timing and clarity. This catering Bali villa guide section walks through the steps from first enquiry through to final invoice, and the small details that separate a smooth booking from a stressful one.',
    sections: [
      {
        heading: 'Timeline from first enquiry to event day',
        paragraphs: [
          'Standard timeline for a villa dinner is four to six weeks ahead for the first enquiry, three to four weeks ahead to lock the operator and pay deposit, two weeks ahead to confirm the menu and dietaries, one week ahead to confirm final guest count, and 48 hours ahead to receive the run sheet. Weddings and major events run on a longer scale: six to twelve months for venue and caterer, two months for menu tasting, one month for final headcount.',
          'Last-minute bookings are possible — many catering Bali villa suppliers will fit a dinner inside 48 hours — but you lose negotiating leverage on menu, staffing and pricing. The good operators get booked out two to four weeks in advance during high season, so plan accordingly.',
        ],
      },
      {
        heading: 'Deposits, contracts and payment',
        paragraphs: [
          'Standard deposit terms are 30 to 50 percent at booking, balance two to seven days before the event. Most operators accept bank transfer to a local IDR account; some accept international cards with a surcharge. A small number of premium suppliers now accept crypto payments — fine in practice, document everything carefully.',
          'A contract should specify: date, time, address, menu summary, headcount, staff count, beverage inclusions, deposit and balance amounts, cancellation terms and what is considered force majeure. If a catering Bali villa guide says "book based on a WhatsApp conversation alone", treat it as a warning — the good operators document.',
        ],
      },
      {
        heading: 'Questions to ask before paying',
        paragraphs: [
          'Five questions filter most low-quality operators. First, where is the produce sourced. Second, how many staff are coming and what are their roles. Third, what is the cancellation policy and what triggers force majeure. Fourth, how is dietary information collected and confirmed. Fifth, what happens if the chef is sick or unavailable on the day.',
          'Strong operators answer all five within twenty-four hours and in writing. Weak operators dodge two or three of them. Use this catering Bali villa guide checklist on your shortlist before paying any deposit and most problems sort themselves out.',
        ],
      },
    ],
    faq: [
      { q: 'How much deposit is normal for villa catering in Bali?', a: '30 to 50 percent is standard. Anything higher than 60 percent without a clear refund clause is unusual and worth questioning.' },
      { q: 'Can I get a refund if my trip is cancelled?', a: 'Depends on the cancellation clause and how far out you cancel. Read the contract before you sign. Travel insurance covers some scenarios.' },
    ],
  },
  {
    slug: 'menu-planning-bali-villa-catering',
    hub: 'guide',
    title: 'Menu Planning for Villa Catering',
    metaTitle: 'Menu Planning Catering Bali Villa Guide | Build the Perfect Menu',
    metaDescription: 'Catering Bali villa guide to menu planning. Course structure, dietary considerations, flavour balance and how to brief your chef for the best result.',
    primaryKeyword: 'catering Bali villa guide',
    image: '/img-menu-asian.jpg',
    intro:
      'Most disappointing villa dinners come down to a weak menu brief, not a weak chef. This part of the catering Bali villa guide is about building a menu that fits the group, the setting and the moment — and bringing the chef into that brief early.',
    sections: [
      {
        heading: 'Course structure that works in villas',
        paragraphs: [
          'Three-course menus work for casual dinners up to ten guests: appetiser, main, dessert with shared sides. Four-course menus add a soup, salad or cold starter — useful for tropical settings where guests want lighter early courses. Five to seven course tasting menus work best for formal dinners with a wine pairing, ideally seated and limited to fourteen guests.',
          'Family-style sharing menus are the most popular format for groups above eight. Three to four boards delivered in waves: charcuterie and grazing, fresh salads, grilled mains with sides, dessert platter. This format keeps the meal social, reduces course gaps, and adapts well to the open-air feel of catering Bali villa dinners.',
        ],
      },
      {
        heading: 'Dietary briefing the right way',
        paragraphs: [
          'Collect dietary requirements once, in writing, with as much specificity as you can get. "Vegetarian" can mean strict vegetarian, pesco-vegetarian or eats-everything-but-red-meat. "Allergy" can mean genuine anaphylaxis or strong dislike. Get the level of severity from each guest where possible.',
          'Pass that to the catering Bali villa guide team in a single document, not in fragments across WhatsApp. Most professional caterers will adjust two to three dishes per booking without surcharge. Highly customised individual menus for a third of the table get charged separately as a custom plating fee. Confirm dietary changes one week ahead, not on the day.',
        ],
      },
      {
        heading: 'Flavour and pacing',
        paragraphs: [
          'Bali heat changes how flavour reads at the table. Salt curves up — dishes that taste right in the kitchen can feel under-seasoned outside on a warm evening. Acid and bright herbal notes work harder. Heavy slow-braised dishes work better as one of three or four courses rather than a hero course in their own right. Brief the chef to lean slightly higher on acid, lemon, vinegar and fresh herbs for outdoor service.',
          'Pace courses with the temperature in mind. A long gap between courses outside in 28 degree weather feels longer than the same gap indoors. A strong catering Bali villa guide approach is to brief the chef for tighter pacing — fifteen to twenty minutes between courses — to keep guests engaged and food at the right temperature.',
        ],
      },
    ],
    faq: [
      { q: 'Can the chef do a tasting in advance?', a: 'Yes, most premium operators run tastings for groups above ten or wedding bookings. Expect to pay for the tasting; some credit it back against the final invoice.' },
      { q: 'How adventurous should the menu be?', a: 'Match it to the guest mix. For groups with mixed tastes, build the menu around recognisable proteins and add adventure in the garnishes and side dishes.' },
    ],
  },
  {
    slug: 'budget-guide-catering-bali-villa',
    hub: 'guide',
    title: 'Budget Guide for Villa Catering in Bali',
    metaTitle: 'Budget Catering Bali Villa Guide | Cost Breakdown 2025',
    metaDescription: 'Catering Bali villa guide to budgeting. Per-person ranges, hidden costs, what drives the price up and how to right-size the spend for your event.',
    primaryKeyword: 'catering Bali villa guide',
    image: '/img-villa-ubud.jpg',
    intro:
      'Catering pricing on Bali looks opaque from the outside but is reasonably predictable once you know the levers. This catering Bali villa guide section breaks down where the money actually goes and how to right-size the spend for the event you want.',
    sections: [
      {
        heading: 'Per-person price ranges by tier',
        paragraphs: [
          'Casual sharing menus: 400,000 to 700,000 IDR per person, single chef plus one helper, beer and house wine. Standard dinners: 700,000 to 1,200,000 IDR per person, full chef and waitstaff team, basic bar service. Premium dinners: 1,500,000 to 2,500,000 IDR per person, multi-course plated menus, full bar with cocktails, table styling. Fine dining: 2,500,000 to 6,000,000 IDR per person, tasting menus with wine pairing and a full brigade.',
          'These ranges are for the food and basic service. Add 30 to 50 percent for a fully styled wedding evening, 15 to 25 percent for events in Uluwatu or Ubud due to logistics, and 10 to 20 percent for Sundays and public holidays. The catering Bali villa guide rule of thumb is to budget 20 percent above your headline figure for contingencies.',
        ],
      },
      {
        heading: 'Where the money actually goes',
        paragraphs: [
          'For a 1,000,000 IDR per person standard villa dinner, roughly 30 to 35 percent goes to ingredients, 25 to 30 percent to staff costs, 10 to 15 percent to transport and logistics, 5 to 10 percent to equipment and consumables, and 15 to 25 percent to operator margin. Premium tier shifts the mix: ingredient cost climbs to 45 to 55 percent of the total, staff stays around 20 percent, and margin compresses slightly.',
          'Knowing this split helps when you push for negotiation. The cuts that hurt the experience least are styling and consumables. The cuts that hurt the most are staff count and ingredient quality. A strong catering Bali villa guide approach is to protect those two and trim everywhere else first.',
        ],
      },
      {
        heading: 'Hidden costs to watch',
        paragraphs: [
          'Five items often show up after the headline quote. Service charge of 10 percent on some operators\' invoices. Indonesian VAT (PPN) at 11 percent on registered businesses. Travel surcharge of 750,000 to 2,000,000 IDR for Uluwatu and Ubud events. Corkage at 200,000 to 500,000 IDR per bottle for outside alcohol. Overtime past the contracted service window at 150,000 to 300,000 IDR per staff member per hour.',
          'Ask for an all-in quote in writing, with each surcharge listed separately. A clean catering Bali villa guide quote will show the per-person rate, the staffing line, transport, taxes and any extras as discrete items. Bundled "all-in" prices that hide the breakdown make it hard to negotiate and easy for an operator to under-staff while keeping the margin.',
        ],
      },
    ],
    faq: [
      { q: 'Is there a tipping culture for villa catering?', a: 'Yes but lighter than in Western markets. 10 percent on the food bill, in cash to the lead chef, is the established norm.' },
      { q: 'Can I pay in foreign currency?', a: 'Most operators prefer IDR. USD and AUD are sometimes accepted at a slightly worse exchange rate; cards carry surcharges.' },
    ],
  },
  {
    slug: 'dietary-options-catering-bali-villa',
    hub: 'guide',
    title: 'Dietary Options in Villa Catering',
    metaTitle: 'Dietary Options Catering Bali Villa Guide | Vegan, Halal, Allergies',
    metaDescription: 'Catering Bali villa guide to dietary options. Vegetarian, vegan, halal, gluten-free, child-friendly and serious allergies handled across Bali villa caterers.',
    primaryKeyword: 'catering Bali villa guide',
    image: '/img-menu-balinese.jpg',
    intro:
      'Most Bali catering operators are well drilled on dietary requirements — but only if you brief them properly. This catering Bali villa guide section is about how to communicate dietaries clearly and what to expect across the standard categories.',
    sections: [
      {
        heading: 'The common categories and how they work',
        paragraphs: [
          'Vegetarian and vegan are now standard across every catering Bali villa guide tier. Most operators can run a full vegetarian or vegan dinner with no notice penalty. Plant-based menus often shine in Ubud where the supply chain is built around it — expect strong raw, fermented and plant-protein options.',
          'Halal is well-supported by Muslim-owned operators across the island and by mainstream caterers who keep separate halal kitchens. Gluten-free is straightforward; pescatarian and dairy-free are routine. Kosher is more niche and may require a specialty operator booking in advance.',
        ],
      },
      {
        heading: 'Allergies and severity briefing',
        paragraphs: [
          'For serious allergies — peanut, shellfish, tree nut anaphylaxis — brief the catering Bali villa guide team in writing two weeks ahead. The kitchen will set up a separate prep area, use clean utensils and label all serving boards. Strong operators will plate the allergy-aware guest first and pass the plate directly to the front-of-house lead for service.',
          'Provide an EpiPen to the front-of-house lead at the start of service if one is in the group. This is standard hospitality practice and not at all unusual to ask. The team appreciates the heads up because it removes anxiety from the service evening.',
        ],
      },
      {
        heading: 'Kids and mixed-age tables',
        paragraphs: [
          'Children\'s menus are easy. Most catering Bali villa guide operators offer a kids menu — chicken nuggets, pasta, mini burgers — for children eight and under at 200,000 to 400,000 IDR per child. For tween and teen tables, ordering a smaller portion of the adult menu is usually the better call.',
          'For mixed-age weddings and big family events, build a separate kids dining setup with their own buffet, juices and softer-volume service. A dedicated kids server is worth the line item — it lets the adults stay at the table and the kids stay entertained without crossing service paths.',
        ],
      },
    ],
    faq: [
      { q: 'Are vegan menus more expensive than meat menus?', a: 'Usually slightly cheaper or matched, because plant proteins are sourced locally. Premium vegan menus using imported produce can match meat menu pricing.' },
      { q: 'How do I confirm dietary requirements have been understood?', a: 'Ask the caterer for the menu in writing with each guest\'s dietary tagged against their seat or course. Strong operators do this without being asked.' },
    ],
  },
];

export const hubs: Hub[] = [
  {
    slug: 'catering',
    navLabel: 'CATERING',
    title: 'Catering for Bali Villas',
    metaTitle: 'Catering Bali Villa | Private Chefs, Dinners & Weddings',
    metaDescription: 'Complete guide to catering Bali villa stays. Private chefs, villa dinners, weddings and luxury fine dining — what each option covers and what it costs.',
    primaryKeyword: 'catering Bali villa',
    intro:
      'Catering Bali villa stays cover everything from a relaxed private chef dinner for two to a full hundred-guest villa wedding. Each format has its own staffing model, price tier and supplier ecosystem. The four pages below walk through the formats most travellers consider, with sample pricing and what to expect from each.',
    topics: cateringTopics,
  },
  {
    slug: 'services',
    navLabel: 'SERVICES',
    title: 'Catering Services in Bali',
    metaTitle: 'Catering Bali Villa Service | Full-Service, Bar, Waitstaff, Planning',
    metaDescription: 'Catering Bali villa service options — full-service packages, bartender hire, waitstaff and event planning. Compare what each service tier delivers.',
    primaryKeyword: 'catering Bali villa service',
    intro:
      'Catering Bali villa service is the umbrella for everything that surrounds the food: the staff, the bar, the styling, the planner running the timeline. The pages below break down what each service line covers, when you need it, and how the pricing structure typically works on Bali.',
    topics: servicesTopics,
  },
  {
    slug: 'suppliers',
    navLabel: 'SUPPLIERS',
    title: 'Catering Suppliers in Bali',
    metaTitle: 'Catering Bali Villa Suppliers | Vendors, Produce, Seafood & Wine',
    metaDescription: 'The catering Bali villa suppliers behind every great villa dinner — vendors, farms, seafood, wine and beverage importers operating across the island.',
    primaryKeyword: 'catering Bali villa suppliers',
    intro:
      'Catering Bali villa suppliers is the world upstream of the dinner table: the operators, the farms, the seafood landings, the wine importers. The four pages below profile each layer of that supply chain so you know what you are paying for and which vendors actually move the needle.',
    topics: suppliersTopics,
  },
  {
    slug: 'guide',
    navLabel: 'GUIDE',
    title: 'The Bali Villa Catering Guide',
    metaTitle: 'Catering Bali Villa Guide | Booking, Menus, Budget, Dietaries',
    metaDescription: 'The complete catering Bali villa guide. Booking timelines, menu planning, budget breakdown and dietary handling for a flawless villa event.',
    primaryKeyword: 'catering Bali villa guide',
    intro:
      'The catering Bali villa guide is the playbook. Booking timelines, contracts, menu structure, budget breakdown, dietary handling — the operational detail behind a smooth villa dinner. The pages below cover the four areas where most bookings either succeed or come apart.',
    topics: guideTopics,
  },
];

export function findHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}

export function findTopic(hubSlug: string, topicSlug: string): Topic | undefined {
  return findHub(hubSlug)?.topics.find((t) => t.slug === topicSlug);
}
