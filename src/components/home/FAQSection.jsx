import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ChevronUp, Search, Mail } from 'lucide-react';
import { FAQS, SUPPORT_EMAIL } from '../../data/hostingData';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  // Split into left and right columns for independent seamless expansion
  const col1 = filteredFaqs.filter((_, i) => i % 2 === 0);
  const col2 = filteredFaqs.filter((_, i) => i % 2 === 1);

  const renderFaqCard = (faq) => {
    const originalIdx = FAQS.findIndex(f => f.q === faq.q);
    const isOpen = openIndex === originalIdx;

    return (
      <div
        key={originalIdx}
        className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? 'bg-white border-blue-500 shadow-xl'
            : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(originalIdx)}
          className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="text-sm sm:text-base font-bold font-display text-[rgb(26,11,84)] pr-4">
            {faq.q}
          </span>
          <span className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-blue-700" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </span>
        </button>

        {isOpen && (
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
            {faq.a}
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef} 
      id="faq" 
      data-slot="features" 
      className="py-24 relative overflow-hidden bg-slate-50 text-[rgb(26,11,84)] border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-sm font-bold">
            <span>KNOWLEDGE & CLARITY</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Frequently Asked <span data-slot="gradient-text" className="nexa-grad-text">Questions.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Clear, honest answers regarding our 14-day free trial, application architecture, burst policies, and VPS servers.
          </p>

          {/* Perfectly Centered & Aligned Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. 14-day trial, Runtimes, Bursting)..."
              className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors shadow-lg"
            />
          </div>
        </div>

        {/* 2-Column Balanced FAQ Layout */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 text-xs font-mono text-slate-600 bg-white rounded-3xl p-6 border border-slate-200 shadow-lg max-w-2xl mx-auto">
            No questions found matching "{searchQuery}". Reach out directly to <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-700 underline">{SUPPORT_EMAIL}</a>.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Left Column */}
            <div className="space-y-4">
              {col1.map((faq) => renderFaqCard(faq))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {col2.map((faq) => renderFaqCard(faq))}
            </div>
          </div>
        )}

        {/* Support Callout Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="size-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[rgb(26,11,84)] font-display">
                Have a specific question not answered here?
              </div>
              <div className="text-[11px] text-slate-500 font-sans">
                Our support team is available at <span className="text-blue-700 font-mono font-semibold">{SUPPORT_EMAIL}</span>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Inquiry%20regarding%20Hextorq%20Hosting`}
            className="h-10 px-5 rounded-xl text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors whitespace-nowrap flex items-center shadow-sm"
          >
            Email Support Team
          </a>
        </div>

      </div>
    </section>
  );
}
