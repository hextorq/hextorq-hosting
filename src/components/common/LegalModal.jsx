import React from 'react';
import { X, Shield, FileText, RefreshCw, Layers } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { SUPPORT_EMAIL } from '../../data/hostingData';

export default function LegalModal() {
  const { legalModal, closeLegalModal } = useTrialModal();

  if (!legalModal.isOpen) return null;

  const getContent = () => {
    switch (legalModal.type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <Shield className="w-4 h-4 text-foreground" />,
          sections: [
            {
              h: '1. Information We Collect',
              p: 'Hextorq Hosting collects information necessary to provide, manage, and secure hosting accounts. This includes your name, email address, billing contact details, and technical server connection logs required for security monitoring and DDoS defense.'
            },
            {
              h: '2. Data Isolation & Application Privacy',
              p: 'We respect the confidentiality of your software applications, source repositories, and database records. Your application data stored on NVMe partitions remains strictly isolated and protected. We do not inspect or monetize private tenant data.'
            },
            {
              h: '3. Data Security & Storage',
              p: 'All user data is encrypted in transit using industry-standard TLS. Administrative actions require multi-factor authentication. We retain operational server logs only as long as necessary for platform reliability and security.'
            },
            {
              h: '4. Contact & Inquiries',
              p: `For any privacy inquiries or data requests, contact our privacy compliance team at ${SUPPORT_EMAIL}.`
            }
          ]
        };

      case 'refund':
        return {
          title: 'Refund Policy & Free Trial Terms',
          icon: <RefreshCw className="w-4 h-4 text-brand-emerald" />,
          sections: [
            {
              h: '1. 14-Day Zero-Risk Free Trial',
              p: 'Every hosting product—including Fixed Shared Hosting, Flexible Burst Hosting, Standard VPS, and Managed VPS—includes an unconditional 14-Day Free Trial. During this period, you have complete access to evaluate the platform with zero billing obligations.'
            },
            {
              h: '2. Post-Trial Subscription Cancellations',
              p: 'You may cancel your subscription at any time prior to the conclusion of your 14-day trial period without any charges. Subscriptions that renew on monthly cycles can be cancelled anytime to prevent future billing.'
            },
            {
              h: '3. Prorated Credits & Dispute Resolution',
              p: `If you experience persistent infrastructure outages or service disruptions outside scheduled maintenance windows, you may request service credits or a billing review by contacting ${SUPPORT_EMAIL}.`
            }
          ]
        };

      case 'resource':
        return {
          title: 'Resource Allocation & Fair Burst Policy',
          icon: <Layers className="w-4 h-4 text-foreground" />,
          sections: [
            {
              h: '1. Fixed Shared Hosting Boundaries',
              p: 'Fixed Shared plans (Launch, Growth, Business) operate within strictly allocated compute and memory ceilings. This ensures high predictability and guaranteed price stability.'
            },
            {
              h: '2. Flexible Burst Model Expectations',
              p: 'Flex Hosting plans include a guaranteed baseline of resources and allow applications to temporarily draw from available shared node capacity during sudden workload surges. We transparently note that additional shared capacity is available when underlying infrastructure capacity allows. Burst capacity is not guaranteed for infinite duration or sustained mining/straining workloads.'
            },
            {
              h: '3. VPS & Dedicated Server Policy',
              p: 'VPS customers receive a dedicated allocation of virtual cores, memory, and storage, fixed at their chosen plan tier with no bursting. Network traffic must adhere to acceptable use rules (no malicious scans, abusive crypto-mining, or spamming).'
            }
          ]
        };

      case 'terms':
      default:
        return {
          title: 'Terms of Service',
          icon: <FileText className="w-4 h-4 text-foreground" />,
          sections: [
            {
              h: '1. Overview & Agreement',
              p: 'By accessing or utilizing Hextorq Hosting services (hosting.hextorq.tech), you agree to these Terms of Service. Hextorq provides application hosting and virtual private server infrastructure.'
            },
            {
              h: '2. Acceptable Use',
              p: 'You agree not to utilize Hextorq Hosting infrastructure for unlawful activities, unauthorized penetration testing, distribution of malware, malicious spam transmission, or activities intended to degrade platform stability for other tenants.'
            },
            {
              h: '3. 14-Day Trial & Billing Terms',
              p: 'The 14-day trial grants prospective customers full access to deploy their applications. Paid billing cycles commence automatically after the 14-day trial period unless cancelled beforehand.'
            },
            {
              h: '4. Service Availability & Maintenance',
              p: 'Hextorq maintains high infrastructure availability across all tier-3/tier-4 data center facilities. Routine maintenance is scheduled with prior notification to minimize downtime.'
            },
            {
              h: '5. Support & Legal Inquiries',
              p: `For formal inquiries regarding legal notices, SLA agreements, or compliance questions, please contact ${SUPPORT_EMAIL}.`
            }
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-card border border-border rounded-[1.75rem] shadow-elevated overflow-hidden text-foreground max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 bg-muted/40 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="size-8 rounded-xl bg-muted border border-border flex items-center justify-center">
              {content.icon}
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-foreground">
                {content.title}
              </h3>
              <p className="text-xs text-muted-foreground font-mono">
                Hextorq Hosting Legal Documentation
              </p>
            </div>
          </div>
          <button
            onClick={closeLegalModal}
            className="p-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-xs text-muted-foreground leading-relaxed font-sans">
          {content.sections.map((sec, i) => (
            <div key={i} className="space-y-1.5">
              <h4 className="font-display font-bold text-sm text-foreground">
                {sec.h}
              </h4>
              <p className="text-muted-foreground">
                {sec.p}
              </p>
            </div>
          ))}
        </div>

        <div className="px-6 py-3.5 bg-muted/40 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
          <span>Official Document</span>
          <button
            onClick={closeLegalModal}
            className="h-8 px-4 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold border border-border transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
