import React, { useState, useEffect, useRef } from 'react';
import { Activity, ArrowRight, CheckCircle2, RefreshCw, Zap, TrendingUp, Cpu, Layers } from 'lucide-react';

export default function BurstVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);

  const steps = [
    {
      id: 'normal',
      title: 'Normal Workload',
      desc: 'Regular traffic flow. Your application runs comfortably within baseline resources.',
      baseLoad: 40,
      burstLoad: 0,
      status: 'Baseline Operating',
      statusColor: 'text-foreground'
    },
    {
      id: 'base',
      title: 'Base Resources Active',
      desc: 'CPU & RAM compute nodes supply dedicated baseline capacity.',
      baseLoad: 80,
      burstLoad: 0,
      status: 'Near Base Threshold',
      statusColor: 'text-brand-cyan'
    },
    {
      id: 'spike',
      title: 'Traffic Surge Detected',
      desc: 'Sudden influx of visitors or API requests exceeds standard base threshold.',
      baseLoad: 100,
      burstLoad: 35,
      status: 'Spike Ingress',
      statusColor: 'text-brand-amber'
    },
    {
      id: 'burst-active',
      title: 'Available Shared Capacity Engaged',
      desc: 'Platform automatically draws from available shared pool to absorb the traffic spike.',
      baseLoad: 100,
      burstLoad: 75,
      status: 'Elastic Burst Engaged',
      statusColor: 'text-brand-emerald'
    },
    {
      id: 'normalizing',
      title: 'Traffic Normalizes',
      desc: 'Traffic volume subsides back down to standard operating levels.',
      baseLoad: 60,
      burstLoad: 20,
      status: 'Cooling Down',
      statusColor: 'text-brand-cyan'
    },
    {
      id: 'released',
      title: 'Extra Capacity Released',
      desc: 'Temporary burst resources are cleanly released back to the shared pool.',
      baseLoad: 35,
      burstLoad: 0,
      status: 'Returned to Baseline',
      statusColor: 'text-foreground'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];

  return (
    <div ref={containerRef} className="p-6 sm:p-8 rounded-[1.75rem] bg-card border border-border shadow-elevated relative overflow-hidden">
      
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex items-center space-x-2">
            <span className="size-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <h3 className="text-base font-bold text-foreground font-display">
              Conceptual Burst Capacity Visualizer
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            How Hextorq Flexible Hosting absorbs sudden traffic spikes when shared capacity allows.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-8 px-3 rounded-lg text-xs font-mono bg-muted border border-border text-foreground hover:bg-muted/80 flex items-center space-x-1.5 transition-colors"
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
          
          {/* Base Allocation Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-foreground flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Base Dedicated Resource Allocation</span>
              </span>
              <span className="text-foreground font-bold">{current.baseLoad}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden border border-border p-0.5">
              <div
                className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                style={{ width: `${current.baseLoad}%` }}
              ></div>
            </div>
          </div>

          {/* Burst Buffer Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-foreground flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Available Shared Burst Headroom</span>
              </span>
              <span className="text-brand-cyan font-bold">
                {current.burstLoad > 0 ? `+${current.burstLoad}% Headroom In Use` : 'Idle / Standby'}
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden border border-border p-0.5">
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
          <div className="p-4 rounded-2xl bg-muted/50 border border-border flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-[0.14em]">Current Lifecycle Phase</span>
              <div className={`text-sm font-bold font-display ${current.statusColor}`}>
                {current.status}
              </div>
            </div>

            <div className="text-right font-mono text-xs text-muted-foreground">
              <div>Phase {activeStep + 1} of {steps.length}</div>
              <div className="text-foreground font-semibold">{current.title}</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-muted-foreground bg-muted/30 p-3 rounded-xl border border-border leading-relaxed">
            ℹ️ <strong className="text-foreground">Note:</strong> Visual demonstration only. Additional shared capacity is made available when underlying infrastructure capacity allows.
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
              className={`w-full p-3 rounded-xl text-left transition-all border flex items-start space-x-3 ${
                activeStep === idx
                  ? 'bg-muted border-primary/50 shadow-sm'
                  : 'bg-card/60 border-border hover:border-border/80 opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`size-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 ${
                activeStep === idx
                  ? 'bg-primary text-primary-foreground font-bold'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {idx + 1}
              </div>
              <div className="space-y-0.5">
                <div className={`text-xs font-bold font-display ${activeStep === idx ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s.title}
                </div>
                <div className="text-[11px] text-muted-foreground font-sans leading-tight">
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
