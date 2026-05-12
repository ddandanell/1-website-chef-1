export interface FaqCategory {
  title: string;
  items: { q: string; a: string }[];
}

// FAQs grouped by search-intent category. Each Q is a real long-tail query
// pattern people use when researching catering Bali villa options. Content
// optimised for AI Overviews / featured snippet shape (40-60 word answers,
// concrete numbers, direct opening sentence).
export const homeFaqCategories: FaqCategory[] = [
  {
    title: 'Booking & process',
    items: [
      {
        q: 'How do I book a private chef for my villa in Bali?',
        a: 'Book a private chef for your Bali villa by contacting two or three catering operators four to six weeks ahead, sharing your date, guest count, dietary needs and villa address. Pay a 30 to 50 percent deposit to lock the date, confirm the menu two weeks before and the final headcount one week before.',
      },
      {
        q: 'How far in advance should I book catering for a Bali villa?',
        a: 'Book standard villa dinner catering three to four weeks in advance. Book six to twelve months ahead for weddings and any event above twenty guests. During peak season (July, August, December) add an extra two to four weeks to all timelines.',
      },
      {
        q: 'Do I need to pay a deposit when booking villa catering in Bali?',
        a: 'Yes. Standard deposits are 30 to 50 percent at booking with the balance due 2 to 7 days before the event. Premium operators and wedding caterers may require 50 percent up front. Always get a written cancellation policy before paying anything.',
      },
      {
        q: 'Can I cancel or reschedule my Bali villa catering booking?',
        a: 'Most operators offer free cancellation outside four weeks, 25 percent fee inside four weeks, 50 percent inside two weeks and 100 percent inside 72 hours. Rescheduling is usually free if the new date is within sixty days of the original.',
      },
    ],
  },
  {
    title: 'Pricing & what to budget',
    items: [
      {
        q: 'How much does a private chef cost in Bali?',
        a: 'Private chef cost in Bali ranges from 350,000 IDR per person for a three-course casual dinner to 1,800,000 IDR per person for a tasting menu with imported produce. Fine dining with sommelier-paired wine reaches 2,500,000 to 6,000,000 IDR per person.',
      },
      {
        q: 'What does villa BBQ catering cost in Bali?',
        a: 'Villa BBQ catering in Bali starts around 250,000 IDR per person for a casual grill with local seafood and meats. Premium BBQ packages with wagyu, lobster, full bar service and dedicated grill chef reach 1,200,000 IDR per person.',
      },
      {
        q: 'Are gratuities expected for villa catering staff in Bali?',
        a: 'Yes but lighter than in Western markets. A 10 percent gratuity on the food bill in cash to the lead chef at the end of the night is the established norm. Service charges and gratuity are rarely auto-added to the invoice.',
      },
      {
        q: 'Why is villa catering in Bali sometimes more expensive than restaurants?',
        a: 'Villa catering includes the chef brigade, waitstaff, transport, equipment, mise-en-place and full cleanup — costs a restaurant absorbs across many guests in one location. Per-person rates run 30 to 60 percent higher than the same restaurant menu but deliver a private setting and customised service.',
      },
    ],
  },
  {
    title: 'Menus & dietary requirements',
    items: [
      {
        q: 'What cuisines are available for villa catering in Bali?',
        a: 'Bali catering operators cover modern Balinese, Indonesian, Mediterranean, Italian, French bistro, Japanese omakase, Korean, Mexican, modern Australian, vegan plant-forward and raw food. Most teams build menus around three regional styles plus a chef-signature option.',
      },
      {
        q: 'Can villa caterers in Bali handle vegan, halal or gluten-free menus?',
        a: 'Yes. Vegan, vegetarian, halal, kosher-friendly, gluten-free, dairy-free and pescatarian are routine across all tiers. Flag requirements in writing two weeks ahead. Most operators adjust two to three dishes per booking without surcharge.',
      },
      {
        q: 'How are serious food allergies handled at Bali villa catering?',
        a: 'For peanut, shellfish or tree nut anaphylaxis, brief the catering team in writing two weeks before. The kitchen sets up a separate prep zone, uses clean utensils and labels serving boards. Provide an EpiPen to the front-of-house lead at service start.',
      },
      {
        q: 'Can the chef do a tasting before the event?',
        a: 'Yes, for groups above ten guests and for wedding bookings. Tastings are arranged at the chef\'s home restaurant or in your villa at full cost. About half of premium operators credit the tasting against the booking; half charge it separately.',
      },
    ],
  },
  {
    title: 'Service formats & staffing',
    items: [
      {
        q: 'What is the difference between a private chef and a catering service?',
        a: 'A private chef cooks, plates and serves in real time from your villa kitchen — best for quality and theatre. A catering service delivers pre-prepared trays for self-service — best for volume. Bali operators offer both formats; many top teams hybrid the two.',
      },
      {
        q: 'How many staff come with villa catering in Bali?',
        a: 'Standard staffing is one chef plus one helper for groups up to eight, one chef plus two staff for ten to fifteen, and a brigade of four to six for twenty plus guests. Premium villa dinners add a dedicated front-of-house lead and bartender.',
      },
      {
        q: 'Can I hire just a bartender for my Bali villa event?',
        a: 'Yes. Standalone bartender hire runs 1,500,000 to 2,500,000 IDR for a four-hour service. The bartender brings the mixology rig and builds four to six signature cocktails. You provide alcohol or buy through them at retail plus surcharge.',
      },
      {
        q: 'Do Bali villa catering teams clean up after the event?',
        a: 'Yes, full kitchen and serving-area cleanup is included in 95 percent of catering Bali villa packages. Expect the team to leave the kitchen cleaner than they found it. Cleanup usually finishes 30 to 60 minutes after the last guest stands up.',
      },
    ],
  },
  {
    title: 'Villa areas & logistics',
    items: [
      {
        q: 'Which areas in Bali have the most catering options?',
        a: 'Canggu and Seminyak have the densest cluster of catering Bali villa operators with the most pricing competition. Uluwatu is strong for cliff-villa weddings. Ubud is dominated by plant-based and wellness-aligned caterers. Sanur and Nusa Dua have fewer operators but solid mid-tier options.',
      },
      {
        q: 'Is there a travel surcharge for catering outside Canggu or Seminyak?',
        a: 'Yes. Expect 750,000 to 2,000,000 IDR travel surcharge for events in Uluwatu, Ubud, Nusa Dua, Sanur, Bingin or Amed. Multi-day bookings often waive the second-day surcharge.',
      },
      {
        q: 'Will the catering team work with my villa staff?',
        a: 'Yes. Catering teams brief the villa manager or housekeeper on access, timings and house rules on arrival. Villa staff handle the property; the catering team handles the kitchen and service. A coordinator is recommended above fifteen guests.',
      },
      {
        q: 'Do villa caterers in Bali bring their own equipment?',
        a: 'Caterers bring knives, fine tools, specialty equipment, plating chinaware and any items needed for the specific menu. Your villa kitchen needs a working oven, gas hob, fridge space and basic cookware — standard in most rental villas above the budget tier.',
      },
    ],
  },
  {
    title: 'Special occasions',
    items: [
      {
        q: 'Can I book wedding catering for a Bali villa?',
        a: 'Yes. Wedding catering Bali villa packages run from 1,200,000 IDR per person to 4,500,000 IDR per person and cover ceremony canapes, cocktail hour, plated dinner and late-night snack service. Book the caterer first, then the florist and stylist around them.',
      },
      {
        q: 'Is birthday party catering at a Bali villa worth it?',
        a: 'Yes — birthday catering at a Bali villa runs 700,000 to 1,500,000 IDR per person and includes private dining, custom cake, optional themed setup and full service. For groups above ten, the per-person cost typically beats a comparable Bali restaurant.',
      },
      {
        q: 'Can I book catering for a corporate retreat in Bali?',
        a: 'Yes. Corporate retreat catering in Bali covers breakfast buffets, lunch and dinner across three to seven days for groups of ten to one hundred. Multi-day packages typically run 600,000 to 1,200,000 IDR per person per day and include all meals and snacks.',
      },
      {
        q: 'Can I book a romantic private dinner for two in my Bali villa?',
        a: 'Yes — most premium operators run two-person private chef dinners with no group minimum. Expect 1,200,000 to 2,500,000 IDR per person for a three to five course menu, sometimes including dedicated bartender, table styling and decorative floral.',
      },
    ],
  },
];
