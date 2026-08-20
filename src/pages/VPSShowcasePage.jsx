import React from 'react';
import SEO from '../components/common/SEO';
import { VPS_TIERS } from '../data/vpsPlans';
import { useDeployModal } from '../context/DeployModalContext';
import { Terminal, CheckCircle2 } from 'lucide-react';

export default function VPSShowcasePage() {
  const { openDeployModal } = useDeployModal();

  return (
    <>
      <SEO
        title="High-Performance VPS Hosting — Dedicated vCPU & Root Access"
        description="Deploy virtual private servers with dedicated compute, NVMe storage, custom OS selection, and 100% full root access."
        canonical="https://hosting.hextorq.tech/"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>ROOT ACCESS & VIRTUAL SERVERS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Your Server. <span className="text-gradient-cyan">Your Rules.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            For customers who need root access, custom software, multiple services, and complete control.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Full Root & SSH Key Access</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Docker & Compose Ready</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Dedicated IPv4 + IPv6</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Custom OS Selection</span>
            </span>
          </div>
        </section>

        {/* VPS Plan Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Standard VPS Plans
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Balanced compute and memory configurations ready for immediate deployment.
            </p>
          </div>

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
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-display text-white">{tier.name}</h3>
                    {tier.badge && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="py-2 border-y border-white/[0.06]">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xl font-bold text-slate-400">{tier.currency}</span>
                      <span className="text-4xl font-extrabold font-display text-white">{tier.monthlyPrice}</span>
                      <span className="text-xs font-mono text-slate-400">/mo</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex justify-between"><span>Compute:</span> <strong className="text-white">{tier.specs.vcpu}</strong></div>
                    <div className="flex justify-between"><span>Memory:</span> <strong className="text-white">{tier.specs.ram}</strong></div>
                    <div className="flex justify-between"><span>NVMe:</span> <strong className="text-white">{tier.specs.storage}</strong></div>
                    <div className="flex justify-between"><span>Bandwidth:</span> <strong className="text-cyan-300">{tier.specs.bandwidth}</strong></div>
                    <div className="flex justify-between"><span>IP:</span> <strong className="text-emerald-400">{tier.specs.ipv4}</strong></div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openDeployModal(tier, 'vps')}
                  className={`w-full mt-6 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    tier.popular
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-black font-bold'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Deploy {tier.name}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}