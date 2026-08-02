import { Link } from 'react-router';
import { mychefUrl, whatsappUrl } from '@/lib/links';

export default function Footer() {
  return (
    <footer className="bg-black py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto page-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="font-body text-[12px] tracking-[0.08em] uppercase text-white mb-3">
              VILLA CATERING BALI
            </p>
            <p className="font-body text-[13px] leading-[1.6] text-white/55 max-w-[280px]">
              An editorial guide to catering Bali villa stays — private chefs, villa dinners, suppliers and event planning across the island.
            </p>
          </div>

          <div>
            <p className="font-body text-[11px] tracking-[0.08em] uppercase text-white/40 mb-3">EXPLORE</p>
            <nav className="flex flex-col gap-2">
              <Link to="/catering" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Catering</Link>
              <Link to="/services" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Services</Link>
              <Link to="/suppliers" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Suppliers</Link>
              <Link to="/guide" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Guide</Link>
              <Link to="/resources" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Resources</Link>
              <Link to="/areas/canggu-villa-catering" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Canggu</Link>
              <Link to="/areas/seminyak-villa-catering" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">Seminyak</Link>
              <Link to="/about" className="font-body text-[13px] text-white/60 hover:text-white transition-colors w-fit">About this guide</Link>
            </nav>
          </div>

          <div>
            <p className="font-body text-[11px] tracking-[0.08em] uppercase text-white/40 mb-3">EDITOR'S PICK</p>
            <p className="font-body text-[13px] leading-[1.6] text-white/55 mb-4">
              When you are ready to book, we recommend{' '}
              <a
                href={mychefUrl('footer', '/private-chef-bali')}
                target="_blank"
                rel="noopener external"
                className="text-white/85 underline underline-offset-2 hover:text-white"
              >
                hiring a private chef in Bali via mychef.id
              </a>
              {' '}
              (
              <a
                href={mychefUrl('footer-pricing', '/pricing')}
                target="_blank"
                rel="noopener external"
                className="text-white/85 underline underline-offset-2 hover:text-white"
              >
                published pricing
              </a>
              ). Vetted team, fixed quotes, full cleanup.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener external"
              className="font-body text-[12px] tracking-[0.06em] uppercase border border-white/30 text-white/85 hover:bg-white hover:text-black transition-colors px-4 py-2.5 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <p className="font-body text-[11px] tracking-[0.08em] uppercase text-white/40 mb-3">CONTACT</p>
            <p className="font-body text-[13px] leading-[1.6] text-white/55 mb-1">
              hello@villa-catering-bali.online
            </p>
            <p className="font-body text-[12px] leading-[1.6] text-white/40">
              Editorial enquiries, suggestions, corrections — we read everything.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-[11px] leading-[1.7] text-white/45 mb-2 max-w-[820px]">
            <strong className="text-white/65">Published by myCHEF Indonesia</strong> — Bali's longest-running private chef and villa catering service since 2012. This editorial guide aggregates research, pricing and recommendations from across the island; mychef.id is our affiliated booking platform and the operator we recommend when readers ask "who do you actually use".
          </p>
          <p className="font-body text-[11px] leading-[1.5] text-white/35">
            &copy; 2026 Villa Catering Bali &middot; villa-catering-bali.online &middot; Operated by myCHEF Indonesia, Denpasar, Bali.
          </p>
        </div>
      </div>
    </footer>
  );
}
