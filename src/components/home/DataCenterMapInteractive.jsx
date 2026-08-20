import React, { useState } from 'react';
import { 
  Globe, 
  Activity, 
  ShieldCheck, 
  Server, 
  Wifi, 
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { DATA_CENTERS } from '../../data/locations';
import { useDeployModal } from '../../context/DeployModalContext';

export default function DataCenterMapInteractive() {
  const [selectedLocation, setSelectedLocation] = useState(DATA_CENTERS[0]); // Default India
  const { openDeployModal } = useDeployModal();

  return (
    <section id="locations" className="py-20 lg:py-28 relative bg-[#05080E] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL ANYCAST NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Run Closer to Your Users.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Deploy your containers and virtual servers across Tier-3+ and Tier-4 facilities directly peered with major internet exchanges for low-latency delivery.
          </p>
        </div>

        {/* Interactive Map Visual + Details Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive World Map Graphic (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#090F1A] border border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Active Edge Hypervisors
              </span>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>5 / 5 Global Nodes Operational</span>
              </div>
            </div>

            {/* SVG Dark Grid Map with Interactive Location Nodes */}
            <div className="relative w-full aspect-[16/9] bg-[#060A12] rounded-2xl border border-white/[0.06] overflow-hidden flex items-center justify-center">
              {/* Subtle Grid overlay */}
              <div className="absolute inset-0 bg-grid-subtle opacity-40"></div>

              {/* Simplified stylized vector world continents outline */}
              <svg className="w-full h-full text-slate-800/60" viewBox="0 0 1000 500" fill="none" stroke="currentColor" strokeWidth="1.2">
                {/* Americas */}
                <path d="M150,80 Q220,90 280,140 Q320,200 290,260 L260,330 Q280,420 230,480 L200,420 Q160,320 180,240 Q130,160 150,80 Z" fill="currentColor" fillOpacity="0.08" />
                {/* Eurasia */}
                <path d="M440,70 Q550,60 700,90 Q850,120 900,200 Q860,300 780,320 Q700,300 640,360 Q560,340 500,240 L440,160 Z" fill="currentColor" fillOpacity="0.08" />
                {/* Africa */}
                <path d="M460,180 Q540,190 560,260 Q570,360 500,440 Q440,360 430,280 Z" fill="currentColor" fillOpacity="0.08" />
                {/* Australia */}
                <path d="M780,350 Q860,340 880,410 Q830,460 760,420 Z" fill="currentColor" fillOpacity="0.08" />

                {/* Simulated BGP backbone connection rays */}
                <line x1="260" y1="190" x2="475" y2="155" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <line x1="475" y1="155" x2="510" y2="165" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                <line x1="510" y1="165" x2="685" y2="260" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="685" y1="260" x2="775" y2="305" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              </svg>

              {/* Data Center Hotspot Pins */}
              {DATA_CENTERS.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocation(loc)}
                    style={{ left: loc.coordinates.x, top: loc.coordinates.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`absolute w-8 h-8 rounded-full ${isSelected ? 'bg-cyan-400/30 animate-ping' : 'bg-blue-500/10'}`}></span>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border-2 transition-all ${
                        isSelected 
                          ? 'bg-cyan-400 border-white shadow-[0_0_15px_#22D3EE] scale-125' 
                          : 'bg-slate-900 border-cyan-400 group-hover:scale-110'
                      }`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      
                      {/* Tooltip on pin */}
                      <span className={`absolute -top-7 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-mono transition-opacity ${
                        isSelected 
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 opacity-100' 
                          : 'bg-black/80 text-slate-300 opacity-0 group-hover:opacity-100'
                      }`}>
                        {loc.flag} {loc.name.split(',')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick selector bar below map */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4">
              {DATA_CENTERS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all ${
                    selectedLocation.id === loc.id
                      ? 'border-cyan-400 bg-cyan-950/60 text-white shadow-md'
                      : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-base">{loc.flag}</div>
                  <div className="font-bold text-white truncate">{loc.name.split(',')[0]}</div>
                  <div className="text-[10px] text-cyan-400">{loc.ping} latency</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Data Center Telemetry Spec Box (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-6">
            
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-5">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{selectedLocation.flag}</span>
                  <h3 className="text-xl font-bold font-display text-white">
                    {selectedLocation.name}
                  </h3>
                </div>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Region: {selectedLocation.region}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Operational</span>
              </span>
            </div>

            {/* Spec Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400">Facility Standard</span>
                <p className="text-xs font-bold text-white mt-0.5">{selectedLocation.tier}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400">Carrier Uplink</span>
                <p className="text-xs font-bold text-cyan-300 mt-0.5">{selectedLocation.uplink}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400">Active Node Capacity</span>
                <p className="text-xs font-bold text-white mt-0.5">{selectedLocation.activeWorkloads}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400">Average RTT Ping</span>
                <p className="text-xs font-bold text-emerald-400 mt-0.5">{selectedLocation.ping}</p>
              </div>
            </div>

            {/* Key Edge Network Features */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Facility Features & Compliance:
              </span>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                {selectedLocation.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedLocation.compliance.map((comp, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                  {comp}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => openDeployModal(null, 'app')}
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>Deploy to {selectedLocation.name.split(',')[0]}</span>
              <Zap className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
