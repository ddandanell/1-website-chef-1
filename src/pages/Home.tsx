import Navigation from '@/components/Navigation';
import HeroSection from '@/sections/HeroSection';
import TrustedVillasSection from '@/sections/TrustedVillasSection';
import WhatWeDoSection from '@/sections/WhatWeDoSection';
import EditorialSplitSection from '@/sections/EditorialSplitSection';
import HowItWorksSection from '@/sections/HowItWorksSection';
import MenuShowcaseSection from '@/sections/MenuShowcaseSection';
import VillaAreasSection from '@/sections/VillaAreasSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';
import Footer from '@/sections/Footer';
import { useSEO } from '@/lib/seo';

export default function Home() {
  useSEO({
    title: 'Bali Private Catering Guide 2025 | Best Villa Catering & Private Chef Services in Bali',
    description:
      'The complete 2025 guide to catering Bali villa stays. Private chefs, villa dinners, weddings and luxury fine dining across Canggu, Seminyak, Uluwatu and Ubud.',
    canonical: 'https://www.villa-catering-bali.online/',
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
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
