import React from 'react';
import SEO from '../components/common/SEO';
import { MANAGED_SERVICES } from '../data/vpsPlans';
import { useDeployModal } from '../context/DeployModalContext';
import FAQSection from '../components/home/FAQSection';
import CtaBanner from '../components/home/CtaBanner';
import { 
  ShieldCheck, 
  RefreshCw, 
  Cpu, 
  HardDrive, 
  ArrowRightLeft, 
  Activity, 
  Check, 
  X, 
  Sparkles, 
  Layers,
  ArrowRight,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ManagedVPSPage() {
  const { openDeployModal } = useDeployModal();

  const iconMap = {
    ShieldCheck: ShieldCheck,
    RefreshCw: RefreshCw,
    Cpu: Cpu,
    HardDrive: HardDrive,
    ArrowRightLeft: ArrowRightLeft,
    Activity: Activity
  };

  const comparisonItems = [
    { feature: 'Initial OS Provisioning & Hardening', unmanaged: 'Self-setup (Manual SSH)', managed: '100% Handled by Hextorq Engineers' },
    { feature: 'Security Updates & CVE Patching', unmanaged: 'User Responsibility', managed: 'Automated Zero-Downtime Patching' },
    { feature: 'Web Server Tuning (Nginx/Node/PHP)', unmanaged: 'Manual Config Editing', managed: 'High-Concurrency Fine-Tuning' },
    { feature: 'Automated Snapshot Schedules', unmanaged: 'Manual Configuration', managed: 'Daily Multi-Region Point-in-Time Restore' },
    { feature: '24/7 Uptime & Ping Monitoring', unmanaged: 'Basic Internal Ping', managed: 'Active Hypervisor Alerts (15m Response SLA)' },
    { feature: 'White-Glove Migration Assistance', unmanaged: 'Self Data Transfer', managed: '100% Free Complete Migration' },
    { feature: 'Root / SSH Sudo Access', unmanaged: 'Full Root Access', managed: 'Full Root Access + Assisted Sudo' }
  ];

  return (
    <>
      <SEO
        title="Managed VPS Hosting — 24/7 DevOps & Infrastructure Engineering"
        description="Experience the raw performance of dedicated VPS infrastructure with white-glove server management, security lockdowns, and 24/7 monitoring."
        canonical="https://hosting.hextorq.tech/managed-vps"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>WHITE-GLOVE SERVER MANAGEMENT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            VPS Power. <span className="text-gradient-cyan">Without the Server Headache.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get the dedicated virtual horsepower your application demands while our senior cloud engineers manage the operating system, security, updates, and monitoring.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openDeployModal(null, 'vps')}
              className="px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 flex items-center space-x-2"
            >
              <span>Deploy Managed VPS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center space-x-2"
            >
              <Headphones className="w-4 h-4 text-cyan-400" />
              <span>Talk to DevOps Team</span>
            </Link>
          </div>
        </section>

        {/* 6 Managed Pillars Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              What Is Included with Managed VPS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Complete operational coverage from initial server spin-up to critical production incidents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANAGED_SERVICES.map((srv, idx) => {
              const Icon = iconMap[srv.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Unmanaged vs Managed Side-by-Side Comparison */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Unmanaged vs. Managed Comparison
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Evaluate which management tier fits your engineering team's capacity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-950/80 border-b border-white/[0.08] text-xs font-mono">
                  <th className="p-4 sm:p-5 text-slate-400 font-bold w-1/2">Service Responsibility</th>
                  <th className="p-4 sm:p-5 text-slate-400 font-bold w-1/4">Unmanaged VPS</th>
                  <th className="p-4 sm:p-5 text-emerald-300 font-bold w-1/4 bg-emerald-950/20 border-l border-emerald-500/20">Managed VPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs font-mono">
                {comparisonItems.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}>
                    <td className="p-4 sm:p-5 text-white font-semibold">{item.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-400">{item.unmanaged}</td>
                    <td className="p-4 sm:p-5 text-emerald-300 bg-emerald-950/10 border-l border-emerald-500/10 font-medium">
                      {item.managed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Full FAQ */}
        <FAQSection />

        {/* CTA */}
        <CtaBanner />
      </div>
    </>
  );
}
