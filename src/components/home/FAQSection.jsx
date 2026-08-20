import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, ArrowRight } from 'lucide-react';
import { FAQ_DATA, FAQ_CATEGORIES } from '../../data/faqData';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = activeCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter((faq) => faq.category === activeCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#070B14] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Clear answers to common questions regarding our application runtime, flexible bursting, and VPS compute.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-white/[0.04] hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#090E18] border border-white/[0.08] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white font-display">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-xl bg-slate-900 border border-white/[0.06] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed border-t border-white/[0.04] pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support prompt */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div className="flex items-center space-x-2.5">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Have a specific workload question? Reach out to <a href="mailto:hosting@hextorq.tech" className="text-white hover:underline">hosting@hextorq.tech</a></span>
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center space-x-1.5 transition-colors shrink-0"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
