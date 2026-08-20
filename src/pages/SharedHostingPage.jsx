import React from 'react';
import SEO from '../components/common/SEO';
import SharedHostingSection from '../components/home/SharedHostingSection';
import ResourceBurstInteractive from '../components/home/ResourceBurstInteractive';
import ArchitectureComparison from '../components/home/ArchitectureComparison';
import FAQSection from '../components/home/FAQSection';
import CtaBanner from '../components/home/CtaBanner';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function SharedHostingPage() {
  return (
    <>
      <SEO
        title="Shared Application Hosting — Fixed & Flexible Burst Plans"
        description="Deploy one frontend and one backend with defined resources or flexible burst capacity. Designed for React, Vite, Next.js, Node.js, Python, PHP, and Go."
        canonical="https://hosting.hextorq.tech/shared-hosting"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-STACK APPLICATION HOSTING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Shared Hosting Built for <span className="text-gradient-cyan">Applications</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Not traditional cPanel directory hosting. Hextorq provisions an isolated container sandbox engineered for <strong>ONE Frontend + ONE Backend</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Zero Server Administration</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Automatic Service Reverse Proxy</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Free Automated SSL</span>
            </span>
          </div>
        </section>

        {/* Core Interactive Section */}
        <SharedHostingSection />

        {/* Signature Resource Burst Section */}
        <div id="flexible">
          <ResourceBurstInteractive />
        </div>

        {/* Architecture Comparison */}
        <ArchitectureComparison />

        {/* FAQ for Shared Hosting */}
        <FAQSection />

        {/* Final CTA */}
        <CtaBanner />
      </div>
    </>
  );
}
