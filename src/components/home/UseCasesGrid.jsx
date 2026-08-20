import React from 'react';
import { 
  Layout, 
  ShoppingBag, 
  Terminal, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { USE_CASES } from '../../data/featuresData';
import { useDeployModal } from '../../context/DeployModalContext';

export default function UseCasesGrid() {
  const { openDeployModal } = useDeployModal();

  const iconMap = {
    Layout: Layout,
    ShoppingBag: ShoppingBag,
    Terminal: Terminal,
    Briefcase: Briefcase,
    Layers: Layers,
    ShieldCheck: ShieldCheck
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#06090F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERSATILE INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Tailored for Every Modern Workload
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            From single-page web applications to high-throughput container clusters, Hextorq adapts to your runtime architecture.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc, idx) => {
            const Icon = iconMap[uc.icon] || Layout;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {uc.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {uc.techs.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 truncate max-w-[170px]">
                    {uc.recommendedPlan}
                  </span>
                  <button
                    type="button"
                    onClick={() => openDeployModal(null, uc.recommendedPlan.includes('VPS') ? 'vps' : 'app')}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-cyan-600 transition-colors"
                    title="Deploy this stack"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
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
