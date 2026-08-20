import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Terminal, 
  Server, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  HardDrive,
  Copy,
  ExternalLink,
  RefreshCw,
  Zap
} from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';
import { Link } from 'react-router-dom';

export default function DeploySimulationModal() {
  const { isOpen, closeDeployModal, selectedPlan, modalType } = useDeployModal();
  const [step, setStep] = useState(1); // 1: Config, 2: Deploying, 3: Completed
  const [appName, setAppName] = useState('nexus-app');
  const [frontendRepo, setFrontendRepo] = useState('github.com/hextorq-demo/nexus-frontend');
  const [backendRepo, setBackendRepo] = useState('github.com/hextorq-demo/nexus-backend');
  const [selectedRegion, setSelectedRegion] = useState('in-mum');
  const [deployProgress, setDeployProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [copied, setCopied] = useState(false);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setDeployProgress(0);
      setLogs([]);
      if (selectedPlan?.name) {
        setAppName(selectedPlan.name.toLowerCase().replace(/\s+/g, '-') + '-prod');
      }
    }
  }, [isOpen, selectedPlan]);

  const runDeploySimulation = () => {
    setStep(2);
    setDeployProgress(5);
    setLogs(['[00:01] Initializing container sandbox in ' + selectedRegion + '...']);

    const stream = [
      { p: 18, log: '[00:03] Pulling repository: ' + frontendRepo + ' [branch: main]' },
      { p: 32, log: '[00:05] Running npm build: Vite bundled 48 modules in 1.4s' },
      { p: 48, log: '[00:08] Initializing backend container: Node.js 20 LTS runtime' },
      { p: 65, log: '[00:11] Allocating NVMe storage partition & attaching memory limits' },
      { p: 80, log: '[00:13] Provisioning automated SSL Certificate via Let\'s Encrypt' },
      { p: 92, log: '[00:15] Binding Reverse Proxy & Anycast Edge Routing...' },
      { p: 100, log: '[00:16] SUCCESS: Application is ONLINE and healthy!' }
    ];

    stream.forEach((item, index) => {
      setTimeout(() => {
        setDeployProgress(item.p);
        setLogs((prev) => [...prev, item.log]);
        if (index === stream.length - 1) {
          setTimeout(() => setStep(3), 800);
        }
      }, (index + 1) * 800);
    });
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(`https://${appName}.hextorq.app`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0B101A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900/80 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base text-white">
                {modalType === 'vps' ? 'VPS Instant Provisioning' : 'Deploy Full-Stack Application'}
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                {selectedPlan ? `Selected: ${selectedPlan.name} (${selectedPlan.currency}${selectedPlan.monthlyPrice}/mo)` : 'Hextorq Cloud Sandbox'}
              </p>
            </div>
          </div>
          <button
            onClick={closeDeployModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Application Project Name
                </label>
                <div className="flex rounded-lg overflow-hidden border border-slate-700 bg-slate-950/60 focus-within:border-cyan-500">
                  <input
                    type="text"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-sm bg-transparent text-white focus:outline-none font-mono"
                    placeholder="my-awesome-app"
                  />
                  <span className="px-3 py-2 text-xs font-mono text-slate-400 bg-slate-900 border-l border-slate-800 flex items-center">
                    .hextorq.app
                  </span>
                </div>
              </div>

              {modalType !== 'vps' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span>Frontend Repository (React/Vite/Next)</span>
                    </label>
                    <input
                      type="text"
                      value={frontendRepo}
                      onChange={(e) => setFrontendRepo(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg text-xs font-mono bg-slate-950/60 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span>Backend Repository (Node/Python/PHP)</span>
                    </label>
                    <input
                      type="text"
                      value={backendRepo}
                      onChange={(e) => setBackendRepo(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg text-xs font-mono bg-slate-950/60 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Operating System
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg text-xs font-mono bg-slate-950/60 border border-slate-700 text-white focus:outline-none focus:border-cyan-500">
                      <option>Ubuntu 24.04 LTS (Recommended)</option>
                      <option>Debian 12 Bookworm</option>
                      <option>Rocky Linux 9</option>
                      <option>AlmaLinux 9</option>
                      <option>Windows Server 2022</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      SSH Key Authentication
                    </label>
                    <input
                      type="text"
                      placeholder="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5..."
                      className="w-full px-3.5 py-2 rounded-lg text-xs font-mono bg-slate-950/60 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Deployment Region
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {[
                    { id: 'in-mum', name: 'Mumbai', flag: '🇮🇳', ping: '12ms' },
                    { id: 'sg-sin', name: 'Singapore', flag: '🇸🇬', ping: '38ms' },
                    { id: 'de-fra', name: 'Frankfurt', flag: '🇩🇪', ping: '110ms' },
                    { id: 'uk-lon', name: 'London', flag: '🇬🇧', ping: '125ms' },
                    { id: 'us-iad', name: 'Virginia', flag: '🇺🇸', ping: '180ms' }
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedRegion(loc.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedRegion === loc.id
                          ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-base mb-1">{loc.flag}</div>
                      <div className="text-xs font-semibold text-white">{loc.name}</div>
                      <div className="text-[10px] font-mono text-cyan-400">{loc.ping}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary spec pills */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Free Automated SSL</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>HTTP/3 Anycast</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DDoS Protected</span>
                </span>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 flex items-center space-x-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Building & Provisioning Container Sandbox...</span>
                </span>
                <span className="text-slate-300 font-bold">{deployProgress}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                  style={{ width: `${deployProgress}%` }}
                ></div>
              </div>

              {/* Console log window */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 h-48 overflow-y-auto space-y-1.5">
                {logs.map((line, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-cyan-500">›</span>
                    <span className={idx === logs.length - 1 ? 'text-white font-semibold' : 'text-slate-400'}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Your Application Is Live!
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  1 Frontend and 1 Backend have been provisioned and bound to your Anycast edge route.
                </p>
              </div>

              {/* Live URL box */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-cyan-500/40 flex items-center justify-between max-w-md mx-auto">
                <span className="text-sm font-mono text-cyan-300 truncate">
                  https://{appName}.hextorq.app
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyUrl}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                    title="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://${appName}.hextorq.app`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500"
                    title="Open Live App"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {copied && <span className="text-[11px] text-emerald-400 font-mono">Copied to clipboard!</span>}

              {/* Simulated Metrics Card */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-left">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400">Response</span>
                  <p className="text-xs font-bold text-white mt-0.5">24ms (SSL OK)</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400">Status</span>
                  <p className="text-xs font-bold text-emerald-400 mt-0.5">200 OK</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400">Region</span>
                  <p className="text-xs font-bold text-white mt-0.5">{selectedRegion.toUpperCase()}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-900/80 border-t border-white/[0.08] flex items-center justify-between">
          {step === 1 && (
            <>
              <button
                type="button"
                onClick={closeDeployModal}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={runDeploySimulation}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Trigger Instant Build & Deploy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {step === 2 && (
            <div className="w-full text-center text-xs font-mono text-slate-400">
              Provisioning isolated container node... please wait
            </div>
          )}

          {step === 3 && (
            <div className="w-full flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Deploy Another App
              </button>
              <Link
                to="/dashboard-preview"
                onClick={closeDeployModal}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 flex items-center space-x-2"
              >
                <span>Open Control Panel Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
