import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  Server, 
  GitBranch, 
  Globe, 
  HardDrive, 
  Activity, 
  CreditCard, 
  Headphones, 
  RefreshCw, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  ExternalLink,
  Power,
  Sliders,
  Sparkles,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import { MOCK_APPS, MOCK_DEPLOYMENTS, MOCK_LOGS } from '../../data/dashboardData';

export default function InteractiveDashboard({ isEmbedded = false }) {
  const [selectedApp, setSelectedApp] = useState(MOCK_APPS[0]);
  const [activeTab, setActiveTab] = useState('overview');
  const [isRestarting, setIsRestarting] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState(MOCK_LOGS);

  const triggerRestart = () => {
    setIsRestarting(true);
    const newLog = `[${new Date().toISOString().substring(11, 19)}] WARN [hypervisor] Graceful rolling reload initiated for ${selectedApp.name}...`;
    setConsoleLogs(prev => [newLog, ...prev]);

    setTimeout(() => {
      setIsRestarting(false);
      const successLog = `[${new Date().toISOString().substring(11, 19)}] INFO [hypervisor] Container reload complete. Health check returned 200 OK.`;
      setConsoleLogs(prev => [successLog, ...prev]);
    }, 1800);
  };

  const navItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'apps', name: 'Applications (1 Front + 1 Back)', icon: Layers, badge: '2 Active' },
    { id: 'servers', name: 'VPS Servers', icon: Server, badge: '1 Node' },
    { id: 'deployments', name: 'Deployments', icon: GitBranch },
    { id: 'domains', name: 'Domains & SSL', icon: Globe },
    { id: 'backups', name: 'Backups & Snapshots', icon: HardDrive },
    { id: 'monitoring', name: 'Realtime Metrics', icon: Activity },
    { id: 'billing', name: 'Billing & Invoices', icon: CreditCard },
    { id: 'support', name: 'Support Tickets', icon: Headphones }
  ];

  return (
    <div className={`w-full rounded-3xl bg-[#080D18] border border-cyan-500/30 shadow-2xl overflow-hidden ${isEmbedded ? 'max-h-[680px]' : 'min-h-[800px]'} flex flex-col`}>
      
      {/* Top Header Bar */}
      <div className="px-6 py-3.5 bg-[#060910] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">
            H
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-white tracking-wide">
                HEXTORQ CONSOLE
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                PREVIEW SIMULATOR
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">
              Cluster: in-mum-01 • VPC: vpc-hextorq-live
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* App Switcher */}
          <select
            value={selectedApp.id}
            onChange={(e) => {
              const app = MOCK_APPS.find(a => a.id === e.target.value);
              if (app) setSelectedApp(app);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
          >
            {MOCK_APPS.map(a => (
              <option key={a.id} value={a.id}>{a.name} ({a.type})</option>
            ))}
          </select>

          <button
            type="button"
            onClick={triggerRestart}
            disabled={isRestarting}
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center space-x-1.5 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRestarting ? 'animate-spin text-cyan-400' : ''}`} />
            <span>{isRestarting ? 'Reloading...' : 'Restart App'}</span>
          </button>
        </div>
      </div>

      {/* Main Console Layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar (Desktop) */}
        <aside className="w-full md:w-64 bg-[#070B13] border-r border-white/[0.06] p-4 space-y-1 overflow-y-auto shrink-0 hidden md:block">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 py-2">
            Infrastructure Navigation
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isCurrent = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono transition-all text-left ${
                  isCurrent
                    ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)] font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Content Pane */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#080D18]">
          
          {/* Top App Identity Banner */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2.5">
                <h3 className="text-lg font-bold font-display text-white">
                  {selectedApp.name}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{selectedApp.status}</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                  {selectedApp.type}
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-300 flex items-center space-x-1">
                <span>https://{selectedApp.domain}</span>
                <ExternalLink className="w-3 h-3 text-cyan-400 inline" />
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-slate-400">
                Region: <strong className="text-white">{selectedApp.location}</strong>
              </span>
            </div>
          </div>

          {/* Architecture Status: Frontend + Backend Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Frontend Card */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold font-mono text-white">FRONTEND CONTAINER</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  ONLINE ({selectedApp.frontend.uptime})
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
                <div>Framework: <span className="text-white font-semibold">{selectedApp.frontend.framework}</span></div>
                <div>Edge Latency: <span className="text-cyan-300">{selectedApp.frontend.latency}</span></div>
                <div className="col-span-2 text-[11px] text-slate-400">Branch: {selectedApp.frontend.branch}</div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-blue-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Server className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold font-mono text-white">BACKEND CONTAINER</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  ONLINE ({selectedApp.backend.uptime})
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
                <div>Runtime: <span className="text-white font-semibold">{selectedApp.backend.runtime}</span></div>
                <div>Internal Port: <span className="text-blue-300">:{selectedApp.backend.port}</span></div>
                <div className="col-span-2 text-[11px] text-slate-400">Branch: {selectedApp.backend.branch}</div>
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* CPU */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 flex items-center space-x-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CPU Usage</span>
                </span>
                <span className="text-white font-bold">{selectedApp.metrics.cpuCurrent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500" style={{ width: `${selectedApp.metrics.cpuCurrent}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 block truncate">
                {selectedApp.metrics.cpuBurst}
              </span>
            </div>

            {/* RAM */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span>Memory</span>
                </span>
                <span className="text-white font-bold">{selectedApp.metrics.ramCurrent} GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${(selectedApp.metrics.ramCurrent / selectedApp.metrics.ramLimit) * 100}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                Limit: {selectedApp.metrics.ramLimit} GB (Burstable)
              </span>
            </div>

            {/* Storage */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 flex items-center space-x-1.5">
                  <HardDrive className="w-3.5 h-3.5 text-indigo-400" />
                  <span>NVMe Storage</span>
                </span>
                <span className="text-white font-bold">{selectedApp.metrics.storageUsed} GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500" style={{ width: `${(selectedApp.metrics.storageUsed / selectedApp.metrics.storageTotal) * 100}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                Total: {selectedApp.metrics.storageTotal} GB Partition
              </span>
            </div>

            {/* Bandwidth */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 flex items-center space-x-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Bandwidth</span>
                </span>
                <span className="text-white font-bold">{selectedApp.metrics.bandwidthUsed} GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${(selectedApp.metrics.bandwidthUsed / selectedApp.metrics.bandwidthTotal) * 100}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                Quota: {selectedApp.metrics.bandwidthTotal} GB / mo
              </span>
            </div>
          </div>

          {/* Recent Deployments & Live Server Logs Dual Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Deployments List */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>Recent Git Deployments</span>
                </h4>
                <span className="text-[10px] font-mono text-slate-400">Auto-deploy enabled</span>
              </div>

              <div className="space-y-2.5">
                {MOCK_DEPLOYMENTS.filter(d => d.app === selectedApp.name).map((dep) => (
                  <div key={dep.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
                    <div className="space-y-0.5 truncate max-w-[280px]">
                      <div className="text-white font-semibold truncate">{dep.commit}</div>
                      <div className="text-[10px] text-slate-400 flex items-center space-x-2">
                        <span>#{dep.hash}</span>
                        <span>•</span>
                        <span>{dep.branch}</span>
                        <span>•</span>
                        <span>{dep.author}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px]">
                        {dep.status} ({dep.duration})
                      </span>
                      <div className="text-[10px] text-slate-400 mt-1">{dep.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Terminal Logs Streamer */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-white/[0.08] space-y-3 font-mono text-xs shadow-inner flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Realtime Container Logs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[10px] text-emerald-400">STREAMING</span>
                </div>
              </div>

              <div className="space-y-1.5 h-44 overflow-y-auto text-[11px] text-slate-300 pr-1">
                {consoleLogs.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    <span className="text-cyan-500">› </span>
                    <span className={line.includes('WARN') ? 'text-amber-300 font-semibold' : 'text-slate-300'}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                <span>Filter: stdout & stderr</span>
                <span className="text-cyan-400">Press Restart App to test simulator</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
