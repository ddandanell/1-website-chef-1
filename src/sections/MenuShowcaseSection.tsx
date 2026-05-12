export default function MenuShowcaseSection() {
  const cuisines = [
    {
      title: 'Balinese Feast',
      desc: 'Traditional lawar, bebek betutu, sate lilit on lemongrass sticks, steamed rice on banana leaves, and house-made sambal. Family-style sharing perfect for groups wanting an authentic local experience.',
      image: '/img-menu-balinese.jpg',
      alt: 'Traditional Balinese feast spread with sate lilit, lawar, and rice on banana leaves',
    },
    {
      title: 'Mediterranean Table',
      desc: 'Grilled seafood, hummus and mezze spreads, wood-fired flatbreads, olives, and fresh salads. Light, healthy, and ideal for poolside lunches in Bali tropical climate.',
      image: '/img-menu-mediterranean.jpg',
      alt: 'Mediterranean table spread with grilled prawns, hummus in clay bowls, and flatbread',
    },
    {
      title: 'Asian Fusion',
      desc: 'Japanese sashimi, Thai curries, Indonesian small plates. Creative combinations that blend the best of Asian culinary traditions into a cohesive villa dining experience.',
      image: '/img-menu-asian.jpg',
      alt: 'Beautifully plated Japanese-Balinese fusion sashimi arrangement on ceramic plate',
    },
    {
      title: 'Western Grill',
      desc: 'Prime beef cuts, fresh garden salads, handmade pasta. A reliable choice for groups with varied tastes or anyone craving familiar flavors done exceptionally well.',
      image: '/img-menu-western.jpg',
      alt: 'Chef grilling steak over open flames at a Bali villa poolside at golden hour',
    },
  ];

  return (
    <section id="suppliers" className="bg-linen py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto page-padding">
        <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
          Popular Villa Catering Menus in Bali
        </h2>
        <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-black/60 max-w-[680px] mb-10">
          One of the best parts of hiring a private chef in Bali is the incredible range of cuisines available. Here are the most popular menu styles for villa dining across the island.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {cuisines.map((item) => (
            <div key={item.title} className="bg-white">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display text-[20px] md:text-[24px] leading-[1.2] text-black mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] leading-[1.65] text-black/65">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[720px]">
          <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] text-black mb-4">
            Choosing the Right Menu for Your Group
          </h3>
          <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 space-y-3">
            <p>
              When selecting a menu for villa catering in Bali, think about your group&apos;s preferences and the occasion. A Balinese feast is perfect for first-time visitors who want an authentic cultural dining experience. The family-style sharing format creates a warm, communal atmosphere that works beautifully for groups celebrating together. Dishes like lawar, bebek betutu, and sate lilit offer flavors you simply cannot get as authentically anywhere outside Indonesia.
            </p>
            <p>
              Mediterranean menus have surged in popularity for Bali villa dining, especially for daytime events and poolside lunches. The fresh, light flavors complement the tropical climate perfectly, and the sharing-style format of mezze spreads encourages a relaxed social atmosphere. Grilled seafood is a standout in this category, as Bali&apos;s coastal location means incredibly fresh fish and prawns are readily available.
            </p>
            <p>
              For dietary restrictions, most reputable Bali catering services accommodate vegetarian, vegan, gluten-free, and halal requirements with advance notice. Ubud-based caterers tend to be particularly experienced with health-focused and plant-based menus due to the area&apos;s wellness culture. Always communicate allergies clearly during the booking process so the chef can plan accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
