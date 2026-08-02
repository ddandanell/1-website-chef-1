import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import Logo from './Logo';
import { mychefUrl, whatsappUrl } from '@/lib/links';

const navLinks = [
  { label: 'CATERING', to: '/catering' },
  { label: 'SERVICES', to: '/services' },
  { label: 'SUPPLIERS', to: '/suppliers' },
  { label: 'GUIDE', to: '/guide' },
  { label: 'RESOURCES', to: '/resources' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (to: string) => {
    setMenuOpen(false);
    navigate(to);
  };

  const bookHref = mychefUrl('nav-cta', '/private-chef-bali');
  const waHref = whatsappUrl();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-[1200px] mx-auto page-padding h-[64px] flex items-center justify-between gap-4">
        <Logo onClick={() => setMenuOpen(false)} />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[12px] font-medium tracking-[0.06em] uppercase text-black/70 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener external"
            aria-label="Chat with myCHEF on WhatsApp"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 border border-black/15 text-black/70 hover:border-black hover:text-black transition-colors"
          >
            {/* WhatsApp glyph (simplified, no logo trademark issue) */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 21l2-5a8 8 0 1 1 3 3l-5 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={bookHref}
            target="_blank"
            rel="noopener external"
            className="inline-flex items-center font-body text-[11px] md:text-[12px] tracking-[0.06em] uppercase bg-black text-white px-3.5 md:px-5 py-2.5 hover:bg-black/85 transition-colors whitespace-nowrap"
          >
            Book a chef
            <span aria-hidden="true" className="ml-1.5 md:ml-2">&rarr;</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 ml-1"
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-white z-40 p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className="text-left font-body text-[18px] font-medium tracking-[0.04em] uppercase text-black/80"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-6 mt-2 border-t border-black/10 flex flex-col gap-3">
            <a
              href={bookHref}
              target="_blank"
              rel="noopener external"
              onClick={() => setMenuOpen(false)}
              className="font-body text-[14px] tracking-[0.04em] uppercase bg-black text-white px-5 py-3 text-center"
            >
              Book a chef on mychef.id &rarr;
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener external"
              onClick={() => setMenuOpen(false)}
              className="font-body text-[14px] tracking-[0.04em] uppercase border border-black/30 text-black px-5 py-3 text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
