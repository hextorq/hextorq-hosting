import React from 'react';
import { 
  Layers, 
  TrendingUp, 
  HardDrive, 
  Terminal, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      title: 'Application-Focused Hosting',
      desc: '1 Frontend + 1 Backend native',
      icon: Layers
    },
    {
      title: 'Fixed & Flexible Resources',
      desc: 'Predictable quotas or adaptive burst',
      icon: TrendingUp
    },
    {
      title: 'NVMe Storage',
      desc: 'High-speed solid-state arrays',
      icon: HardDrive
    },
    {
      title: 'Root Access on VPS',
      desc: 'Full virtual server autonomy',
      icon: Terminal
    },
    {
      title: 'Security Built In',
      desc: 'SSL, WAF & DDoS defense',
      icon: ShieldCheck
    },
    {
      title: 'Developer-Friendly Deployment',
      desc: 'Fast Git & runtime workflows',
      icon: Zap
    }
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-[#070B14]/80 py-7 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 group"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
