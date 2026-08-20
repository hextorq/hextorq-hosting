import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  ChevronRight,
  HardDrive
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/common/SEO';
import HeroInfrastructureGraphic from '../components/home/HeroInfrastructureGraphic';
import TrustStrip from '../components/home/TrustStrip';
import SharedHostingSection from '../components/home/SharedHostingSection';
import ResourceBurstInteractive from '../components/home/ResourceBurstInteractive';
import ArchitectureComparison from '../components/home/ArchitectureComparison';
import VPSConfigurator from '../components/vps/VPSConfigurator';
import DataCenterMapInteractive from '../components/home/DataCenterMapInteractive';
import DeploymentFlowAnimation from '../components/home/DeploymentFlowAnimation';
import UseCasesGrid from '../components/home/UseCasesGrid';
import WhyHextorq from '../components/home/WhyHextorq';
import FAQSection from '../components/home/FAQSection';
import CtaBanner from '../components/home/CtaBanner';
import { INFRASTRUCTURE_SPECS } from '../data/featuresData';
import { VPS_TIERS } from '../data/vpsPlans';
import { useDeployModal } from '../context/DeployModalContext';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const { openDeployModal } = useDeployModal();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-headline-anim', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      });

      gsap.from('.hero-graphic-anim', {
        opacity: 0,
        scale: 0.98,
        duration: 1.0,
        delay: 0.2,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Hextorq Hosting — Hosting Built Around Your Application"
        description="Deploy one frontend and one backend with predictable resources, flexible capacity, or your own VPS. Gen4 NVMe, AMD EPYC, and global edge network."
        canonical="https://hosting.hextorq.tech/"
      />

      <div ref={heroRef} className="relative min-h-screen bg-[#06090E] text-slate-100 overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Subtle Badge */}
              <div className="hero-headline-anim inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Application & VPS Hosting</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-headline-anim text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                Hosting Built Around{' '}
                <span className="text-gradient-cyan">Your Application.</span>
              </h1>

              {/* Supporting Statement */}
              <p className="hero-headline-anim text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Deploy one frontend and one backend with predictable resources, flexible capacity, or your own VPS.
              </p>

              {/* CTAs */}
              <div className="hero-headline-anim flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openDeployModal(null, 'app')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-95 group"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <Link
                  to="/vps"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold tracking-wide text-slate-300 bg-slate-900 border border-white/[0.08] hover:border-slate-700 hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Explore VPS</span>
                </Link>
              </div>
            </div>

            {/* Right Application Architecture Visual (6 Cols) */}
            <div className="lg:col-span-6 hero-graphic-anim">
              <HeroInfrastructureGraphic />
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <TrustStrip />

        {/* SHARED APPLICATION HOSTING (FIXED + FLEX) */}
        <SharedHostingSection />

        {/* RESOURCE BURST VISUALIZATION */}
        <ResourceBurstInteractive />

        {/* ARCHITECTURE COMPARISON */}
        <ArchitectureComparison />

        {/* VPS SECTION */}
        <section id="vps-preview" className="py-20 lg:py-28 relative bg-[#070B14] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5" />
                <span>ROOT COMPUTE PLATFORM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                Your Server. Your Rules.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                For customers who need root access, custom software, multiple services, and complete control.
              </p>
            </div>

            {/* VPS Predefined Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {VPS_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`p-6 rounded-3xl flex flex-col justify-between transition-all ${
                    tier.popular
                      ? 'bg-slate-900 border-2 border-cyan-500/60 shadow-xl shadow-cyan-500/10'
                      : 'bg-[#090E18] border border-white/[0.08] hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold font-display text-white">{tier.name}</h3>
                      {tier.badge && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="py-2 border-y border-white/[0.06]">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-base font-bold text-slate-400">{tier.currency}</span>
                        <span className="text-3xl font-extrabold font-display text-white">{tier.monthlyPrice}</span>
                        <span className="text-[11px] font-mono text-slate-400">/mo</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs font-mono text-slate-300">
                      <div>Compute: <strong className="text-white">{tier.specs.vcpu}</strong></div>
                      <div>RAM: <strong className="text-white">{tier.specs.ram}</strong></div>
                      <div>NVMe: <strong className="text-white">{tier.specs.storage}</strong></div>
                      <div>Bandwidth: <strong className="text-cyan-300">{tier.specs.bandwidth}</strong></div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openDeployModal(tier, 'vps')}
                    className={`w-full mt-6 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      tier.popular
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-black font-bold'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    Deploy VPS
                  </button>
                </div>
              ))}
            </div>

            {/* Interactive VPS Configurator */}
            <VPSConfigurator />
          </div>
        </section>

        {/* INFRASTRUCTURE HARDWARE */}
        <section className="py-20 lg:py-28 relative bg-[#06090E] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-mono">
                <HardDrive className="w-3.5 h-3.5" />
                <span>SERVER HARDWARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                Infrastructure Built for Performance.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Enterprise NVMe solid-state storage, modern multi-core server processors, and redundant network connectivity.
              </p>
            </div>

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
                    <h3 className="text-2xl font-bold font-display text-white">
                      {spec.title}
                    </h3>
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
          </div>
        </section>

        {/* 5-STEP DEPLOYMENT FLOW */}
        <DeploymentFlowAnimation />

        {/* GLOBAL REGIONS MAP */}
        <DataCenterMapInteractive />

        {/* WORKLOAD USE CASES */}
        <UseCasesGrid />

        {/* WHY HEXTORQ (6 REASONS) */}
        <WhyHextorq />

        {/* FAQ */}
        <FAQSection />

        {/* CTA BANNER */}
        <CtaBanner />
      </div>
    </>
  );
}
