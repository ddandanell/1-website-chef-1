export default function Footer() {
  return (
    <footer className="bg-black py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto page-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-body text-[12px] tracking-[0.08em] uppercase text-white mb-3">
              BALI PRIVATE CATERING
            </p>
            <p className="font-body text-[13px] leading-[1.6] text-white/55 max-w-[280px]">
              An independent guide to private chef and villa catering services in Bali. Information and recommendations only.
            </p>
          </div>

          <div>
            <p className="font-body text-[11px] tracking-[0.08em] uppercase text-white/40 mb-3">GUIDE</p>
            <nav className="flex flex-col gap-2">
              <a href="#catering" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Types of Catering</a>
              <a href="#services" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">How It Works</a>
              <a href="#suppliers" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Menu Options</a>
              <a href="#villas" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Villa Areas</a>
              <a href="#guide" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Why Villa Catering</a>
            </nav>
          </div>

          <div>
            <p className="font-body text-[11px] tracking-[0.08em] uppercase text-white/40 mb-3">ABOUT</p>
            <p className="font-body text-[13px] leading-[1.6] text-white/55 mb-3">
              Have a Bali catering service you would like us to review? Or questions about villa catering? Get in touch.
            </p>
            <p className="font-body text-[13px] text-white/60">
              hello@baliprivatecatering.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="font-body text-[11px] leading-[1.5] text-white/35">
            &copy; 2026 Bali Private Catering Guide. This site contains affiliate links. We may earn a commission when you book through our recommendations. All opinions are independent.
          </p>
        </div>
      </div>
    </footer>
  );
}
