import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

export default function BurstVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      id: 'baseline',
      stepNum: '01',
      title: '1. Baseline Operating State',
      shortTitle: 'Baseline Workload',
      desc: 'Application handles nominal traffic on standard dedicated allocations (e.g. 1 vCPU, 2 GB RAM).',
      baseLoad: 40,
      burstLoad: 0,
      latency: '22 ms',
      concurrency: '120 req/s',
      status: 'Steady State • Standard Allocation',
      statusColor: 'text-emerald-400',
      tag: 'Nominal Load'
    },
    {
      id: 'ingress-spike',
      stepNum: '02',
      title: '2. Traffic Ingress Surge',
      shortTitle: 'Ingress Spike',
      desc: 'Sudden inbound traffic influx (campaign launch or webhook wave) drives CPU usage past 85%.',
      baseLoad: 90,
      burstLoad: 25,
      latency: '29 ms',
      concurrency: '450 req/s',
      status: 'Spike Detected • Pre-allocating Headroom',
      statusColor: 'text-amber-400',
      tag: 'Surge Ingress'
    },
    {
      id: 'elastic-burst',
      stepNum: '03',
      title: '3. Elastic Headroom Activation',
      shortTitle: 'Headroom Active',
      desc: 'Node hypervisor dynamically unthrottles additional shared compute slices with zero process restarts.',
      baseLoad: 100,
      burstLoad: 75,
      latency: '34 ms',
      concurrency: '980 req/s',
      status: 'Elastic Headroom Absorbing Traffic',
      statusColor: 'text-cyan-400',
      tag: 'Burst Active'
    },
    {
      id: 'peak-stabilization',
      stepNum: '04',
      title: '4. Peak Throughput Absorption',
      shortTitle: 'Peak Stabilized',
      desc: 'Full concurrent peak load is absorbed smoothly with zero 502/504 gateway timeouts.',
      baseLoad: 100,
      burstLoad: 85,
      latency: '31 ms',
      concurrency: '1,200 req/s',
      status: '100% Throughput Maintained • Zero Drops',
      statusColor: 'text-cyan-300',
      tag: 'Peak Absorption'
    },
    {
      id: 'cooldown-release',
      stepNum: '05',
      title: '5. Cooldown & Pool Release',
      shortTitle: 'Capacity Released',
      desc: 'Traffic subsides to nominal levels; temporary burst resources are cleanly released back to cluster pool.',
      baseLoad: 45,
      burstLoad: 0,
      latency: '21 ms',
      concurrency: '135 req/s',
      status: 'Headroom De-allocated • Pool Recycled',
      statusColor: 'text-emerald-400',
      tag: 'Pool Recycled'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];

  return (
    <div className="rounded-[36px] bg-[rgba(10,5,20,0.88)] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      
      {/* Visualizer Header without dot */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h3 className="text-base font-bold text-white font-display">
            5-Step Elastic Burst Lifecycle Architecture
          </h3>
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
            <span>{isPlaying ? 'Auto-Advancing' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Interactive Gauge Meters (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Base Allocation Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-white">
                Base Dedicated Resource Allocation
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

          {/* Burst Buffer Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-white">
                Available Shared Burst Headroom
              </span>
              <span className="text-cyan-300 font-bold">
                {current.burstLoad > 0 ? `+${current.burstLoad}% Headroom Active` : 'Standby / Released'}
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

          {/* Real-time Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-[9px] font-mono uppercase text-white/50 block">STATUS</span>
              <div className={`text-xs font-bold font-mono mt-0.5 truncate ${current.statusColor}`}>
                {current.tag}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-[9px] font-mono uppercase text-white/50 block">LATENCY</span>
              <div className="text-xs font-bold font-mono text-white mt-0.5">
                {current.latency}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-[9px] font-mono uppercase text-white/50 block">THROUGHPUT</span>
              <div className="text-xs font-bold font-mono text-white mt-0.5">
                {current.concurrency}
              </div>
            </div>
          </div>

          {/* Real-time State Card */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-white/60 tracking-[0.14em]">Active Phase</span>
              <div className={`text-sm font-bold font-display ${current.statusColor}`}>
                {current.status}
              </div>
            </div>

            <div className="text-right font-mono text-xs text-white/70">
              <div>Phase {activeStep + 1} of 5</div>
              <div className="text-white font-semibold">{current.shortTitle}</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-white/60 bg-white/5 p-3 rounded-xl border border-white/10 leading-relaxed">
            <strong className="text-white">Note:</strong> Visual demonstration only. Additional shared capacity is made available when underlying infrastructure capacity allows.
          </div>
        </div>

        {/* Right 5-Step Timeline Navigation (5 Cols) */}
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
                {s.stepNum}
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
