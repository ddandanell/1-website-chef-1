export default function HeroSection() {
  return (
    <section id="hero" className="bg-white pt-[56px]">
      <div className="max-w-[1200px] mx-auto page-padding py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Text */}
          <div className="w-full md:w-[55%]">
            <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50 mb-4">
              BALI PRIVATE CATERING GUIDE &middot; 2025
            </p>
            <h1 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-black mb-6">
              Private Catering<br />in Your Bali Villa
            </h1>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.65] text-black/70 max-w-[480px] mb-8">
              Everything you need to know about hiring private chefs and catering services for villas in Bali. From birthday parties to corporate dinners, we cover the best options across Canggu, Seminyak, Uluwatu and Ubud.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#catering" className="font-body text-[12px] tracking-[0.06em] uppercase bg-black text-white px-5 py-3 hover:bg-black/80 transition-colors">
                Explore Catering
              </a>
              <a href="#guide" className="font-body text-[12px] tracking-[0.06em] uppercase border border-black/20 text-black px-5 py-3 hover:border-black transition-colors">
                Read the Guide
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-[45%]">
            <img
              src="/img-hero-villa.jpg"
              alt="Private villa dining table setup in Bali for catered dinner event"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
