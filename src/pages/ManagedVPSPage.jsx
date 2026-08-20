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
    { feature: 'Server Setup & OS Hardening', selfManaged: 'Self-setup (Manual SSH)', managed: 'Handled by Hextorq Engineers' },
    { feature: 'Security Configuration & Patching', selfManaged: 'User Responsibility', managed: 'Proactive Security & Kernel Patching' },
    { feature: 'Web Server & Runtime Optimization', selfManaged: 'Manual Configuration', managed: 'Nginx, Node, Python & PHP Tuning' },
    { feature: 'Snapshot & Backup Schedules', selfManaged: 'Manual Configuration', managed: 'Automated Multi-Region Snapshots' },
    { feature: 'Migration Assistance', selfManaged: 'Self Data Transfer', managed: 'Full Migration Support from Engineers' },
    { feature: 'Monitoring & Troubleshooting', selfManaged: 'Self-monitored', managed: 'Threshold Monitoring & Rapid Response' },
    { feature: 'Root & SSH Access', selfManaged: 'Full Root Access', managed: 'Full Root Access + Engineering Support' }
  ];

  return (
    <>
      <SEO
        title="Managed VPS Hosting — VPS Power Without Server Administration"
        description="Experience the raw performance of dedicated VPS infrastructure with server setup, security configuration, updates, monitoring, and backups."
        canonical="https://hosting.hextorq.tech/managed-vps"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SERVER MANAGEMENT SERVICES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            VPS Power. <span className="text-gradient-cyan">Without the Server Administration.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
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
              className="px-8 py-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-white/[0.08] hover:bg-slate-800 flex items-center space-x-2"
            >
              <Headphones className="w-4 h-4 text-cyan-400" />
              <span>Talk to Engineering Team</span>
            </Link>
          </div>
        </section>

        {/* 6 Managed Pillars Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              What Is Included with Managed VPS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Comprehensive operational support from initial provisioning to incident troubleshooting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANAGED_SERVICES.map((srv, idx) => {
              const Icon = iconMap[srv.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#090E18] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 space-y-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-white/[0.06] flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Self-Managed vs Managed Side-by-Side Comparison */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Self-Managed vs. Managed VPS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Evaluate which management model fits your development workflow and technical bandwidth.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#090E18] overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-950/80 border-b border-white/[0.08] text-xs font-mono">
                  <th className="p-4 sm:p-5 text-slate-400 font-bold w-1/2">Service Responsibility</th>
                  <th className="p-4 sm:p-5 text-slate-400 font-bold w-1/4">Self-Managed VPS</th>
                  <th className="p-4 sm:p-5 text-cyan-300 font-bold w-1/4 bg-cyan-950/20 border-l border-cyan-500/20">Managed VPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs font-sans">
                {comparisonItems.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}>
                    <td className="p-4 sm:p-5 text-white font-semibold font-mono">{item.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-400">{item.selfManaged}</td>
                    <td className="p-4 sm:p-5 text-cyan-300 bg-cyan-950/10 border-l border-cyan-500/10 font-medium">
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
