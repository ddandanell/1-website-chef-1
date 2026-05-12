export default function WhatWeDoSection() {
  return (
    <section id="catering" className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto page-padding">
        <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
          Types of Catering for Your Bali Villa
        </h2>
        <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-black/60 max-w-[680px] mb-10">
          Whether you are hosting a birthday celebration, corporate dinner, or casual family gathering, there is a catering style that fits your villa event. Here is what is available across Bali.
        </p>

        <div className="space-y-10">
          {/* Private Chef */}
          <div className="border-t border-black/10 pt-8">
            <h3 className="font-display text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-black mb-4">
              Private Chef Dinner
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 max-w-[680px] space-y-3">
                <p>
                  A private chef dinner is the most popular form of villa catering in Bali. A professional chef arrives at your villa with fresh ingredients, prepares a multi-course meal in your kitchen, and serves it directly to you and your guests. This service typically includes grocery shopping, preparation, cooking, plating, service, and full cleanup afterward.
                </p>
                <p>
                  The beauty of hiring a private chef in Bali is the flexibility. You can choose from Indonesian, Western, Mediterranean, Japanese, or fusion menus. Most chefs accommodate dietary restrictions including vegetarian, vegan, gluten-free, and halal with advance notice. Prices for a private chef dinner in Bali generally start around IDR 350,000 per person for a standard menu and can go up to IDR 1,000,000 or more for premium fine dining experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Villa BBQ */}
          <div className="border-t border-black/10 pt-8">
            <h3 className="font-display text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-black mb-4">
              Villa BBQ &amp; Poolside Grilling
            </h3>
            <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 max-w-[680px] space-y-3">
              <p>
                BBQ catering is a fantastic choice for relaxed villa gatherings in Bali. A catering team brings portable grilling equipment to your villa and cooks fresh seafood, premium meats, and vegetarian options poolside or in your garden. This format is social, interactive, and works especially well for groups of 8 to 30 guests.
              </p>
              <p>
                A typical Bali villa BBQ menu includes grilled prawns, fish, chicken satay, beef or lamb cuts, corn on the cob, grilled vegetables, and a selection of Balinese sambals and salads. BBQ catering is generally more affordable than a full private chef dinner, with prices starting from around IDR 250,000 per person. The casual format makes it ideal for family reunions, pool parties, and laid-back group dinners.
              </p>
            </div>
          </div>

          {/* Celebration */}
          <div className="border-t border-black/10 pt-8">
            <h3 className="font-display text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-black mb-4">
              Birthday &amp; Celebration Catering
            </h3>
            <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 max-w-[680px] space-y-3">
              <p>
                Celebrating a birthday, anniversary, or engagement in a Bali villa calls for something special. Many Bali catering companies specialize in celebration events and offer packages that include decorated tables, custom birthday cakes, themed setups, and curated menus designed to impress your guests.
              </p>
              <p>
                Birthday party catering in Bali has grown tremendously, with services now offering everything from elegant seated dinners to cocktail-style receptions with canapes and live cooking stations. The key advantage of hosting your celebration at a villa is the privacy and flexibility. There are no restaurant closing times, no other guests, and you control the entire atmosphere from music to lighting to menu.
              </p>
            </div>
          </div>

          {/* Corporate */}
          <div className="border-t border-black/10 pt-8">
            <h3 className="font-display text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-black mb-4">
              Corporate Event &amp; Group Catering
            </h3>
            <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 max-w-[680px] space-y-3">
              <p>
                Bali has become one of Asia&apos;s top destinations for corporate retreats and team-building events. Corporate catering services on the island are well-equipped to handle groups from 10 to over 100 guests, offering everything from formal business dinners to casual poolside lunches and breakfast buffets.
              </p>
              <p>
                For wellness retreats and yoga groups, many Ubud-based catering companies offer health-focused menus featuring organic ingredients, vegan and raw options, and nutritionally balanced meals. Canggu and Seminyak are particularly popular for corporate groups due to the abundance of large villas with dedicated dining and meeting spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
