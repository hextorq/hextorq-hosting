import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Info,
  CheckCircle2,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ResourceBurstInteractive() {
  const [trafficStage, setTrafficStage] = useState(0); // 0: Base, 1: Spike, 2: Shared Capacity, 3: App Continues, 4: Returns Normal
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const stages = [
    {
      title: '1. Base Allocation',
      status: 'Normal Traffic',
      cpu: '2 vCPU',
      ram: '2 GB RAM',
      desc: 'Application operates on its defined base resources during ordinary day-to-day traffic.',
      badge: 'Base Capacity'
    },
    {
      title: '2. Traffic Surge',
      status: 'Surge Arrives',
      cpu: 'Resource demand rises',
      ram: 'Inbound requests increase',
      desc: 'Sudden visitor surge from marketing, news, or product launches requires additional capacity.',
      badge: 'Demand Rises'
    },
    {
      title: '3. Available Shared Capacity',
      status: 'Headroom Allocated',
      cpu: 'Additional CPU unlocked',
      ram: 'Additional RAM unlocked',
      desc: 'Hextorq seamlessly channels available shared capacity from the cluster reserve buffer.',
      badge: 'Shared Buffer'
    },
    {
      title: '4. Application Continues',
      status: 'Smooth Operation',
      cpu: 'Stable execution',
      ram: 'Zero request timeouts',
      desc: 'Users experience fast page loads without 503 errors or sudden resource throttling.',
      badge: 'High Availability'
    },
    {
      title: '5. Traffic Returns to Normal',
      status: 'Capacity Reclaimed',
      cpu: '2 vCPU baseline',
      ram: '2 GB RAM baseline',
      desc: 'When traffic normalizes, extra capacity smoothly returns to the shared cluster pool.',
      badge: 'Pool Restored'
    }
  ];

  // Auto progression
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setTrafficStage((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = stages[trafficStage];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>FLEXIBLE RESOURCE BEHAVIOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            How Resource Bursting Works.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Resources that adapt to your workload. When demand increases, your application uses available shared capacity without manual intervention.
          </p>
        </div>

        {/* 5-Step Visual Timeline Progression */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {stages.map((stage, idx) => {
            const isCurrent = trafficStage === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsAutoPlaying(false);
                  setTrafficStage(idx);
                }}
                className={`p-4 rounded-2xl border text-left transition-all relative ${
                  isCurrent
                    ? 'border-cyan-400 bg-cyan-950/50 shadow-lg text-white'
                    : 'border-white/[0.06] bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    isCurrent ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Step {idx + 1}
                  </span>
                </div>
                <div className="text-xs font-bold font-display text-white truncate">
                  {stage.title.split('. ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Product Graphic Frame */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Explanation (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/[0.08] text-xs font-mono text-cyan-300">
              <span>{current.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {current.desc}
            </p>

            {/* Micro Specs for Current Stage */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">Compute State</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">{current.cpu}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">Memory State</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">{current.ram}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-cyan-400 hover:underline flex items-center space-x-1"
              >
                <span>{isAutoPlaying ? 'Pause Auto Animation' : 'Resume Auto Animation'}</span>
              </button>
            </div>
          </div>

          {/* Right Product Visualization Canvas (6 cols) */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-950 border border-white/[0.06] space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
              <span className="text-slate-400">Application Resource Visualization</span>
              <span className="text-cyan-300 font-semibold">{current.status}</span>
            </div>

            {/* Base Allocation Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Base Allocation (Guaranteed)</span>
                <span className="text-white font-bold">2 vCPU • 2 GB RAM</span>
              </div>
              <div className="h-3 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-white/[0.06]">
                <div className="h-full bg-cyan-500 rounded-full w-full"></div>
              </div>
            </div>

            {/* Flexible Headroom Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Available Shared Capacity</span>
                <span className={trafficStage === 2 || trafficStage === 3 ? 'text-amber-300 font-bold' : 'text-slate-400'}>
                  {trafficStage === 2 || trafficStage === 3 ? 'Active Headroom Allocation' : 'Shared Pool Idle'}
                </span>
              </div>
              <div className="h-3 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-white/[0.06]">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    trafficStage === 2 || trafficStage === 3
                      ? 'w-3/4 bg-gradient-to-r from-blue-500 to-indigo-500'
                      : 'w-0'
                  }`}
                ></div>
              </div>
            </div>

            {/* Qualitative Policy Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.04] text-xs font-sans text-slate-300 leading-relaxed space-y-1">
              <div className="font-semibold text-white font-mono flex items-center space-x-1.5 text-[11px]">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fair-Use Protection</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Additional capacity is subject to infrastructure availability and fair-use safeguards. For permanent dedicated power, dedicated VPS instances provide fixed isolation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
