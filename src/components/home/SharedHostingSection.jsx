import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS, FLEX_SHARED_PLANS } from '../../data/hostingData';
import BurstVisualizer from './BurstVisualizer';

gsap.registerPlugin(ScrollTrigger);

export default function SharedHostingSection() {
  const [activeTab, setActiveTab] = useState('fixed'); // 'fixed' | 'flex'
  const [isYearly, setIsYearly] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const { openTrialModal } = useTrialModal();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const bannerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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

      // Positioning Banner
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Cards Container Stagger
      if (cardsContainerRef.current?.children) {
        gsap.fromTo(
          cardsContainerRef.current.children,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
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
  }, [activeTab]);

  const currentPlans = activeTab === 'fixed' ? FIXED_SHARED_PLANS : FLEX_SHARED_PLANS;

  return (
    <section
      ref={sectionRef}
      id="shared-hosting"
      data-slot="shared-hosting"
      className="py-24 relative overflow-hidden bg-[#06090E] text-slate-100 border-t border-white/10"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300 shadow-sm font-bold backdrop-blur-md">
            <span>FULL-STACK SHARED HOSTING</span>
          </div>

          <h2 className="font-medium text-white tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Shared Hosting Built For <br />
            <span className="nexa-grad-text">Modern Web Applications.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Every plan includes an integrated environment for 1 Frontend + 1 Backend, fully isolated NVMe partitions, and an unconditional 14-Day Free Trial.
          </p>
        </div>

        {/* Tab Controls & Billing Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full">
          
          {/* Fixed vs Flex Pill Selector */}
          <div className="inline-flex p-1 rounded-2xl bg-[rgba(10,5,20,0.9)] border border-white/20 shadow-md backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab('fixed')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'fixed'
                  ? 'bg-[rgb(28,78,255)] text-white shadow-md font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Fixed Resources
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('flex')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'flex'
                  ? 'bg-[rgb(28,78,255)] text-white shadow-md font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Flexible / Burst
            </button>
          </div>

          {/* Monthly / Yearly Modern Segmented Toggle */}
          <div className="inline-flex p-1 rounded-2xl bg-black/50 border border-white/20 shadow-md backdrop-blur-md text-xs font-mono">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${
                !isYearly
                  ? 'bg-white text-slate-900 font-bold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center space-x-1.5 ${
                isYearly
                  ? 'bg-white text-slate-900 font-bold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="text-cyan-300 font-bold text-[10px]">(Save 15%)</span>
            </button>
          </div>

        </div>

        {/* Product Positioning Banner */}
        <div ref={bannerRef} className={`w-full mb-10 p-6 sm:p-7 rounded-3xl bg-[rgba(10,5,20,0.88)] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xl backdrop-blur-xl transition-all duration-300 ${currentPlans.length === 4 ? 'max-w-6xl' : 'max-w-5xl'}`}>
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase text-cyan-300 font-semibold tracking-[0.16em]">
              {activeTab === 'fixed' ? 'FIXED RESOURCE MODEL' : 'FLEXIBLE BURST MODEL'}
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              {activeTab === 'fixed'
                ? 'Predictable resources. Predictable pricing.'
                : 'Resources that adapt to your workload.'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-sans max-w-2xl leading-relaxed tracking-normal">
              {activeTab === 'fixed'
                ? 'Strictly bounded CPU, memory, and NVMe allocations. Perfect for steady, predictable production workloads with absolute budget certainty.'
                : 'Your plan includes a base level of resources. When demand increases, additional available capacity can temporarily be used. When demand returns to normal, that additional capacity is released.'}
            </p>
          </div>

          {activeTab === 'flex' && (
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-xs font-mono text-white/90 max-w-xs shrink-0">
              ⚡ Additional shared capacity is available when infrastructure capacity allows.
            </div>
          )}
        </div>

        {/* Aligned, Equal-Height Plan Cards Grid - 3 cols for Fixed, 4 cols on the same line for Flex */}
        <div 
          ref={cardsContainerRef} 
          className={`grid gap-6 mb-16 items-stretch w-full mx-auto transition-all duration-300 ${
            currentPlans.length === 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl'
              : 'grid-cols-1 md:grid-cols-3 max-w-5xl'
          }`}
        >
          {currentPlans.map((plan) => {
            const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isExpanded = expandedCards[plan.id];
            const primaryFeatures = plan.features.slice(0, 3);
            const secondaryFeatures = plan.features.slice(3);

            return (
              <div
                key={plan.id}
                className={`p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 backdrop-blur-xl hover:border-white/40 h-full ${
                  plan.highlight
                    ? 'bg-[rgba(15,10,30,0.92)] border-2 border-cyan-400/80 shadow-2xl'
                    : 'bg-[rgba(10,5,20,0.88)] border border-white/15 shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Fixed Top Meta Row with Badge */}
                  <div className="h-6 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-cyan-300/80 uppercase tracking-wider">
                      {activeTab === 'fixed' ? 'FIXED SHARED' : 'FLEX BURST'}
                    </span>
                    {plan.badge ? (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[9px] font-mono font-bold uppercase tracking-[0.14em] shadow-xs shrink-0">
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="h-4"></span>
                    )}
                  </div>

                  {/* Title & Tagline Box - Exact Equal Height */}
                  <div className="h-[68px] flex flex-col justify-start">
                    <h3 className="text-xl font-bold font-display text-white tracking-tight">{plan.name}</h3>
                    <p className="text-xs text-white/70 font-sans mt-1 leading-snug line-clamp-2">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* 14-Day Free Trial Notice - Exact Equal Height */}
                  <div className="h-9 px-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold">14-Day Free Trial</span>
                    <span className="text-cyan-300 text-[10px] font-bold">₹0 upfront</span>
                  </div>

                  {/* Price display - Exact Equal Height */}
                  <div className="h-[72px] py-2 border-y border-white/15 flex flex-col justify-center">
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

                  {/* Spec Sheet Pills - 4 Identical Dimension Boxes */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-white">
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 h-12 flex flex-col justify-center">
                      <span className="text-[9px] text-white/60 block uppercase">COMPUTE</span>
                      <strong className="text-white leading-tight">{plan.specs.vcpu}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 h-12 flex flex-col justify-center">
                      <span className="text-[9px] text-white/60 block uppercase">MEMORY</span>
                      <strong className="text-white leading-tight">{plan.specs.ram}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 h-12 flex flex-col justify-center">
                      <span className="text-[9px] text-white/60 block uppercase">STORAGE</span>
                      <strong className="text-white leading-tight">{plan.specs.storage}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 h-12 flex flex-col justify-center">
                      <span className="text-[9px] text-white/60 block uppercase">STACK</span>
                      <strong className="text-white leading-tight">1 FE + 1 BE</strong>
                    </div>
                  </div>

                  {/* Competitor-Style Feature Checklist without ticks */}
                  <div className="pt-2 space-y-2 min-h-[125px] flex flex-col justify-between">
                    <ul className="space-y-2 text-xs font-sans text-white/80">
                      {primaryFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-2.5">
                          <span className="text-cyan-400 font-mono text-xs select-none">—</span>
                          <span className="leading-tight text-white/90">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Collapsible Details */}
                    {secondaryFeatures.length > 0 && (
                      <div>
                        {isExpanded && (
                          <ul className="space-y-2 pt-2 text-xs font-sans text-white/80 border-t border-white/10 animate-fadeIn">
                            {secondaryFeatures.map((feat, i) => (
                              <li key={i} className="flex items-start space-x-2.5">
                                <span className="text-cyan-400 font-mono text-xs select-none">—</span>
                                <span className="leading-tight text-white/90">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleExpand(plan.id)}
                          className="mt-2 text-[11px] font-mono text-cyan-300 hover:text-cyan-200 flex items-center space-x-1 transition-colors pt-1"
                        >
                          <span>{isExpanded ? 'Hide Extra Details' : `View ${secondaryFeatures.length} More Features`}</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>
                    )}
                  </div>
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

        {/* 5-Step Burst Visualizer */}
        <div className={`w-full mt-6 transition-all duration-300 ${currentPlans.length === 4 ? 'max-w-6xl' : 'max-w-5xl'}`}>
          <BurstVisualizer />
        </div>

      </div>
    </section>
  );
}
