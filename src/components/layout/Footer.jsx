import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#04070B] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-white/[0.12] flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="14" fill="#06B6D4" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                HEXTORQ HOSTING
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-sans">
              Modern cloud hosting built around your application. Deploy one frontend and one backend with predictable fixed resources, flexible burst headroom, or your own dedicated VPS.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Contact:</span>
                <a href="mailto:hosting@hextorq.tech" className="text-slate-200 hover:text-cyan-400 transition-colors">
                  hosting@hextorq.tech
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Domain:</span>
                <span className="text-slate-200">hosting.hextorq.tech</span>
              </div>
            </div>
          </div>

          {/* Column 1: Hosting Products */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Hosting
            </h3>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link to="/shared-hosting" className="text-slate-400 hover:text-white transition-colors">
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link to="/shared-hosting" className="text-slate-400 hover:text-white transition-colors">
                  Fixed Hosting
                </Link>
              </li>
              <li>
                <Link to="/shared-hosting#flexible" className="text-slate-400 hover:text-white transition-colors">
                  Flexible Hosting
                </Link>
              </li>
              <li>
                <Link to="/vps" className="text-slate-400 hover:text-white transition-colors">
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link to="/managed-vps" className="text-slate-400 hover:text-white transition-colors">
                  Managed VPS
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  All Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Resources
            </h3>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-slate-400 hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-slate-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/dashboard-preview" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
                  <span>Dashboard Preview</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </h3>
            <ul className="space-y-2 text-xs font-sans">
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
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/resource-policy" className="text-slate-400 hover:text-white transition-colors">
                  Resource Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-3">
          <div>
            © {currentYear} Hextorq Hosting. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>Application-Focused Cloud Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
