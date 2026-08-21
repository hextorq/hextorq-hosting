import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Mail, 
  Copy, 
  ExternalLink,
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollContainerRef = useRef(null);

  // All plans map
  const allPlansByCategory = {
    fixed: FIXED_SHARED_PLANS,
    flex: FLEX_SHARED_PLANS,
    vps: VPS_PLANS,
    managed: MANAGED_VPS_PLANS
  };

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (isTrialOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setCopied(false);
      const cat = planCategory || 'fixed';
      setCurrentCategory(cat);
      
      if (selectedPlan) {
        setActivePlan(selectedPlan);
      } else {
        const defaultPlan = allPlansByCategory[cat]?.[0] || FIXED_SHARED_PLANS[0];
        setActivePlan(defaultPlan);
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
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

  const constructEmailDetails = () => {
    const applicantName = userName.trim() || 'Developer';
    const applicantEmail = userEmail.trim() || 'Not specified';
    const subject = `14-Day Free Trial Request: ${currentPlan.name} (${getCategoryLabel(currentCategory)}) - ${applicantName}`;
    
    const body = `Hi Hextorq Hosting Team,

I would like to start my 14-day free trial on Hextorq Hosting. Here are my selected plan and account details:

PLAN & CONFIGURATION:
• Plan: ${currentPlan.name}
• Hosting Type: ${getCategoryLabel(currentCategory)}
• Resources: ${getSpecsSummary()}
• Billing: ₹${displayPrice}/month (${isYearly ? 'Yearly Billing - 15% Off' : 'Monthly Billing'})

CONTACT & PROVISIONING:
• Name / Team: ${applicantName}
• Delivery Email: ${applicantEmail}

Please provision the 14-day evaluation sandbox environment and send over the server access credentials.

Thank you,
${applicantName}`;

    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SUPPORT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(SUPPORT_EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return { subject, body, mailtoUrl, gmailUrl, outlookUrl };
  };

  const handleStartTrial = (e) => {
    if (e) e.preventDefault();
    const { mailtoUrl } = constructEmailDetails();
    
    // Programmatically open mailto link
    try {
      const a = document.createElement('a');
      a.href = mailtoUrl;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (document.body.contains(a)) document.body.removeChild(a);
      }, 500);
    } catch {
      window.location.href = mailtoUrl;
    }

    setIsSubmitted(true);
  };

  const handleCopyEmailDetails = () => {
    const { subject, body } = constructEmailDetails();
    const fullText = `TO: ${SUPPORT_EMAIL}\nSUBJECT: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const { gmailUrl, outlookUrl, mailtoUrl } = constructEmailDetails();

  return (
    <div 
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeTrialModal();
      }}
    >
      <div 
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        onWheel={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-900 max-h-[90vh] flex flex-col border border-slate-200 animate-scaleUp my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Fixed Header without icon */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-display font-bold text-base text-[rgb(26,11,84)]">
                Start 14-Day Free Trial
              </h3>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                ₹0 DUE TODAY
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Direct activation enquiry to <strong className="text-slate-800 font-mono">{SUPPORT_EMAIL}</strong>
            </p>
          </div>

          <button
            onClick={closeTrialModal}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body - with hidden native scrollbar */}
        <div 
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          onWheel={(e) => e.stopPropagation()}
          className="p-6 overflow-y-auto space-y-5 flex-1 overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {!isSubmitted ? (
            <form id="trial-enquiry-form" onSubmit={handleStartTrial} className="space-y-5">
              
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

              {/* Plan Tier Selector with Fixed & Aligned Badges */}
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
                        <div className="flex items-center justify-between gap-1 w-full">
                          <span className={`text-xs font-bold font-display ${isSel ? 'text-blue-900' : 'text-slate-900'}`}>
                            {plan.name}
                          </span>
                          {plan.badge && (
                            <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-blue-600 text-white uppercase tracking-wider shrink-0">
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
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider font-semibold">Configured Plan</span>
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
                    <span className="text-[9px] text-slate-400 block uppercase">STACK / ACCESS</span>
                    <strong className="text-slate-900">{currentPlan.specs?.bandwidth || '1 FE + 1 BE'}</strong>
                  </div>
                </div>
              </div>

              {/* Simplified Applicant Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                    Delivery Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="e.g. developer@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-sans leading-relaxed pt-1">
                🔒 Zero upfront billing. Instant setup access credentials will be delivered to your contact email.
              </div>

            </form>
          ) : (
            /* Trustworthy Confirmation View */
            <div className="text-center py-5 space-y-5">
              <div className="size-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                <Check className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xl font-bold font-display text-[rgb(26,11,84)]">
                  Trial Request Formatted for {SUPPORT_EMAIL}
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Click your preferred email client below to send the pre-filled enquiry for <strong className="text-slate-900">{currentPlan.name}</strong>.
                </p>
              </div>

              {/* Multi-Email Client Action Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3 text-left shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Destination:</span>
                  <strong className="text-blue-700 font-bold">{SUPPORT_EMAIL}</strong>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-red-600 text-white text-xs font-mono font-semibold hover:bg-red-700 transition-all flex items-center justify-center space-x-1.5 shadow-sm text-center active:scale-95"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Gmail</span>
                  </a>

                  <a
                    href={outlookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-blue-600 text-white text-xs font-mono font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-1.5 shadow-sm text-center active:scale-95"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Outlook</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="p-3 rounded-xl bg-slate-900 text-white text-xs font-mono font-semibold hover:bg-black transition-all flex items-center justify-center space-x-1.5 shadow-sm text-center active:scale-95"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Default Mail App</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmailDetails}
                    className="p-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-mono font-semibold hover:bg-slate-100 transition-all flex items-center justify-center space-x-1.5 active:scale-95"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied Details!' : 'Copy Text'}</span>
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 font-sans max-w-sm mx-auto leading-normal">
                Our infrastructure team will provision your 14-day container environment and send you access credentials within 15–30 minutes.
              </p>
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          {!isSubmitted ? (
            <>
              <button
                type="button"
                onClick={closeTrialModal}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                form="trial-enquiry-form"
                className="h-10 px-6 rounded-xl text-xs font-bold text-white bg-[rgb(28,78,255)] hover:bg-blue-700 transition-all shadow-md flex items-center space-x-2 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Start 14-Day Free Trial</span>
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-mono text-blue-700 hover:underline"
              >
                ← Back to Plan Options
              </button>

              <button
                type="button"
                onClick={closeTrialModal}
                className="h-10 px-6 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Done & Close
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
