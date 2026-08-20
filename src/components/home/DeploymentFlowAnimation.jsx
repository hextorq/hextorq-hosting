import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Sparkles,
  Layers,
  Server,
  Zap,
  Activity,
  Sliders
} from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';

export default function DeploymentFlowAnimation() {
  const [activeStep, setActiveStep] = useState(1);
  const { openDeployModal } = useDeployModal();

  const steps = [
    {
      num: 1,
      title: 'Choose Hosting',
      tagline: 'Plan Sizing & Capacity',
      desc: 'Select Fixed Shared for predictable budgets, Flexible Burst for variable traffic, or dedicated VPS for full server autonomy.',
      icon: Sliders,
      details: ['Fixed, Flexible or VPS', 'Select hardware specs', 'Choose global data center']
    },
    {
      num: 2,
      title: 'Connect Frontend',
      tagline: 'SPA / Static Framework',
      desc: 'Link your React, Vite, Next.js, Vue, Svelte, or static frontend. Build commands and routing configurations are recognized automatically.',
      icon: Layers,
      details: ['SPA & SSR targets', 'Automatic build output handling', 'Zero reverse proxy config']
    },
    {
      num: 3,
      title: 'Connect Backend',
      tagline: 'API / Microservice Runtime',
      desc: 'Connect your Node.js, Python, PHP, or Go backend service. Internal proxy ports and service bridges are bound seamlessly.',
      icon: Server,
      details: ['Node, Python, PHP, Go support', 'Internal service networking', 'Environment variables vault']
    },
    {
      num: 4,
      title: 'Deploy',
      tagline: 'Automated Container Spin-up',
      desc: 'Your application is containerized and deployed with automated SSL certificates on your custom domain.',
      icon: Zap,
      details: ['Automated Let\'s Encrypt SSL', 'Zero-downtime rollouts', 'Edge routing enabled']
    },
    {
      num: 5,
      title: 'Monitor & Scale',
      tagline: 'Realtime Telemetry & Bursts',
      desc: 'Observe realtime CPU and memory usage, review deployment history, and scale compute as your user base expands.',
      icon: Activity,
      details: ['Live resource metrics', 'Burst activity indicators', 'Single-click plan upgrades']
    }
  ];

  // Auto progression
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = steps[activeStep - 1];
  const Icon = current.icon;

  return (
    <section className="py-20 lg:py-28 relative bg-[#06090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEPLOYMENT WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Deploy in Five Simple Steps.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Connect your frontend and backend as one application without manual server setup or complex infrastructure maintenance.
          </p>
        </div>

        {/* 5-Step Pipeline Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {steps.map((s) => {
            const isSelected = activeStep === s.num;
            const isCompleted = activeStep > s.num;
            const StepIcon = s.icon;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(s.num)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/50 shadow-md text-white'
                    : isCompleted
                    ? 'border-white/[0.08] bg-slate-900/60 text-slate-300'
                    : 'border-white/[0.04] bg-slate-950/40 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    isSelected
                      ? 'bg-cyan-500 text-black'
                      : isCompleted
                      ? 'bg-emerald-500 text-black'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.num}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Step {s.num}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold font-display text-white truncate">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-white/[0.08] text-xs font-mono text-cyan-300">
              <span>{current.tagline}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {current.desc}
            </p>

            {/* Checklist */}
            <div className="space-y-2 pt-2">
              {current.details.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <button
                type="button"
                onClick={() => openDeployModal(null, 'app')}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 flex items-center space-x-2"
              >
                <span>Try Deployment Simulator</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1))}
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual Representation (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-950 border border-white/[0.06] flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Workflow Phase {current.num} of 5
              </span>
              <h4 className="text-lg font-bold font-display text-white mt-1">
                {current.title}
              </h4>
            </div>
            <p className="text-xs text-slate-400 max-w-xs font-sans">
              Streamlined configuration without technical overhead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
