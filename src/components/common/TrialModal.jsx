import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Mail, 
  Copy, 
  ExternalLink,
  Layers,
  Server,
  Zap,
  Cpu,
  Check
} from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { 
  SUPPORT_EMAIL, 
  FIXED_SHARED_PLANS, 
  FLEX_SHARED_PLANS, 
  VPS_PLANS, 
  MANAGED_VPS_PLANS 
} from '../../data/hostingData';

export default function TrialModal() {
  const { isTrialOpen, closeTrialModal, selectedPlan, planCategory } = useTrialModal();
  
  const [currentCategory, setCurrentCategory] = useState('fixed');
  const [activePlan, setActivePlan] = useState(null);
  const [isYearly, setIsYearly] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('India (Mumbai)');
  const [customNotes, setCustomNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // All plans map
  const allPlansByCategory = {
    fixed: FIXED_SHARED_PLANS,
    flex: FLEX_SHARED_PLANS,
    vps: VPS_PLANS,
    managed: MANAGED_VPS_PLANS
  };

  useEffect(() => {
    if (isTrialOpen) {
      setIsSubmitted(false);
      setCopied(false);
      const cat = planCategory || 'fixed';
      setCurrentCategory(cat);
      
      if (selectedPlan) {
        setActivePlan(selectedPlan);
        setProjectName(selectedPlan.name ? `${selectedPlan.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-app` : 'my-app');
      } else {
        const defaultPlan = allPlansByCategory[cat]?.[0] || FIXED_SHARED_PLANS[0];
        setActivePlan(defaultPlan);
        setProjectName('my-production-app');
      }
    }
  }, [isTrialOpen, selectedPlan, planCategory]);

  if (!isTrialOpen) return null;

  const currentPlanList = allPlansByCategory[currentCategory] || FIXED_SHARED_PLANS;
  const currentPlan = activePlan || currentPlanList[0] || FIXED_SHARED_PLANS[0];
  
  const displayPrice = isYearly 
    ? (currentPlan.yearlyPrice || Math.round((currentPlan.monthlyPrice || currentPlan.price || 99) * 0.85))
    : (currentPlan.monthlyPrice || currentPlan.price || 99);

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'fixed': return 'Fixed Shared Hosting (1 FE + 1 BE)';
      case 'flex': return 'Flexible Burst Hosting (1 FE + 1 BE)';
      case 'vps': return 'Standard VPS Hosting (Multi-Site)';
      case 'managed': return 'Managed VPS Infrastructure';
      case 'custom-vps': return 'Custom Configured VPS';
      default: return 'Full-Stack Hosting';
    }
  };

  const getSpecsSummary = () => {
    if (!currentPlan?.specs) return 'Standard Compute + NVMe Storage';
    const s = currentPlan.specs;
    return `${s.vcpu || '1 vCPU'}, ${s.ram || '1 GB RAM'}, ${s.storage || '10 GB NVMe'}${s.bandwidth ? `, ${s.bandwidth}` : ''}`;
  };

  const constructEmailContent = () => {
    const subject = `[Hextorq Hosting] 14-Day Free Trial Enquiry - ${currentPlan.name} (${getCategoryLabel(currentCategory)})`;
    
    const body = `Hello Hextorq Hosting Team,

I would like to activate my 14-Day Free Trial / Plan Enquiry for the following configuration:

--- PLAN & CONFIGURATION ---
• Plan Name: ${currentPlan.name}
• Product Tier: ${getCategoryLabel(currentCategory)}
• Pricing: ₹${displayPrice}/month (${isYearly ? 'Yearly Billing - 15% Off' : 'Monthly Billing'})
• Resource Specs: ${getSpecsSummary()}
• Target Region: ${selectedRegion}

--- APPLICANT / PROJECT DETAILS ---
• Name / Organization: ${userName || 'Not Specified'}
• Contact Email: ${userEmail || 'Not Specified'}
• Application / Subdomain: ${projectName ? `${projectName}.hextorq.app` : 'Not Specified'}
• Notes / Tech Stack: ${customNotes || '1 Frontend + 1 Backend setup'}

Please provision the 14-Day Free Trial sandbox environment and share the server access credentials.

Thank you!`;

    return { subject, body };
  };

  const handleStartTrial = (e) => {
    if (e) e.preventDefault();
    const { subject, body } = constructEmailContent();
    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Redirect / open email client
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const handleCopyEmailDetails = () => {
    const { subject, body } = constructEmailContent();
    const fullText = `TO: ${SUPPORT_EMAIL}\nSUBJECT: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-900 max-h-[92vh] flex flex-col border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="size-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-display font-bold text-base text-[rgb(26,11,84)]">
                  Start 14-Day Free Trial
                </h3>
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  ₹0 DUE TODAY
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans">
                Direct enquiry to <strong className="text-slate-800 font-mono">{SUPPORT_EMAIL}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={closeTrialModal}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleStartTrial} className="space-y-5">
              
              {/* Top Trial Banner */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-start space-x-3 text-xs">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-blue-950 font-display">14-Day Risk-Free Evaluation</div>
                  <p className="text-blue-900/80 font-sans leading-relaxed">
                    Test your full application on live production infrastructure. Clicking below creates a pre-filled activation enquiry directly to our technical team at <strong className="font-mono">{SUPPORT_EMAIL}</strong> for instant setup.
                  </p>
                </div>
              </div>

              {/* Category Selector Tabs */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                  Select Hosting Model
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentCategory('fixed');
                      setActivePlan(FIXED_SHARED_PLANS[0]);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-mono transition-all font-semibold ${
                      currentCategory === 'fixed'
                        ? 'bg-white text-blue-700 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Fixed Shared
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentCategory('flex');
                      setActivePlan(FLEX_SHARED_PLANS[0]);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-mono transition-all font-semibold ${
                      currentCategory === 'flex'
                        ? 'bg-white text-blue-700 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Flex Burst
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentCategory('vps');
                      setActivePlan(VPS_PLANS[0]);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-mono transition-all font-semibold ${
                      currentCategory === 'vps'
                        ? 'bg-white text-blue-700 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    VPS Hosting
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentCategory('managed');
                      setActivePlan(MANAGED_VPS_PLANS[0]);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-mono transition-all font-semibold ${
                      currentCategory === 'managed'
                        ? 'bg-white text-blue-700 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Managed VPS
                  </button>
                </div>
              </div>

              {/* Plan Tier Selector within Category */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                  Select Plan Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {currentPlanList.map((plan) => {
                    const isSel = currentPlan.id === plan.id;
                    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setActivePlan(plan)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSel
                            ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                            : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold font-display ${isSel ? 'text-blue-900' : 'text-slate-900'}`}>
                            {plan.name}
                          </span>
                          {plan.badge && (
                            <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-600 text-white uppercase">
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-bold font-display text-[rgb(26,11,84)] mt-1">
                          ₹{price}<span className="text-[10px] font-normal text-slate-500 font-mono">/mo</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                          {plan.specs?.vcpu || ''} • {plan.specs?.ram || ''}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Plan Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Configured Plan</span>
                    <h4 className="text-base font-bold text-[rgb(26,11,84)] font-display flex items-center space-x-2">
                      <span>{currentPlan.name}</span>
                      <span className="text-xs font-mono font-normal text-slate-500">({getCategoryLabel(currentCategory)})</span>
                    </h4>
                  </div>

                  <div className="flex items-center space-x-3 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setIsYearly(!isYearly)}
                      className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-400 flex items-center space-x-1.5 shadow-sm"
                    >
                      <span className="text-blue-600 font-bold">{isYearly ? 'Yearly (-15%)' : 'Monthly'}</span>
                    </button>
                    <div className="text-right">
                      <div className="text-base font-bold font-display text-[rgb(26,11,84)]">₹{displayPrice}/mo</div>
                      <div className="text-[10px] text-emerald-600 font-semibold">14 Days Free</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-700">
                  <div className="p-2 rounded-xl bg-white border border-slate-100">
                    <span className="text-[9px] text-slate-400 block uppercase">COMPUTE</span>
                    <strong className="text-slate-900">{currentPlan.specs?.vcpu || '1 vCPU'}</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-100">
                    <span className="text-[9px] text-slate-400 block uppercase">MEMORY</span>
                    <strong className="text-slate-900">{currentPlan.specs?.ram || '1 GB RAM'}</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-100">
                    <span className="text-[9px] text-slate-400 block uppercase">STORAGE</span>
                    <strong className="text-slate-900">{currentPlan.specs?.storage || '10 GB NVMe'}</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-100">
                    <span className="text-[9px] text-slate-400 block uppercase">NETWORK / STACK</span>
                    <strong className="text-slate-900">{currentPlan.specs?.bandwidth || '1 FE + 1 BE'}</strong>
                  </div>
                </div>
              </div>

              {/* Applicant / Project Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                    Notification / Contact Email
                  </label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="e.g. developer@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Project Subdomain & Region */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                    Project / Application Name
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-slate-200 bg-slate-50 focus-within:border-blue-600 focus-within:bg-white">
                    <input
                      type="text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                      placeholder="my-production-app"
                      className="flex-1 px-3 py-2 text-xs bg-transparent text-slate-900 focus:outline-none font-mono"
                    />
                    <span className="px-2.5 py-2 text-[11px] font-mono text-slate-400 bg-slate-100 border-l border-slate-200 flex items-center">
                      .hextorq.app
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                    Preferred Data Center
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl text-xs font-mono bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  >
                    <option>India (Mumbai) - 🇮🇳</option>
                    <option>Singapore - 🇸🇬</option>
                    <option>Germany (Frankfurt) - 🇩🇪</option>
                    <option>United Kingdom (London) - 🇬🇧</option>
                    <option>United States (Virginia) - 🇺🇸</option>
                  </select>
                </div>
              </div>

              {/* Notes / Special requirements */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                  Stack or Migration Notes (Optional)
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. React + Node.js Express, PostgreSQL, or need Docker support"
                  className="w-full px-3.5 py-2 text-xs font-mono bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-lg active:scale-95 transition-all"
                >
                  <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-3 text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Send 14-Day Trial Enquiry to {SUPPORT_EMAIL}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                <div className="text-center text-[10px] font-mono text-slate-500 mt-2">
                  Opens your email client with pre-filled configuration details • No credit card required
                </div>
              </div>

            </form>
          ) : (
            /* Confirmation Screen with Copyable Content */
            <div className="text-center py-6 space-y-6">
              <div className="size-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                <Check className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold font-display text-[rgb(26,11,84)]">
                  Enquiry Created & Mail Client Opened!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your 14-day free trial request for <strong className="text-slate-900">{currentPlan.name}</strong> was prepared for <strong className="font-mono text-slate-900">{SUPPORT_EMAIL}</strong>.
                </p>
              </div>

              {/* Direct Mail Actions */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3 text-left">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Recipient:</span>
                  <strong className="text-blue-700 font-bold">{SUPPORT_EMAIL}</strong>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Selected Plan:</span>
                  <strong className="text-slate-900">{currentPlan.name} (₹{displayPrice}/mo)</strong>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Trial Period:</span>
                  <strong className="text-emerald-600 font-bold">14 Days Free ($0 Upfront)</strong>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={handleStartTrial}
                    className="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-mono font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Re-open Email App</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmailDetails}
                    className="py-2 px-3 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-mono hover:bg-slate-100 transition-colors flex items-center space-x-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 font-sans max-w-sm mx-auto">
                Didn’t open automatically? Simply click <strong>Copy Text</strong> and send it to <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 underline font-mono">{SUPPORT_EMAIL}</a>. Our systems team responds rapidly to set up your instance.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={closeTrialModal}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
