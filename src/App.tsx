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

function App() {
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

export default App;
