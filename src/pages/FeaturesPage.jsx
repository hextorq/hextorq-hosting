import React from 'react';
import SEO from '../components/common/SEO';
import { INFRASTRUCTURE_SPECS } from '../data/featuresData';
import DeploymentFlowAnimation from '../components/home/DeploymentFlowAnimation';
import CtaBanner from '../components/home/CtaBanner';
import { 
  Zap, 
  CheckCircle2, 
  Sparkles,
  HardDrive
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <>
      <SEO
        title="Infrastructure Features & Bare-Metal Hardware — Hextorq Hosting"
        description="Explore the technical capabilities of Hextorq Hosting: enterprise NVMe arrays, modern multi-core server processors, ECC memory, and DDoS defense."
        canonical="https://hosting.hextorq.tech/features"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>INFRASTRUCTURE ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Infrastructure Engineered for <span className="text-gradient-cyan">Modern Apps</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Every layer of the Hextorq platform — from NVMe solid-state storage to container runtime isolation — is optimized for reliable throughput and fast execution.
          </p>
        </section>

        {/* 4 Major Hardware Modules */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INFRASTRUCTURE_SPECS.map((spec) => (
              <div
                key={spec.id}
                className="p-8 rounded-3xl bg-[#090E18] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 space-y-6 shadow-xl"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {spec.subtitle}
                  </span>
                  <h2 className="text-2xl font-bold font-display text-white">
                    {spec.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {spec.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {spec.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/[0.04] text-center">
                      <span className="text-[10px] font-mono text-slate-400 block truncate">{m.label}</span>
                      <p className="text-xs font-bold text-cyan-300 font-mono mt-0.5 truncate">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5-Step Deployment Pipeline */}
        <DeploymentFlowAnimation />

        {/* Final CTA */}
        <CtaBanner />
      </div>
    </>
  );
}
