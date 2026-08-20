import React from 'react';
import { 
  Layers, 
  TrendingUp, 
  Zap, 
  Server, 
  Tag, 
  Cpu, 
  Headphones, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function WhyHextorq() {
  const points = [
    {
      title: 'Application-Focused Hosting',
      desc: 'Instead of outdated cPanel directory limits, we bundle your frontend and backend as a unified containerized application.',
      icon: Layers,
      color: 'text-cyan-400',
      border: 'border-cyan-500/20'
    },
    {
      title: 'Adaptive Flexible Resources',
      desc: 'Say goodbye to sudden 503 traffic spike errors. Our hypervisor automatically allocates extra cluster headroom during viral rushes.',
      icon: TrendingUp,
      color: 'text-blue-400',
      border: 'border-blue-500/20'
    },
    {
      title: 'Git-Push Simple Deployment',
      desc: 'Push your commits to GitHub or GitLab. We build, containerize, and provision automated SSL in under 45 seconds.',
      icon: Zap,
      color: 'text-amber-400',
      border: 'border-amber-500/20'
    },
    {
      title: 'Seamless VPS Scalability',
      desc: 'Start with fixed shared application hosting. Upgrade to dedicated root-access VPS with zero data migration friction.',
      icon: Server,
      color: 'text-indigo-400',
      border: 'border-indigo-500/20'
    },
    {
      title: '100% Transparent Pricing',
      desc: 'Clear upfront pricing in INR (₹) and USD. No fake introductory traps, no hidden renewal multipliers, no lock-in.',
      icon: Tag,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20'
    },
    {
      title: 'Developer-First Infrastructure',
      desc: 'Enterprise Gen4 NVMe arrays, high-clock AMD EPYC & Intel Xeon compute, and multi-channel DDR5 ECC memory.',
      icon: Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/20'
    },
    {
      title: 'Direct Engineer Support',
      desc: 'Contact senior infrastructure engineers directly via email (hosting@hextorq.tech) or ticket queue with sub-1 hour response SLAs.',
      icon: Headphones,
      color: 'text-blue-400',
      border: 'border-blue-500/20'
    },
    {
      title: 'Platform-Wide Security',
      desc: 'Automated Let\'s Encrypt SSL, WAF packet sanitization, SSH key auth, isolated namespace sandboxes, and 500Gbps DDoS scrubbing.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20'
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#070B14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE HEXTORQ ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Hosting That Understands How Modern Applications Work.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Built from the ground up for developers who demand high availability, predictable costs, and raw computing power.
          </p>
        </div>

        {/* 8-Card Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-slate-900/60 border ${item.border} hover:border-white/20 transition-all duration-300 space-y-3 flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className={`w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center space-x-1.5 text-[10px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>Standard Included</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
