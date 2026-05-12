export default function VillaAreasSection() {
  const areas = [
    {
      name: 'Canggu',
      tagline: 'Most catering options, best value',
      desc: 'Canggu has the highest concentration of villa catering services on the island. From budget BBQ catering to fine dining private chefs, you will find the widest selection here.',
      image: '/img-villa-canggu.jpg',
      alt: 'Bali villa pool overlooking rice fields at sunset in Canggu',
    },
    {
      name: 'Seminyak',
      tagline: 'Sophisticated, perfect for celebrations',
      desc: 'Upscale villas with elegant entertaining spaces. Premium catering companies regularly service this area with fine dining menus designed for special occasions.',
      image: '/img-villa-seminyak.jpg',
      alt: 'Luxury Bali villa courtyard with pool and tropical garden in Seminyak',
    },
    {
      name: 'Uluwatu',
      tagline: 'Dramatic clifftop settings',
      desc: 'Home to Bali&apos;s most dramatic villas perched on limestone cliffs. Catering here costs more due to travel distance, but the setting is unmatched anywhere on the island.',
      image: '/img-villa-uluwatu.jpg',
      alt: 'Clifftop infinity pool overlooking the Indian Ocean at sunset in Uluwatu',
    },
    {
      name: 'Ubud',
      tagline: 'Wellness-focused, organic cuisine',
      desc: 'Jungle retreats surrounded by rice terraces. The catering scene here specializes in plant-based, organic, and health-conscious menus for wellness-minded travelers.',
      image: '/img-villa-ubud.jpg',
      alt: 'Traditional thatched roof villa in Ubud surrounded by rice terraces and tropical jungle',
    },
  ];

  return (
    <section id="villas" className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto page-padding">
        <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
          Best Areas for Villa Catering in Bali
        </h2>
        <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-black/60 max-w-[680px] mb-10">
          Where you stay affects your catering options, pricing, and travel fees. Here is what to expect in each major villa area.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {areas.map((area) => (
            <div key={area.name} className="bg-linen">
              <img
                src={area.image}
                alt={area.alt}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display text-[20px] md:text-[24px] leading-[1.2] text-black mb-1">
                  {area.name}
                </h3>
                <p className="font-body text-[12px] tracking-[0.04em] uppercase text-black/45 mb-3">
                  {area.tagline}
                </p>
                <p className="font-body text-[14px] leading-[1.65] text-black/65">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[720px]">
          <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] text-black mb-4">
            What to Consider When Choosing Your Villa Location
          </h3>
          <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 space-y-3">
            <p>
              Canggu is the best all-around choice for villa catering in Bali. The sheer number of catering companies based in and around Canggu means you get competitive pricing, wide availability, and the most menu options. Whether you want a casual BBQ for ten friends or a ten-course fine dining experience, Canggu has multiple providers who can deliver. Travel fees are minimal since most catering teams are nearby.
            </p>
            <p>
              Seminyak is ideal if your priority is upscale ambiance. The villas here tend to be larger and more luxurious, with beautiful outdoor entertaining areas that naturally elevate any catered event. If you are celebrating a wedding anniversary, engagement, or important milestone birthday, Seminyak&apos;s polished atmosphere combined with premium catering creates a truly special experience.
            </p>
            <p>
              Uluwatu offers the most spectacular setting for villa dining in Bali, but it comes with logistical considerations. The area is 45-60 minutes from central catering hubs, which means higher travel fees and the need for advance booking, especially during peak season. Many high-end catering companies now maintain dedicated Uluwatu teams to meet growing demand from the area&apos;s luxury villas.
            </p>
            <p>
              Ubud is the go-to for health-conscious and wellness-oriented groups. The area&apos;s organic farms supply exceptional fresh produce, and many chefs here specialize in plant-based, raw, and nutritionally optimized menus. The cooler mountain climate makes outdoor evening dining particularly pleasant compared to the coastal heat of Canggu or Seminyak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
