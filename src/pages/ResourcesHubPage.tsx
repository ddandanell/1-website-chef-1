import { Link } from 'react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import EditorPick from '@/components/EditorPick';
import { resources } from '@/content/resources';
import { hubRecommendations, getRecommendationHref } from '@/content/recommendations';
import { useSEO } from '@/lib/seo';

export default function ResourcesHubPage() {
  const rec = hubRecommendations.resources;
  const canonical = 'https://www.villa-catering-bali.online/resources';

  useSEO({
    title: 'Bali Villa Catering Resources | Price Index, Timelines & Checklists',
    description:
      'Free research tools for Bali villa catering: 2026 price index, wedding F&B timeline, kitchen readiness checklist and dietary matrix.',
    canonical,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Bali Villa Catering Resources',
      url: canonical,
      hasPart: resources.map((r) => ({
        '@type': 'Article',
        name: r.title,
        url: `https://www.villa-catering-bali.online/resources/${r.slug}`,
      })),
    },
  });

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-[120px]">
        <header className="max-w-[1200px] mx-auto page-padding py-12 md:py-16 border-b border-black/10">
          <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50 mb-4">
            RESEARCH TOOLS
          </p>
          <h1 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-black mb-6 max-w-[820px]">
            Resources hosts, planners and guests actually reuse
          </h1>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.65] text-black/70 max-w-[680px]">
            Price bands, day-of timelines, kitchen checklists and dietary matrices — built to be cited and shared.
            Editorial only; no paid placements.
          </p>
        </header>

        <section className="max-w-[1200px] mx-auto page-padding py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {resources.map((r, idx) => (
              <article key={r.slug} className="flex flex-col border-b border-black/10 pb-10">
                <span className="font-body text-[11px] tracking-[0.1em] uppercase text-black/40 mb-3">
                  {String(idx + 1).padStart(2, '0')} · Resource
                </span>
                <h2 className="font-display text-[26px] md:text-[32px] leading-[1.1] text-black mb-3">
                  <Link to={`/resources/${r.slug}`} className="hover:underline underline-offset-[6px]">
                    {r.title}
                  </Link>
                </h2>
                <p className="font-body text-[15px] leading-[1.6] text-black/70 mb-5 flex-1">{r.intro}</p>
                <Link
                  to={`/resources/${r.slug}`}
                  className="inline-flex self-start font-body text-[12px] tracking-[0.08em] uppercase bg-black text-white px-5 py-3 hover:bg-black/85"
                >
                  Open resource →
                </Link>
              </article>
            ))}
          </div>

          {rec && (
            <div className="mt-12 md:mt-16 max-w-[820px] mx-auto">
              <EditorPick
                headline={rec.headline}
                body={rec.body}
                href={getRecommendationHref(rec, 'resources-hub')}
                cta={rec.cta}
                variant="bordered"
              />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
