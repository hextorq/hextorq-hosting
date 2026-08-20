import React from 'react';
import { Sparkles, ArrowRight, Cpu } from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  const { openDeployModal } = useDeployModal();

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-[#06090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#090F1C] to-[#070A14] border border-white/[0.1] text-center relative overflow-hidden shadow-2xl space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT APPLICATION DEPLOYMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Ready to Deploy Your Application?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
            Deploy one frontend and one backend with predictable fixed resources, flexible burst capacity, or your own dedicated root-access VPS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openDeployModal(null, 'app')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/vps"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-white/[0.08] hover:bg-slate-800 hover:text-white flex items-center justify-center space-x-2 transition-colors"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Explore VPS Plans</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
