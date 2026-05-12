import Navigation from '@/components/Navigation';
import HeroSection from '@/sections/HeroSection';
import TrustedVillasSection from '@/sections/TrustedVillasSection';
import WhatWeDoSection from '@/sections/WhatWeDoSection';
import EditorialSplitSection from '@/sections/EditorialSplitSection';
import HowItWorksSection from '@/sections/HowItWorksSection';
import MenuShowcaseSection from '@/sections/MenuShowcaseSection';
import VillaAreasSection from '@/sections/VillaAreasSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import HomeFaqSection from '@/sections/HomeFaqSection';
import CTASection from '@/sections/CTASection';
import Footer from '@/sections/Footer';
import { useSEO } from '@/lib/seo';
import { homeFaqCategories } from '@/content/homeFaq';

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  };

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Villa Catering Bali',
    url: 'https://www.villa-catering-bali.online/',
    logo: 'https://www.villa-catering-bali.online/favicon.svg',
  };

  useSEO({
    title: 'Catering Bali Villa | Private Chefs, Villa Dinners & Suppliers Guide 2025',
    description:
      'The complete guide to catering Bali villa stays. Private chefs, villa dinners, weddings and luxury fine dining across Canggu, Seminyak, Uluwatu and Ubud.',
    canonical: 'https://www.villa-catering-bali.online/',
    jsonLd: [faqJsonLd, organizationLd],
  });

  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <TrustedVillasSection />
        <WhatWeDoSection />
        <EditorialSplitSection />
        <HowItWorksSection />
        <MenuShowcaseSection />
        <VillaAreasSection />
        <HomeFaqSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
