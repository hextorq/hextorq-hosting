import React from 'react';
import { 
  Layout, 
  ShoppingBag, 
  Terminal, 
  Briefcase, 
  Layers, 
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { USE_CASES } from '../../data/featuresData';
import { Link } from 'react-router-dom';

export default function UseCasesGrid() {
  const iconMap = {
    Layout: Layout,
    ShoppingBag: ShoppingBag,
    Terminal: Terminal,
    Briefcase: Briefcase,
    Layers: Layers,
    ShieldCheck: ShieldCheck
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#06090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WORKLOAD MATCHING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Designed for Real Workloads.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Identify the ideal hosting model for your framework, traffic profile, and application architecture.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc, idx) => {
            const Icon = iconMap[uc.icon] || Layout;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#090E18] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-white/[0.06] flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {uc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {uc.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {uc.techs.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-white/[0.04]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.04]">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                    Recommended Model:
                  </span>
                  <span className="text-xs font-bold font-mono text-cyan-300 mt-0.5 block">
                    {uc.recommendedPlan}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
