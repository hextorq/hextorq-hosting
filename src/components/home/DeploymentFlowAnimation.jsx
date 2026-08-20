import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  ArrowRight, 
  GitBranch, 
  Cpu, 
  Layers, 
  Play, 
  Activity,
  Sparkles,
  Server
} from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';

export default function DeploymentFlowAnimation() {
  const [activeStep, setActiveStep] = useState(1);
  const { openDeployModal } = useDeployModal();

  const steps = [
    {
      num: 1,
      title: 'Choose Hosting',
      desc: 'Select Fixed Shared, Flexible Burst, or dedicated Root VPS based on your workload needs.',
      tag: 'Step 1: Plan Sizing',
      codeSnippet: 'hextorq init --plan=flex-growth --region=in-mum'
    },
    {
      num: 2,
      title: 'Connect Frontend',
      desc: 'Link your React, Vite, Next.js, or static repository. We auto-detect build commands & environment.',
      tag: 'Step 2: Frontend Sync',
      codeSnippet: 'hextorq link frontend --repo=github.com/org/client-ui --framework=vite'
    },
    {
      num: 3,
      title: 'Connect Backend',
      desc: 'Connect your Node.js, Python, PHP, or Go API. Reverse proxy and ports are bound automatically.',
      tag: 'Step 3: Backend Runtime',
      codeSnippet: 'hextorq link backend --repo=github.com/org/client-api --runtime=node20'
    },
    {
      num: 4,
      title: 'Deploy',
      desc: 'Container sandbox is provisioned in under 45 seconds with automated Let\'s Encrypt SSL certificates.',
      tag: 'Step 4: Provisioning',
      codeSnippet: 'hextorq deploy --auto-ssl --waf-enable'
    },
    {
      num: 5,
      title: 'Monitor & Scale',
      desc: 'Track realtime CPU, memory bursts, request latencies, and logs directly in your web console.',
      tag: 'Step 5: Telemetry',
      codeSnippet: 'hextorq telemetry --stream-logs --burst-metrics'
    }
  ];

  // Auto-cycle through steps if user is idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = steps[activeStep - 1];

  return (
    <section className="py-20 lg:py-28 relative bg-[#070C15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEVELOPER WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Deploy Your Application in 5 Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            From Git repository to global Anycast HTTPS edge in under 60 seconds — without manual Nginx configuration.
          </p>
        </div>

        {/* Step Numbers Pipeline Navigation */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-10">
          {steps.map((s) => {
            const isSelected = activeStep === s.num;
            const isCompleted = activeStep > s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(s.num)}
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                    : isCompleted
                    ? 'border-emerald-500/30 bg-slate-900/60 text-slate-300'
                    : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    isSelected
                      ? 'bg-cyan-400 text-black'
                      : isCompleted
                      ? 'bg-emerald-500 text-black'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.num}
                  </span>
                  <span className="hidden md:inline-block text-[10px] font-mono text-slate-400">
                    Step 0{s.num}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white font-display truncate">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Preview Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-[#090F1A] border border-cyan-500/30 shadow-2xl">
          
          {/* Left Description (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              {current.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {current.desc}
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              <button
                type="button"
                onClick={() => openDeployModal(null, 'app')}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Simulate Deployment Now</span>
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

          {/* Right Simulated Terminal Canvas (6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-950 border border-white/[0.08] p-5 font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>hextorq-cli — zsh</span>
              </div>
              <span className="text-emerald-400 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active</span>
              </span>
            </div>

            <div className="space-y-2 text-slate-300">
              <p className="text-slate-400"># Command preview for Step {current.num}:</p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">
                $ {current.codeSnippet}
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                › Initializing secure handshake with edge hypervisor...<br />
                › Generating internal SSL bridge for container ports 3000 & 8080...<br />
                <span className="text-emerald-400 font-semibold">› Phase {current.num} verified: Success.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
