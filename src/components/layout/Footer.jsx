import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Mail, Shield, Globe, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#04070B] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="14" fill="#38BDF8" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                HEXTORQ HOSTING
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Modern cloud infrastructure built around application architecture. Deploy one frontend and one backend with fixed or flexible burst capacity, or command a dedicated root-access VPS.
            </p>
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Support:</span>
                <a href="mailto:hosting@hextorq.tech" className="text-slate-200 hover:text-cyan-400 transition-colors">
                  hosting@hextorq.tech
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Domain:</span>
                <span className="text-slate-300 font-semibold">hosting.hextorq.tech</span>
              </div>
            </div>
            {/* Live Status indicator */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>All Systems Operational (100% Core Uptime)</span>
            </div>
          </div>

          {/* Column 1: Hosting Products */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center space-x-1.5">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hosting</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/shared-hosting" className="text-slate-400 hover:text-white transition-colors">
                  Shared Application Hosting
                </Link>
              </li>
              <li>
                <Link to="/shared-hosting#flexible" className="text-slate-400 hover:text-white transition-colors flex items-center justify-between">
                  <span>Flexible Burst Hosting</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-1 rounded border border-cyan-500/20">Auto</span>
                </Link>
              </li>
              <li>
                <Link to="/vps" className="text-slate-400 hover:text-white transition-colors">
                  Dedicated VPS Hosting
                </Link>
              </li>
              <li>
                <Link to="/managed-vps" className="text-slate-400 hover:text-white transition-colors">
                  Managed VPS Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  All Plans & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform & Resources */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center space-x-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Resources</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                  Infrastructure Features
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-slate-400 hover:text-white transition-colors">
                  Global Data Centers
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-slate-400 hover:text-white transition-colors">
                  Security & DDoS Shield
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/dashboard-preview" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
                  <span>Control Panel Preview</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span>Company & Legal</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support Team
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/refund" className="text-slate-400 hover:text-white transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link to="/legal/resource-policy" className="text-slate-400 hover:text-white transition-colors">
                  Resource & Burst Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclosures */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 font-mono space-y-4 md:space-y-0">
          <div>
            © {currentYear} Hextorq Hosting. All rights reserved. Enterprise Cloud Infrastructure.
          </div>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>PCI-DSS / ISO 27001 Certified Facilities</span>
            <span>•</span>
            <span>Gen4 NVMe Architecture</span>
            <span>•</span>
            <span>Root-Level Virtualization</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
