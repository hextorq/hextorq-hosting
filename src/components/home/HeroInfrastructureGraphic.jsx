import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Layers,
  Database,
  ArrowRightLeft
} from 'lucide-react';

export default function HeroInfrastructureGraphic() {
  const [cpuVal, setCpuVal] = useState(38);
  const [ramVal, setRamVal] = useState(46);
  const [reqPerSec, setReqPerSec] = useState(420);
  const [activeTab, setActiveTab] = useState('app'); // 'app' | 'topology'

  // Micro-fluctuations to make it feel realistically alive
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuVal(prev => {
        const delta = (Math.random() - 0.5) * 6;
        return Math.min(Math.max(Math.round(prev + delta), 28), 64);
      });
      setRamVal(prev => {
        const delta = (Math.random() - 0.5) * 4;
        return Math.min(Math.max(Math.round(prev + delta), 40), 58);
      });
      setReqPerSec(prev => {
        const delta = (Math.random() - 0.5) * 30;
        return Math.min(Math.max(Math.round(prev + delta), 350), 580);
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Glow aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-600/30 rounded-3xl blur-2xl opacity-60"></div>

      {/* Main Console Box */}
      <div className="relative rounded-2xl bg-[#090E17]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Console Bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-[11px] font-mono font-medium text-slate-300">
              hextorq://node-in-mum-01.internal
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>APPLICATION ONLINE</span>
            </span>
          </div>
        </div>

        {/* Console Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Dual Architecture Core: Frontend + Backend */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Frontend Block */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-500/40 transition-all relative group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-mono">FRONTEND</span>
                    <p className="text-[10px] text-slate-400 font-mono">React / Vite</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-white/[0.04]">
                <span>Port: 3000 (HTTPS)</span>
                <span className="text-cyan-300">Edge Routed</span>
              </div>
            </div>

            {/* Backend Block */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-blue-500/20 hover:border-blue-500/40 transition-all relative group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-mono">BACKEND</span>
                    <p className="text-[10px] text-slate-400 font-mono">Node.js API</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-white/[0.04]">
                <span>Port: 8080 (IPC Proxy)</span>
                <span className="text-blue-300">Healthy</span>
              </div>
            </div>
          </div>

          {/* Animated Connecting Bus / Network Visual */}
          <div className="relative py-2 px-3 rounded-xl bg-slate-950/80 border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center space-x-2">
              <ArrowRightLeft className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-slate-400">Inter-Container Loop:</span>
              <span className="text-white font-semibold">&lt; 0.2ms zero-copy pipe</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-cyan-400 font-semibold">{reqPerSec} req/s</span>
            </div>
          </div>

          {/* Live Telemetry Gauges */}
          <div className="grid grid-cols-3 gap-3">
            {/* CPU Gauge */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 flex items-center space-x-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CPU</span>
                </span>
                <span className="text-white font-bold">{cpuVal}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700" 
                  style={{ width: `${cpuVal}%` }}
                ></div>
              </div>
              <span className="text-[9px] font-mono text-slate-400 block truncate">
                2 vCPU Allocated
              </span>
            </div>

            {/* RAM Gauge */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span>RAM</span>
                </span>
                <span className="text-white font-bold">{ramVal}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-700" 
                  style={{ width: `${ramVal}%` }}
                ></div>
              </div>
              <span className="text-[9px] font-mono text-slate-400 block truncate">
                0.92 / 2.0 GB DDR5
              </span>
            </div>

            {/* Storage Gauge */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 flex items-center space-x-1">
                  <HardDrive className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Storage</span>
                </span>
                <span className="text-white font-bold">32%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400" 
                  style={{ width: '32%' }}
                ></div>
              </div>
              <span className="text-[9px] font-mono text-slate-400 block truncate">
                8.0 / 25 GB NVMe
              </span>
            </div>
          </div>

          {/* Infrastructure Health Footer */}
          <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
            <div className="flex items-center space-x-2">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Region:</span>
              <span className="text-white font-semibold">India (Asia-South)</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Network:</span>
              <span className="text-emerald-400 font-semibold">Healthy (12ms RTT)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
