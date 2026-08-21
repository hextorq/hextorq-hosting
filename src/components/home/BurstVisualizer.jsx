import React, { useState, useEffect } from 'react';
import { ArrowRight, RefreshCw, Layers } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FLEX_SHARED_PLANS } from '../../data/hostingData';

export default function BurstVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { openTrialModal } = useTrialModal();

  const steps = [
    {
      id: 'baseline',
      title: '1. Baseline Workload',
      desc: 'Application operates on standard dedicated base allocations (e.g. 1 vCPU, 2 GB RAM).',
      baseLoad: 45,
      burstLoad: 0,
      status: 'Steady State Operating Normal',
      statusColor: 'text-emerald-400',
      badge: 'Baseline'
    },
    {
      id: 'spike',
      title: '2. Sudden Traffic Surge',
      desc: 'Flash sale or marketing campaign causes active concurrent users to double.',
      baseLoad: 100,
      burstLoad: 60,
      status: 'Elastic Headroom Absorbing Traffic',
      statusColor: 'text-cyan-400',
      badge: 'Bursting Active'
    },
    {
      id: 'stabilized',
      title: '3. Return to Normalcy',
      desc: 'Traffic subsides; temporary burst capacity is automatically released back to the pool.',
      baseLoad: 50,
      burstLoad: 0,
      status: 'Capacity Released Cleanly',
      statusColor: 'text-emerald-400',
      badge: 'Normalcy Restored'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];

  return (
    <div className="rounded-[36px] bg-[rgba(10,5,20,0.88)] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="size-2.5 rounded-full bg-cyan-400/30 ring-1 ring-cyan-400/50 flex items-center justify-center">
                <span className="size-1.5 rounded-full bg-cyan-400"></span>
              </span>
            </span>
            <h3 className="text-base font-bold text-white font-display">
              Conceptual Burst Capacity Visualizer
            </h3>
          </div>
          <p className="text-xs text-white/70 mt-1 font-sans">
            How Hextorq Flexible Hosting absorbs sudden traffic spikes when shared capacity allows.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-8 px-3 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center space-x-1.5 transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isPlaying ? 'animate-spin' : ''}`} />
            <span>{isPlaying ? 'Auto-Playing' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Interactive Gauge Meters (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Base Allocation Bar without redundant logos */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-white flex items-center space-x-2">
                <span className="size-1.5 rounded-full bg-slate-400"></span>
                <span>Base Dedicated Resource Allocation</span>
              </span>
              <span className="text-white font-bold">{current.baseLoad}%</span>
            </div>
            <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/10 p-0.5">
              <div
                className="h-full bg-white rounded-full transition-all duration-700 ease-out"
                style={{ width: `${current.baseLoad}%` }}
              ></div>
            </div>
          </div>

          {/* Burst Buffer Bar without redundant logos */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-white flex items-center space-x-2">
                <span className="size-1.5 rounded-full bg-cyan-400"></span>
                <span>Available Shared Burst Headroom</span>
              </span>
              <span className="text-cyan-300 font-bold">
                {current.burstLoad > 0 ? `+${current.burstLoad}% Headroom In Use` : 'Idle / Standby'}
              </span>
            </div>
            <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/10 p-0.5">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  current.burstLoad > 0
                    ? 'nexa-grad-a-bg shadow-[0_0_12px_rgba(28,78,255,0.4)]'
                    : 'bg-transparent'
                }`}
                style={{ width: `${current.burstLoad}%` }}
              ></div>
            </div>
          </div>

          {/* Real-time State Card */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-white/60 tracking-[0.14em]">Current Lifecycle Phase</span>
              <div className={`text-sm font-bold font-display ${current.statusColor}`}>
                {current.status}
              </div>
            </div>

            <div className="text-right font-mono text-xs text-white/70">
              <div>Phase {activeStep + 1} of {steps.length}</div>
              <div className="text-white font-semibold">{current.title}</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-white/60 bg-white/5 p-3 rounded-xl border border-white/10 leading-relaxed">
            <strong className="text-white">Note:</strong> Visual demonstration only. Additional shared capacity is made available when underlying infrastructure capacity allows.
          </div>
        </div>

        {/* Right Step Timeline Navigation (5 Cols) */}
        <div className="lg:col-span-5 space-y-2">
          {steps.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              className={`w-full p-3.5 rounded-xl text-left transition-all border flex items-start space-x-3 ${
                activeStep === idx
                  ? 'bg-white/10 border-white/30 shadow-md'
                  : 'bg-black/20 border-white/5 hover:border-white/15 opacity-70 hover:opacity-100'
              }`}
            >
              <div className={`size-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 ${
                activeStep === idx
                  ? 'bg-white text-slate-950 font-bold'
                  : 'bg-white/10 text-white/70'
              }`}>
                {idx + 1}
              </div>
              <div className="space-y-0.5">
                <div className={`text-xs font-bold font-display ${activeStep === idx ? 'text-white' : 'text-white/70'}`}>
                  {s.title}
                </div>
                <div className="text-[11px] text-white/60 font-sans leading-tight">
                  {s.desc}
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
