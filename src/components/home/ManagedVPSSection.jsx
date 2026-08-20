import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, CheckCircle2, ArrowRight, Server, Wrench, RefreshCw, Activity, HardDrive, Sparkles, LifeBuoy } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { MANAGED_VPS_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function ManagedVPSSection() {
  const [isYearly, setIsYearly] = useState(false);
  const { openTrialModal } = useTrialModal();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const servicesGridRef = useRef(null);
  const plansGridRef = useRef(null);

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

      // 6 Services Grid Stagger
      if (servicesGridRef.current?.children) {
        gsap.fromTo(
          servicesGridRef.current.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: servicesGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Plans Grid Stagger
      if (plansGridRef.current?.children) {
        gsap.fromTo(
          plansGridRef.current.children,
          { opacity: 0, y: 50, scale: 0.96 },
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
      title: 'Initial Server Setup & Hardening',
      desc: 'We configure firewalls, disable root password risks, optimize kernel network buffers, and provision your choice of Linux distribution.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Automated Security & OS Patching',
      desc: 'Continuous vulnerability scanning and automated zero-downtime security kernel updates keeping your OS hardened against exploits.'
    },
    {
      icon: <Activity className="w-5 h-5 text-purple-600" />,
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

        <div ref={plansGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MANAGED_VPS_PLANS.map((plan) => {
            const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 bg-white hover:scale-105 ${
                  plan.highlight
                    ? 'border-2 border-blue-600 shadow-2xl scale-[1.02]'
                    : 'border border-slate-200 hover:border-slate-300 shadow-lg'
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold font-display text-[rgb(26,11,84)]">{plan.name}</h4>
                      <p className="text-xs text-slate-500 font-sans mt-1">{plan.tagline}</p>
                    </div>
                    {plan.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-mono font-bold uppercase tracking-[0.14em] shadow-md">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-xs font-mono text-blue-900 flex items-center justify-between">
                    <span className="font-semibold">14-Day Free Trial</span>
                    <span className="text-blue-700 font-bold text-[10px]">₹0 upfront</span>
                  </div>

                  <div className="py-3 border-y border-slate-100">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xl font-bold text-slate-400">{plan.currency}</span>
                      <span className="text-4xl font-bold font-display text-[rgb(26,11,84)]">{displayPrice}</span>
                      <span className="text-xs font-mono text-slate-500">/month</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">
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

                  {/* Features */}
                  <ul className="space-y-2 text-xs font-sans text-slate-700 pt-1">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => openTrialModal(plan, 'managed')}
                    className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-3 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-2">
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
