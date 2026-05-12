import { Link, useParams } from 'react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { findHub } from '@/content/topics';
import { useSEO } from '@/lib/seo';

export default function HubPage() {
  const { hubSlug } = useParams<{ hubSlug: string }>();
  const hub = hubSlug ? findHub(hubSlug) : undefined;

  const canonicalUrl = hub
    ? `https://1-website-chef-1.vercel.app/${hub.slug}`
    : undefined;

  const jsonLd = hub
    ? {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: hub.title,
        description: hub.metaDescription,
        url: canonicalUrl,
        inLanguage: 'en',
        hasPart: hub.topics.map((t) => ({
          '@type': 'Article',
          name: t.title,
          url: `https://1-website-chef-1.vercel.app/${hub.slug}/${t.slug}`,
          description: t.metaDescription,
        })),
      }
    : undefined;

  useSEO({
    title: hub?.metaTitle ?? 'Not found',
    description: hub?.metaDescription ?? '',
    canonical: canonicalUrl,
    jsonLd,
  });

  if (!hub) {
    return (
      <div className="relative">
        <Navigation />
        <main className="pt-[120px] pb-24 max-w-[1200px] mx-auto page-padding">
          <h1 className="font-display text-[48px] leading-[1.05]">Page not found</h1>
          <p className="mt-4 text-black/70">
            <Link to="/" className="underline">Return home</Link>
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-[112px]">
        {/* Header */}
        <header className="max-w-[1200px] mx-auto page-padding py-12 md:py-16 border-b border-black/10">
          <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50 mb-4">
            BALI PRIVATE CATERING &middot; {hub.navLabel}
          </p>
          <h1 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-black mb-6 max-w-[820px]">
            {hub.title}
          </h1>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.65] text-black/70 max-w-[680px]">
            {hub.intro}
          </p>
        </header>

        {/* Topic grid */}
        <section className="max-w-[1200px] mx-auto page-padding py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {hub.topics.map((topic, idx) => (
              <Link
                key={topic.slug}
                to={`/${hub.slug}/${topic.slug}`}
                className="group block"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-body text-[11px] tracking-[0.1em] uppercase text-black/40">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-black/15 group-hover:bg-black/40 transition-colors" />
                </div>
                <h2 className="font-display text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.01em] text-black mb-3 group-hover:underline underline-offset-[6px] decoration-[1px]">
                  {topic.title}
                </h2>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.6] text-black/70 max-w-[540px]">
                  {topic.intro}
                </p>
                <span className="inline-block mt-4 font-body text-[11px] tracking-[0.1em] uppercase text-black/60 group-hover:text-black transition-colors">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-linen">
          <div className="max-w-[1200px] mx-auto page-padding py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-[600px]">
                <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50 mb-3">
                  Planning a villa event
                </p>
                <h3 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.01em] text-black">
                  Tell us what you have in mind and we'll match you with the right team.
                </h3>
              </div>
              <Link
                to="/"
                className="font-body text-[12px] tracking-[0.06em] uppercase bg-black text-white px-5 py-3 hover:bg-black/80 transition-colors self-start md:self-auto"
              >
                Start an enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
