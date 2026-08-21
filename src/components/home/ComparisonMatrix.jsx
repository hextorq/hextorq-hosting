import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { COMPARISON_DATA, FIXED_SHARED_PLANS, FLEX_SHARED_PLANS, VPS_PLANS, MANAGED_VPS_PLANS } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonMatrix() {
  const { openTrialModal } = useTrialModal();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tableRef = useRef(null);

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

      // Table Container ScrollTrigger
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="compare" className="py-24 bg-white text-[rgb(26,11,84)] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>PRODUCT MATRIX</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Compare Hosting <span className="nexa-grad-text">Models.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Find the right balance of control, scaling elasticity, and management support for your project.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div ref={tableRef} className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 text-xs font-mono text-slate-500 uppercase tracking-[0.14em] w-1/4 font-semibold">
                  Feature / Capability
                </th>
                <th className="p-5 text-center border-l border-slate-200 w-[18.75%]">
                  <div className="text-sm font-bold text-[rgb(26,11,84)] font-display">Fixed Shared</div>
                  <div className="text-[11px] font-mono text-blue-700 font-bold mt-0.5">From ₹79/mo</div>
                </th>
                <th className="p-5 text-center border-l border-slate-200 w-[18.75%] bg-blue-50/50">
                  <div className="text-sm font-bold text-[rgb(26,11,84)] font-display">Flex Shared</div>
                  <div className="text-[11px] font-mono text-purple-700 font-bold mt-0.5">From ₹589/mo</div>
                </th>
                <th className="p-5 text-center border-l border-slate-200 w-[18.75%]">
                  <div className="text-sm font-bold text-[rgb(26,11,84)] font-display">Standard VPS</div>
                  <div className="text-[11px] font-mono text-indigo-700 font-bold mt-0.5">From ₹349/mo</div>
                </th>
                <th className="p-5 text-center border-l border-slate-200 w-[18.75%]">
                  <div className="text-sm font-bold text-[rgb(26,11,84)] font-display">Managed VPS</div>
                  <div className="text-[11px] font-mono text-emerald-700 font-bold mt-0.5">From ₹449/mo</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-sans text-slate-600">
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    idx % 2 === 1 ? 'bg-slate-50/30' : ''
                  }`}
                >
                  <td className="p-4 sm:p-5 font-mono font-semibold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-center border-l border-slate-100 text-slate-800">
                    {row.fixed}
                  </td>
                  <td className="p-4 sm:p-5 text-center border-l border-slate-100 bg-blue-50/30 font-semibold text-purple-900">
                    {row.flex}
                  </td>
                  <td className="p-4 sm:p-5 text-center border-l border-slate-100 text-slate-800">
                    {row.vps}
                  </td>
                  <td className="p-4 sm:p-5 text-center border-l border-slate-100 font-semibold text-emerald-800">
                    {row.managed}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-200 bg-slate-50">
                <td className="p-5 font-mono text-xs text-slate-500 font-semibold">
                  14-Day Free Evaluation
                </td>
                <td className="p-4 text-center border-l border-slate-200">
                  <button
                    type="button"
                    onClick={() => openTrialModal(FIXED_SHARED_PLANS[1], 'fixed')}
                    className="h-9 px-3.5 rounded-xl text-xs font-medium text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 w-full transition-colors shadow-sm"
                  >
                    Try Fixed Free
                  </button>
                </td>
                <td className="p-4 text-center border-l border-slate-200 bg-blue-50/50">
                  <button
                    type="button"
                    onClick={() => openTrialModal(FLEX_SHARED_PLANS[1], 'flex')}
                    className="h-9 px-3.5 rounded-xl text-xs font-bold text-white bg-[rgb(28,78,255)] hover:bg-blue-700 w-full shadow-md transition-colors"
                  >
                    Try Flex Free
                  </button>
                </td>
                <td className="p-4 text-center border-l border-slate-200">
                  <button
                    type="button"
                    onClick={() => openTrialModal(VPS_PLANS[2], 'vps')}
                    className="h-9 px-3.5 rounded-xl text-xs font-medium text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 w-full transition-colors shadow-sm"
                  >
                    Try VPS Free
                  </button>
                </td>
                <td className="p-4 text-center border-l border-slate-200">
                  <button
                    type="button"
                    onClick={() => openTrialModal(MANAGED_VPS_PLANS[1], 'managed')}
                    className="h-9 px-3.5 rounded-xl text-xs font-medium text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 w-full transition-colors shadow-sm"
                  >
                    Try Managed Free
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </section>
  );
}
