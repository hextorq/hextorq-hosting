import React from 'react';
import { Check, X, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { ARCHITECTURE_COMPARISON } from '../../data/featuresData';
import { Link } from 'react-router-dom';

export default function ArchitectureComparison() {
  return (
    <section className="py-20 lg:py-28 relative bg-[#06090F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCT CLARITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Shared Hosting vs. VPS Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Understand exactly which infrastructure model matches your application requirements, development workflows, and growth velocity.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[720px]">
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
                <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold w-1/5">
                  Standard VPS
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold w-1/5 bg-emerald-950/20 border-l border-emerald-500/20">
                  Managed VPS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs font-mono">
              {ARCHITECTURE_COMPARISON.map((row, idx) => (
                <tr 
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01] hover:bg-white/[0.03] transition-colors'}
                >
                  <td className="p-4 sm:p-5 font-semibold text-slate-200">
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

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs font-mono text-slate-400 gap-4">
          <span>Unsure which plan fits your traffic? Talk to an infrastructure architect.</span>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center space-x-1.5 transition-colors"
          >
            <span>Consult Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
