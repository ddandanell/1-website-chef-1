import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'CATERING', href: '#catering' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SUPPLIERS', href: '#suppliers' },
  { label: 'GUIDE', href: '#guide' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-[1200px] mx-auto page-padding h-[56px] flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase text-black shrink-0">
          BALI CATERING
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="font-body text-[12px] font-medium tracking-[0.06em] uppercase text-black/70 hover:text-black transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] p-2 -mr-2" aria-label="Menu">
          <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-white z-40 p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="font-body text-[18px] font-medium tracking-[0.04em] uppercase text-black/80">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
