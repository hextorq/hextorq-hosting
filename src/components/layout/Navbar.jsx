import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Server, 
  Cpu, 
  Tag, 
  Layers, 
  Globe, 
  Shield, 
  HelpCircle, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  TrendingUp,
  LayoutDashboard
} from 'lucide-react';
import { useDeployModal } from '../../context/DeployModalContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hostingDropdownOpen, setHostingDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { openDeployModal } = useDeployModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setHostingDropdownOpen(false);
  }, [location.pathname]);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHostingDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const hostingItems = [
    {
      name: 'Fixed Shared Hosting',
      path: '/shared-hosting',
      desc: 'Predictable resources for defined application workloads',
      icon: Server,
      accent: 'text-cyan-400'
    },
    {
      name: 'Flexible / Burst Shared',
      path: '/shared-hosting#flexible',
      desc: 'Adaptive headroom that absorbs temporary traffic spikes',
      icon: TrendingUp,
      accent: 'text-blue-400'
    },
    {
      name: 'Managed VPS',
      path: '/managed-vps',
      desc: 'Virtual server compute with white-glove DevOps management',
      icon: Layers,
      accent: 'text-indigo-400'
    }
  ];

  const standardNavLinks = [
    { name: 'VPS', path: '/vps' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Features', path: '/features' },
    { name: 'Locations', path: '/locations' },
    { name: 'Security', path: '/security' },
    { name: 'FAQ', path: '/faq' }
  ];

  const isHostingActive = location.pathname === '/shared-hosting' || location.pathname === '/managed-vps';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06090E]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-white/[0.12] group-hover:border-cyan-500/50 transition-all duration-300">
                <svg className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="12" fill="#06B6D4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  HEXTORQ
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-tight -mt-0.5">
                  hosting.hextorq.tech
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              
              {/* Hosting Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setHostingDropdownOpen(!hostingDropdownOpen)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1.5 ${
                    isHostingActive || hostingDropdownOpen
                      ? 'text-cyan-300 bg-white/[0.04]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  aria-expanded={hostingDropdownOpen}
                >
                  <span>Hosting</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hostingDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {hostingDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#090E18] border border-white/[0.1] shadow-2xl p-2 z-50 animate-fadeIn backdrop-blur-xl">
                    <div className="p-1.5 space-y-1">
                      {hostingItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setHostingDropdownOpen(false)}
                            className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-slate-700">
                              <Icon className={`w-4 h-4 ${item.accent}`} />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                {item.name}
                              </div>
                              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Standard Nav Items */}
              {standardNavLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-cyan-300 bg-white/[0.04]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/dashboard-preview"
                className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              
              <button
                type="button"
                onClick={() => openDeployModal(null, 'app')}
                className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all duration-200 flex items-center space-x-1.5 active:scale-95"
              >
                <span>Get Started</span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                type="button"
                onClick={() => openDeployModal(null, 'app')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500"
              >
                Get Started
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pt-20 bg-[#06090E]/98 backdrop-blur-2xl px-5 pb-10 overflow-y-auto animate-fadeIn">
          <div className="space-y-4 py-2">
            
            {/* Hosting Submenu */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1">
                Hosting Models
              </div>
              {hostingItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.05]"
                  >
                    <Icon className={`w-4 h-4 ${item.accent}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Standard Nav Links */}
            <div className="space-y-1 pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1">
                Platform
              </div>
              {standardNavLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-cyan-300 bg-white/[0.04]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDeployModal(null, 'app');
                }}
                className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                to="/dashboard-preview"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 flex items-center justify-center space-x-2"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-slate-400" />
                <span>Control Panel Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
