import React, { useState } from 'react';
import { 
  Server, 
  Layers, 
  Zap, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  TrendingUp,
  Cpu,
  HardDrive
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
    <section id="shared-hosting" className="py-20 lg:py-28 relative overflow-hidden bg-[#070B12]">
      {/* Ambient background styling */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>ONE FRONTEND + ONE BACKEND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Built for Your Application.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Deploy one complete full-stack web application without the complexity of managing a raw server. Choose between predictable fixed quotas or adaptive bursting.
          </p>
        </div>

        {/* The 1 Frontend + 1 Backend Architecture Visualizer Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-white/[0.08] backdrop-blur-xl mb-16 shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Interactive Application Composition
            </span>
            <p className="text-xs text-slate-400 mt-1">
              Select your frontend and backend runtimes to see how Hextorq bundles your application:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* Frontend Selector (4 cols) */}
            <div className="md:col-span-4 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  1. Choose Frontend
                </span>
                <span className="text-[10px] font-mono text-slate-400">SPA / Static</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SUPPORTED_STACKS.frontends.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedFrontend(item)}
                    className={`px-2.5 py-2 rounded-lg text-xs font-mono transition-all text-center ${
                      selectedFrontend.name === item.name
                        ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Selected: <span className="text-white font-semibold">{selectedFrontend.name}</span> — {selectedFrontend.desc}
              </p>
            </div>

            {/* Plus Operator (1 col) */}
            <div className="md:col-span-1 text-center flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold text-xl">
                +
              </div>
            </div>

            {/* Backend Selector (4 cols) */}
            <div className="md:col-span-4 p-4 rounded-xl bg-slate-950/80 border border-blue-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-300 uppercase">
                  2. Choose Backend
                </span>
                <span className="text-[10px] font-mono text-slate-400">API / Microservice</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SUPPORTED_STACKS.backends.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedBackend(item)}
                    className={`px-2.5 py-2 rounded-lg text-xs font-mono transition-all text-center ${
                      selectedBackend.name === item.name
                        ? 'bg-blue-500 text-white font-bold shadow-md shadow-blue-500/20'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Selected: <span className="text-white font-semibold">{selectedBackend.name}</span> — {selectedBackend.desc}
              </p>
            </div>

            {/* Equal Operator (2 cols summary) */}
            <div className="md:col-span-2 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-1.5">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">
                Unified App Node
              </span>
              <p className="text-xs font-bold text-white font-mono leading-tight">
                {selectedFrontend.name} + {selectedBackend.name}
              </p>
              <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-center space-x-1">
                <Check className="w-3 h-3" />
                <span>Zero Reverse Proxy Config</span>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Model Category Switcher & Billing Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
          
          {/* Category Tabs: Fixed vs Flexible */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900/90 border border-white/[0.08] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveCategory('fixed')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeCategory === 'fixed'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>A. Fixed Resource Shared</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('burst')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeCategory === 'burst'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>B. Flexible / Burst Shared</span>
              <span className="hidden md:inline-block text-[10px] px-1.5 py-0.2 bg-black/30 rounded">Surge Proof</span>
            </button>
          </div>

          {/* Billing Cycle Toggle */}
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
            <span className={`flex items-center space-x-1.5 ${billingPeriod === 'yearly' ? 'text-cyan-300 font-semibold' : 'text-slate-400'}`}>
              <span>Yearly</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px]">
                Save ~18%
              </span>
            </span>
          </div>
        </div>

        {/* Model Explainer Banner */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white font-mono">
                {activeCategory === 'fixed'
                  ? 'Fixed Resource Model: "Predictable resources for your application."'
                  : 'Flexible Burst Model: "Resources that adapt to your workload."'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {activeCategory === 'fixed'
                  ? 'Hard resource ceiling at plan specs. Lower-cost option with 100% predictable monthly billing.'
                  : 'Baseline specs plus automated temporary expansion into available shared node headroom during surges.'}
              </p>
            </div>
          </div>
          <Link
            to="/legal/resource-policy"
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1 shrink-0"
          >
            <span>Read Resource Policy</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan) => {
            const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#0F172A] to-[#0B101C] border-2 border-cyan-500/60 shadow-2xl shadow-cyan-500/10 scale-100 md:-translate-y-2'
                    : 'bg-slate-900/70 border border-white/[0.08] hover:border-slate-700'
                }`}
              >
                {/* Popular / Badge Tag */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-display text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-white/[0.06] mb-6">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-slate-400">{plan.currency}</span>
                      <span className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-mono text-slate-400">/month</span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400 mt-1">
                      {billingPeriod === 'yearly' ? 'Billed annually' : 'Billed monthly'} • Renew at same rate
                    </p>
                  </div>

                  {/* Key Hardware Specs */}
                  <div className="space-y-2.5 mb-6 p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.04]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center space-x-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Compute:</span>
                      </span>
                      <span className="text-white font-semibold">{plan.specs.vcpu}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center space-x-1.5">
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                        <span>Memory:</span>
                      </span>
                      <span className="text-white font-semibold">{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center space-x-1.5">
                        <HardDrive className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Storage:</span>
                      </span>
                      <span className="text-white font-semibold">{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-slate-800">
                      <span className="text-slate-400">Arch Target:</span>
                      <span className="text-cyan-300 font-semibold">{plan.specs.apps}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs text-slate-300 mb-8 font-sans">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => openDeployModal(plan, 'app')}
                  className={`w-full py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25'
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
