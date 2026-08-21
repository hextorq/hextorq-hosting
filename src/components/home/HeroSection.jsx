import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ShieldCheck, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS } from '../../data/hostingData';

export default function HeroSection() {
  const { openTrialModal } = useTrialModal();
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const chipsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -24, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, delay: 0.1 }
      )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 36, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1 },
        '-=0.6'
      )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        chipsRef.current?.children || [],
        { opacity: 0, y: 24, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: 'back.out(1.4)' },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToVPS = () => {
    const el = document.getElementById('vps-hosting');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      data-slot="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 sm:pt-36 lg:pt-40 pb-16"
      style={{ backgroundColor: '#000201' }}
    >
      {/* Exact 1:1 Video Background from Reference Site */}
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      ></video>

      {/* Dark overlay for crystal clear text readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/40 backdrop-brightness-95"
      ></div>

      {/* Exact bottom gradient fade transition from reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48"
        style={{ background: 'linear-gradient(to bottom, transparent, #000201)' }}
      ></div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center mx-auto px-4">
        
        {/* Top Subheading & Badge */}
        <div ref={badgeRef} className="flex flex-col items-center gap-3">
          <span data-slot="gradient-text" className="nexa-grad-text text-base sm:text-lg font-bold tracking-wide drop-shadow-md">
            Infrastructure Built to Last
          </span>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur-md shadow-2xl hover:border-white/50 transition-colors">
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-bold text-white">14-DAY FREE TRIAL ON EVERY PLAN</span>
            <span className="opacity-40">•</span>
            <span className="text-cyan-300 font-bold">₹0 UPFRONT</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="font-bold leading-tight text-white md:whitespace-nowrap tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          style={{ fontSize: 'clamp(34px, 4.5vw, 64px)' }}
        >
          Hosting Built Around <br className="hidden sm:inline" />
          <span className="nexa-grad-text drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">Your Application.</span>
        </h1>

        {/* Subtitle with High Contrast & Readability */}
        <p
          ref={subtextRef}
          className="text-slate-100 max-w-2xl mx-auto leading-relaxed font-sans font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          style={{ fontSize: 'clamp(15px, 1.2vw, 20px)' }}
        >
          Deploy your frontend and backend with simple shared hosting, flexible resource options, or your own dedicated VPS.
        </p>

        {/* Action CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
            className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center space-x-2 shadow-lg">
              <span>Start 14-Day Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-200" />
            </span>
          </button>

          <button
            type="button"
            onClick={scrollToVPS}
            className="px-7 py-3.5 rounded-xl text-sm font-medium text-white bg-black/50 hover:bg-black/70 border border-white/30 backdrop-blur-md transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95 shadow-xl"
          >
            <Server className="w-4 h-4 text-cyan-300" />
            <span>Explore VPS</span>
          </button>
        </div>

        {/* Value Highlights Chips with High-Contrast Glass Dark Background */}
        <div ref={chipsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto text-left w-full">
          <div className="p-3.5 rounded-2xl bg-[rgba(10,5,20,0.85)] border border-white/20 shadow-2xl backdrop-blur-xl hover:border-cyan-400/60 hover:bg-[rgba(10,5,20,0.95)] transition-all duration-300">
            <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-[0.14em] flex items-center space-x-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="text-xs text-white font-sans mt-1 font-semibold">Try any plan at zero risk</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[rgba(10,5,20,0.85)] border border-white/20 shadow-2xl backdrop-blur-xl hover:border-cyan-400/60 hover:bg-[rgba(10,5,20,0.95)] transition-all duration-300">
            <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-[0.14em] flex items-center space-x-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Transparent Pricing</span>
            </div>
            <div className="text-xs text-white font-sans mt-1 font-semibold">Shared from ₹79/mo</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[rgba(10,5,20,0.85)] border border-white/20 shadow-2xl backdrop-blur-xl hover:border-cyan-400/60 hover:bg-[rgba(10,5,20,0.95)] transition-all duration-300">
            <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-[0.14em] flex items-center space-x-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Unified Stack</span>
            </div>
            <div className="text-xs text-white font-sans mt-1 font-semibold">1 Frontend + 1 Backend</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[rgba(10,5,20,0.85)] border border-white/20 shadow-2xl backdrop-blur-xl hover:border-cyan-400/60 hover:bg-[rgba(10,5,20,0.95)] transition-all duration-300">
            <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-[0.14em] flex items-center space-x-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>VPS Control</span>
            </div>
            <div className="text-xs text-white font-sans mt-1 font-semibold">From ₹349/mo, multi-site</div>
          </div>
        </div>

      </div>
    </section>
  );
}
