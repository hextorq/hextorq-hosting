import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { ServerCrash, ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Hextorq Hosting"
        description="The requested infrastructure route does not exist."
      />

      <div className="min-h-screen bg-[#06090E] text-slate-100 flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/30 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center mx-auto text-cyan-400">
            <ServerCrash className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Error 404 • Route Not Found
            </span>
            <h1 className="text-3xl font-bold font-display text-white">
              Unknown Endpoint
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              The requested hosting route does not exist or has been relocated to another edge hypervisor.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center justify-center space-x-2"
            >
              <span>Explore Plans</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
