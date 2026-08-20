import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { Shield, FileText, RefreshCw, Layers, CheckCircle2 } from 'lucide-react';

export default function LegalPage() {
  const { policyId } = useParams();
  const currentTab = policyId || 'terms';

  const policies = {
    terms: {
      title: 'Terms of Service',
      desc: 'Standard terms governing the use of Hextorq Hosting infrastructure, SLAs, and customer rights.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. Acceptance of Terms</h3>
            <p>
              By accessing or utilizing any infrastructure, compute services, or shared application containers provided by Hextorq Hosting ("Company", "we", "us"), located at hosting.hextorq.tech, you agree to be legally bound by these Terms of Service.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Service Provisioning & Single-Application Scope</h3>
            <p>
              Shared Hosting accounts are explicitly licensed and provisioned for one (1) full-stack application (comprising one frontend and one backend service). Multi-tenant hosting or unauthorized proxying on shared plans is prohibited. Dedicated VPS plans permit arbitrary multi-application workloads within assigned compute boundaries.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">3. Infrastructure Availability (SLA)</h3>
            <p>
              We commit to a 99.95% Network Availability SLA for our core cluster nodes and BGP routing gateways. Planned maintenance windows are communicated at least 48 hours in advance via dashboard and email notices.
            </p>
          </section>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      desc: 'How Hextorq Hosting handles customer telemetry, deployment records, and data privacy.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. Information Collection</h3>
            <p>
              We collect minimal customer information strictly required for infrastructure account authentication, automated Let\'s Encrypt SSL generation, and billing compliance.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Zero Data Inspection</h3>
            <p>
              Customer application source code, databases, and container storage remain 100% private. Hextorq engineers never inspect customer data payloads unless explicitly requested by the customer for technical support or lawful compliance.
            </p>
          </section>
        </div>
      )
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      desc: 'Transparent guidelines on service cancellations, prorated credits, and trial periods.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. 7-Day Money-Back Guarantee</h3>
            <p>
              New customers subscribing to any Shared Hosting plan (Fixed or Flexible) are entitled to a full refund within seven (7) days of initial purchase if the service fails to meet performance expectations.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Hourly VPS Billing</h3>
            <p>
              Custom VPS instances are billed on a monthly or prorated hourly cycle. Servers destroyed mid-cycle stop incurring charges immediately.
            </p>
          </section>
        </div>
      )
    },
    'resource-policy': {
      title: 'Resource & Burst Fair-Use Policy',
      desc: 'Technical breakdown of Fixed vs Flexible burst resource allocation and fair-share cluster protection.',
      content: (
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">1. Fixed Shared Resource Enforcement</h3>
            <p>
              Fixed Shared plans (Launch, Growth, Business) allocate rigid compute, RAM, and NVMe partitions. Once 100% of the allocated quota is reached, incoming requests are safely queued or rate-limited to maintain server stability without dropping data.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">2. Flexible / Burst Resource Dynamics</h3>
            <p>
              Flexible Shared plans (Flex Launch, Flex Growth, Flex Business) provide baseline resources with dynamic access to node reserves during traffic surges. Your application can burst up to 4x baseline capacity without hard ceilings while shared cluster headroom is available.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white font-display">3. Fair-Use Safeguards</h3>
            <p>
              Bursting is designed for episodic traffic spikes (e.g. product launches, viral articles, marketing campaigns). Continuous, uninterrupted 24/7 max-burst utilization exceeding 72 consecutive hours will trigger an automated advisory to upgrade to a dedicated VPS instance.
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Shield className="w-3.5 h-3.5" />
              <span>LEGAL & COMPLIANCE</span>
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
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          {/* Policy Document Container */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/[0.08] shadow-2xl space-y-6">
            {activePolicy.content}
            
            <div className="pt-6 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Last updated: August 2026</span>
              <a href="mailto:hosting@hextorq.tech" className="text-cyan-400 hover:underline">
                Questions? hosting@hextorq.tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
