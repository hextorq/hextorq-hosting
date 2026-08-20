import React from 'react';
import { 
  HardDrive, 
  Layers, 
  TrendingUp, 
  Terminal, 
  ShieldCheck, 
  Headphones 
} from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      title: 'Gen4 NVMe Storage',
      subtitle: 'High IOPS performance arrays',
      icon: HardDrive,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/40 border-cyan-500/30'
    },
    {
      title: 'Application Focused',
      subtitle: '1 Frontend + 1 Backend native',
      icon: Layers,
      color: 'text-blue-400',
      bgColor: 'bg-blue-950/40 border-blue-500/30'
    },
    {
      title: 'Flexible Burst Options',
      subtitle: 'Dynamic surge absorption',
      icon: TrendingUp,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-950/40 border-indigo-500/30'
    },
    {
      title: 'Root Access on VPS',
      subtitle: '100% full server autonomy',
      icon: Terminal,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-950/40 border-emerald-500/30'
    },
    {
      title: 'Security Built In',
      subtitle: 'WAF & DDoS mitigation',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/40 border-cyan-500/30'
    },
    {
      title: '24/7 Expert Support',
      subtitle: 'Senior cloud engineers',
      icon: Headphones,
      color: 'text-blue-400',
      bgColor: 'bg-blue-950/40 border-blue-500/30'
    }
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-[#080C14]/90 py-8 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 group"
              >
                <div className={`w-9 h-9 rounded-xl ${item.bgColor} border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {item.subtitle}
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
