import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Server, 
  Cpu, 
  Tag, 
  Layers, 
  Globe, 
  Shield, 
  HelpCircle, 
  LayoutDashboard, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openDeployModal } = useDeployModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shared Hosting', path: '/shared-hosting', icon: Server, badge: 'Fixed & Flex' },
    { name: 'VPS', path: '/vps', icon: Cpu, badge: 'Root' },
    { name: 'Pricing', path: '/pricing', icon: Tag },
    { name: 'Managed VPS', path: '/managed-vps', icon: Layers },
    { name: 'Features', path: '/features', icon: Zap },
    { name: 'Locations', path: '/locations', icon: Globe },
    { name: 'Security', path: '/security', icon: Shield },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Console', path: '/dashboard-preview', icon: LayoutDashboard, isConsole: true }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06090E]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-indigo-600/20 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                <svg className="w-5 h-5 text-cyan-400 transform group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="14" fill="#38BDF8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                    HEXTORQ
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
                    HOSTING
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 tracking-tight">
                  hosting.hextorq.tech
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[9px] font-mono font-medium px-1.5 py-0.2 rounded bg-slate-800 text-cyan-400 border border-cyan-500/20">
                        {item.badge}
                      </span>
                    )}
                    {item.isConsole && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/dashboard-preview"
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors border border-transparent hover:border-slate-700 font-mono"
              >
                Sign In
              </Link>
              <button
                onClick={() => openDeployModal(null, 'app')}
                className="relative group overflow-hidden px-4 py-2 rounded-lg text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center space-x-1.5 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                <span>Get Started</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center space-x-2">
              <button
                onClick={() => openDeployModal(null, 'app')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 md:hidden"
              >
                Deploy
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden pt-20 bg-[#06090E]/95 backdrop-blur-2xl px-6 pb-10 overflow-y-auto animate-fadeIn">
          <div className="space-y-2 py-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 pb-1">
              Hosting Platform
            </div>
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-cyan-500/20">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDeployModal(null, 'app');
              }}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
            >
              <span>Deploy Application Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/dashboard-preview"
              className="w-full py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 flex items-center justify-center space-x-2"
            >
              <span>Control Panel Console</span>
            </Link>
            <div className="text-center pt-2">
              <span className="text-xs text-slate-400 font-mono">
                Support: <a href="mailto:hosting@hextorq.tech" className="text-cyan-400 hover:underline">hosting@hextorq.tech</a>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
