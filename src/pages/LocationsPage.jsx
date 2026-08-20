import React from 'react';
import SEO from '../components/common/SEO';
import DataCenterMapInteractive from '../components/home/DataCenterMapInteractive';
import CtaBanner from '../components/home/CtaBanner';
import { DATA_CENTERS } from '../data/locations';
import { Globe, CheckCircle2 } from 'lucide-react';

export default function LocationsPage() {
  return (
    <>
      <SEO
        title="Global Data Center Regions — Hextorq Hosting"
        description="Deploy workloads across India, Singapore, Germany, the UK, and the US in carrier-neutral data centers."
        canonical="https://hosting.hextorq.tech/locations"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL REGIONAL NODES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Run Closer to <span className="text-gradient-cyan">Your Users</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Deploy your containers and virtual servers across strategic regional data centers in Asia, Europe, and North America.
          </p>
        </section>

        {/* Interactive Map Visualizer */}
        <DataCenterMapInteractive />

        {/* Facility Deep Dive Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Data Center Region Profiles
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Carrier interconnections with direct local peering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA_CENTERS.map((dc) => (
              <div
                key={dc.id}
                className="p-7 rounded-3xl bg-[#090E18] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 space-y-5 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{dc.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">{dc.name}</h3>
                      <span className="text-xs font-mono text-cyan-400">{dc.region}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    {dc.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  {dc.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Region Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                    {dc.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CtaBanner />
      </div>
    </>
  );
}
