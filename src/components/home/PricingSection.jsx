import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, Server, Cpu, Layers } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS, FLEX_SHARED_PLANS, VPS_PLANS, MANAGED_VPS_PLANS } from '../../data/hostingData';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('fixed'); // 'fixed', 'flex', 'vps', 'managed'
  const [isYearly, setIsYearly] = useState(false);
  const { openTrialModal } = useTrialModal();

  const getPlans = () => {
    switch (activeTab) {
      case 'flex':
        return {
          plans: FLEX_SHARED_PLANS,
          title: 'Flexible Shared Hosting Plans',
          subtitle: 'Base resources with elastic burst headroom when traffic surges.',
          burstNote: 'Additional shared capacity is available when infrastructure capacity allows.'
        };
      case 'vps':
        return {
          plans: VPS_PLANS,
          title: 'Standard VPS Plans',
          subtitle: 'Dedicated vCPU cores, isolated memory, and full root access.',
          burstNote: null
        };
      case 'managed':
        return {
          plans: MANAGED_VPS_PLANS,
          title: 'Managed VPS Plans',
          subtitle: 'Full hands-off server setup, security hardening, monitoring, and backups.',
          burstNote: null
        };
      case 'fixed':
      default:
        return {
          plans: FIXED_SHARED_PLANS,
          title: 'Fixed Shared Hosting Plans',
          subtitle: 'Predictable resources, predictable pricing, and dedicated application allocations.',
          burstNote: null
        };
    }
  };

  const current = getPlans();

  return (
    <section
      id="pricing"
      data-slot="precision"
      className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      style={{
        backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full text-[rgb(26,11,84)]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-white/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Plans For Every Stage of Growth. <br />
            <span data-slot="gradient-text" className="nexa-grad-text">14-Day Free Trial on Every Tier.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Start free for two weeks. Experience real speed on live infrastructure with zero upfront charges. Continue with the plan after your trial.
          </p>
        </div>

        {/* Navigation Tabs & Billing Switch */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1 rounded-2xl bg-white/90 border border-white/80 gap-1 shadow-lg backdrop-blur-md">
            <button
              onClick={() => setActiveTab('fixed')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'fixed'
                  ? 'bg-[rgb(28,78,255)] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fixed Shared
            </button>

            <button
              onClick={() => setActiveTab('flex')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'flex'
                  ? 'bg-[rgb(28,78,255)] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Flexible / Burst
            </button>

            <button
              onClick={() => setActiveTab('vps')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'vps'
                  ? 'bg-[rgb(28,78,255)] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Standard VPS
            </button>

            <button
              onClick={() => setActiveTab('managed')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'managed'
                  ? 'bg-[rgb(28,78,255)] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Managed VPS
            </button>
          </div>

          {/* Yearly Toggle */}
          <div className="flex items-center space-x-3 text-xs font-mono text-slate-800">
            <span className={!isYearly ? 'font-bold text-slate-900' : 'text-slate-500'}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-11 h-6 rounded-full bg-slate-300 relative p-0.5"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`size-5 rounded-full bg-white shadow-md transition-transform ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={isYearly ? 'font-bold text-slate-900' : 'text-slate-500'}>
              Yearly <span className="text-purple-600 font-semibold text-[10px]">(Save ~15%)</span>
            </span>
          </div>

        </div>

        {/* Dynamic Cards Grid */}
        <div className={`grid gap-6 ${
          current.plans.length === 5
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
            : 'grid-cols-1 md:grid-cols-3'
        }`}>
          {current.plans.map((plan) => {
            const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl ${
                  plan.highlight
                    ? 'bg-white border-2 border-purple-600 shadow-2xl scale-[1.02]'
                    : 'bg-white/90 border border-white/80 hover:border-slate-300 shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-mono font-bold uppercase tracking-[0.14em] shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold font-display text-[rgb(26,11,84)]">{plan.name}</h3>
                    <p className="text-[11px] text-slate-500 font-sans mt-1 leading-snug min-h-[30px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* 14-Day Free Trial Notice */}
                  <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 text-xs font-mono text-purple-900 flex items-center justify-between">
                    <span className="flex items-center space-x-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>14-Day Free Trial</span>
                    </span>
                    <span className="text-purple-700 text-[10px] font-bold">₹0 upfront</span>
                  </div>

                  {/* Price */}
                  <div className="py-2.5 border-y border-slate-100">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xl font-bold text-slate-400">{plan.currency}</span>
                      <span className="text-4xl font-bold font-display text-[rgb(26,11,84)]">
                        {displayPrice}
                      </span>
                      <span className="text-xs font-mono text-slate-500">/mo</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">
                      Start free today. ₹{displayPrice}/mo after trial.
                    </div>
                  </div>

                  {/* Quick specs */}
                  <div className="space-y-1.5 text-xs font-mono text-slate-700">
                    <div className="flex justify-between"><span>Compute:</span> <strong className="text-slate-900">{plan.specs.vcpu}</strong></div>
                    <div className="flex justify-between"><span>Memory:</span> <strong className="text-slate-900">{plan.specs.ram}</strong></div>
                    <div className="flex justify-between"><span>Storage:</span> <strong className="text-slate-900">{plan.specs.storage}</strong></div>
                    {plan.specs.bandwidth && (
                      <div className="flex justify-between"><span>Bandwidth:</span> <strong className="text-slate-900">{plan.specs.bandwidth}</strong></div>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 pt-2 text-xs font-sans text-slate-700">
                    {plan.features.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] text-slate-800">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => openTrialModal(plan, activeTab)}
                    className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-md active:scale-95 transition-all"
                  >
                    <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-2.5 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-1.5">
                      <span>Start 14-Day Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
