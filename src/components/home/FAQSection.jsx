import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Sparkles, 
  ArrowRight,
  Mail
} from 'lucide-react';
import { FAQ_DATA, FAQ_CATEGORIES } from '../../data/faqData';
import { Link } from 'react-router-dom';

export default function FAQSection({ showAll = false }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndexes, setOpenIndexes] = useState([0, 1]); // default first 2 open

  const toggleIndex = (idx) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter(i => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 8);

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#060A11] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Clear technical answers regarding our shared application hosting model, adaptive bursting, and root-access VPS servers.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. burst capacity, root access, node.js, backups)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {displayedFaqs.length > 0 ? (
            displayedFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/80 border-cyan-500/30 shadow-lg'
                      : 'bg-slate-950/60 border-white/[0.06] hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white font-display">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-cyan-950 border-cyan-500/40' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/[0.04] animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-slate-950 rounded-2xl border border-slate-800 text-slate-400 text-xs font-mono">
              No questions found matching "{searchQuery}". Contact support directly for assistance.
            </div>
          )}
        </div>

        {/* Support Direct Contact Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">
                Still have unanswered questions?
              </h4>
              <p className="text-xs text-slate-400">
                Our infrastructure engineers are on standby 24/7 to review your stack.
              </p>
            </div>
          </div>
          <a
            href="mailto:hosting@hextorq.tech"
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 hover:bg-cyan-900/60 transition-colors flex items-center space-x-1.5"
          >
            <span>hosting@hextorq.tech</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
