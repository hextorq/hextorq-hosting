import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Server, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  HardDrive,
  Copy, 
  ExternalLink, 
  RefreshCw, 
  Calendar,
  CreditCard,
  Mail,
  Zap,
  Terminal,
  Globe
} from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { SUPPORT_EMAIL } from '../../data/hostingData';

export default function TrialModal() {
  const { isTrialOpen, closeTrialModal, selectedPlan, planCategory } = useTrialModal();
  
  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState('app-prod');
  const [frontendTech, setFrontendTech] = useState('React / Vite');
  const [backendTech, setBackendTech] = useState('Node.js API');
  const [selectedOS, setSelectedOS] = useState('Ubuntu 24.04 LTS');
  const [selectedRegion, setSelectedRegion] = useState('India (Mumbai)');
  const [userEmail, setUserEmail] = useState('');
  const [deployProgress, setDeployProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [copied, setCopied] = useState(false);

  const trialEndDate = new Date();
  trialEndDate.setDate(trialEndDate.getDate() + 14);
  const formattedDate = trialEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  useEffect(() => {
    if (isTrialOpen) {
      setStep(1);
      setDeployProgress(0);
      setLogs([]);
      if (selectedPlan?.name) {
        setProjectName(selectedPlan.name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-demo');
      } else {
        setProjectName('my-application');
      }
    }
  }, [isTrialOpen, selectedPlan]);

  const runSimulation = (e) => {
    if (e) e.preventDefault();
    setStep(2);
    setDeployProgress(8);
    setLogs([
      `[00:01] Initiating 14-Day Free Trial for ${selectedPlan?.name || 'Hextorq Instance'}...`,
      `[00:02] Target Region: ${selectedRegion} | Architecture: 1 Frontend + 1 Backend`
    ]);

    const steps = [
      { p: 25, msg: `[00:04] Allocating isolated compute container with NVMe backing...` },
      { p: 45, msg: `[00:07] Configuring application runtime environment [${planCategory === 'vps' || planCategory === 'custom-vps' ? selectedOS : `${frontendTech} + ${backendTech}`}]...` },
      { p: 68, msg: `[00:10] Generating automated SSL Certificate via Let's Encrypt...` },
      { p: 88, msg: `[00:13] Binding Anycast edge routing & firewall ingress rules...` },
      { p: 100, msg: `[00:15] Trial environment active! 14 days full access unlocked.` }
    ];

    steps.forEach((s, idx) => {
      setTimeout(() => {
        setDeployProgress(s.p);
        setLogs((prev) => [...prev, s.msg]);
        if (idx === steps.length - 1) {
          setTimeout(() => setStep(3), 600);
        }
      }, (idx + 1) * 700);
    });
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(`https://${projectName}.hextorq.app`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isTrialOpen) return null;

  const isVPS = planCategory === 'vps' || planCategory === 'managed' || planCategory === 'custom-vps';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-card border border-border rounded-[1.75rem] shadow-elevated overflow-hidden text-foreground max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-muted/40 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="size-8 rounded-xl bg-muted border border-border flex items-center justify-center text-foreground">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-display font-bold text-base text-foreground">
                  Start 14-Day Free Trial
                </h3>
                <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-muted border border-border text-foreground uppercase tracking-wider">
                  ₹0 DUE TODAY
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                {selectedPlan ? `${selectedPlan.name} (${selectedPlan.currency || '₹'}${selectedPlan.monthlyPrice || selectedPlan.price}/mo after trial)` : 'Hextorq Hosting Plan'}
              </p>
            </div>
          </div>
          <button
            onClick={closeTrialModal}
            className="p-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {step === 1 && (
            <form onSubmit={runSimulation} className="space-y-5">
              {/* Highlight trial banner */}
              <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-start space-x-3 text-xs">
                <ShieldCheck className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">14-Day Full Access Evaluation</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Test your frontend and backend on live infrastructure with full capabilities. Billing only begins on <span className="text-foreground font-mono font-semibold">{formattedDate}</span> if you choose to continue.
                  </p>
                </div>
              </div>

              {/* Selected Plan Summary Pill Box */}
              {selectedPlan && (
                <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Selected Configuration</span>
                      <h4 className="text-sm font-bold text-foreground font-display">{selectedPlan.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-brand-emerald font-semibold font-mono">14 Days Free</div>
                      <div className="text-[11px] text-muted-foreground">Then ₹{selectedPlan.monthlyPrice || selectedPlan.price}/mo</div>
                    </div>
                  </div>
                  {selectedPlan.specs && (
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                      <div>Compute: <strong className="text-foreground">{selectedPlan.specs.vcpu}</strong></div>
                      <div>RAM: <strong className="text-foreground">{selectedPlan.specs.ram}</strong></div>
                      <div>Storage: <strong className="text-foreground">{selectedPlan.specs.storage}</strong></div>
                    </div>
                  )}
                </div>
              )}

              {/* Project / App name */}
              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                  Application Subdomain / Identifier
                </label>
                <div className="flex rounded-xl overflow-hidden border border-border bg-muted/40 focus-within:border-primary/50">
                  <input
                    type="text"
                    required
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    className="flex-1 px-3.5 py-2 text-xs bg-transparent text-foreground focus:outline-none font-mono"
                    placeholder="my-production-app"
                  />
                  <span className="px-3 py-2 text-xs font-mono text-muted-foreground bg-muted border-l border-border flex items-center">
                    .hextorq.app
                  </span>
                </div>
              </div>

              {/* Stack Configuration (Shared vs VPS) */}
              {!isVPS ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5 flex items-center space-x-1.5">
                      <span className="size-1.5 rounded-full bg-brand-cyan"></span>
                      <span>Frontend Stack (1 Frontend)</span>
                    </label>
                    <select
                      value={frontendTech}
                      onChange={(e) => setFrontendTech(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs font-mono bg-muted/40 border border-border text-foreground focus:outline-none focus:border-primary/50"
                    >
                      <option>React / Vite</option>
                      <option>Next.js</option>
                      <option>Vue 3 / Nuxt</option>
                      <option>Svelte / SvelteKit</option>
                      <option>Static HTML / Tailwind</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5 flex items-center space-x-1.5">
                      <span className="size-1.5 rounded-full bg-brand-electric"></span>
                      <span>Backend Stack (1 Backend)</span>
                    </label>
                    <select
                      value={backendTech}
                      onChange={(e) => setBackendTech(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs font-mono bg-muted/40 border border-border text-foreground focus:outline-none focus:border-primary/50"
                    >
                      <option>Node.js (Express / Nest / Fastify)</option>
                      <option>Python (FastAPI / Django / Flask)</option>
                      <option>PHP (Laravel / Custom API)</option>
                      <option>Go (Fiber / Gin / Standard Lib)</option>
                      <option>REST / GraphQL API Service</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                      Operating System
                    </label>
                    <select
                      value={selectedOS}
                      onChange={(e) => setSelectedOS(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs font-mono bg-muted/40 border border-border text-foreground focus:outline-none focus:border-primary/50"
                    >
                      <option>Ubuntu 24.04 LTS (Recommended)</option>
                      <option>Debian 12 Bookworm</option>
                      <option>Rocky Linux 9</option>
                      <option>AlmaLinux 9</option>
                      <option>Windows Server 2022</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                      Access Authentication
                    </label>
                    <input
                      type="text"
                      placeholder="SSH Key or Root Password setup"
                      defaultValue="Auto-generated SSH keypair"
                      className="w-full px-3.5 py-2 rounded-xl text-xs font-mono bg-muted/40 border border-border text-foreground focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>
              )}

              {/* Deployment Region */}
              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                  Data Center Region
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { name: 'India (Mumbai)', flag: '🇮🇳' },
                    { name: 'Singapore', flag: '🇸🇬' },
                    { name: 'Germany (Frankfurt)', flag: '🇩🇪' },
                    { name: 'UK (London)', flag: '🇬🇧' },
                    { name: 'US (Virginia)', flag: '🇺🇸' }
                  ].map((loc) => (
                    <button
                      key={loc.name}
                      type="button"
                      onClick={() => setSelectedRegion(loc.name)}
                      className={`p-2 rounded-xl border text-center transition-all text-xs font-mono ${
                        selectedRegion === loc.name
                          ? 'border-primary bg-muted text-foreground font-bold shadow-sm'
                          : 'border-border bg-muted/40 text-muted-foreground hover:border-border/80'
                      }`}
                    >
                      <div className="text-sm mb-0.5">{loc.flag}</div>
                      <div className="truncate text-[10px]">{loc.name.split(' ')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Email address for trial credential delivery */}
              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                  Notification Email (for credentials & deployment updates)
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="developer@yourcompany.com"
                    className="w-full px-3.5 py-2 pl-9 rounded-xl text-xs font-mono bg-muted/40 border border-border text-foreground focus:outline-none focus:border-primary/50"
                  />
                  <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-2.5" />
                </div>
              </div>

              {/* Trial policy guarantees */}
              <div className="p-3 rounded-xl bg-muted/30 border border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>No credit card required to start</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>Cancel anytime</span>
                </span>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="py-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground flex items-center space-x-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Provisioning 14-Day Free Trial Environment...</span>
                </span>
                <span className="text-foreground font-bold">{deployProgress}%</span>
              </div>

              <div className="w-full h-2 bg-muted rounded-full overflow-hidden border border-border">
                <div 
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${deployProgress}%` }}
                ></div>
              </div>

              <div className="bg-muted/50 border border-border rounded-2xl p-4 font-mono text-xs text-muted-foreground h-44 overflow-y-auto space-y-1.5">
                {logs.map((line, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-foreground">›</span>
                    <span className={idx === logs.length - 1 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-5">
              <div className="size-12 rounded-2xl bg-muted border border-border flex items-center justify-center mx-auto text-brand-emerald shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground font-display">
                  14-Day Free Trial Activated!
                </h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-md mx-auto">
                  Your sandbox environment for <strong className="text-foreground">{selectedPlan?.name || 'Hextorq Plan'}</strong> is ready in {selectedRegion}.
                </p>
              </div>

              {/* URL Preview */}
              <div className="p-3.5 rounded-2xl bg-muted/60 border border-border flex items-center justify-between max-w-md mx-auto">
                <span className="text-xs font-mono text-foreground truncate">
                  https://{projectName}.hextorq.app
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyUrl}
                    className="p-1.5 rounded-lg bg-card text-muted-foreground hover:text-foreground border border-border"
                    title="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Trial%20Assistance%20for%20${projectName}&body=Hello%20Hextorq%20Team,%0A%0AI%20started%20a%2014-day%20trial%20for%20${selectedPlan?.name}%20(${projectName}.hextorq.app).%20Please%20assist%20with%20onboarding.`}
                    className="p-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                    title="Contact Support for Setup"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {copied && <span className="text-[11px] text-brand-emerald font-mono">URL Copied to clipboard!</span>}

              {/* Trial timeline info */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto text-left text-xs font-mono">
                <div className="p-3 rounded-xl bg-muted/40 border border-border">
                  <div className="text-muted-foreground text-[10px] uppercase">TRIAL DURATION</div>
                  <div className="text-foreground font-bold mt-0.5">14 Days (Active)</div>
                </div>
                <div className="p-3 rounded-xl bg-muted/40 border border-border">
                  <div className="text-muted-foreground text-[10px] uppercase">TRIAL EXPIRES</div>
                  <div className="text-foreground font-bold mt-0.5">{formattedDate}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-muted/30 border border-border max-w-md mx-auto text-[11px] text-muted-foreground leading-relaxed font-sans">
                Questions or need assistance setting up your repositories? Reach out directly to <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground underline">{SUPPORT_EMAIL}</a>.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-muted/40 border-t border-border flex items-center justify-between">
          {step === 1 && (
            <>
              <button
                type="button"
                onClick={closeTrialModal}
                className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={runSimulation}
                className="h-10 px-5 rounded-xl text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-sm flex items-center space-x-2 active:scale-95"
              >
                <span>Launch 14-Day Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {step === 2 && (
            <div className="w-full text-center text-xs font-mono text-muted-foreground">
              Provisioning isolated container node & allocating NVMe partition...
            </div>
          )}

          {step === 3 && (
            <div className="w-full flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Configure Another Plan
              </button>
              <button
                type="button"
                onClick={closeTrialModal}
                className="h-10 px-5 rounded-xl text-xs font-semibold text-foreground bg-muted hover:bg-muted/80 border border-border"
              >
                Close & Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
