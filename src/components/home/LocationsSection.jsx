import React, { useState } from 'react';
import { Globe, MapPin, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { LOCATION_NODES, FIXED_SHARED_PLANS } from '../../data/hostingData';

export default function LocationsSection() {
  const [selectedNode, setSelectedNode] = useState(LOCATION_NODES[0]);
  const { openTrialModal } = useTrialModal();

  return (
    <section
      id="locations"
      data-slot="precision"
      className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      style={{
        backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full text-[rgb(26,11,84)]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-white/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-md backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>GLOBAL REACH</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Strategic Data Center <br />
            <span data-slot="gradient-text" className="nexa-grad-text">Global Deployment Regions.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Deploy your applications close to your visitors across key connectivity hubs in Asia, Europe, and North America.
          </p>
        </div>

        {/* Interactive Map Visual Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Graphic Canvas (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/90 border border-white/80 shadow-2xl relative overflow-hidden min-h-[360px] flex flex-col justify-between backdrop-blur-xl">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
              <span className="flex items-center space-x-2">
                <span className="size-2 rounded-full bg-emerald-500"></span>
                <span>Active Global Transit Routing</span>
              </span>
              <span>5 Core Regions</span>
            </div>

            {/* Map Representation with Interactive Node Pins */}
            <div className="relative z-10 my-6 sm:my-10 h-52 sm:h-64 rounded-2xl bg-slate-50 border border-slate-200 p-4 flex items-center justify-center">
              <svg className="w-full h-full text-slate-300" viewBox="0 0 1000 500" fill="none" stroke="currentColor">
                <path d="M150,120 Q200,100 250,150 T300,280 T200,380 T150,250 Z" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M450,100 Q500,80 550,140 T600,250 T520,380 T450,220 Z" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M650,120 Q750,100 850,180 T800,320 T700,360 Z" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Node Pins */}
              {LOCATION_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className="absolute transition-transform duration-300 hover:scale-125 focus:outline-none group"
                    style={{ left: node.coordinates.x, top: node.coordinates.y }}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`absolute size-5 rounded-full transition-opacity ${
                        isSelected ? 'bg-blue-600/20 animate-ping' : 'bg-transparent'
                      }`}></span>
                      <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-blue-600 border-white shadow-lg'
                          : 'bg-white border-slate-300 group-hover:border-blue-600'
                      }`}>
                        <div className={`size-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-blue-600'}`}></div>
                      </div>
                    </div>

                    <div className={`mt-1 text-[9px] font-mono px-2 py-0.5 rounded-full shadow-md whitespace-nowrap transition-all uppercase tracking-wider ${
                      isSelected
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}>
                      {node.flag} {node.city}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status line */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
              <span>Select any location for region specifications</span>
              <span className="text-blue-700 font-bold">Selected: {selectedNode.name}</span>
            </div>
          </div>

          {/* Location Details Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {LOCATION_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 sm:p-5 rounded-3xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-2xl scale-[1.02]'
                      : 'bg-white/80 border-white/60 hover:bg-white hover:border-slate-300 shadow-md backdrop-blur-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{node.flag}</span>
                      <div>
                        <h4 className="text-sm font-bold text-[rgb(26,11,84)] font-display">
                          {node.name} ({node.city})
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500">{node.description}</span>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[9px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                      {node.status}
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
                className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-lg active:scale-95 transition-all"
              >
                <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-3 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-2">
                  <span>Deploy in {selectedNode.name} (14-Day Free Trial)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
