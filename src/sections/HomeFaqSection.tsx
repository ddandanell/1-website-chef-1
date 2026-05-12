import { useState } from 'react';
import { homeFaqCategories } from '@/content/homeFaq';

export default function HomeFaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>(homeFaqCategories[0].title);
  const [openItem, setOpenItem] = useState<string | null>(homeFaqCategories[0].items[0].q);

  const active = homeFaqCategories.find((c) => c.title === activeCategory) ?? homeFaqCategories[0];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-linen border-t border-b border-black/5"
    >
      <div className="max-w-[1200px] mx-auto page-padding py-16 md:py-24">
        <header className="mb-10 md:mb-14 max-w-[760px]">
          <p className="font-body text-[11px] tracking-[0.12em] uppercase text-black/50 mb-3">
            Frequently asked &middot; Catering Bali villa
          </p>
          <h2
            id="faq-heading"
            className="font-display text-[34px] sm:text-[42px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-black mb-5"
          >
            Everything people ask before booking a villa caterer in Bali
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.65] text-black/70">
            Twenty-four real questions we hear from travellers planning private dining in their Bali villa — grouped by topic, answered with concrete pricing in IDR, timelines, and the practical detail you actually need before you pay a deposit.
          </p>
        </header>

        {/* Category tabs */}
        <nav
          className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12 -mx-1"
          aria-label="FAQ topics"
        >
          {homeFaqCategories.map((cat) => {
            const isActive = activeCategory === cat.title;
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.title);
                  setOpenItem(cat.items[0].q);
                }}
                className={`font-body text-[12px] md:text-[13px] tracking-[0.02em] px-4 py-2.5 border transition-colors ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'border-black/20 text-black/70 hover:border-black/60 hover:text-black'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </nav>

        {/* Accordion */}
        <div className="grid md:grid-cols-[280px_1fr] gap-x-12 gap-y-8">
          <aside className="hidden md:block">
            <p className="font-body text-[11px] tracking-[0.12em] uppercase text-black/40 mb-3">
              In this section
            </p>
            <ul className="space-y-1.5 max-w-[260px]">
              {active.items.map((item) => (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenItem(item.q)}
                    className={`text-left font-body text-[14px] leading-[1.45] transition-colors ${
                      openItem === item.q ? 'text-black' : 'text-black/55 hover:text-black/80'
                    }`}
                  >
                    {item.q}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            {active.items.map((item) => {
              const isOpen = openItem === item.q;
              return (
                <details
                  key={item.q}
                  open={isOpen}
                  onToggle={(e) => {
                    if ((e.currentTarget as HTMLDetailsElement).open) setOpenItem(item.q);
                  }}
                  className="border-t border-black/15 py-5 md:py-6 group"
                >
                  <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                    <h3 className="font-display text-[19px] md:text-[22px] leading-[1.25] tracking-[-0.005em] text-black flex-1">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 font-body text-[20px] leading-none mt-1 transition-transform ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </summary>
                  <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-black/75 mt-4 md:mt-5 max-w-[680px]">
                    {item.a}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
