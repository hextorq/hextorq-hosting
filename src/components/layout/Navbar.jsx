import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Server, ChevronDown, Layers, Zap } from 'lucide-react';
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
    <header data-slot="navbar" className="absolute inset-x-0 top-3 sm:top-4 z-50 flex justify-center px-4 sm:px-6 pointer-events-auto">
      <nav className="w-full rounded-2xl bg-white/75 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-all duration-300 max-w-5xl border border-white/60 hover:bg-white/85">
        <div className="flex items-center justify-between gap-4 py-2.5 px-4 sm:px-6">
          
          {/* Brand Logo without icon */}
          <button
            onClick={() => scrollTo(0, { duration: 1.2 })}
            className="flex items-center space-x-2 group focus:outline-none text-left"
          >
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-950 font-display">
              Hextorq
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-900 text-white uppercase tracking-wider">
              HOSTING
            </span>
          </button>

          {/* Desktop Navigation Links - High Contrast & Crisp */}
          <div className="hidden lg:flex items-center space-x-1 font-sans text-xs text-slate-900 font-semibold">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors flex items-center space-x-1 text-slate-900"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </button>

              {dropdownOpen && (
                <div 
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 p-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl space-y-1 animate-fadeIn z-50 text-slate-900"
                >
                  <button
                    onClick={() => handleNavClick('shared-hosting')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Shared (Fixed)</div>
                      <div className="text-[10px] text-slate-600">1 FE + 1 BE from ₹79/mo</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('flex-burst')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Flexible / Burst</div>
                      <div className="text-[10px] text-slate-600">Adaptive workload burst capacity</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('vps-hosting')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">VPS Hosting</div>
                      <div className="text-[10px] text-slate-600">Multi-site & dedicated compute</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('managed-vps')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Managed VPS</div>
                      <div className="text-[10px] text-slate-600">Full hands-off server ops</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('shared-hosting')}
              className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors text-slate-900"
            >
              Shared
            </button>

            <button
              onClick={() => handleNavClick('flex-burst')}
              className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors text-slate-900"
            >
              Flex Burst
            </button>

            <button
              onClick={() => handleNavClick('vps-hosting')}
              className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors text-slate-900"
            >
              VPS
            </button>

            <button
              onClick={() => handleNavClick('configurator')}
              className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors text-slate-900"
            >
              Configurator
            </button>

            <button
              onClick={() => handleNavClick('compare')}
              className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors text-slate-900"
            >
              Compare
            </button>

            <button
              onClick={() => handleNavClick('pricing')}
              className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors text-slate-900"
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className="px-3 py-1.5 rounded-xl hover:bg-black/5 transition-colors text-slate-900"
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
              className="p-1.5 rounded-xl text-slate-900 hover:bg-black/5"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 px-4 pt-3 pb-5 space-y-3 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <div className="p-2 rounded-xl bg-slate-100 text-center text-xs font-mono text-slate-900 font-semibold mb-2">
              14-Day Free Trial on Every Plan
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-900">
              <button
                onClick={() => handleNavClick('shared-hosting')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
              >
                Shared (Fixed)
              </button>
              <button
                onClick={() => handleNavClick('flex-burst')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
              >
                Flexible / Burst
              </button>
              <button
                onClick={() => handleNavClick('vps-hosting')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
              >
                VPS Hosting
              </button>
              <button
                onClick={() => handleNavClick('managed-vps')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
              >
                Managed VPS
              </button>
              <button
                onClick={() => handleNavClick('configurator')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
              >
                Configurator
              </button>
              <button
                onClick={() => handleNavClick('compare')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
              >
                Comparison Matrix
              </button>
              <button
                onClick={() => handleNavClick('pricing')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left hover:text-blue-600"
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
              className="w-full h-10 rounded-xl text-xs font-bold text-white bg-[rgb(28,78,255)] flex items-center justify-center space-x-1.5 shadow-md"
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