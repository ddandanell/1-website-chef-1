import { Link, useParams } from 'react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import EditorPick from '@/components/EditorPick';
import { findResource } from '@/content/resources';
import { topicRecommendations, getRecommendationHref } from '@/content/recommendations';
import { useSEO } from '@/lib/seo';

export default function ResourcePage() {
  const { resourceSlug } = useParams<{ resourceSlug: string }>();
  const resource = resourceSlug ? findResource(resourceSlug) : undefined;

  const canonical = resource
    ? `https://www.villa-catering-bali.online/resources/${resource.slug}`
    : undefined;

  const rec = resource ? topicRecommendations[resource.slug] : undefined;

  const jsonLd = resource
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: resource.title,
          description: resource.metaDescription,
          mainEntityOfPage: canonical,
          inLanguage: 'en',
          keywords: resource.primaryKeyword,
          publisher: {
            '@type': 'Organization',
            name: 'Villa Catering Bali',
            url: 'https://www.villa-catering-bali.online/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.villa-catering-bali.online/' },
            { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.villa-catering-bali.online/resources' },
            { '@type': 'ListItem', position: 3, name: resource.title, item: canonical },
          ],
        },
        ...(resource.faq && resource.faq.length > 0
          ? [
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: resource.faq.map((f) => ({
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
    title: resource?.metaTitle ?? 'Resource not found',
    description: resource?.metaDescription ?? '',
    canonical,
    jsonLd,
  });

  if (!resource) {
    return (
      <div className="relative">
        <Navigation />
        <main className="pt-[120px] pb-24 max-w-[1200px] mx-auto page-padding">
          <h1 className="font-display text-[48px] leading-[1.05]">Resource not found</h1>
          <p className="mt-4 text-black/70">
            <Link to="/resources" className="underline">
              All resources
            </Link>
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-[120px]">
        <div className="max-w-[820px] mx-auto page-padding pt-6">
          <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/resources" className="hover:text-black transition-colors">
              Resources
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black/70">{resource.title}</span>
          </p>
        </div>

        <header className="max-w-[820px] mx-auto page-padding py-10 md:py-14">
          <p className="font-body text-[11px] tracking-[0.12em] uppercase text-black/50 mb-3">
            Free research tools · White-hat SEO assets
          </p>
          <h1 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-black mb-6">
            {resource.title}
          </h1>
          <p className="font-body text-[17px] md:text-[19px] leading-[1.65] text-black/75">
            {resource.intro}
          </p>
        </header>

        <article className="max-w-[760px] mx-auto page-padding pb-14">
          {resource.sections.map((section, idx) => (
            <section key={section.heading} className="mb-12">
              <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-5">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-5 mb-5 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="font-body text-[16px] leading-[1.7] text-black/80">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto mb-5 border border-black/10">
                  <table className="w-full text-left font-body text-[13px] md:text-[14px]">
                    <thead className="bg-linen">
                      <tr>
                        {section.table.headers.map((h) => (
                          <th key={h} className="px-3 py-2 font-semibold text-black border-b border-black/10">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-black/5">
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-3 py-2 text-black/75 align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {idx === 1 && rec && (
                <EditorPick
                  headline={rec.headline}
                  body={rec.body}
                  href={getRecommendationHref(rec, resource.slug)}
                  cta={rec.cta}
                />
              )}
            </section>
          ))}

          {resource.faq && resource.faq.length > 0 && (
            <section className="mt-16 pt-10 border-t border-black/10">
              <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-6">
                Frequently asked
              </h2>
              <div className="space-y-6">
                {resource.faq.map((item) => (
                  <div key={item.q}>
                    <p className="font-body text-[15px] font-semibold tracking-[0.01em] text-black mb-2">
                      {item.q}
                    </p>
                    <p className="font-body text-[16px] leading-[1.7] text-black/75">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resource.related.length > 0 && (
            <section className="mt-14 pt-10 border-t border-black/10">
              <h2 className="font-display text-[22px] md:text-[26px] leading-[1.15] text-black mb-4">
                Related on this guide
              </h2>
              <ul className="space-y-2">
                {resource.related.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="font-body text-[15px] text-black underline underline-offset-4 hover:no-underline"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
