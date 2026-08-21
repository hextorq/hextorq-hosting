import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HardDrive, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Lock, 
  RefreshCw, 
  Terminal, 
  Sliders, 
  LifeBuoy, 
  Server,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const { openTrialModal } = useTrialModal();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const securityCardRef = useRef(null);

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

      // 9 Features Grid Stagger
      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Security Summary Card
      gsap.fromTo(
        securityCardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: securityCardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <HardDrive className="w-5 h-5 text-blue-600" />,
      title: 'High-Speed NVMe Storage',
      desc: 'All plans run on enterprise NVMe solid-state arrays, delivering lightning-fast I/O for database queries, static asset loading, and bundle builds.'
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      title: 'Application-Focused Hosting',
      desc: 'Engineered specifically for 1 Frontend + 1 Backend applications. Eliminates the complexity of running static and API services across separate providers.'
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      title: 'Flexible Resource Options',
      desc: 'Choose between strictly predictable fixed resources or adaptive burst hosting that expands temporarily when workload surges require extra headroom.'
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      title: 'Automated SSL Certificates',
      desc: 'Free automated TLS certificates provisioned and auto-renewed for your domains and subdomains with zero manual certificate intervention.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-cyan-600" />,
      title: 'Automated Backups & Snapshots',
      desc: 'Scheduled automated snapshots safeguard your source repositories and database states, allowing fast point-in-time rollbacks whenever needed.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: 'Tenant Isolation & DDoS Defense',
      desc: 'Container sandboxing ensures applications are strictly isolated from neighboring workloads, protected by ingress firewalls and edge DDoS mitigation.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-rose-600" />,
      title: 'Unlimited Sites on VPS',
      desc: 'Host as many projects or client sites as fit within your allocation — Self-Hosted for full control, or Managed and let HexTorq run it.'
    },
    {
      icon: <Sliders className="w-5 h-5 text-blue-600" />,
      title: 'Seamless VPS Scalability',
      desc: 'Upgrade compute cores, memory allocations, and NVMe partitions as your database and concurrent active users expand over time.'
    },
    {
      icon: <LifeBuoy className="w-5 h-5 text-emerald-600" />,
      title: 'Direct Engineer Support',
      desc: 'Responsive support via hosting@hextorq.tech. Speak with real engineers who understand modern web runtimes, proxies, and configurations.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
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
            <span>ENGINEERED FOR DEVELOPERS</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Infrastructure Features That <br />
            <span data-slot="gradient-text" className="nexa-grad-text">Elevate Your Application.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Built from the ground up for modern developer stacks with enterprise NVMe storage, strict tenant isolation, and zero hidden bloat.
          </p>
        </div>

        {/* 9 Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/90 border border-white/80 hover:border-blue-400 shadow-xl transition-all duration-300 space-y-3 backdrop-blur-md hover:scale-105 group"
            >
              <div className="size-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-[rgb(26,11,84)] font-display">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security Summary Sub-Card */}
        <div ref={securityCardRef} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.14em] font-semibold">
                SECURITY ARCHITECTURE
              </span>
            </div>
            <h3 className="text-lg font-bold text-[rgb(26,11,84)] font-display">
              Enterprise Security by Default Across Every Plan
            </h3>
            <p className="text-xs text-slate-600 font-sans max-w-2xl leading-relaxed">
              Automated SSL, hardened OS kernels, container runtime boundaries, ingress firewalls, and DDoS mitigation protect your workloads from day one.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <button
              type="button"
              onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
              className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] px-6 py-3 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center space-x-2">
                <span>Start 14-Day Free Trial</span>
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
