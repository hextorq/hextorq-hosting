import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, Server, Lock, Cpu, HardDrive, Wrench, LifeBuoy, ChevronDown, ChevronUp } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { MANAGED_VPS_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function ManagedVPSSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const { openTrialModal } = useTrialModal();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const servicesGridRef = useRef(null);
  const plansGridRef = useRef(null);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header ScrollTrigger
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 6 Services Grid
      if (servicesGridRef.current?.children) {
        gsap.fromTo(
          servicesGridRef.current.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: servicesGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Plans Grid
      if (plansGridRef.current?.children) {
        gsap.fromTo(
          plansGridRef.current.children,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: plansGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Server className="w-5 h-5 text-blue-600" />,
      title: 'Full OS & Stack Provisioning',
      desc: 'Ubuntu, Debian, AlmaLinux, Docker, Node.js, Python, PostgreSQL, MySQL configured with enterprise best practices out of the box.'
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      title: 'Automated Security Hardening',
      desc: 'Automated weekly CVE vulnerability patching, SSH key protection, Fail2ban intrusion defense, and zero-day firewall rules.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      title: 'Proactive Health & Uptime Monitoring',
      desc: 'Our monitoring systems keep constant watch on daemon health, CPU/RAM thresholds, and disk space with instant incident mitigation.'
    },
    {
      icon: <HardDrive className="w-5 h-5 text-indigo-600" />,
      title: 'Automated Off-Site Backups',
      desc: 'Scheduled daily snapshots with complete point-in-time recovery so your data is shielded against accidental corruption or data loss.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      title: 'Hands-On Migration Assistance',
      desc: 'Moving from another host? Our engineers assist with migrating your files, database dumps, and DNS records smoothly.'
    },
    {
      icon: <LifeBuoy className="w-5 h-5 text-rose-600" />,
      title: 'Expert 24/7 Troubleshooting',
      desc: 'Encountered a server crash, Nginx config bug, or runtime bottleneck? Direct escalation access to senior systems engineers.'
    }
  ];

  return (
    <section ref={sectionRef} id="managed-vps" className="py-24 bg-slate-50 text-[rgb(26,11,84)] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>MANAGED INFRASTRUCTURE</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            VPS Power Without The <br />
            <span className="nexa-grad-text">Server-Management Burden.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Get the raw compute speed and dedicated isolation of a VPS, while our systems engineering team takes full ownership of configuration, security, monitoring, and backups.
          </p>
        </div>

        {/* 6 Managed Services Grid */}
        <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg hover:border-blue-400 hover:shadow-xl transition-all duration-300 space-y-3 group"
            >
              <div className="size-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-base font-bold text-[rgb(26,11,84)] font-display">
                {srv.title}
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Managed Plans Grid */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h3 className="text-2xl font-bold font-display text-[rgb(26,11,84)]">
            Managed VPS Pricing Tiers
          </h3>
          <p className="text-xs font-sans text-slate-600">
            Dedicated VPS hardware bundled with 100% full systems management and 14-Day Free Trial.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center space-x-3 text-xs font-mono p-1 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className={!isYearly ? 'text-slate-900 font-bold px-3 py-1 bg-slate-100 rounded-xl' : 'text-slate-500 px-3 py-1'}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-11 h-6 rounded-full bg-slate-300 relative p-0.5"
            >
              <div className={`size-5 rounded-full bg-blue-600 transition-transform ${isYearly ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </button>
            <span className={isYearly ? 'text-slate-900 font-bold px-3 py-1 bg-slate-100 rounded-xl' : 'text-slate-500 px-3 py-1'}>
              Yearly (Save ~15%)
            </span>
          </div>
        </div>

        {/* Strictly Equal-Length, Equal-Size Managed VPS Cards */}
        <div ref={plansGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {MANAGED_VPS_PLANS.map((plan) => {
            const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isExpanded = expandedCards[plan.id];
            const primaryFeatures = plan.features.slice(0, 3);
            const secondaryFeatures = plan.features.slice(3);

            return (
              <div
                key={plan.id}
                className={`p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 bg-white h-full ${
                  plan.highlight
                    ? 'border-2 border-blue-600 shadow-xl'
                    : 'border border-slate-200 hover:border-slate-300 shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Fixed-Height Title + Badge + Tagline Box */}
                  <div className="min-h-[64px] flex flex-col justify-start">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xl font-bold font-display text-[rgb(26,11,84)]">{plan.name}</h4>
                      {plan.badge ? (
                        <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[8px] font-mono font-bold uppercase tracking-[0.14em] shadow-sm shrink-0">
                          {plan.badge}
                        </span>
                      ) : (
                        <span className="h-4"></span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-sans mt-0.5 leading-snug">{plan.tagline}</p>
                  </div>

                  {/* 14-Day Trial Badge */}
                  <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-xs font-mono text-blue-900 flex items-center justify-between">
                    <span className="font-semibold">14-Day Free Trial</span>
                    <span className="text-blue-700 font-bold text-[10px]">₹0 upfront</span>
                  </div>

                  {/* Price display */}
                  <div className="py-2.5 border-y border-slate-100">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xl font-bold text-slate-400">{plan.currency}</span>
                      <span className="text-4xl font-bold font-display text-[rgb(26,11,84)]">{displayPrice}</span>
                      <span className="text-xs font-mono text-slate-500">/month</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                      Evaluate free for 14 days. ₹{displayPrice}/mo after trial.
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[9px] text-slate-500 block uppercase">COMPUTE</span>
                      <strong className="text-slate-900">{plan.specs.vcpu}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[9px] text-slate-500 block uppercase">MEMORY</span>
                      <strong className="text-slate-900">{plan.specs.ram}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[9px] text-slate-500 block uppercase">STORAGE</span>
                      <strong className="text-slate-900">{plan.specs.storage}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[9px] text-slate-500 block uppercase">MANAGEMENT</span>
                      <strong className="text-emerald-600">Full Ops Care</strong>
                    </div>
                  </div>

                  {/* Features without ticks & with View More toggle */}
                  <div className="pt-1 space-y-2 min-h-[110px] flex flex-col justify-between">
                    <ul className="space-y-2 text-xs font-sans text-slate-700">
                      {primaryFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-blue-600 font-mono text-xs select-none">—</span>
                          <span className="text-slate-800">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {secondaryFeatures.length > 0 && (
                      <div>
                        {isExpanded && (
                          <ul className="space-y-2 pt-2 text-xs font-sans text-slate-700 border-t border-slate-100 animate-fadeIn">
                            {secondaryFeatures.map((feat, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <span className="text-blue-600 font-mono text-xs select-none">—</span>
                                <span className="text-slate-800">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleExpand(plan.id)}
                          className="mt-2 text-[11px] font-mono text-blue-600 hover:text-blue-800 flex items-center space-x-1 transition-colors pt-1"
                        >
                          <span>{isExpanded ? 'Hide Extra Details' : `View ${secondaryFeatures.length} More Features`}</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => openTrialModal(plan, 'managed')}
                    className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-2.5 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-2">
                      <span>Start 14-Day Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
