import React from 'react';
import SEO from '../components/common/SEO';
import CtaBanner from '../components/home/CtaBanner';
import { 
  ShieldCheck, 
  Lock, 
  ShieldAlert, 
  Key, 
  Layers, 
  HardDrive, 
  Activity, 
  UserCheck
} from 'lucide-react';

export default function SecurityPage() {
  const securityPillars = [
    {
      title: 'SSL / TLS Encryption',
      desc: 'Free, automated Let\'s Encrypt SSL certificates provisioned and renewed automatically for every frontend and backend domain.',
      icon: Lock,
      color: 'text-cyan-400'
    },
    {
      title: 'DDoS Protection',
      desc: 'Edge packet filtering mitigates volumetric flood attacks before malicious traffic reaches your application containers or virtual servers.',
      icon: ShieldAlert,
      color: 'text-blue-400'
    },
    {
      title: 'Web Application Firewall (WAF)',
      desc: 'Layer 7 inspection helps block SQL injection, cross-site scripting (XSS), malicious bots, and common web application attack vectors.',
      icon: ShieldCheck,
      color: 'text-indigo-400'
    },
    {
      title: 'SSH Keys on VPS',
      desc: 'Dedicated VPS instances support Ed25519 and RSA cryptographic SSH keys, eliminating password vulnerability and brute-force risks.',
      icon: Key,
      color: 'text-emerald-400'
    },
    {
      title: 'Application Isolation',
      desc: 'Shared hosting workloads run in isolated container environments with strict kernel boundary separation between accounts.',
      icon: Layers,
      color: 'text-cyan-400'
    },
    {
      title: 'Automated Backups',
      desc: 'Regular off-site backup snapshots with point-in-time restore support allow rapid recovery in the event of unexpected data loss.',
      icon: HardDrive,
      color: 'text-blue-400'
    },
    {
      title: 'Infrastructure Monitoring',
      desc: 'Continuous monitoring of hypervisor thresholds, CPU pressure, and memory limits ensures early issue detection.',
      icon: Activity,
      color: 'text-indigo-400'
    },
    {
      title: 'Account Security',
      desc: 'Multi-factor authentication (MFA) and granular API access tokens protect your control panel and deployment credentials.',
      icon: UserCheck,
      color: 'text-emerald-400'
    }
  ];

  return (
    <>
      <SEO
        title="Security & Data Protection — Hextorq Hosting"
        description="Comprehensive platform security: automated SSL encryption, DDoS mitigation, web application firewalls, and isolated container sandboxes."
        canonical="https://hosting.hextorq.tech/security"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>BUILT-IN SECURITY CONTROLS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Security Built Into the <span className="text-gradient-cyan">Platform</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            We treat security as a standard foundation — not an expensive paid add-on. Every layer is protected with modern encryption and isolation.
          </p>
        </section>

        {/* Security Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#090E18] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 space-y-4 shadow-xl"
                >
                  <div className={`w-10 h-10 rounded-2xl bg-slate-900 border border-white/[0.06] flex items-center justify-center ${p.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Multi-Layer Security Architecture */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Multi-Layer Defense Architecture</span>
            </div>
            
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-white font-semibold">Edge Routing Layer:</span>
                <span className="text-cyan-400">Automated DDoS mitigation and edge traffic filtering</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-white font-semibold">Transport Layer:</span>
                <span className="text-cyan-400">TLS 1.3 encryption with automated certificate renewal</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-white font-semibold">Container Runtime:</span>
                <span className="text-cyan-400">Isolated Linux container namespaces with resource quotas</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-white font-semibold">Storage Layer:</span>
                <span className="text-cyan-400">Redundant NVMe solid-state storage with backup snapshots</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaBanner />
      </div>
    </>
  );
}
