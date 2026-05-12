export default function TestimonialsSection() {
  return (
    <section className="bg-linen py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto page-padding">
        <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
          What Travelers Say About Villa Catering in Bali
        </h2>
        <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-black/60 max-w-[680px] mb-10">
          Real experiences from visitors who hired private catering services during their Bali villa stays.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6">
            <p className="font-body text-[14px] leading-[1.7] text-black/70 mb-5 italic">
              &ldquo;The best dinner we had in Bali, and it was right in our own villa. The private chef brought everything, cooked an incredible Balinese feast, and cleaned up after. We did not have to do anything.&rdquo;
            </p>
            <div>
              <p className="font-body text-[14px] font-medium text-black">Sarah &amp; James</p>
              <p className="font-body text-[12px] text-black/45">Canggu Villa &middot; Anniversary Dinner</p>
            </div>
          </div>

          <div className="bg-white p-6">
            <p className="font-body text-[14px] leading-[1.7] text-black/70 mb-5 italic">
              &ldquo;We hired a BBQ team for my husband&apos;s 40th birthday at our Seminyak villa. Fifteen guests, amazing grilled seafood, perfect setup. Half our guests asked for the catering company&apos;s details before dessert.&rdquo;
            </p>
            <div>
              <p className="font-body text-[14px] font-medium text-black">Emily Richardson</p>
              <p className="font-body text-[12px] text-black/45">Seminyak Villa &middot; Birthday Party</p>
            </div>
          </div>

          <div className="bg-white p-6">
            <p className="font-body text-[14px] leading-[1.7] text-black/70 mb-5 italic">
              &ldquo;I have celiac disease and was nervous about eating in Bali. The private chef we hired prepared an entirely gluten-free menu. Honestly the best food I ate on the entire trip, and I felt completely safe.&rdquo;
            </p>
            <div>
              <p className="font-body text-[14px] font-medium text-black">Marcus Chen</p>
              <p className="font-body text-[12px] text-black/45">Uluwatu Villa &middot; Private Chef Dinner</p>
            </div>
          </div>
        </div>

        <div className="max-w-[720px]">
          <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] text-black mb-4">
            Common Themes from Villa Catering Reviews
          </h3>
          <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 space-y-3">
            <p>
              Across hundreds of reviews and feedback from travelers, three themes consistently emerge when people talk about their villa catering experiences in Bali: food quality, convenience, and value. The food quality from reputable catering companies rivals or exceeds what you would get at many Bali restaurants, particularly for cuisines like Balinese, Indonesian, and Mediterranean where local ingredient quality is exceptional.
            </p>
            <p>
              The convenience factor cannot be overstated. Travelers consistently mention how much they appreciated not having to deal with restaurant reservations, traffic, or splitting large groups across multiple tables. With villa catering, the entire experience happens on your schedule in your own private space. Families with young children, in particular, mention this as a major advantage.
            </p>
            <p>
              The final recurring theme is communication. Guests who had the best experiences were those who communicated their expectations, dietary needs, and preferences clearly during the booking process. The best Bali catering companies are responsive and detail-oriented, but they need your input to deliver a truly personalized dining experience. Do not assume anything. Spell out exactly what you want, and you will be rewarded with a meal that exceeds your expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
