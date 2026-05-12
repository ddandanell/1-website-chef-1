import { Link, useParams } from 'react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import EditorPick from '@/components/EditorPick';
import { findArea } from '@/content/areas';
import { useSEO } from '@/lib/seo';
import { mychefUrl, whatsappUrl } from '@/lib/links';

export default function AreaPage() {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const area = areaSlug ? findArea(areaSlug) : undefined;

  const canonical = area
    ? `https://www.villa-catering-bali.online/areas/${area.slug}`
    : undefined;

  const jsonLd = area
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: area.title,
          description: area.metaDescription,
          mainEntityOfPage: canonical,
          inLanguage: 'en',
          keywords: area.primaryKeyword,
          articleSection: `Bali Catering Areas — ${area.name}`,
          image: `https://www.villa-catering-bali.online${area.image}`,
          publisher: {
            '@type': 'Organization',
            name: 'Villa Catering Bali',
            url: 'https://www.villa-catering-bali.online/',
            logo: 'https://www.villa-catering-bali.online/favicon.svg',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.villa-catering-bali.online/' },
            { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://www.villa-catering-bali.online/areas' },
            { '@type': 'ListItem', position: 3, name: area.name, item: canonical },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: area.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ]
    : undefined;

  useSEO({
    title: area?.metaTitle ?? 'Area not found',
    description: area?.metaDescription ?? '',
    canonical,
    jsonLd,
  });

  if (!area) {
    return (
      <div className="relative">
        <Navigation />
        <main className="pt-[120px] pb-24 max-w-[1200px] mx-auto page-padding">
          <h1 className="font-display text-[48px] leading-[1.05]">Area not found</h1>
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
      <main className="pt-[120px]">
        {/* Breadcrumb */}
        <div className="max-w-[820px] mx-auto page-padding pt-6">
          <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/50">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="hover:text-black transition-colors">Areas</span>
            <span className="mx-2">/</span>
            <span className="text-black/70">{area.name}</span>
          </p>
        </div>

        {/* Header */}
        <header className="max-w-[820px] mx-auto page-padding py-10 md:py-14">
          <p className="font-body text-[11px] tracking-[0.12em] uppercase text-black/50 mb-3">
            Bali villa areas — {area.name}
          </p>
          <h1 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-black mb-6">
            {area.title}
          </h1>
          <p className="font-body text-[17px] md:text-[19px] leading-[1.65] text-black/75 mb-6">
            {area.intro}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {area.subAreas.map((sub) => (
              <span
                key={sub}
                className="font-body text-[12px] tracking-[0.02em] border border-black/15 text-black/65 px-3 py-1"
              >
                {sub}
              </span>
            ))}
          </div>
        </header>

        {/* Hero image */}
        <div className="max-w-[1100px] mx-auto page-padding pb-10 md:pb-14">
          <img
            src={area.image}
            alt={`${area.title} — typical villa setting in ${area.name}`}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: '16/9' }}
            width="1100"
            height="618"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Travel surcharge callout */}
        <div className="max-w-[760px] mx-auto page-padding mb-10">
          <div className="bg-linen p-5 md:p-6 border-l-2 border-black/40">
            <p className="font-body text-[10px] tracking-[0.18em] uppercase text-black/55 mb-2">
              Travel surcharge from central Bali
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.6] text-black/80">
              {area.surcharge}
            </p>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-[760px] mx-auto page-padding pb-14">
          {area.sections.map((section, idx) => (
            <div key={section.heading}>
              <section className="mb-12">
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
              {idx === 1 && (
                <EditorPick
                  headline={`mychef.id is where ${area.name} villa caterers actually take bookings`}
                  body={`The forty-plus operators serving ${area.name} are scattered across personal WhatsApp lines and old websites. mychef.id consolidates the vetted ones onto a single platform with unified pricing and real-time availability. Worth a five-minute browse before you start emailing.`}
                  href={mychefUrl(area.slug)}
                  cta={`Browse ${area.name} chefs`}
                />
              )}
            </div>
          ))}

          {/* Recommended menus */}
          <section className="mt-14 mb-12 pt-10 border-t border-black/10">
            <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-6">
              Menu styles that work best in {area.name}
            </h2>
            <div className="space-y-6">
              {area.recommendedMenus.map((menu) => (
                <div key={menu.name}>
                  <h3 className="font-display text-[20px] leading-[1.2] text-black mb-2">
                    {menu.name}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.7] text-black/75">
                    {menu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-14 pt-10 border-t border-black/10">
            <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-6">
              Frequently asked about catering in {area.name}
            </h2>
            <div className="space-y-6">
              {area.faq.map((item) => (
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

          {/* Bottom CTAs */}
          <section className="mt-14 pt-10 border-t border-black/10 flex flex-wrap gap-3">
            <a
              href={mychefUrl(area.slug + '-bottom')}
              target="_blank"
              rel="noopener external"
              className="inline-flex items-center font-body text-[12px] tracking-[0.08em] uppercase bg-black text-white px-5 py-3 hover:bg-black/85 transition-colors"
            >
              Browse vetted chefs in {area.name}
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
            <a
              href={whatsappUrl(`Hi myCHEF — I'm researching catering for a villa in ${area.name}.`)}
              target="_blank"
              rel="noopener external"
              className="inline-flex items-center font-body text-[12px] tracking-[0.08em] uppercase border border-black/30 text-black px-5 py-3 hover:bg-black hover:text-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
