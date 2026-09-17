import React, { useState, useEffect } from 'react';
import { Globe, Mail, ArrowRight, Sparkles, Terminal, Code2, Cpu, ChevronDown } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = PROFILE_INFO.typingPhrases;

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-inner mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to ML / Software Internships & Projects</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-purple-400">
            {PROFILE_INFO.name}
          </span>{' '}
          <span className="inline-block hover:rotate-12 transition-transform cursor-default">👋</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto mb-6">
          {PROFILE_INFO.tagline}
        </p>

        {/* Typing Animated Box */}
        <div className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl bg-slate-900/80 border border-indigo-500/30 font-mono text-sm sm:text-base text-indigo-300 shadow-sm mb-8">
          <Terminal className="w-4 h-4 mr-2.5 text-indigo-400 flex-shrink-0" />
          <span>{displayedText}</span>
          <span className="w-2 h-4 ml-1 bg-indigo-400 animate-pulse" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#ml-workflow"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-medium text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Cpu className="w-4 h-4 text-violet-400" />
            <span>Interactive ML Pipeline</span>
          </a>
          <a
            href={`mailto:${PROFILE_INFO.email}`}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-300 font-medium text-sm sm:text-base transition-all"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Shield Badges matching README */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <a
            href={PROFILE_INFO.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:-translate-y-0.5"
            title="Portfolio Website"
          >
            <img
              src="https://img.shields.io/badge/Portfolio-4F46E5?style=for-the-badge&logo=vercel&logoColor=white"
              alt="Portfolio Badge"
              className="h-7 rounded"
            />
          </a>
          <a
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:-translate-y-0.5"
            title="GitHub Profile"
          >
            <img
              src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub Badge"
              className="h-7 rounded"
            />
          </a>
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:-translate-y-0.5"
            title="LinkedIn Profile"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn Badge"
              className="h-7 rounded"
            />
          </a>
          <a
            href={`mailto:${PROFILE_INFO.email}`}
            className="transition-transform hover:-translate-y-0.5"
            title="Email Nitin"
          >
            <img
              src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Email Badge"
              className="h-7 rounded"
            />
          </a>
        </div>

        {/* Profile Views Badge from README */}
        <div className="inline-flex items-center justify-center">
          <img
            src="https://komarev.com/ghpvc/?username=nitin-patel-0907&style=for-the-badge&color=4F46E5"
            alt="Profile views badge"
            className="h-6 rounded opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-800/80">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-center">
            <div className="text-2xl font-bold text-indigo-400">3+</div>
            <div className="text-xs text-slate-400 mt-0.5">Featured Projects</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-center">
            <div className="text-2xl font-bold text-violet-400">11</div>
            <div className="text-xs text-slate-400 mt-0.5">ML Pipeline Stages</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-center">
            <div className="text-2xl font-bold text-purple-400">18+</div>
            <div className="text-xs text-slate-400 mt-0.5">Core ML Concepts</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-center">
            <div className="text-2xl font-bold text-emerald-400">15+</div>
            <div className="text-xs text-slate-400 mt-0.5">Tech Stack Skills</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="p-2 text-slate-400 hover:text-indigo-400 transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
