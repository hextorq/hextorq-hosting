import React, { useState } from 'react';
import { 
  Globe, 
  CheckCircle2, 
  Zap,
  Sparkles
} from 'lucide-react';
import { DATA_CENTERS } from '../../data/locations';
import { useDeployModal } from '../../context/DeployModalContext';

export default function DataCenterMapInteractive() {
  const [selectedLocation, setSelectedLocation] = useState(DATA_CENTERS[0]); // Default India
  const { openDeployModal } = useDeployModal();

  return (
    <section id="locations" className="py-20 lg:py-28 relative bg-[#06090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL REGIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Run Closer to Your Users.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Deploy your applications and VPS servers in strategic regional data centers across Asia, Europe, and North America.
          </p>
        </div>

        {/* Interactive Map Visual + Details Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Minimal World Map (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Region Availability
              </span>
              <span className="text-xs font-mono text-cyan-300">
                5 Global Locations
              </span>
            </div>

            {/* Stylized Vector World Map */}
            <div className="relative w-full aspect-[16/9] bg-[#05080E] rounded-2xl border border-white/[0.06] overflow-hidden flex items-center justify-center">
              
              {/* SVG Continents Outline */}
              <svg className="w-full h-full text-slate-800/80" viewBox="0 0 1000 500" fill="none" stroke="currentColor" strokeWidth="1.2">
                {/* Americas */}
                <path d="M150,80 Q220,90 280,140 Q320,200 290,260 L260,330 Q280,420 230,480 L200,420 Q160,320 180,240 Q130,160 150,80 Z" fill="currentColor" fillOpacity="0.12" />
                {/* Eurasia */}
                <path d="M440,70 Q550,60 700,90 Q850,120 900,200 Q860,300 780,320 Q700,300 640,360 Q560,340 500,240 L440,160 Z" fill="currentColor" fillOpacity="0.12" />
                {/* Africa */}
                <path d="M460,180 Q540,190 560,260 Q570,360 500,440 Q440,360 430,280 Z" fill="currentColor" fillOpacity="0.12" />
                {/* Australia */}
                <path d="M780,350 Q860,340 880,410 Q830,460 760,420 Z" fill="currentColor" fillOpacity="0.12" />

                {/* Subtle connecting lines between available regions */}
                <line x1="260" y1="190" x2="475" y2="155" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
                <line x1="475" y1="155" x2="510" y2="165" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
                <line x1="510" y1="165" x2="685" y2="260" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
                <line x1="685" y1="260" x2="775" y2="305" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
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
                      <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border-2 transition-all ${
                        isSelected 
                          ? 'bg-cyan-400 border-white shadow-lg shadow-cyan-400/50 scale-125' 
                          : 'bg-slate-900 border-cyan-400/70 group-hover:scale-110'
                      }`}>
                        <div className="w-1 h-1 rounded-full bg-black"></div>
                      </div>
                      
                      {/* Tooltip on pin */}
                      <span className={`absolute -top-7 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-mono transition-opacity ${
                        isSelected 
                          ? 'bg-slate-900 text-cyan-300 border border-white/[0.1] opacity-100' 
                          : 'bg-black/90 text-slate-300 opacity-0 group-hover:opacity-100'
                      }`}>
                        {loc.flag} {loc.name.split(',')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Region Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
              {DATA_CENTERS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-2.5 rounded-2xl border text-left text-xs font-mono transition-all ${
                    selectedLocation.id === loc.id
                      ? 'border-cyan-500 bg-cyan-950/40 text-white font-bold'
                      : 'border-white/[0.06] bg-slate-950/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-base">{loc.flag}</div>
                  <div className="truncate mt-0.5">{loc.name.split(',')[0]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Region Telemetry Pane (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl space-y-6">
            
            <div className="flex items-start justify-between border-b border-white/[0.06] pb-4">
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
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                {selectedLocation.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {selectedLocation.description}
            </p>

            {/* Facility Highlights */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Region Features:
              </span>
              <ul className="space-y-2 text-xs text-slate-300 font-sans">
                {selectedLocation.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => openDeployModal(null, 'app')}
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 flex items-center justify-center space-x-2 transition-all shadow-md shadow-cyan-500/20"
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
