import React, { useState } from 'react';
import { 
  Server, 
  Layers, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  Cpu, 
  HardDrive, 
  Zap, 
  Info,
  ShieldCheck
} from 'lucide-react';
import { SHARED_FIXED_PLANS, SHARED_BURST_PLANS, SUPPORTED_STACKS } from '../../data/hostingPlans';
import { useDeployModal } from '../../context/DeployModalContext';
import { Link } from 'react-router-dom';

export default function SharedHostingSection() {
  const [activeCategory, setActiveCategory] = useState('fixed'); // 'fixed' | 'burst'
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' | 'yearly'
  const [selectedFrontend, setSelectedFrontend] = useState(SUPPORTED_STACKS.frontends[0]);
  const [selectedBackend, setSelectedBackend] = useState(SUPPORTED_STACKS.backends[0]);
  const { openDeployModal } = useDeployModal();

  const currentPlans = activeCategory === 'fixed' ? SHARED_FIXED_PLANS : SHARED_BURST_PLANS;

  return (
    <section id="shared-hosting" className="py-20 lg:py-28 relative overflow-hidden bg-[#06090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>ONE FRONTEND + ONE BACKEND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Shared Hosting Built for Applications.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Deploy one complete web application without server management. Choose predictable fixed quotas or flexible capacity that adapts to your workload.
          </p>
        </div>

        {/* 1 Frontend + 1 Backend Interactive Composition */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090E18] border border-white/[0.08] mb-16 shadow-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
              Application Composition
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select one frontend and one backend. Hextorq bundles and deploys them as a single cohesive project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* Frontend Selector (5 cols) */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-slate-950/80 border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300">
                  1. FRONTEND
                </span>
                <span className="text-[11px] font-mono text-slate-400">SPA / Static</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SUPPORTED_STACKS.frontends.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedFrontend(item)}
                    className={`px-2.5 py-2 rounded-xl text-xs font-mono transition-all text-center ${
                      selectedFrontend.name === item.name
                        ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/[0.04]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Selected: <strong className="text-white">{selectedFrontend.name}</strong> — {selectedFrontend.desc}
              </p>
            </div>

            {/* Plus Operator (1 col) */}
            <div className="md:col-span-1 text-center flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold text-sm">
                +
              </div>
            </div>

            {/* Backend Selector (5 cols) */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-slate-950/80 border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-300">
                  2. BACKEND
                </span>
                <span className="text-[11px] font-mono text-slate-400">API / Runtime</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {SUPPORTED_STACKS.backends.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedBackend(item)}
                    className={`px-2 py-2 rounded-xl text-xs font-mono transition-all text-center ${
                      selectedBackend.name === item.name
                        ? 'bg-blue-500 text-white font-bold shadow-md shadow-blue-500/20'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/[0.04]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Selected: <strong className="text-white">{selectedBackend.name}</strong> — {selectedBackend.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Model Category Toggle & Billing Cycle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
          
          {/* Fixed vs Flex Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-white/[0.08]">
            <button
              type="button"
              onClick={() => setActiveCategory('fixed')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeCategory === 'fixed'
                  ? 'bg-cyan-500 text-black shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Fixed Shared</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('burst')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeCategory === 'burst'
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Flexible / Burst Shared</span>
            </button>
          </div>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className={billingPeriod === 'monthly' ? 'text-white font-semibold' : 'text-slate-400'}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-12 h-6 rounded-full bg-slate-800 border border-slate-700 p-0.5 transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div 
                className={`w-5 h-5 rounded-full bg-cyan-400 transition-transform duration-300 ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={billingPeriod === 'yearly' ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
              Yearly (~18% discount)
            </span>
          </div>
        </div>

        {/* Explanatory Policy Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-900/60 border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white font-mono">
                {activeCategory === 'fixed'
                  ? 'Fixed Resource Model: "Predictable resources for predictable workloads."'
                  : 'Flexible Resource Model: "Resources that adapt to your workload."'}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">
                {activeCategory === 'fixed'
                  ? 'Your plan includes a defined allocation of CPU and RAM. If your application reaches its allocation, normal resource enforcement applies.'
                  : 'Use additional available shared capacity when your application needs it. Additional capacity is subject to infrastructure availability and fair-use safeguards.'}
              </p>
            </div>
          </div>
          <Link
            to="/legal/resource-policy"
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1 shrink-0"
          >
            <span>Resource Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {currentPlans.map((plan) => {
            const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate-900/90 border-2 border-cyan-500/60 shadow-xl shadow-cyan-500/10'
                    : 'bg-[#090E18]/80 border border-white/[0.08] hover:border-slate-700'
                }`}
              >
                {/* Popular Tag */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500 text-black">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-display text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-white/[0.06] mb-5">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xl font-bold text-slate-400">{plan.currency}</span>
                      <span className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-mono text-slate-400">/month</span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400 mt-1">
                      {billingPeriod === 'yearly' ? 'Billed annually' : 'Billed monthly'} • Renew at same rate
                    </p>
                  </div>

                  {/* Hardware Specs */}
                  <div className="space-y-2 mb-6 p-3.5 rounded-2xl bg-slate-950/70 border border-white/[0.04]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Compute:</span>
                      <span className="text-white font-semibold">{plan.specs.vcpu}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Memory:</span>
                      <span className="text-white font-semibold">{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">NVMe Storage:</span>
                      <span className="text-white font-semibold">{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-slate-800">
                      <span className="text-slate-400">Application:</span>
                      <span className="text-cyan-300 font-semibold">{plan.specs.apps}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 text-xs text-slate-300 mb-8 font-sans">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => openDeployModal(plan, 'app')}
                  className={`w-full py-3 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
