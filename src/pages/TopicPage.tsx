import { Link, useParams } from 'react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { findHub, findTopic } from '@/content/topics';
import { useSEO } from '@/lib/seo';

export default function TopicPage() {
  const { hubSlug, topicSlug } = useParams<{ hubSlug: string; topicSlug: string }>();
  const hub = hubSlug ? findHub(hubSlug) : undefined;
  const topic = hubSlug && topicSlug ? findTopic(hubSlug, topicSlug) : undefined;

  const canonicalUrl =
    hub && topic
      ? `https://www.villa-catering-bali.online/${hub.slug}/${topic.slug}`
      : undefined;

  const jsonLd =
    hub && topic
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: topic.title,
            description: topic.metaDescription,
            mainEntityOfPage: canonicalUrl,
            inLanguage: 'en',
            keywords: topic.primaryKeyword,
            articleSection: hub.title,
            image: topic.image
              ? `https://www.villa-catering-bali.online${topic.image}`
              : undefined,
            publisher: {
              '@type': 'Organization',
              name: 'Bali Private Catering Guide',
              url: 'https://www.villa-catering-bali.online/',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.villa-catering-bali.online/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: hub.navLabel,
                item: `https://www.villa-catering-bali.online/${hub.slug}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: topic.title,
                item: canonicalUrl,
              },
            ],
          },
          ...(topic.faq && topic.faq.length > 0
            ? [
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: topic.faq.map((f) => ({
                    '@type': 'Question',
                    name: f.q,
                    acceptedAnswer: { '@type': 'Answer', text: f.a },
                  })),
                },
              ]
            : []),
        ]
      : undefined;

  useSEO({
    title: topic?.metaTitle ?? 'Not found',
    description: topic?.metaDescription ?? '',
    canonical: canonicalUrl,
    jsonLd,
  });

  if (!hub || !topic) {
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

  const related = hub.topics.filter((t) => t.slug !== topic.slug).slice(0, 3);

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-[120px]">
        {/* Breadcrumb */}
        <div className="max-w-[820px] mx-auto page-padding pt-6">
          <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${hub.slug}`} className="hover:text-black transition-colors">{hub.navLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-black/70">{topic.title}</span>
          </p>
        </div>

        {/* Title */}
        <header className="max-w-[820px] mx-auto page-padding py-10 md:py-14">
          <h1 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-black mb-6">
            {topic.title}
          </h1>
          <p className="font-body text-[17px] md:text-[19px] leading-[1.65] text-black/75">
            {topic.intro}
          </p>
        </header>

        {/* Optional image */}
        {topic.image && (
          <div className="max-w-[1100px] mx-auto page-padding pb-10 md:pb-14">
            <img
              src={topic.image}
              alt={`${topic.title} reference photo`}
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '16/9' }}
              loading="lazy"
            />
          </div>
        )}

        {/* Article body */}
        <article className="max-w-[760px] mx-auto page-padding pb-14">
          {topic.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-5">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[17px] leading-[1.75] text-black/80 mb-5"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          {topic.faq && topic.faq.length > 0 && (
            <section className="mt-16 pt-10 border-t border-black/10">
              <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-6">
                Frequently asked
              </h2>
              <div className="space-y-6">
                {topic.faq.map((item) => (
                  <div key={item.q}>
                    <p className="font-body text-[15px] font-semibold tracking-[0.01em] text-black mb-2">
                      {item.q}
                    </p>
                    <p className="font-body text-[16px] leading-[1.7] text-black/75">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-linen">
            <div className="max-w-[1200px] mx-auto page-padding py-14 md:py-20">
              <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50 mb-3">
                More on {hub.title}
              </p>
              <h3 className="font-display text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.01em] text-black mb-8">
                Keep reading
              </h3>
              <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                {related.map((r) => (
                  <article key={r.slug} className="group flex flex-col">
                    <Link
                      to={`/${hub.slug}/${r.slug}`}
                      className="block overflow-hidden mb-4"
                      aria-label={r.title}
                    >
                      {r.image ? (
                        <img
                          src={r.image}
                          alt={`${r.title} — ${hub.title}`}
                          width="600"
                          height="375"
                          loading="lazy"
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          style={{ aspectRatio: '8/5' }}
                        />
                      ) : (
                        <div className="w-full bg-white" style={{ aspectRatio: '8/5' }} />
                      )}
                    </Link>
                    <h4 className="font-display text-[20px] md:text-[22px] leading-[1.2] text-black mb-2">
                      <Link
                        to={`/${hub.slug}/${r.slug}`}
                        className="hover:underline underline-offset-[5px] decoration-[1px]"
                      >
                        {r.title}
                      </Link>
                    </h4>
                    <p className="font-body text-[14px] leading-[1.6] text-black/65 line-clamp-3 mb-4">
                      {r.intro}
                    </p>
                    <Link
                      to={`/${hub.slug}/${r.slug}`}
                      className="inline-flex items-center self-start font-body text-[11px] tracking-[0.08em] uppercase border border-black/30 px-4 py-2 hover:bg-black hover:text-white transition-colors"
                    >
                      Read more &rarr;
                    </Link>
                  </article>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to={`/${hub.slug}`}
                  className="font-body text-[12px] tracking-[0.06em] uppercase border border-black/30 text-black px-5 py-3 hover:border-black hover:bg-black hover:text-white transition-colors inline-block"
                >
                  Back to {hub.navLabel}
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
