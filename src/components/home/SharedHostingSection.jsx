import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS, FLEX_SHARED_PLANS } from '../../data/hostingData';
import BurstVisualizer from './BurstVisualizer';

gsap.registerPlugin(ScrollTrigger);

export default function SharedHostingSection() {
  const [activeTab, setActiveTab] = useState('fixed'); // 'fixed' | 'flex'
  const [isYearly, setIsYearly] = useState(false);
  const { openTrialModal } = useTrialModal();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const bannerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header ScrollTrigger
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Tabs & Banner ScrollTrigger
      gsap.fromTo(
        [tabsRef.current, bannerRef.current],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: tabsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Initial Cards reveal on scroll
      if (cardsContainerRef.current?.children) {
        gsap.fromTo(
          cardsContainerRef.current.children,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards on tab change
  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    if (cardsContainerRef.current?.children) {
      gsap.fromTo(
        cardsContainerRef.current.children,
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }
    setActiveTab(newTab);
  };

  const currentPlans = activeTab === 'fixed' ? FIXED_SHARED_PLANS : FLEX_SHARED_PLANS;

  return (
    <section
      ref={sectionRef}
      id="shared-hosting"
      data-slot="trusted"
      className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-white/10"
      style={{
        backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_120332_3b24257a-afe6-48ca-875f-78147370f403.png&w=1280&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md shadow-lg">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL-STACK SHARED HOSTING</span>
          </div>

          <h2 className="font-medium text-white tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.2 }}>
            Designed for 1 Frontend + 1 Backend. <br />
            <span data-slot="gradient-text" className="nexa-grad-text">Two Tailored Product Models.</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base font-sans leading-relaxed">
            Choose between strictly predictable fixed resources for budget peace-of-mind, or elastic burst hosting that absorbs sudden traffic spikes.
          </p>
        </div>

        {/* Product Model Selector Tabs & Yearly Toggle */}
        <div ref={tabsRef} className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/15">
          
          {/* Fixed vs Flex Tabs without redundant logos */}
          <div className="inline-flex p-1 rounded-2xl bg-black/50 border border-white/20 shadow-lg backdrop-blur-md">
            <button
              onClick={() => handleTabChange('fixed')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                activeTab === 'fixed'
                  ? 'bg-white text-slate-900 shadow-md font-bold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              1. Fixed Resource Hosting
            </button>

            <button
              onClick={() => handleTabChange('flex')}
              id="flex-burst"
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                activeTab === 'flex'
                  ? 'bg-white text-slate-900 shadow-md font-bold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              2. Flexible / Burst Hosting
            </button>
          </div>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center space-x-3 text-xs font-mono text-white">
            <span className={!isYearly ? 'text-white font-semibold' : 'text-white/70'}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-11 h-6 rounded-full bg-white/20 border border-white/30 relative p-0.5 transition-colors focus:outline-none"
              aria-label="Toggle Annual Discount"
            >
              <div
                className={`size-5 rounded-full bg-white transition-transform duration-200 ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={isYearly ? 'text-white font-semibold' : 'text-white/70'}>
              Yearly <span className="text-cyan-300 text-[10px] font-bold">(Save ~15%)</span>
            </span>
          </div>

        </div>

        {/* Product Positioning Banner */}
        <div ref={bannerRef} className="mb-10 p-5 rounded-2xl bg-[rgba(10,5,20,0.88)] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl backdrop-blur-xl">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-cyan-300 font-semibold tracking-[0.14em]">
              {activeTab === 'fixed' ? 'FIXED RESOURCE MODEL' : 'FLEXIBLE BURST MODEL'}
            </div>
            <h3 className="text-base font-bold text-white font-display">
              {activeTab === 'fixed'
                ? 'Predictable resources. Predictable pricing.'
                : 'Resources that adapt to your workload.'}
            </h3>
            <p className="text-xs text-white/80 font-sans max-w-2xl leading-relaxed">
              {activeTab === 'fixed'
                ? 'Strictly bounded CPU, memory, and NVMe allocations. Perfect for steady, predictable production workloads with absolute budget certainty.'
                : 'Your plan includes a base level of resources. When demand increases, additional available capacity can temporarily be used. When demand returns to normal, that additional capacity is released.'}
            </p>
          </div>

          {activeTab === 'flex' && (
            <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-[11px] font-mono text-white/90 max-w-xs shrink-0">
              ⚡ Additional shared capacity is available when infrastructure capacity allows.
            </div>
          )}
        </div>

        {/* Compact, Well-Structured Plan Cards Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {currentPlans.map((plan) => {
            const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl hover:scale-[1.02] ${
                  plan.highlight
                    ? 'bg-[rgba(15,10,30,0.92)] border-2 border-cyan-400/80 shadow-2xl'
                    : 'bg-[rgba(10,5,20,0.88)] border border-white/15 hover:border-white/30 shadow-xl'
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[9px] font-mono font-bold uppercase tracking-[0.14em] shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">{plan.name}</h3>
                    <p className="text-xs text-white/70 font-sans mt-1 leading-snug min-h-[28px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* 14-Day Free Trial Tag without icon */}
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold">14-Day Free Trial</span>
                    <span className="text-cyan-300 text-[10px] font-bold">₹0 upfront</span>
                  </div>

                  {/* Price display */}
                  <div className="py-2.5 border-y border-white/15">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xl font-bold text-white/60">{plan.currency}</span>
                      <span className="text-4xl font-bold font-display text-white">
                        {displayPrice}
                      </span>
                      <span className="text-xs font-mono text-white/60">/month</span>
                    </div>
                    <div className="text-[10px] font-mono text-white/70 mt-0.5">
                      Try free for 14 days. Pay ₹{displayPrice}/mo after trial.
                    </div>
                  </div>

                  {/* Spec Sheet Pills */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-white">
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                      <span className="text-[9px] text-white/60 block uppercase">COMPUTE</span>
                      <strong className="text-white">{plan.specs.vcpu}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                      <span className="text-[9px] text-white/60 block uppercase">MEMORY</span>
                      <strong className="text-white">{plan.specs.ram}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                      <span className="text-[9px] text-white/60 block uppercase">STORAGE</span>
                      <strong className="text-white">{plan.specs.storage}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                      <span className="text-[9px] text-white/60 block uppercase">STACK</span>
                      <strong className="text-white">1 FE + 1 BE</strong>
                    </div>
                  </div>

                  {/* Concise Feature Checklist */}
                  <ul className="space-y-2 pt-1 text-xs font-sans text-white/80">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight text-white">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-white/15 space-y-2">
                  <button
                    type="button"
                    onClick={() => openTrialModal(plan, activeTab)}
                    className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-2.5 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-2">
                      <span>Start 14-Day Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  <div className="text-center text-[10px] font-mono text-white/60">
                    Zero upfront charge • Cancel anytime
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Burst Visualizer */}
        <div className="mt-6">
          <BurstVisualizer />
        </div>

      </div>
    </section>
  );
}
