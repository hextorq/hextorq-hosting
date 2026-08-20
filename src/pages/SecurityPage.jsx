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
  UserCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function SecurityPage() {
  const securityPillars = [
    {
      title: 'Automated SSL / TLS 1.3',
      desc: 'Free, auto-renewing Let\'s Encrypt Wildcard SSL certificates provisioned automatically for every frontend and backend domain.',
      icon: Lock,
      color: 'text-cyan-400'
    },
    {
      title: '500+ Gbps DDoS Scrubbing',
      desc: 'Line-rate packet filtering at the BGP edge mitigates volumetric Layer 3/4 flood attacks and malicious Layer 7 HTTP floods before they touch your application.',
      icon: ShieldAlert,
      color: 'text-rose-400'
    },
    {
      title: 'Web Application Firewall (WAF)',
      desc: 'Real-time payload inspection blocks SQL injection, cross-site scripting (XSS), bad bots, and OWASP Top 10 vulnerabilities automatically.',
      icon: ShieldCheck,
      color: 'text-emerald-400'
    },
    {
      title: 'SSH Key & Zero-Trust Auth',
      desc: 'Root VPS access secured with modern Ed25519 cryptographic keys, eliminating password vulnerability and brute-force risks.',
      icon: Key,
      color: 'text-amber-400'
    },
    {
      title: 'Namespace Container Isolation',
      desc: 'Shared hosting workloads run in cryptographically isolated Linux namespaces with strict cgroup kernel boundary enforcement.',
      icon: Layers,
      color: 'text-blue-400'
    },
    {
      title: 'Automated Cloud Snapshots',
      desc: 'Encrypted daily and weekly off-site backups with one-click rollbacks ensure swift disaster recovery in seconds.',
      icon: HardDrive,
      color: 'text-indigo-400'
    }
  ];

  return (
    <>
      <SEO
        title="Platform Security & DDoS Shield — Hextorq Hosting"
        description="Comprehensive enterprise security: TLS 1.3 encryption, 500Gbps DDoS protection, web application firewalls, and isolated container sandboxes."
        canonical="https://hosting.hextorq.tech/security"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ZERO-TRUST CLOUD PLATFORM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Security Is Part of the <span className="text-gradient-cyan">Platform</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            We treat security as a foundational platform feature — not an expensive paid add-on. Every node is hardened and continuously inspected.
          </p>
        </section>

        {/* Security Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 space-y-4 shadow-xl"
                >
                  <div className={`w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${p.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">{p.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security Architecture Visual Matrix */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="p-8 rounded-3xl bg-[#090F1A] border border-cyan-500/30 shadow-2xl space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Multi-Layer Defense Architecture</span>
            </div>
            
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-white font-semibold">Edge Layer:</span>
                <span className="text-cyan-400">Anycast BGP DDoS Scrubbing (500 Gbps line-rate)</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-white font-semibold">Transport Layer:</span>
                <span className="text-cyan-400">TLS 1.3 / HTTP/3 with automated Let's Encrypt renewal</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-white font-semibold">Container Runtime:</span>
                <span className="text-cyan-400">Isolated Linux Namespaces & seccomp security profiles</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-white font-semibold">Storage Persistence:</span>
                <span className="text-cyan-400">LUKS-encrypted NVMe volumes & snapshot snapshots</span>
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
