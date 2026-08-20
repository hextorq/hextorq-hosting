import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { Shield, FileText } from 'lucide-react';

export default function LegalPage() {
  const { policyId } = useParams();
  const currentTab = policyId || 'terms';

  const policies = {
    terms: {
      title: 'Terms of Service',
      desc: 'Standard terms governing the use of Hextorq Hosting infrastructure and application containers.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. Acceptance of Terms</h3>
            <p>
              By accessing or utilizing hosting services provided by Hextorq Hosting ("Company", "we", "us"), available at hosting.hextorq.tech, you agree to these Terms of Service.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Service Scope: One Frontend + One Backend</h3>
            <p>
              Shared Hosting plans are explicitly structured for one complete application (comprising one frontend and one backend service). Dedicated VPS plans allow multiple applications and custom services within allocated compute resources.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">3. Acceptable Use</h3>
            <p>
              Workloads must comply with applicable laws. Unauthorized network scanning, malicious activities, and activities causing intentional degradation of shared cluster infrastructure are strictly prohibited.
            </p>
          </section>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      desc: 'How Hextorq Hosting handles customer account information and data privacy.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. Information We Collect</h3>
            <p>
              We collect account details strictly required for account management, SSL certificate provisioning, and technical support communication.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Customer Data Privacy</h3>
            <p>
              Customer application code, database contents, and file storage remain completely private. We do not sell or monetize customer data.
            </p>
          </section>
        </div>
      )
    },
    refund: {
      title: 'Refund Policy',
      desc: 'Clear guidelines on service cancellations and billing.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. 7-Day Refund Period</h3>
            <p>
              New customers subscribing to Shared Hosting plans can request a full refund within seven (7) days of initial purchase if the service does not meet expectations.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Transparent Renewals</h3>
            <p>
              Subscriptions renew at the exact same standard rate with no hidden price hikes. You may cancel renewal at any time directly through support or your account settings.
            </p>
          </section>
        </div>
      )
    },
    'resource-policy': {
      title: 'Resource & Burst Policy',
      desc: 'Clear rules on Fixed vs Flexible shared resource allocation and fair-use safeguards.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. Fixed Shared Resource Enforcement</h3>
            <p>
              Fixed Shared plans allocate defined CPU, RAM, and NVMe partitions. When the allocation limit is reached, standard resource enforcement applies and requests are queued safely.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Flexible / Burst Shared Capacity</h3>
            <p>
              Flexible Shared plans allow your application to utilize additional available shared capacity during temporary surges. Additional capacity is subject to infrastructure availability and fair-use safeguards.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">3. Dedicated VPS Recommendation</h3>
            <p>
              For constant, non-burst dedicated compute guarantees, customers should deploy a dedicated VPS where 100% of the virtual resources remain dedicated to their server.
            </p>
          </section>
        </div>
      )
    }
  };

  const activePolicy = policies[currentTab] || policies.terms;

  return (
    <>
      <SEO
        title={`${activePolicy.title} — Hextorq Hosting`}
        description={activePolicy.desc}
        canonical={`https://hosting.hextorq.tech/legal/${currentTab}`}
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Shield className="w-3.5 h-3.5" />
              <span>LEGAL POLICIES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
              {activePolicy.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              {activePolicy.desc}
            </p>
          </div>

          {/* Legal Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'terms', name: 'Terms of Service' },
              { id: 'privacy', name: 'Privacy Policy' },
              { id: 'refund', name: 'Refund Policy' },
              { id: 'resource-policy', name: 'Resource & Burst Policy' }
            ].map((tab) => (
              <Link
                key={tab.id}
                to={`/legal/${tab.id}`}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  currentTab === tab.id
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-white/[0.04] hover:text-white'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          {/* Policy Content Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl space-y-6">
            {activePolicy.content}
            
            <div className="pt-6 border-t border-white/[0.06] text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>Hextorq Hosting Policy Documentation</span>
              <a href="mailto:hosting@hextorq.tech" className="text-cyan-400 hover:underline">
                Contact: hosting@hextorq.tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
