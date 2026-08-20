import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { SHARED_FIXED_PLANS, SHARED_BURST_PLANS } from '../data/hostingPlans';
import { VPS_TIERS } from '../data/vpsPlans';
import { ARCHITECTURE_COMPARISON } from '../data/featuresData';
import { useDeployModal } from '../context/DeployModalContext';
import FAQSection from '../components/home/FAQSection';
import CtaBanner from '../components/home/CtaBanner';
import { 
  Check, 
  Cpu, 
  Zap, 
  Server, 
  Layers, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  Tag,
  Info,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' | 'yearly'
  const [selectedTab, setSelectedTab] = useState('all'); // 'all' | 'fixed' | 'burst' | 'vps'
  const { openDeployModal } = useDeployModal();

  return (
    <>
      <SEO
        title="Plans & Pricing — Transparent Cloud Hosting"
        description="Explore clear, predictable pricing for Fixed Shared, Flexible Burst, and Dedicated VPS hosting with no hidden renewal fees or unexpected charges."
        canonical="https://hosting.hextorq.tech/pricing"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Tag className="w-3.5 h-3.5" />
            <span>TRANSPARENT CLOUD PRICING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Simple, Honest <span className="text-gradient-cyan">Pricing</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No forced multi-year locks. No renewal price gouging. Pick the exact resource tier your application needs.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center space-x-3 text-xs font-mono pt-4">
            <span className={billingPeriod === 'monthly' ? 'text-white font-semibold' : 'text-slate-400'}>
              Monthly Billing
            </span>
            <button
              type="button"
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 rounded-full bg-slate-800 border border-slate-700 p-0.5 transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-cyan-400 transition-transform duration-300 ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={`flex items-center space-x-1.5 ${billingPeriod === 'yearly' ? 'text-cyan-300 font-semibold' : 'text-slate-400'}`}>
              <span>Yearly Billing</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px]">
                Save up to 18%
              </span>
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', name: 'All Categories' },
              { id: 'fixed', name: 'Fixed Shared' },
              { id: 'burst', name: 'Flexible Burst' },
              { id: 'vps', name: 'VPS Servers' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedTab === tab.id
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 1: FIXED RESOURCE SHARED */}
        {(selectedTab === 'all' || selectedTab === 'fixed') && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <h2 className="text-2xl font-bold font-display text-white">
                    Fixed Resource Shared Hosting
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  1 Frontend + 1 Backend • Predictable hard quotas • Lowest cost foundation
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-lg border border-cyan-500/30">
                Predictable workloads
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SHARED_FIXED_PLANS.map((plan) => {
                const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                return (
                  <div
                    key={plan.id}
                    className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all ${
                      plan.popular
                        ? 'bg-slate-900 border-2 border-cyan-500/60 shadow-xl shadow-cyan-500/10'
                        : 'bg-slate-950/70 border border-white/[0.08] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-display text-white">{plan.name}</h3>
                        {plan.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-4 min-h-[32px]">{plan.tagline}</p>

                      <div className="py-3 border-y border-white/[0.06] mb-5">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-xl font-bold text-slate-400">{plan.currency}</span>
                          <span className="text-4xl font-extrabold font-display text-white">{price}</span>
                          <span className="text-xs font-mono text-slate-400">/mo</span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                          {billingPeriod === 'yearly' ? 'Billed annually' : 'Billed monthly'} • Renew at {plan.currency}{price}/mo
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-1.5 mb-5">
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">CPU / RAM:</span>
                          <span className="text-white font-semibold">{plan.specs.vcpu} • {plan.specs.ram}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">NVMe SSD:</span>
                          <span className="text-white font-semibold">{plan.specs.storage}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">Enforcement:</span>
                          <span className="text-cyan-400 font-semibold">Strict Hard Ceiling</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-300 mb-6">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => openDeployModal(plan, 'app')}
                      className={`w-full py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 2: FLEXIBLE / BURST SHARED */}
        {(selectedTab === 'all' || selectedTab === 'burst') && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  <h2 className="text-2xl font-bold font-display text-white">
                    Flexible / Burst Shared Hosting
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  1 Frontend + 1 Backend • Dynamic surge buffer • Zero hard timeouts
                </p>
              </div>
              <span className="text-xs font-mono text-blue-300 bg-blue-950/80 px-3 py-1 rounded-lg border border-blue-500/30">
                Surge-proof scaling
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SHARED_BURST_PLANS.map((plan) => {
                const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                return (
                  <div
                    key={plan.id}
                    className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all ${
                      plan.popular
                        ? 'bg-slate-900 border-2 border-blue-500/60 shadow-xl shadow-blue-500/10'
                        : 'bg-slate-950/70 border border-white/[0.08] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-display text-white">{plan.name}</h3>
                        {plan.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-4 min-h-[32px]">{plan.tagline}</p>

                      <div className="py-3 border-y border-white/[0.06] mb-5">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-xl font-bold text-slate-400">{plan.currency}</span>
                          <span className="text-4xl font-extrabold font-display text-white">{price}</span>
                          <span className="text-xs font-mono text-slate-400">/mo</span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                          {billingPeriod === 'yearly' ? 'Billed annually' : 'Billed monthly'} • Renew at {plan.currency}{price}/mo
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-1.5 mb-5">
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">Burst Buffer:</span>
                          <span className="text-amber-300 font-semibold">{plan.burstCapacity}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">Base Specs:</span>
                          <span className="text-white font-semibold">{plan.specs.vcpu}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">Storage:</span>
                          <span className="text-white font-semibold">{plan.specs.storage}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-300 mb-6">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => openDeployModal(plan, 'app')}
                      className={`w-full py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 3: VPS HOSTING TIERS */}
        {(selectedTab === 'all' || selectedTab === 'vps') && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                  <h2 className="text-2xl font-bold font-display text-white">
                    Dedicated VPS Servers
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Full root access • OS selection • Unlimited applications • Docker container stacks
                </p>
              </div>
              <Link
                to="/vps"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1"
              >
                <span>Launch Custom VPS Configurator</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {VPS_TIERS.map((tier) => {
                const price = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
                return (
                  <div
                    key={tier.id}
                    className={`p-5 rounded-2xl flex flex-col justify-between transition-all ${
                      tier.popular
                        ? 'bg-slate-900 border-2 border-indigo-500/60 shadow-xl shadow-indigo-500/10'
                        : 'bg-slate-950/70 border border-white/[0.08] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <h3 className="text-base font-bold font-display text-white mb-2">{tier.name}</h3>
                      <div className="py-2 border-y border-white/[0.06] mb-3">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-base font-bold text-slate-400">{tier.currency}</span>
                          <span className="text-3xl font-extrabold font-display text-white">{price}</span>
                          <span className="text-[10px] font-mono text-slate-400">/mo</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-xs font-mono text-slate-300 mb-4">
                        <div>Compute: <strong className="text-white">{tier.specs.vcpu}</strong></div>
                        <div>RAM: <strong className="text-white">{tier.specs.ram}</strong></div>
                        <div>Storage: <strong className="text-white">{tier.specs.storage}</strong></div>
                        <div>Transfer: <strong className="text-cyan-300">{tier.specs.bandwidth}</strong></div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openDeployModal(tier, 'vps')}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                    >
                      Deploy VPS
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* RESOURCE LIMITS & RENEWAL POLICY DISCLOSURES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <Info className="w-4 h-4" />
              <span>Transparent Resource & Renewal Guarantees</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed font-mono">
              <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-sm font-bold text-white font-display">Fixed Shared Policy</h4>
                <p className="text-slate-400">
                  Fixed plans receive strict isolated quotas. When 100% capacity is reached, incoming requests are safely queued to prevent server crashes. Upgrade anytime with 1 click.
                </p>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-sm font-bold text-white font-display">Flexible Burst Policy</h4>
                <p className="text-slate-400">
                  Flexible plans dynamically draw up to 4x compute headroom from available node reserves during traffic spikes. Subject to cluster fair-use integrity.
                </p>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-sm font-bold text-white font-display">Zero Renewal Shock</h4>
                <p className="text-slate-400">
                  Your renewal price is the exact same standard rate as your subscription. We never double or triple prices after your first billing cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full FAQ */}
        <FAQSection />

        {/* CTA */}
        <CtaBanner />
      </div>
    </>
  );
}
