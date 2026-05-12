import { Link } from 'react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { useSEO } from '@/lib/seo';
import { mychefUrl, whatsappUrl } from '@/lib/links';

export default function About() {
  useSEO({
    title: 'About Villa Catering Bali | Editorial Guide by myCHEF Indonesia',
    description:
      "Villa Catering Bali is an editorial guide published by myCHEF Indonesia — Bali's longest-running private chef service since 2012. Who we are, how we research, and why we recommend what we do.",
    canonical: 'https://www.villa-catering-bali.online/about',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Villa Catering Bali',
        url: 'https://www.villa-catering-bali.online/about',
        publisher: {
          '@type': 'Organization',
          name: 'myCHEF Indonesia',
          url: 'https://mychef.id/',
          foundingDate: '2012',
          areaServed: 'Bali, Indonesia',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'myCHEF Indonesia',
        url: 'https://mychef.id/',
        priceRange: 'IDR 350,000 — 6,000,000 per person',
        areaServed: ['Canggu', 'Seminyak', 'Uluwatu', 'Ubud', 'Sanur', 'Nusa Dua', 'Jimbaran'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Denpasar',
          addressRegion: 'Bali',
          addressCountry: 'ID',
        },
        sameAs: ['https://mychef.id/'],
      },
    ],
  });

  return (
    <div className="relative">
      <Navigation />
      <main className="pt-[120px]">
        <header className="max-w-[820px] mx-auto page-padding py-10 md:py-16">
          <p className="font-body text-[11px] tracking-[0.12em] uppercase text-black/50 mb-4">
            About this guide
          </p>
          <h1 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-black mb-6">
            Why this guide exists, and who wrote it
          </h1>
          <p className="font-body text-[17px] md:text-[19px] leading-[1.65] text-black/75">
            Villa Catering Bali is an editorial guide published by myCHEF Indonesia — Bali's longest-running private chef and villa catering operator since 2012. We built this site because the catering market on Bali has fragmented into hundreds of operators with wildly inconsistent quality, and travellers planning a villa dinner had no neutral, evidence-led resource to start with. This is that resource.
          </p>
        </header>

        <article className="max-w-[760px] mx-auto page-padding pb-14">
          <section className="mb-12">
            <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-5">
              Who runs it
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
              myCHEF Indonesia has been running private chef and villa catering on Bali for over a decade. We have plated more than 10,000 villa dinners across Canggu, Seminyak, Uluwatu, Ubud and the rest of the island — from two-person anniversary dinners to hundred-and-fifty-guest weddings. The editorial content here is built on that operational experience: real pricing, real supply-chain detail, real logistics, written by the team that does the work.
            </p>
            <p className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
              Disclosure: when we recommend a booking platform, we recommend <a href={mychefUrl('about')} target="_blank" rel="noopener external" className="text-black underline underline-offset-4 hover:no-underline">mychef.id</a> — the platform we operate. The reason is straightforward: we built it because the alternatives are slow, opaque, and full of operators we would not personally hire. Every chef on mychef.id is vetted by us. Every menu is reviewed. Every booking carries a real human guarantee.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-5">
              How we research
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
              Pricing on this site is sourced from active operator quotes collected across 2025, weighted toward Bali's main villa clusters. We update it quarterly. Supplier intelligence comes from our own purchasing relationships with farms in Bedugul, Plaga and Kintamani, and the fishing cooperatives in Jimbaran, Kedonganan and Amed. Regional cluster intelligence comes from a decade of running events in every major villa area on the island.
            </p>
            <p className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
              Where we list multiple operators or suppliers, we describe what each does best rather than ranking them. There are sixty-plus active catering operators on Bali; "best" depends entirely on the brief — guest count, cuisine, area, budget, occasion. The guide is structured to help you understand which dimensions matter for your event, not to push a single answer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-5">
              Editorial policy
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
              We do not accept paid placements on this site. We do not run sponsored content. When we recommend mychef.id it is because it is the platform we operate, and we disclose that openly here and in every editorial callout. The rest of the content is opinion based on operational experience — when we say a supplier is strong on seafood or a region is best for plant-based menus, that is our judgment from doing the work, not a paid endorsement.
            </p>
            <p className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
              We update content when prices shift, when operators change, or when readers email us with corrections. Last review of each topic page is logged in the page footer. If you spot something out of date, email{' '}
              <a href="mailto:hello@villa-catering-bali.online" className="text-black underline underline-offset-4 hover:no-underline">
                hello@villa-catering-bali.online
              </a>{' '}
              — we read everything.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-black mb-5">
              Get in touch
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-black/80 mb-5">
              For booking enquiries, the fastest path is mychef.id (online booking) or our WhatsApp line. For editorial enquiries — corrections, story ideas, vendor suggestions, partnership questions — email us directly.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={mychefUrl('about-cta')}
                target="_blank"
                rel="noopener external"
                className="inline-flex items-center font-body text-[12px] tracking-[0.08em] uppercase bg-black text-white px-5 py-3 hover:bg-black/85 transition-colors"
              >
                Book a chef on mychef.id
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener external"
                className="inline-flex items-center font-body text-[12px] tracking-[0.08em] uppercase border border-black/30 text-black px-5 py-3 hover:bg-black hover:text-white transition-colors"
              >
                Chat on WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center font-body text-[12px] tracking-[0.08em] uppercase text-black/60 hover:text-black transition-colors px-3 py-3"
              >
                Back to the guide
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
