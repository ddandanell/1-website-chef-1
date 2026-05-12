interface EditorPickProps {
  headline: string;
  body: string;
  href: string;
  cta?: string;
  /** Visual treatment — soft (linen background) or bordered (light card). */
  variant?: 'soft' | 'bordered';
}

/**
 * Inline editorial recommendation callout. Designed to drop into the middle
 * of long-form content where a specific operator is the natural next step
 * for the reader. The link is a normal follow link — this is a transparent
 * editorial pick, not a paid placement.
 */
export default function EditorPick({
  headline,
  body,
  href,
  cta = 'Visit the booking platform',
  variant = 'soft',
}: EditorPickProps) {
  const bg = variant === 'soft' ? 'bg-linen' : 'bg-white border border-black/15';
  return (
    <aside
      className={`${bg} p-6 md:p-8 my-8`}
      aria-label="Editor's pick"
    >
      <p className="font-body text-[10px] tracking-[0.18em] uppercase text-black/55 mb-3">
        Editor's pick
      </p>
      <p className="font-display text-[19px] md:text-[22px] leading-[1.3] tracking-[-0.005em] text-black mb-3">
        {headline}
      </p>
      <p className="font-body text-[15px] leading-[1.65] text-black/75 mb-5 max-w-[600px]">
        {body}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener external"
        className="inline-flex items-center font-body text-[12px] tracking-[0.08em] uppercase bg-black text-white px-5 py-3 hover:bg-black/85 transition-colors"
      >
        {cta}
        <span aria-hidden="true" className="ml-2">&rarr;</span>
      </a>
    </aside>
  );
}
