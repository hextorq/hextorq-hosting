import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Code2, Database, ShieldCheck, Cpu, ArrowLeftRight, Terminal, Network } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function AppArchitectureSection() {
  const { openTrialModal } = useTrialModal();
  const sectionRef = useRef(null);
  const specCardRef = useRef(null);
  const headingRef = useRef(null);
  const archColumnsRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Spec Card reveal
      gsap.fromTo(
        specCardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: specCardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Section Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3 Architectural Columns Staggered reveal
      if (archColumnsRef.current?.children) {
        gsap.fromTo(
          archColumnsRef.current.children,
          { opacity: 0, y: 45, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: archColumnsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Bottom Trial Banner reveal
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const frontendList = [
    { name: 'React.js', desc: 'Single Page Apps & Dashboards' },
    { name: 'Vite', desc: 'Fast, lightweight build tool' },
    { name: 'Next.js', desc: 'React framework & static sites' },
    { name: 'Vue.js & Nuxt', desc: 'Progressive web frameworks' },
    { name: 'Svelte & SvelteKit', desc: 'Compiler-based modern UI' },
    { name: 'Static HTML & CSS', desc: 'Pure web assets with SSL' }
  ];

  const backendList = [
    { name: 'Node.js', desc: 'Express, NestJS, Fastify, Socket.io' },
    { name: 'Python', desc: 'FastAPI, Django, Flask APIs' },
    { name: 'PHP & Laravel', desc: 'Modern PHP 8+ application runtimes' },
    { name: 'Go', desc: 'High-concurrency microservice binaries' },
    { name: 'REST & GraphQL', desc: 'API servers & webhook handlers' },
    { name: 'Background Workers', desc: 'Queues, cron jobs & schedulers' }
  ];

  return (
    <section
      ref={sectionRef}
      id="app-architecture"
      data-slot="trusted"
      className="relative flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_120332_3b24257a-afe6-48ca-875f-78147370f403.png&w=1280&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Top Product Illustration Spec Card */}
        <div ref={specCardRef} className="mb-20 max-w-5xl mx-auto">
          <div className="rounded-[36px] bg-[rgba(10,5,20,0.88)] border border-white/15 shadow-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl hover:border-white/30 transition-all duration-500">
            
            {/* Top Bar with Mac Dots */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/15">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="size-2.5 rounded-full bg-red-500/80"></div>
                  <div className="size-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="size-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-white/70">hextorq-app-architecture.spec</span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] uppercase tracking-wider">
                  ONE COMPLETE APPLICATION
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-[10px] uppercase tracking-wider font-semibold">
                  14-DAY TRIAL ACTIVE
                </span>
              </div>
            </div>

            {/* Graphic Composition: Frontend + Backend = Complete Application */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center py-6">
              
              {/* Left Card: Frontend */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/15 shadow-sm space-y-4 hover:border-cyan-400/50 hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-300 font-semibold">
                    1 FRONTEND LAYER
                  </span>
                  <span className="size-2 rounded-full bg-cyan-400"></span>
                </div>

                <div className="space-y-2 font-mono text-xs text-white">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-semibold">React / Vite</span>
                    <span className="text-[10px] text-white/60">SPA</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-semibold">Next.js / Vue / Svelte</span>
                    <span className="text-[10px] text-white/60">SSR / SSG</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-semibold">Static HTML / CSS</span>
                    <span className="text-[10px] text-white/60">Edge Assets</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center space-x-1.5 text-[11px] text-white/80 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Free SSL & CDN Edge Caching</span>
                </div>
              </div>

              {/* Center Connector */}
              <div className="text-center flex flex-col items-center justify-center space-y-2 py-2">
                <div className="size-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-base shadow-sm backdrop-blur-md hover:scale-110 transition-transform">
                  +
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
                  Unified Port Bridge
                </div>
              </div>

              {/* Right Card: Backend */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/15 shadow-sm space-y-4 hover:border-blue-400/50 hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blue-300 font-semibold">
                    1 BACKEND RUNTIME
                  </span>
                  <span className="size-2 rounded-full bg-blue-500"></span>
                </div>

                <div className="space-y-2 font-mono text-xs text-white">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-semibold">Node.js</span>
                    <span className="text-[10px] text-white/60">Express / Nest</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-semibold">Python</span>
                    <span className="text-[10px] text-white/60">FastAPI / Django</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-semibold">PHP / Go / APIs</span>
                    <span className="text-[10px] text-white/60">REST & WS</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center space-x-1.5 text-[11px] text-white/80 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dedicated vCPU + NVMe Backing</span>
                </div>
              </div>
            </div>

            {/* Gradient Line Accent */}
            <div className="h-[1px] w-full nexa-grad-line-bg opacity-40 my-2"></div>

            {/* Bottom Result Box */}
            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center space-x-3 text-left">
                <div className="size-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-display">
                    ONE COMPLETE APPLICATION
                  </div>
                  <div className="text-[11px] text-white/70 font-sans">
                    Unified port mapping, zero configuration reverse proxy, and isolated memory.
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 font-mono text-xs shrink-0">
                <span className="text-white/70">Fixed from <strong className="text-white">₹79/mo</strong></span>
                <span className="text-white/40">|</span>
                <span className="text-white/70">VPS from <strong className="text-white">₹349/mo</strong></span>
              </div>
            </div>

          </div>
        </div>

        {/* Section Heading */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md shadow-lg">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE MODERN ARCHITECTURE STANDARD</span>
          </div>

          <h2 className="font-medium text-white tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.2 }}>
            Relied on by developers <br />
            <span data-slot="gradient-text" className="nexa-grad-text">from groundbreak to go-live.</span>
          </h2>

          <p
            className="text-white font-medium text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 0 16px rgba(0, 0, 0, 0.8)' }}
          >
            Old-fashioned shared hosting was built for PHP-only FTP files from twenty years ago. Hextorq Hosting is engineered around how modern full-stack web applications are actually built.
          </p>
        </div>

        {/* 3 Column Architectural Diagram Box */}
        <div ref={archColumnsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Frontend Column (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-[36px] bg-[rgba(10,5,20,0.88)] border border-white/15 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 shadow-2xl backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center space-x-3">
                  <div className="size-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">Frontend Layer</h3>
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">ONE FRONTEND INCLUDED</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-white/80 border border-white/20">
                  Client Edge
                </span>
              </div>

              <p className="text-xs text-white/80 font-sans leading-relaxed">
                Deploy modern single-page applications or static web code served directly with automated SSL certificates and ultra-fast static file caching.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {frontendList.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-0.5">
                    <div className="text-xs font-mono font-bold text-white flex items-center space-x-1.5">
                      <span className="size-1.5 rounded-full bg-cyan-400"></span>
                      <span>{item.name}</span>
                    </div>
                    <div className="text-[10px] text-white/60 font-sans truncate">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/70">
              <span className="flex items-center space-x-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Port Conflicts</span>
              </span>
              <span>Included in Shared & VPS</span>
            </div>
          </div>

          {/* Center Connector (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center p-6 rounded-[36px] bg-[rgba(10,5,20,0.88)] border border-white/15 text-center space-y-4 shadow-2xl backdrop-blur-xl">
            <div className="size-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shadow-sm">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            
            <div className="space-y-1 font-mono">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">Unified Port Bridge</span>
              <p className="text-[11px] text-white/70 leading-tight">
                Automatic internal reverse proxy maps frontend routes to backend APIs cleanly.
              </p>
            </div>

            <div className="py-2 px-3 rounded-xl bg-white/5 border border-white/15 text-[10px] font-mono text-cyan-300">
              /api → localhost:port
            </div>
          </div>

          {/* Backend Column (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-[36px] bg-[rgba(10,5,20,0.88)] border border-white/15 flex flex-col justify-between hover:border-blue-400/50 transition-all duration-300 shadow-2xl backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center space-x-3">
                  <div className="size-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">Backend Runtime</h3>
                    <span className="text-[10px] font-mono text-blue-300 uppercase tracking-wider font-semibold">ONE BACKEND INCLUDED</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-white/80 border border-white/20">
                  Runtime Sandbox
                </span>
              </div>

              <p className="text-xs text-white/80 font-sans leading-relaxed">
                Run persistent server applications, API endpoints, webhooks, and database connectors with dedicated CPU time, isolated memory, and NVMe disk access.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {backendList.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-0.5">
                    <div className="text-xs font-mono font-bold text-white flex items-center space-x-1.5">
                      <span className="size-1.5 rounded-full bg-blue-500"></span>
                      <span>{item.name}</span>
                    </div>
                    <div className="text-[10px] text-white/60 font-sans truncate">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/70">
              <span className="flex items-center space-x-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Isolated Environment</span>
              </span>
              <span>Node / Python / PHP / Go</span>
            </div>
          </div>

        </div>

        {/* 14-Day Free Trial banner */}
        <div ref={bannerRef} className="mt-10 p-6 rounded-[36px] bg-[rgba(10,5,20,0.88)] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center space-x-4 text-left">
            <div className="size-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Ready to deploy your complete application?
              </h4>
              <p className="text-xs text-white/80 font-sans mt-0.5">
                Every Fixed Shared, Flex Burst, and VPS tier includes a full 14-Day Free Trial. No upfront commitment.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
            className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] px-6 py-3 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center space-x-2">
              <span>Start 14-Day Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
