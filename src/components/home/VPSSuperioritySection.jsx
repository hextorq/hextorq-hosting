import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, ArrowRight, Key, Box, Network, Sparkles } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { VPS_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function VPSSuperioritySection() {
  const [isYearly, setIsYearly] = useState(false);
  const { openTrialModal } = useTrialModal();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
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

      // 5 VPS cards staggered entrance
      if (cardsContainerRef.current?.children) {
        gsap.fromTo(
          cardsContainerRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.09,
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

  return (
    <section ref={sectionRef} id="vps-hosting" data-slot="freedom" className="py-24 bg-white text-[rgb(26,11,84)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>VIRTUAL PRIVATE SERVERS</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Your Server. <span className="nexa-grad-text">Your Rules.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Dedicated compute slices, high-speed NVMe storage, and no cap on how many sites or apps you host — Self-Hosted or fully Managed.
          </p>

          {/* Quick Capability Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-slate-600">
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 flex items-center space-x-1.5 text-[10px] uppercase tracking-wider">
              <Key className="w-3 h-3 text-emerald-600" />
              <span>Unlimited Sites/Apps</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 flex items-center space-x-1.5 text-[10px] uppercase tracking-wider">
              <Box className="w-3 h-3 text-emerald-600" />
              <span>Docker & Compose Ready</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 flex items-center space-x-1.5 text-[10px] uppercase tracking-wider">
              <Network className="w-3 h-3 text-emerald-600" />
              <span>Dedicated IPv4 + IPv6</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 flex items-center space-x-1.5 text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>14-Day Free Trial</span>
            </span>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center space-x-3 text-xs font-mono p-1 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm">
            <span className={!isYearly ? 'text-slate-900 font-bold px-3 py-1 rounded-xl bg-white shadow-sm' : 'text-slate-500 px-3 py-1'}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-11 h-6 rounded-full bg-slate-300 relative p-0.5 transition-colors focus:outline-none"
              aria-label="Toggle Annual VPS Discount"
            >
              <div
                className={`size-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={isYearly ? 'text-slate-900 font-bold px-3 py-1 rounded-xl bg-white shadow-sm' : 'text-slate-500 px-3 py-1'}>
              Yearly <span className="text-blue-600 text-[10px] font-semibold">(Save ~15%)</span>
            </span>
          </div>
        </div>

        {/* 5-Column Compact, Well-Aligned VPS Plan Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-16 items-stretch">
          {VPS_PLANS.map((plan) => {
            const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight
                    ? 'bg-white border-2 border-blue-600 shadow-xl'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[8px] font-mono font-bold uppercase tracking-[0.14em] whitespace-nowrap shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-3">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="text-base font-bold font-display text-[rgb(26,11,84)]">{plan.name}</h3>
                    <p className="text-[10px] text-slate-500 font-sans mt-0.5 leading-tight min-h-[26px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* 14-Day Free Trial Notice */}
                  <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700 flex items-center justify-between">
                    <span className="font-semibold text-blue-700">14-Day Free Trial</span>
                    <span className="text-slate-500 text-[9px]">₹0 today</span>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-slate-100">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-lg font-bold text-slate-400">{plan.currency}</span>
                      <span className="text-3xl font-bold font-display text-[rgb(26,11,84)]">
                        {displayPrice}
                      </span>
                      <span className="text-xs font-mono text-slate-500">/mo</span>
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 mt-0.5">
                      Try 14 days free. Then ₹{displayPrice}/mo.
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-1.5 text-[11px] font-mono text-slate-700 pt-0.5">
                    <div className="flex justify-between py-0.5 border-b border-slate-100">
                      <span className="text-slate-500">Compute:</span>
                      <strong className="text-slate-900">{plan.specs.vcpu}</strong>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100">
                      <span className="text-slate-500">Memory:</span>
                      <strong className="text-slate-900">{plan.specs.ram}</strong>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100">
                      <span className="text-slate-500">NVMe Disk:</span>
                      <strong className="text-slate-900">{plan.specs.storage}</strong>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100">
                      <span className="text-slate-500">Bandwidth:</span>
                      <strong className="text-slate-900">{plan.specs.bandwidth}</strong>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Sites/Apps:</span>
                      <strong className="text-emerald-700 font-bold">Unlimited</strong>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5">
                  <button
                    type="button"
                    onClick={() => openTrialModal(plan, 'vps')}
                    className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-2 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-1.5">
                      <span>Start 14-Day Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  <div className="text-center text-[9px] font-mono text-slate-500">
                    No upfront charge
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
