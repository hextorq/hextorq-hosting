import React from 'react';
import { Sparkles, ArrowRight, Server, Mail, ShieldCheck } from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  const { openDeployModal } = useDeployModal();

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-[#05080E]">
      {/* Dynamic backdrop glows */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0B1324]/90 to-slate-950/90 border border-cyan-500/30 shadow-2xl backdrop-blur-2xl text-center space-y-8 relative overflow-hidden">
          
          {/* Hexagonal corner tech watermarks */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>INSTANT SETUP • ZERO HIDDEN FEES</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Deploy Your Next Application With Hextorq.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Start with application hosting. Scale into your own VPS when you need more control.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openDeployModal(null, 'app')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/vps"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center space-x-2"
            >
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Explore VPS Plans</span>
            </Link>
          </div>

          {/* Support Email and Guarantees */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Support:</span>
              <a href="mailto:hosting@hextorq.tech" className="text-cyan-300 hover:underline">
                hosting@hextorq.tech
              </a>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>99.95% Network Availability SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
