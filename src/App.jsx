import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TrialModalProvider } from './context/TrialModalContext';
import { SmoothScrollProvider } from './context/SmoothScrollContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TrialModal from './components/common/TrialModal';
import LegalModal from './components/common/LegalModal';

export default function App() {
  return (
    <TrialModalProvider>
      <SmoothScrollProvider>
        <div className="flex flex-col min-h-screen bg-[#000201] text-foreground selection:bg-cyan-500 selection:text-black">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />
          <TrialModal />
          <LegalModal />
        </div>
      </SmoothScrollProvider>
    </TrialModalProvider>
  );
}