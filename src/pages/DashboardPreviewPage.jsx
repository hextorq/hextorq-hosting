import React from 'react';
import SEO from '../components/common/SEO';
import InteractiveDashboard from '../components/dashboard/InteractiveDashboard';
import { LayoutDashboard, Sparkles, Server, Zap, ArrowRight } from 'lucide-react';
import { useDeployModal } from '../context/DeployModalContext';

export default function DashboardPreviewPage() {
  const { openDeployModal } = useDeployModal();

  return (
    <>
      <SEO
        title="Control Panel Console Preview — Hextorq Hosting"
        description="Experience the developer-first Hextorq web console. Manage full-stack applications, monitor real-time telemetry, and stream container logs."
        canonical="https://hosting.hextorq.tech/dashboard-preview"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>INTERACTIVE CONSOLE SIMULATOR</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Developer-First <span className="text-gradient-cyan">Control Panel</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-mono">
            Preview the unified console for full-stack application nodes, dedicated VPS servers, realtime telemetry, and Git deployments.
          </p>
        </section>

        {/* The Full Console Simulator Component */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <InteractiveDashboard isEmbedded={false} />
        </section>

        {/* Action strip below console */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <h4 className="text-sm font-bold text-white font-display">
                Ready to deploy your real application?
              </h4>
              <p className="text-xs text-slate-400">
                Setup your 1 Frontend + 1 Backend app or root VPS in under 60 seconds.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openDeployModal(null, 'app')}
              className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 flex items-center space-x-2 shrink-0"
            >
              <span>Deploy Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
