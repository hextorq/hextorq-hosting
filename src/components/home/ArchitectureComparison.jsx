import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ARCHITECTURE_COMPARISON } from '../../data/featuresData';
import { Link } from 'react-router-dom';

export default function ArchitectureComparison() {
  return (
    <section className="py-20 lg:py-28 relative bg-[#06090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCT ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Fixed vs. Flexible vs. VPS
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Choose the hosting model that fits your deployment workflow, traffic profile, and server control requirements.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#090E18] shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/[0.08] bg-slate-950/80">
                <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold w-1/4">
                  Feature / Capability
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold w-1/5 bg-cyan-950/20 border-x border-cyan-500/20">
                  Fixed Shared
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-blue-300 font-bold w-1/5 bg-blue-950/20 border-r border-blue-500/20">
                  Flexible / Burst
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-slate-200 font-bold w-1/5">
                  Standard VPS
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold w-1/5 bg-emerald-950/20 border-l border-emerald-500/20">
                  Managed VPS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs font-sans">
              {ARCHITECTURE_COMPARISON.map((row, idx) => (
                <tr 
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01] hover:bg-white/[0.02] transition-colors'}
                >
                  <td className="p-4 sm:p-5 font-semibold text-slate-200 font-mono">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-300 bg-cyan-950/10 border-x border-cyan-500/10">
                    {row.fixedShared}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-300 bg-blue-950/10 border-r border-blue-500/10 font-medium">
                    {row.flexShared}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-300">
                    {row.vps}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-300 bg-emerald-950/10 border-l border-emerald-500/10">
                    {row.managedVps}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info box */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <span>Need help choosing the right hosting model for your stack?</span>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center space-x-1.5 transition-colors shrink-0"
          >
            <span>Consult Technical Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
