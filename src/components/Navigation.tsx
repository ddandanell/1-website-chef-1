import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

const navLinks = [
  { label: 'CATERING', to: '/catering' },
  { label: 'SERVICES', to: '/services' },
  { label: 'SUPPLIERS', to: '/suppliers' },
  { label: 'GUIDE', to: '/guide' },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-[1200px] mx-auto page-padding h-[56px] flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase text-black shrink-0"
        >
          VILLA CATERING BALI
        </Link>

        {/* Desktop */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-white z-40 p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className="text-left font-body text-[18px] font-medium tracking-[0.04em] uppercase text-black/80"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
