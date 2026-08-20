import React from 'react';
import { 
  Layers, 
  TrendingUp, 
  Zap, 
  Tag, 
  Server, 
  Headphones,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyHextorq() {
  const reasons = [
    {
      title: 'Application-Focused Hosting',
      desc: 'Engineered from the ground up to host one frontend and one backend as a unified containerized project, replacing outdated cPanel directories.',
      icon: Layers,
      accent: 'text-cyan-400',
      border: 'border-cyan-500/20'
    },
    {
      title: 'Fixed or Flexible Resource Models',
      desc: 'Pick strictly defined quotas for predictable monthly billing, or flexible capacity that absorbs unexpected traffic surges effortlessly.',
      icon: TrendingUp,
      accent: 'text-blue-400',
      border: 'border-blue-500/20'
    },
    {
      title: 'Simple Deployment',
      desc: 'Seamless connections for React, Next.js, Node.js, Python, PHP, and Go with automated Let\'s Encrypt SSL and zero reverse proxy configuration.',
      icon: Zap,
      accent: 'text-indigo-400',
      border: 'border-indigo-500/20'
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear upfront pricing in INR (₹) with zero renewal multipliers, no hidden upgrade traps, and transparent resource limit policies.',
      icon: Tag,
      accent: 'text-emerald-400',
      border: 'border-emerald-500/20'
    },
    {
      title: 'VPS Scalability',
      desc: 'Start with shared application hosting and seamlessly transition to dedicated root-access VPS infrastructure as your compute needs grow.',
      icon: Server,
      accent: 'text-cyan-400',
      border: 'border-cyan-500/20'
    },
    {
      title: 'Technical Support',
      desc: 'Direct communication with knowledgeable infrastructure engineers via hosting@hextorq.tech for architecture advice and troubleshooting.',
      icon: Headphones,
      accent: 'text-blue-400',
      border: 'border-blue-500/20'
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#070B14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE HEXTORQ DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Hosting That Understands Modern Applications.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Built for developers who value clarity, predictability, and reliable cloud performance.
          </p>
        </div>

        {/* 6-Reason Editorial Layout Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#090E18] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-white/[0.06] flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                    <Icon className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.04] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-cyan-400 font-medium">Standard Included</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
