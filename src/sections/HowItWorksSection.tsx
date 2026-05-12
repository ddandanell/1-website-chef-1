export default function HowItWorksSection() {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto page-padding">
        <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
          How to Book Villa Catering in Bali
        </h2>
        <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-black/60 max-w-[680px] mb-10">
          Booking a private catering service for your Bali villa is straightforward. Here is the process from start to finish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linen p-6 md:p-8">
            <span className="font-body text-[12px] tracking-[0.06em] uppercase text-black/40 block mb-3">Step 1</span>
            <h3 className="font-display text-[20px] md:text-[24px] leading-[1.2] text-black mb-3">Choose Your Service</h3>
            <p className="font-body text-[14px] leading-[1.65] text-black/65">
              Decide what type of catering you want. Private chef dinner? BBQ? Celebration setup? Browse catering company websites, read reviews, and compare menus. Reach out to 2-3 companies for quotes before deciding.
            </p>
          </div>

          <div className="bg-linen p-6 md:p-8">
            <span className="font-body text-[12px] tracking-[0.06em] uppercase text-black/40 block mb-3">Step 2</span>
            <h3 className="font-display text-[20px] md:text-[24px] leading-[1.2] text-black mb-3">Confirm Your Booking</h3>
            <p className="font-body text-[14px] leading-[1.65] text-black/65">
              Share your villa address, guest count, date, time, and any dietary needs. Most companies require a deposit to confirm. Ask for all-inclusive pricing so there are no surprises on the day.
            </p>
          </div>

          <div className="bg-linen p-6 md:p-8">
            <span className="font-body text-[12px] tracking-[0.06em] uppercase text-black/40 block mb-3">Step 3</span>
            <h3 className="font-display text-[20px] md:text-[24px] leading-[1.2] text-black mb-3">Enjoy Your Event</h3>
            <p className="font-body text-[14px] leading-[1.65] text-black/65">
              The team arrives 2-3 hours before service with everything needed. They cook, serve, and clean up. You relax and enjoy the evening with your guests in the comfort of your villa.
            </p>
          </div>
        </div>

        <div className="max-w-[720px]">
          <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] text-black mb-4">
            What You Should Know About Pricing
          </h3>
          <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 space-y-3">
            <p>
              Private chef dinner pricing in Bali typically ranges from IDR 350,000 to IDR 800,000 per person for a standard multi-course meal. Premium chefs with international training may charge IDR 1,000,000 or more for elaborate tasting menus. BBQ catering tends to be more budget-friendly, starting from around IDR 250,000 per person.
            </p>
            <p>
              For large groups, many companies offer volume discounts. A corporate lunch for 40 guests will typically cost less per person than an intimate dinner for 6. Always confirm what is included in the quoted price. Reputable Bali catering services include all ingredients, equipment, staff, and cleanup in their pricing.
            </p>
            <p>
              One tip to save money: ask your villa management company for recommendations. Many villas have partnerships with trusted catering providers and can offer preferred rates or priority booking to their guests. This is especially valuable for first-time visitors who may not know which services to trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
