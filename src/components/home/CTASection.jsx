import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Server } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { FIXED_SHARED_PLANS, SUPPORT_EMAIL } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const { openTrialModal } = useTrialModal();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

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
      ref={sectionRef}
      data-slot="precision"
      className="py-24 sm:py-32 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      style={{
        backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div ref={cardRef} className="p-8 sm:p-14 rounded-[36px] bg-white/95 border border-white/80 text-center space-y-8 shadow-2xl backdrop-blur-xl hover:shadow-[0_20px_60px_-15px_rgba(28,78,255,0.15)] transition-shadow duration-500">
          
          {/* Top pill without dot */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-sm font-bold">
            <span className="text-slate-900">ZERO RISK • ₹0 UPFRONT</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight leading-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}>
              Start With <br className="hidden sm:inline" />
              <span data-slot="gradient-text" className="nexa-grad-text">14 Days Free.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Choose the hosting that fits your application and scale when you need more.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
              className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px shadow-lg hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
            >
              <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-2">
                <span>Start 14-Day Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              type="button"
              onClick={scrollToVPS}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center space-x-2 shadow-sm hover:scale-105 active:scale-95"
            >
              <Server className="w-4 h-4 text-slate-600" />
              <span>Explore VPS</span>
            </button>
          </div>

          {/* Value Bullet Points without ticks */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-600">
            <span className="flex items-center space-x-2">
              <span className="text-blue-600 font-bold select-none">—</span>
              <span>14-day free trial on every plan</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-blue-600 font-bold select-none">—</span>
              <span>No immediate credit card required</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-blue-600 font-bold select-none">—</span>
              <span>Direct support: {SUPPORT_EMAIL}</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
