import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Mail, Sparkles } from 'lucide-react';
import { FAQS, SUPPORT_EMAIL } from '../../data/hostingData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return FAQS;
    const q = searchQuery.toLowerCase();
    return FAQS.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      data-slot="precision"
      className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      style={{
        backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10 w-full text-[rgb(26,11,84)]">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-white/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-md backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>KNOWLEDGE & CLARITY</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Frequently Asked <span data-slot="gradient-text" className="nexa-grad-text">Questions.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Clear, honest answers regarding our 14-day free trial, application architecture, burst policies, and VPS servers.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. 14-day trial, Python, Bursting)..."
              className="w-full px-4 py-3 pl-10 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors shadow-lg"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-xs font-mono text-slate-600 bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
              No questions found matching "{searchQuery}". Reach out directly to <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-700 underline">{SUPPORT_EMAIL}</a>.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-blue-500 shadow-xl'
                      : 'bg-white/90 border-white/80 hover:border-slate-300 shadow-md backdrop-blur-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
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
            })
          )}
        </div>

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
