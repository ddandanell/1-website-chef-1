import { Link } from 'react-router';

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Villa Catering Bali — home"
      className="group inline-flex items-center gap-2.5 shrink-0"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-black"
      >
        {/* Villa silhouette: pitched roof + columns */}
        <path
          d="M4 14L16 4L28 14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
        <path
          d="M7 14V28"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
        <path
          d="M25 14V28"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
        <path
          d="M11 14V28"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
        <path
          d="M21 14V28"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
        {/* Base line */}
        <path d="M3 28H29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
        {/* Plate/leaf accent */}
        <circle cx="16" cy="21" r="2.2" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] md:text-[16px] tracking-[-0.005em] text-black">
          Villa Catering Bali
        </span>
        <span className="font-body text-[9px] tracking-[0.18em] uppercase text-black/50 mt-0.5">
          Independent Guide · 2025
        </span>
      </span>
    </Link>
  );
}
