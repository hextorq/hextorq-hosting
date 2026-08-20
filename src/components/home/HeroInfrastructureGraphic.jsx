import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Server, 
  Check, 
  ArrowDown, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Sparkles,
  RefreshCw,
  Box
} from 'lucide-react';
import gsap from 'gsap';

export default function HeroInfrastructureGraphic() {
  const [frontend, setFrontend] = useState('React');
  const [backend, setBackend] = useState('Node.js');
  const [isDeploying, setIsDeploying] = useState(false);
  const containerRef = useRef(null);
  const beamRef = useRef(null);

  const frontends = ['React', 'Vite', 'Next.js', 'Vue', 'Svelte'];
  const backends = ['Node.js', 'Python', 'PHP', 'Go', 'Custom API'];

  // Animate connection flow when selection changes
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    setIsDeploying(true);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.connection-beam',
        { strokeDashoffset: 100, opacity: 0.3 },
        { strokeDashoffset: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.cluster-node',
        { scale: 0.98, borderColor: 'rgba(56, 189, 248, 0.6)' },
        { scale: 1, borderColor: 'rgba(255, 255, 255, 0.1)', duration: 0.6, ease: 'power2.out' }
      );
    }, containerRef);

    const timer = setTimeout(() => setIsDeploying(false), 800);
    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [frontend, backend]);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto lg:max-w-none">
      
      {/* Subtle ambient backglow */}
      <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-3xl blur-xl pointer-events-none"></div>

      {/* Main Architecture Graphic Card */}
      <div className="relative rounded-3xl bg-[#0A0F1D]/90 border border-white/[0.1] p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-6">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
            <span className="text-xs font-mono font-medium text-slate-300">
              Application Architecture Model
            </span>
          </div>
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            1 Front + 1 Back
          </span>
        </div>

        {/* STEP 1: FRONTEND LAYER */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-white font-semibold">1. Choose Frontend</span>
            </span>
            <span className="text-[11px] text-slate-400">SPA / Static Target</span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {frontends.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFrontend(item)}
                className={`py-2 px-1 text-center rounded-xl text-xs font-mono transition-all ${
                  frontend === item
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/[0.04]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Visual Connector */}
        <div className="relative flex items-center justify-center py-1">
          <div className="w-px h-6 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
          <div className="absolute w-5 h-5 rounded-full bg-slate-900 border border-white/[0.1] flex items-center justify-center text-[10px] text-cyan-300">
            +
          </div>
        </div>

        {/* STEP 2: BACKEND LAYER */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center space-x-1.5">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-white font-semibold">2. Choose Backend</span>
            </span>
            <span className="text-[11px] text-slate-400">API / Microservice</span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {backends.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBackend(item)}
                className={`py-2 px-1 text-center rounded-xl text-xs font-mono transition-all ${
                  backend === item
                    ? 'bg-blue-500 text-white font-bold shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/[0.04]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Connector to Hextorq Cluster */}
        <div className="relative flex items-center justify-center py-1">
          <div className="w-px h-6 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
          <div className="absolute w-5 h-5 rounded-full bg-slate-900 border border-white/[0.1] flex items-center justify-center text-[10px] text-blue-300">
            ↓
          </div>
        </div>

        {/* STEP 3: HEXTORQ APPLICATION CLUSTER NODE */}
        <div className="cluster-node rounded-2xl bg-[#070B14] border border-white/[0.08] p-4.5 sm:p-5 space-y-3.5 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wide">
                  Hextorq App Sandbox
                </span>
                <p className="text-[11px] font-mono text-slate-400">
                  {frontend} UI + {backend} API
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Unified Deploy</span>
            </div>
          </div>

          {/* Deployment Attributes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-white/[0.04] text-[11px] font-mono text-slate-300">
            <div className="flex items-center space-x-1.5">
              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Automated Port Binding</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Free Auto SSL</span>
            </div>
            <div className="flex items-center space-x-1.5 col-span-2 sm:col-span-1">
              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Fixed or Flex Burst</span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-xs font-mono text-slate-400">
            Select your stack above to preview unified application composition.
          </p>
        </div>
      </div>
    </div>
  );
}
