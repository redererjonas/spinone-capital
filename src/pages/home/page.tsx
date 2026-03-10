'use client';

import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import ProcessSection from './components/ProcessSection';
import TrustHighlights from './components/TrustHighlights';
import Testimonials from '../../components/feature/Testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <main>
        <HeroSection />
        <ServicesOverview />
        <ProcessSection />
        <TrustHighlights />
        <Testimonials />
      </main>
    </div>
  );
}
