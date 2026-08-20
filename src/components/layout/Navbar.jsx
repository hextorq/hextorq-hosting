import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Server, Sparkles, ChevronDown, Layers, Zap } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { FIXED_SHARED_PLANS } from '../../data/hostingData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { openTrialModal } = useTrialModal();
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    scrollTo(`#${id}`, { offset: -80, duration: 1.4 });
  };

  return (
    <header data-slot="navbar" className="absolute inset-x-0 top-3 sm:top-4 z-50 flex justify-center px-3 sm:px-4 pointer-events-auto">
      <nav className="w-full rounded-2xl bg-white shadow-xl transition-all duration-300 max-w-4xl border border-white/40">
        <div className="flex items-center justify-between gap-4 py-2 px-3 sm:px-5">
          
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo(0, { duration: 1.2 })}
            className="flex items-center space-x-2.5 group focus:outline-none text-left"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0 group-hover:scale-105 transition-transform">
              <defs>
                <linearGradient id="nexacore-logo-nav" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgb(28, 78, 255)"></stop>
                  <stop offset="0.5" stopColor="rgb(172, 36, 255)"></stop>
                  <stop offset="1" stopColor="rgb(254, 136, 27)"></stop>
                </linearGradient>
              </defs>
              <circle cx="14" cy="14" r="11" stroke="url(#nexacore-logo-nav)" strokeWidth="2.5"></circle>
            </svg>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-base sm:text-lg tracking-tight text-[rgb(26,11,84)]">
                  Hextorq
                </span>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wider">
                  HOSTING
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 font-sans text-xs text-[rgb(26,11,84)] font-medium">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center space-x-1"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {dropdownOpen && (
                <div 
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 p-2 rounded-2xl bg-white border border-slate-200 shadow-2xl space-y-1 animate-fadeIn z-50 text-slate-800"
                >
                  <button
                    onClick={() => handleNavClick('shared-hosting')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs">Shared (Fixed)</div>
                      <div className="text-[10px] text-slate-500">1 FE + 1 BE from ₹79/mo</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('flex-burst')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs">Flexible / Burst</div>
                      <div className="text-[10px] text-slate-500">Adaptive workload burst capacity</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('vps-hosting')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs">VPS Hosting</div>
                      <div className="text-[10px] text-slate-500">Root access & dedicated compute</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('managed-vps')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs">Managed VPS</div>
                      <div className="text-[10px] text-slate-500">Full hands-off server ops</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('shared-hosting')}
              className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Shared
            </button>

            <button
              onClick={() => handleNavClick('flex-burst')}
              className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Flex Burst
            </button>

            <button
              onClick={() => handleNavClick('vps-hosting')}
              className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              VPS
            </button>

            <button
              onClick={() => handleNavClick('configurator')}
              className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Configurator
            </button>

            <button
              onClick={() => handleNavClick('compare')}
              className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Compare
            </button>

            <button
              onClick={() => handleNavClick('pricing')}
              className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              type="button"
              onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
              className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] px-4 py-2 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center space-x-1.5">
                <span>Start 14-Day Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
              className="h-8 px-3 rounded-xl text-xs font-semibold text-white bg-[rgb(28,78,255)]"
            >
              14-Day Trial
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 px-4 pt-3 pb-5 space-y-3 bg-white rounded-b-2xl">
            <div className="p-2 rounded-xl bg-slate-100 text-center text-xs font-mono text-slate-800 font-semibold mb-2">
              ✨ 14-Day Free Trial on Every Plan
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
              <button
                onClick={() => handleNavClick('shared-hosting')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                Shared (Fixed)
              </button>
              <button
                onClick={() => handleNavClick('flex-burst')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                Flexible / Burst
              </button>
              <button
                onClick={() => handleNavClick('vps-hosting')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                VPS Hosting
              </button>
              <button
                onClick={() => handleNavClick('managed-vps')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                Managed VPS
              </button>
              <button
                onClick={() => handleNavClick('configurator')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                Configurator
              </button>
              <button
                onClick={() => handleNavClick('compare')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                Comparison Matrix
              </button>
              <button
                onClick={() => handleNavClick('pricing')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-black"
              >
                FAQ
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openTrialModal(FIXED_SHARED_PLANS[1], 'fixed');
              }}
              className="w-full h-10 rounded-xl text-xs font-bold text-white bg-[rgb(28,78,255)] flex items-center justify-center space-x-1.5"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}