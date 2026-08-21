import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Globe, ArrowUpRight, ShieldCheck, Sparkles, Server } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { SUPPORT_EMAIL, DOMAIN_URL, FIXED_SHARED_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openTrialModal, openLegalModal } = useTrialModal();
  const { scrollTo } = useSmoothScroll();
  const footerRef = useRef(null);
  const columnsRef = useRef(null);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Columns stagger
      if (columnsRef.current?.children) {
        gsap.fromTo(
          columnsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Wordmark cutout reveal
      gsap.fromTo(
        wordmarkRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 0.25,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wordmarkRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (id) => {
    scrollTo(`#${id}`, { offset: -80, duration: 1.4 });
  };

  return (
    <footer ref={footerRef} className="relative bg-[rgb(10,5,20)] text-white border-t border-white/10 pt-16 pb-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => scrollTo(0, { duration: 1.4 })}
              className="flex items-center space-x-3 group text-left"
            >
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0 group-hover:scale-105 transition-transform">
                <defs>
                  <linearGradient id="nexacore-logo-footer" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgb(28, 78, 255)"></stop>
                    <stop offset="0.5" stopColor="rgb(172, 36, 255)"></stop>
                    <stop offset="1" stopColor="rgb(254, 136, 27)"></stop>
                  </linearGradient>
                </defs>
                <circle cx="14" cy="14" r="11" stroke="url(#nexacore-logo-footer)" strokeWidth="2.5"></circle>
              </svg>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                HEXTORQ HOSTING
              </span>
            </button>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed font-sans">
              Hosting built around your modern full-stack application. Deploy your frontend and backend seamlessly with fixed predictability, flexible burst headroom, or your own dedicated VPS.
            </p>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>14-Day Free Trial on Every Plan</span>
            </div>

            <div className="pt-2 text-xs font-sans text-white/70 space-y-1.5">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <span>Support: </span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white hover:underline font-mono">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <span>Portal: </span>
                <span className="text-white font-mono">{DOMAIN_URL}</span>
              </div>
            </div>
          </div>

          {/* Hosting Products Column */}
          <div className="space-y-3.5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 font-bold">
              Hosting
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-white/70">
              <li>
                <button onClick={() => handleNavClick('shared-hosting')} className="hover:text-white transition-colors text-left text-xs">
                  Shared Hosting (Fixed)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('flex-burst')} className="hover:text-white transition-colors text-left text-xs">
                  Flexible / Burst Hosting
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('vps-hosting')} className="hover:text-white transition-colors text-left text-xs">
                  VPS Hosting (Multi-Site)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('managed-vps')} className="hover:text-white transition-colors text-left text-xs">
                  Managed VPS Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('configurator')} className="hover:text-white transition-colors text-left text-xs">
                  Custom VPS Configurator
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('pricing')} className="hover:text-white transition-colors text-left text-xs">
                  All Pricing Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3.5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 font-bold">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-white/70">
              <li>
                <button onClick={() => handleNavClick('app-architecture')} className="hover:text-white transition-colors text-left text-xs">
                  Application Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors text-left text-xs">
                  Platform Features & NVMe
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('locations')} className="hover:text-white transition-colors text-left text-xs">
                  Data Center Locations
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('compare')} className="hover:text-white transition-colors text-left text-xs">
                  Product Comparison Matrix
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faq')} className="hover:text-white transition-colors text-left text-xs">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-3.5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 font-bold">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-white/70">
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition-colors text-xs">
                  Contact Support
                </a>
              </li>
              <li>
                <button onClick={() => openLegalModal('terms')} className="hover:text-white transition-colors text-left text-xs">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('privacy')} className="hover:text-white transition-colors text-left text-xs">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('refund')} className="hover:text-white transition-colors text-left text-xs">
                  Refund & Trial Policy
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('resource')} className="hover:text-white transition-colors text-left text-xs">
                  Resource & Burst Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Signature Hirael Wordmark Cutout in Footer */}
        <div className="relative pt-6 pb-2 overflow-hidden">
          <span 
            ref={wordmarkRef}
            aria-hidden="true" 
            className="wordmark-cutout pointer-events-none absolute inset-x-0 -bottom-3 text-center text-[16vw] leading-none select-none text-white"
          >
            HEXTORQ
          </span>

          <div className="relative flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/60 gap-3 pt-4">
            <div>
              © {currentYear} Hextorq Hosting. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span>Transparent Pricing</span>
              <span>•</span>
              <span>14-Day Free Trial</span>
              <span>•</span>
              <span>Application-First Infrastructure</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}