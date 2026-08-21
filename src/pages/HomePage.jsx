import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import AppArchitectureSection from '../components/home/AppArchitectureSection';
import SharedHostingSection from '../components/home/SharedHostingSection';
import VPSSuperioritySection from '../components/home/VPSSuperioritySection';
import ManagedVPSSection from '../components/home/ManagedVPSSection';
import VPSConfigurator from '../components/home/VPSConfigurator';
import ComparisonMatrix from '../components/home/ComparisonMatrix';
import PricingSection from '../components/home/PricingSection';
import FeaturesSection from '../components/home/FeaturesSection';
import LocationsSection from '../components/home/LocationsSection';
import WorkloadsSection from '../components/home/WorkloadsSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Hextorq Hosting — Hosting Built Around Your Application"
        description="Deploy your frontend and backend with predictable shared hosting (from ₹79/mo), adaptive flexible burst capacity, or dedicated multi-site VPS (from ₹349/mo). 14-day free trial on every plan."
        canonical="https://hosting.hextorq.tech/"
      />

      <div className="bg-[#06090E] min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-black">
        <HeroSection />
        <AppArchitectureSection />
        <SharedHostingSection />
        <VPSSuperioritySection />
        <ManagedVPSSection />
        <VPSConfigurator />
        <ComparisonMatrix />
        <PricingSection />
        <FeaturesSection />
        <LocationsSection />
        <WorkloadsSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}
