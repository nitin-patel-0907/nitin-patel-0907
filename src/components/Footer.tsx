import React from 'react';
import { GitBranch, Globe, Mail, ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              NP
            </div>
            <div>
              <span className="font-bold text-slate-200 text-sm">{PROFILE_INFO.name}</span>
              <p className="text-[11px] text-slate-500">AI & ML Student • Software Developer</p>
            </div>
          </div>

          {/* Nav Quicklinks */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#tech" className="hover:text-indigo-400 transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#ml-workflow" className="hover:text-indigo-400 transition-colors">ML Pipeline</a>
            <a href="#concepts" className="hover:text-indigo-400 transition-colors">Concepts</a>
            <a href="#roadmap" className="hover:text-indigo-400 transition-colors">Roadmap</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-850 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_INFO.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-850 rounded-lg transition-colors"
              aria-label="Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-850 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-lg border border-indigo-500/20 transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Nitin Patel. Inspired by GitHub profile <code className="text-slate-400">nitin-patel-0907</code>.
          </p>
          <p className="flex items-center justify-center gap-1 text-slate-400">
            <span>Building today. Learning every day. 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
