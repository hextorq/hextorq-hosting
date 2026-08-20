import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  RefreshCw, 
  Cpu, 
  HardDrive,
  Activity,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';

export default function ResourceBurstInteractive() {
  const [trafficLoad, setTrafficLoad] = useState(30); // 0 to 100%
  const [isSurging, setIsSurging] = useState(false);
  const { openDeployModal } = useDeployModal();

  // Dynamic calculated metrics based on slider
  const isBursting = trafficLoad > 50;
  
  // Base fixed allocation: 2 vCPU, 2.0 GB RAM
  const baseCpu = 2.0;
  const baseRam = 2.0;

  // Real-time demand values
  const currentCpuDemand = (baseCpu + (trafficLoad / 100) * 4.0).toFixed(1); // 2.0 to 6.0 vCPU
  const currentRamDemand = (baseRam + (trafficLoad / 100) * 4.2).toFixed(1); // 2.0 to 6.2 GB RAM
  const activeRequests = Math.round(500 + trafficLoad * 145);

  const simulateTrafficSurge = () => {
    setIsSurging(true);
    let target = 95;
    setTrafficLoad(target);
    setTimeout(() => {
      // Return gradually
      const returnInterval = setInterval(() => {
        setTrafficLoad(prev => {
          if (prev <= 35) {
            clearInterval(returnInterval);
            setIsSurging(false);
            return 30;
          }
          return prev - 10;
        });
      }, 400);
    }, 4500);
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#060A10]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIGNATURE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            How Adaptive Resource Bursting Works
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Your application gets its dedicated baseline resources first. When viral traffic arrives, our hypervisor seamlessly channels available shared cluster capacity — zero config, zero timeouts.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Control & Explanation (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>Simulated Traffic Load</span>
                  </label>
                  <span className="text-sm font-mono font-bold text-cyan-300">
                    {trafficLoad}% Surge
                  </span>
                </div>
                
                {/* Range Slider */}
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={trafficLoad}
                  onChange={(e) => setTrafficLoad(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>Baseline (Normal)</span>
                  <span>Moderate Spike</span>
                  <span className="text-amber-400 font-semibold">Maximum Surge</span>
                </div>
              </div>

              {/* Trigger Instant Surge Button */}
              <button
                type="button"
                onClick={simulateTrafficSurge}
                disabled={isSurging}
                className="w-full py-3 px-4 rounded-xl text-xs font-mono font-semibold tracking-wide text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 shadow-lg shadow-orange-500/20 flex items-center justify-center space-x-2 transition-all active:scale-98 disabled:opacity-50"
              >
                <Zap className="w-4 h-4 text-yellow-200 animate-bounce" />
                <span>{isSurging ? 'Simulating High Surge (Returning...)' : 'Trigger 95% Flash Surge Spike'}</span>
              </button>

              {/* Step-by-Step State Flow */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Real-Time Execution Pipeline:
                </h4>
                
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-[10px] text-cyan-400">1</span>
                    <span>Application uses included base resources (2 vCPU / 2GB)</span>
                  </div>
                  <div className={`flex items-center space-x-2 transition-colors ${isBursting ? 'text-amber-300 font-semibold' : 'text-slate-400'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isBursting ? 'bg-amber-950 border border-amber-500 text-amber-300' : 'bg-slate-900 text-slate-400'}`}>2</span>
                    <span>Surge detected: Demand increases to {currentCpuDemand} vCPU</span>
                  </div>
                  <div className={`flex items-center space-x-2 transition-colors ${isBursting ? 'text-emerald-300 font-semibold' : 'text-slate-400'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isBursting ? 'bg-emerald-950 border border-emerald-500 text-emerald-300' : 'bg-slate-900 text-slate-400'}`}>3</span>
                    <span>Node verifies idle cluster capacity & unlocks burst buffer</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-[10px] text-cyan-400">4</span>
                    <span>Traffic normalizes: Extra capacity returns to pool</span>
                  </div>
                </div>
              </div>

              {/* Policy Note */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] flex items-start space-x-2.5 text-[11px] text-slate-400 leading-relaxed">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  No hard ceiling during spikes while shared capacity is available. Fair-use safeguards protect overall cluster integrity.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Live Dynamic Visualizer Canvas (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Visualizer Frame */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090F1B] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              
              {/* Header Status */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${isBursting ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></div>
                  <span className="font-mono text-xs font-semibold text-white">
                    {isBursting ? 'STATE: ADAPTIVE BURST EXPANSION ACTIVE' : 'STATE: NORMAL BASELINE OPERATION'}
                  </span>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                  {activeRequests.toLocaleString()} req/min
                </div>
              </div>

              {/* Dynamic Resource Meters */}
              <div className="py-6 space-y-6">
                {/* CPU Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-300 flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold text-white">CPU ALLOCATION</span>
                      <span className="text-[10px] text-slate-400 font-normal">(Base: 2.0 vCPU)</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      {isBursting && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40">
                          +{(currentCpuDemand - baseCpu).toFixed(1)} vCPU Burst
                        </span>
                      )}
                      <span className="font-bold text-white text-sm">
                        {currentCpuDemand} vCPU
                      </span>
                    </div>
                  </div>

                  {/* Multi-segmented Bar */}
                  <div className="h-4 bg-slate-950 rounded-lg p-0.5 flex items-center border border-slate-800 overflow-hidden">
                    {/* Base segment */}
                    <div 
                      className="h-full bg-cyan-500 rounded transition-all duration-300"
                      style={{ width: `${Math.min(trafficLoad, 40) * 1.25}%` }}
                    ></div>
                    {/* Burst segment */}
                    {isBursting && (
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded ml-1 transition-all duration-300 animate-pulse"
                        style={{ width: `${(trafficLoad - 40) * 0.9}%` }}
                      ></div>
                    )}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>0 vCPU</span>
                    <span className="text-cyan-400">2.0 Base</span>
                    <span className="text-amber-400">Up to 6.0 Burstable</span>
                  </div>
                </div>

                {/* RAM Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-300 flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      <span className="font-bold text-white">MEMORY (RAM)</span>
                      <span className="text-[10px] text-slate-400 font-normal">(Base: 2.0 GB DDR5)</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      {isBursting && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40">
                          +{(currentRamDemand - baseRam).toFixed(1)} GB Burst
                        </span>
                      )}
                      <span className="font-bold text-white text-sm">
                        {currentRamDemand} GB
                      </span>
                    </div>
                  </div>

                  {/* Multi-segmented Bar */}
                  <div className="h-4 bg-slate-950 rounded-lg p-0.5 flex items-center border border-slate-800 overflow-hidden">
                    {/* Base segment */}
                    <div 
                      className="h-full bg-blue-500 rounded transition-all duration-300"
                      style={{ width: `${Math.min(trafficLoad, 40) * 1.25}%` }}
                    ></div>
                    {/* Burst segment */}
                    {isBursting && (
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-amber-500 rounded ml-1 transition-all duration-300 animate-pulse"
                        style={{ width: `${(trafficLoad - 40) * 0.9}%` }}
                      ></div>
                    )}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>0 GB</span>
                    <span className="text-blue-400">2.0 GB Base</span>
                    <span className="text-amber-400">Up to 6.2 GB Burstable</span>
                  </div>
                </div>
              </div>

              {/* Live Outcome Comparison Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-red-500/20">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-red-400 font-semibold mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Traditional Fixed Limit</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {isBursting ? '503 Service Unavailable / Request timeouts occur at 2.0 vCPU limit.' : 'Works normally during baseline traffic.'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-emerald-500/30 bg-emerald-950/10">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-400 font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Hextorq Flexible Burst</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    {isBursting ? 'Zero dropped requests! Application effortlessly absorbs 100% of user traffic.' : 'Zero idle waste; ready to scale instantly on demand.'}
                  </p>
                </div>
              </div>

              {/* Bottom CTA within Visualizer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Included on all Flex Launch, Flex Growth & Flex Business plans.
                </span>
                <button
                  type="button"
                  onClick={() => openDeployModal(null, 'app')}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 flex items-center space-x-1.5 shadow-md shadow-cyan-500/20"
                >
                  <span>Deploy Flex Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
