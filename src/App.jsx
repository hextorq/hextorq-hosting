import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import DeploySimulationModal from './components/common/DeploySimulationModal';
import HomePage from './pages/HomePage';
import SharedHostingPage from './pages/SharedHostingPage';
import VPSPage from './pages/VPSPage';
import PricingPage from './pages/PricingPage';
import ManagedVPSPage from './pages/ManagedVPSPage';
import FeaturesPage from './pages/FeaturesPage';
import LocationsPage from './pages/LocationsPage';
import SecurityPage from './pages/SecurityPage';
import FAQPage from './pages/FAQPage';
import DashboardPreviewPage from './pages/DashboardPreviewPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#06090E] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shared-hosting" element={<SharedHostingPage />} />
          <Route path="/vps" element={<VPSPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/managed-vps" element={<ManagedVPSPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/dashboard-preview" element={<DashboardPreviewPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/:policyId" element={<LegalPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <DeploySimulationModal />
    </div>
  );
}
