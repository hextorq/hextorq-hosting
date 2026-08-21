import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Server, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Code2, Database, ShoppingBag, Briefcase, Terminal } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS, VPS_PLANS, MANAGED_VPS_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function WorkloadsSection() {
  const { openTrialModal } = useTrialModal();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsGridRef = useRef(null);
  const pathBoxRef = useRef(null);

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

      // 4 Workload Cards Stagger
      if (cardsGridRef.current?.children) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Path Box ScrollTrigger
      gsap.fromTo(
        pathBoxRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pathBoxRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const workloadUseCases = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      title: 'Full-Stack Web Apps & SaaS MVPs',
      stack: 'React / Next.js + Node.js or FastAPI',
      desc: 'Deploy unified client interfaces with dedicated backend API daemons, automated SSL, and database connectors.',
      recommendedProduct: 'Fixed Shared or Flex Growth'
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-purple-600" />,
      title: 'E-Commerce & Digital Stores',
      stack: 'Modern Storefront + Backend Inventory Engine',
      desc: 'Absorb sudden promotion and flash-sale surges smoothly using our adaptive Flex Burst hosting pool.',
      recommendedProduct: 'Flex Business Shared'
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-600" />,
      title: 'Microservices, Docker & Redis',
      stack: 'Docker Compose, Redis, PostgreSQL, Go APIs',
      desc: 'Full virtual server isolation with root terminal control for running multiple services and background worker queues.',
      recommendedProduct: 'Pro VPS or Business VPS'
    },
    {
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      title: 'Mission-Critical Business Systems',
      stack: 'Custom Enterprise Runtimes + SQL DBs',
      desc: 'High-compute virtual servers with full systems administration, zero-downtime security patching, and proactive health checks.',
      recommendedProduct: 'Managed VPS Pro'
    }
  ];

  return (
    <section
      ref={sectionRef}
      data-slot="precision"
      className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      style={{
        backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full text-[rgb(26,11,84)]">
        
        {/* Section Heading */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-white/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-md backdrop-blur-md font-bold">
            <span>DEVELOPER WORKLOADS</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Hosting That Understands <br />
            <span data-slot="gradient-text" className="nexa-grad-text">Modern Applications.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            From single full-stack web applications to multi-container microservice clusters, discover the exact infrastructure designed for your architecture.
          </p>
        </div>

        {/* 4 Workload Cards Grid */}
        <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {workloadUseCases.map((w, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white/90 border border-white/80 hover:border-slate-300 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 backdrop-blur-xl hover:scale-105 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {w.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 font-bold uppercase tracking-wider">
                    {w.recommendedProduct}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-[rgb(26,11,84)]">
                  {w.title}
                </h3>

                <div className="text-xs font-mono text-blue-700 font-semibold">
                  {w.stack}
                </div>

                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {w.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">14-Day Free Evaluation</span>
                <button
                  type="button"
                  onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
                  className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 transition-colors flex items-center space-x-1"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3-Tier Product Path Hierarchy Box */}
        <div ref={pathBoxRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
          
          <div className="space-y-2 text-left">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-800 font-bold">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>SHARED HOSTING</span>
            </div>
            <h4 className="text-base font-bold text-[rgb(26,11,84)] font-display">Single Full-Stack App</h4>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              1 Frontend + 1 Backend with zero configuration reverse proxying and fixed or burst resources.
            </p>
            <div className="text-xs font-mono text-blue-700 font-bold pt-1">From ₹79 / month</div>
          </div>

          <div className="space-y-2 text-left md:border-l md:border-slate-100 md:pl-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-800 font-bold">
              <Server className="w-4 h-4 text-purple-600" />
              <span>VPS HOSTING</span>
            </div>
            <h4 className="text-base font-bold text-[rgb(26,11,84)] font-display">Fixed Resources. Your Rules.</h4>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Dedicated compute slices, NVMe storage, and no limit on how many sites or apps you host.
            </p>
            <div className="text-xs font-mono text-purple-700 font-bold pt-1">From ₹349 / month</div>
          </div>

          <div className="space-y-2 text-left md:border-l md:border-slate-100 md:pl-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>MANAGED VPS</span>
            </div>
            <h4 className="text-base font-bold text-[rgb(26,11,84)] font-display">Hands-Off VPS Power</h4>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Raw VPS speed backed by 100% systems engineering management, backups, and security.
            </p>
            <div className="text-xs font-mono text-emerald-700 font-bold pt-1">From ₹449 / month</div>
          </div>

        </div>

      </div>
    </section>
  );
}
