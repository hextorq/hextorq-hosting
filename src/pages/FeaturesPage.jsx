import React from 'react';
import SEO from '../components/common/SEO';
import { INFRASTRUCTURE_SPECS } from '../data/featuresData';
import DeploymentFlowAnimation from '../components/home/DeploymentFlowAnimation';
import CtaBanner from '../components/home/CtaBanner';
import { 
  Zap, 
  HardDrive, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Terminal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <>
      <SEO
        title="Infrastructure Features & Bare-Metal Performance"
        description="Explore the technical capabilities of Hextorq Hosting: PCIe Gen4 NVMe arrays, AMD EPYC compute, multi-channel DDR5 ECC RAM, and 500Gbps DDoS mitigation."
        canonical="https://hosting.hextorq.tech/features"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>BARE-METAL HARDWARE ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Infrastructure Engineered for <span className="text-gradient-cyan">Raw Speed</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every layer of the Hextorq stack — from silicon and NVMe arrays to edge reverse proxies — is optimized for sub-millisecond I/O and zero dropped connections.
          </p>
        </section>

        {/* 4 Major Hardware Modules */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INFRASTRUCTURE_SPECS.map((spec) => (
              <div
                key={spec.id}
                className="p-8 rounded-3xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 space-y-6 shadow-xl"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {spec.subtitle}
                  </span>
                  <h2 className="text-2xl font-bold font-display text-white">
                    {spec.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {spec.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {spec.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                      <span className="text-[10px] font-mono text-slate-400 block truncate">{m.label}</span>
                      <p className="text-xs font-bold text-cyan-300 font-mono mt-0.5 truncate">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Workflows & CLI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#090F1A] border border-cyan-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                DEVELOPER TOOLCHAIN
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Everything You Need to Ship Faster
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect your Git repositories directly or use our CLI to stream build logs, provision database partitions, and toggle environment variables without leaving your terminal.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Git Webhooks & CI/CD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Secrets & Env Vault</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Instant DNS Propagation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>HTTP/3 & Brotli Compression</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-950 border border-white/[0.08] font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-400 pb-2 border-b border-slate-800">
                # Install and deploy in seconds:
              </div>
              <div className="text-cyan-400">$ npm install -g @hextorq/cli</div>
              <div className="text-slate-400">› Authenticating token with hosting.hextorq.tech...</div>
              <div className="text-cyan-400">$ hextorq link --app=my-fullstack-app</div>
              <div className="text-emerald-400">✔ Linked: React UI (port: 3000) & Node API (port: 8080)</div>
              <div className="text-cyan-400">$ hextorq deploy --prod</div>
              <div className="text-slate-300">› Uploading build artifact (1.8 MB)...</div>
              <div className="text-emerald-400 font-bold">✔ ONLINE: https://my-fullstack-app.hextorq.app</div>
            </div>
          </div>
        </section>

        {/* 5-Step Deployment Pipeline */}
        <DeploymentFlowAnimation />

        {/* Final CTA */}
        <CtaBanner />
      </div>
    </>
  );
}
