import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { Mail, Globe, CheckCircle2, Send, Headphones } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'technical',
    workload: 'shared-flex',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Technical Support — Hextorq Hosting"
        description="Reach out to the Hextorq Hosting engineering team. Direct technical support via email at hosting@hextorq.tech."
        canonical="https://hosting.hextorq.tech/contact"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Headphones className="w-3.5 h-3.5" />
            <span>TECHNICAL SUPPORT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Contact Our <span className="text-gradient-cyan">Support Team</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
            Need architecture advice, migration assistance, or custom resource sizing? We're here to help.
          </p>
        </section>

        {/* Main Contact Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Contact Details (5 cols) */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-[#090E18] border border-white/[0.08] space-y-6 shadow-xl">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Direct Support</h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    Reach our infrastructure team directly for technical questions.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.04] space-y-1">
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <Mail className="w-4 h-4" />
                      <span className="font-bold">Official Support Email</span>
                    </div>
                    <a href="mailto:hosting@hextorq.tech" className="text-white hover:underline text-sm font-bold block pt-1">
                      hosting@hextorq.tech
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.04] space-y-1">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Globe className="w-4 h-4" />
                      <span className="font-bold">Primary Domain</span>
                    </div>
                    <span className="text-slate-200 text-sm font-semibold block pt-1">
                      hosting.hextorq.tech
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/50 border border-white/[0.04] text-xs font-sans text-slate-400 leading-relaxed">
                  We review incoming technical inquiries promptly and assist with deployment, configuration, and sizing.
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="md:col-span-7">
              <div className="p-8 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center mx-auto text-cyan-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">Inquiry Received</h3>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto font-sans leading-relaxed">
                      Thank you for contacting Hextorq Hosting. Our team will review your message and reply to <strong>{formData.email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono bg-slate-800 text-slate-300 hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold font-display text-white mb-2">
                      Send Technical Inquiry
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-950/70 border border-white/[0.1] text-white focus:outline-none focus:border-cyan-500"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-950/70 border border-white/[0.1] text-white focus:outline-none focus:border-cyan-500"
                          placeholder="name@domain.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Inquiry Topic
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-950/70 border border-white/[0.1] text-white focus:outline-none focus:border-cyan-500"
                        >
                          <option value="technical">Technical / Architecture Question</option>
                          <option value="migration">Migration Assistance</option>
                          <option value="billing">Pricing & Billing</option>
                          <option value="vps">Custom VPS Sizing</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Target Hosting Model
                        </label>
                        <select
                          value={formData.workload}
                          onChange={(e) => setFormData({ ...formData, workload: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-950/70 border border-white/[0.1] text-white focus:outline-none focus:border-cyan-500"
                        >
                          <option value="shared-fixed">Shared Hosting (Fixed)</option>
                          <option value="shared-flex">Shared Hosting (Flexible Burst)</option>
                          <option value="vps-custom">Dedicated VPS Server</option>
                          <option value="vps-managed">Managed VPS</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Message / Workload Details
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-950/70 border border-white/[0.1] text-white focus:outline-none focus:border-cyan-500"
                        placeholder="Describe your application stack, expected traffic, or questions..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-all active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message to Support</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
