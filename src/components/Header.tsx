import React, { useState, useEffect } from 'react';
import { GitBranch, Globe, Mail, Menu, X, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Focus', href: '#focus' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'ML Workflow', href: '#ml-workflow' },
    { name: 'ML Concepts', href: '#concepts' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
              NP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-indigo-400 transition-colors">
                  {PROFILE_INFO.name}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  AI/ML & Dev
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Learning | Building | Improving
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GitBranch className="w-5 h-5" />
            </a>
            <a
              href={PROFILE_INFO.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Personal Portfolio Site"
              aria-label="Personal Portfolio Site"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="p-2 text-indigo-400 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
              aria-label="Email Nitin"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 text-sm font-medium text-slate-200 hover:text-white"
            >
              <GitBranch className="w-4 h-4" /> GitHub
            </a>
            <a
              href={PROFILE_INFO.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 text-sm font-medium text-slate-200 hover:text-white"
            >
              <Globe className="w-4 h-4" /> Portfolio
            </a>
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
