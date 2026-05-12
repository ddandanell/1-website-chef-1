import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-black py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto page-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-body text-[12px] tracking-[0.08em] uppercase text-white mb-3">
              VILLA CATERING BALI
            </p>
            <p className="font-body text-[13px] leading-[1.6] text-white/55 max-w-[280px]">
              An independent guide to catering Bali villa stays — private chefs, villa dinners, suppliers and event planning across the island.
            </p>
          </div>

          <div>
            <p className="font-body text-[11px] tracking-[0.08em] uppercase text-white/40 mb-3">EXPLORE</p>
            <nav className="flex flex-col gap-2">
              <Link to="/catering" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Catering</Link>
              <Link to="/services" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Services</Link>
              <Link to="/suppliers" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Suppliers</Link>
              <Link to="/guide" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Guide</Link>
            </nav>
          </div>

          <div>
            <p className="font-body text-[11px] tracking-[0.08em] uppercase text-white/40 mb-3">EDITOR'S PICK</p>
            <p className="font-body text-[13px] leading-[1.6] text-white/55 mb-3">
              For booking the actual chef, we keep pointing readers to <a href="https://mychef.id/" target="_blank" rel="noopener external" className="text-white/85 underline underline-offset-2 hover:text-white">mychef.id</a> — vetted operators, transparent pricing, single checkout.
            </p>
            <p className="font-body text-[13px] text-white/60">
              hello@villa-catering-bali.online
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="font-body text-[11px] leading-[1.5] text-white/35">
            &copy; 2026 Villa Catering Bali &middot; villa-catering-bali.online. Independent guide to catering Bali villa stays. This site may contain affiliate links and may earn a commission on bookings made through our recommendations.
          </p>
        </div>
      </div>
    </footer>
  );
}
