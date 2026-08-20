import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  Server, 
  GitBranch, 
  Globe, 
  HardDrive, 
  Activity, 
  RefreshCw, 
  CheckCircle2, 
  ExternalLink,
  Cpu, 
  Zap, 
  Sparkles
} from 'lucide-react';
import { MOCK_APPS, MOCK_DEPLOYMENTS, MOCK_LOGS } from '../../data/dashboardData';

export default function InteractiveDashboard({ isEmbedded = false }) {
  const [selectedApp, setSelectedApp] = useState(MOCK_APPS[0]);
  const [activeTab, setActiveTab] = useState('overview');
  const [isRestarting, setIsRestarting] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState(MOCK_LOGS);

  const triggerRestart = () => {
    setIsRestarting(true);
    const newLog = `[${new Date().toISOString().substring(11, 19)}] INFO [runtime] Rolling restart triggered for ${selectedApp.name}...`;
    setConsoleLogs(prev => [newLog, ...prev]);

    setTimeout(() => {
      setIsRestarting(false);
      const successLog = `[${new Date().toISOString().substring(11, 19)}] INFO [runtime] Application container healthy. HTTP 200 OK.`;
      setConsoleLogs(prev => [successLog, ...prev]);
    }, 1500);
  };

  const navItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'apps', name: 'Applications', icon: Layers, badge: '2 Active' },
    { id: 'servers', name: 'VPS Servers', icon: Server, badge: '1 Node' },
    { id: 'deployments', name: 'Deployments', icon: GitBranch },
    { id: 'domains', name: 'Domains & SSL', icon: Globe },
    { id: 'backups', name: 'Backups', icon: HardDrive },
    { id: 'monitoring', name: 'Metrics', icon: Activity }
  ];

  return (
    <div className={`w-full rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl overflow-hidden ${isEmbedded ? 'max-h-[680px]' : 'min-h-[750px]'} flex flex-col`}>
      
      {/* Top Header Bar */}
      <div className="px-6 py-3.5 bg-slate-950/80 border-b border-white/[0.06] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center text-cyan-400 font-bold text-xs">
            H
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-white tracking-wide">
                HEXTORQ CONSOLE PREVIEW
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">
              Demo Environment • Region: Mumbai (Asia-South)
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
            className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900 border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500"
          >
            {MOCK_APPS.map(a => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>

          <button
            type="button"
            onClick={triggerRestart}
            disabled={isRestarting}
            className="px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/[0.08] flex items-center space-x-1.5 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRestarting ? 'animate-spin text-cyan-400' : ''}`} />
            <span>{isRestarting ? 'Restarting...' : 'Restart App'}</span>
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-full md:w-60 bg-[#070B14] border-r border-white/[0.06] p-4 space-y-1 overflow-y-auto shrink-0 hidden md:block">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 py-2">
            Navigation
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isCurrent = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                  isCurrent
                    ? 'bg-cyan-950/60 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Content Pane */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#090E18]">
          
          {/* Top Identity Banner */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2.5">
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  {selectedApp.name}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  {selectedApp.status}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/50 text-cyan-300 border border-cyan-500/20">
                  {selectedApp.type}
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-400 flex items-center space-x-1">
                <span>https://{selectedApp.domain}</span>
                <ExternalLink className="w-3 h-3 text-cyan-400 inline" />
              </p>
            </div>

            <span className="text-xs font-mono text-slate-400">
              Region: <strong className="text-white">{selectedApp.location}</strong>
            </span>
          </div>

          {/* Dual Architecture (Frontend + Backend) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-white flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Frontend Container</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Online</span>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div>Framework: <span className="text-white">{selectedApp.frontend.framework}</span></div>
                <div>Branch: <span className="text-slate-300">{selectedApp.frontend.branch}</span></div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-white flex items-center space-x-1.5">
                  <Server className="w-3.5 h-3.5 text-blue-400" />
                  <span>Backend Container</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Online</span>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div>Runtime: <span className="text-white">{selectedApp.backend.runtime}</span></div>
                <div>Port: <span className="text-slate-300">:{selectedApp.backend.port}</span></div>
              </div>
            </div>
          </div>

          {/* Live Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 flex items-center space-x-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CPU</span>
                </span>
                <span className="text-white font-bold">{selectedApp.metrics.cpuCurrent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500" style={{ width: `${selectedApp.metrics.cpuCurrent}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                {selectedApp.metrics.cpuBurst}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span>Memory</span>
                </span>
                <span className="text-white font-bold">{selectedApp.metrics.ramCurrent} GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${(selectedApp.metrics.ramCurrent / selectedApp.metrics.ramLimit) * 100}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                Limit: {selectedApp.metrics.ramLimit} GB
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Storage</span>
                <span className="text-white font-bold">{selectedApp.metrics.storageUsed} GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500" style={{ width: `${(selectedApp.metrics.storageUsed / selectedApp.metrics.storageTotal) * 100}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                Total: {selectedApp.metrics.storageTotal} GB NVMe
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Transfer</span>
                <span className="text-white font-bold">{selectedApp.metrics.bandwidthUsed} GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${(selectedApp.metrics.bandwidthUsed / selectedApp.metrics.bandwidthTotal) * 100}%` }}></div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                Quota: {selectedApp.metrics.bandwidthTotal} GB
              </span>
            </div>
          </div>

          {/* Recent Deployments & Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.06] space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Recent Deployments
              </h4>
              <div className="space-y-2">
                {MOCK_DEPLOYMENTS.map((dep) => (
                  <div key={dep.id} className="p-3 rounded-xl bg-slate-950/80 border border-white/[0.04] flex items-center justify-between text-xs font-mono">
                    <div className="truncate max-w-[240px]">
                      <div className="text-white font-medium truncate">{dep.commit}</div>
                      <div className="text-[10px] text-slate-400">#{dep.hash} • {dep.branch}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 text-[10px]">
                      {dep.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-white/[0.06] space-y-2 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04] text-slate-400 text-[11px]">
                <span>Container Output Stream</span>
                <span className="text-emerald-400">Online</span>
              </div>
              <div className="space-y-1 h-36 overflow-y-auto text-[11px] text-slate-300">
                {consoleLogs.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    <span className="text-cyan-500">› </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
