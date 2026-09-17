import React from 'react';
import { GitBranch, Activity, Star, GitCommit, Trophy, ExternalLink } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const GitHubActivity: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Open Source & Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            📈 GitHub Activity & Statistics
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Real-time telemetry and contributions from Nitin Patel's GitHub profile.
          </p>
        </div>

        {/* GitHub Stats Cards Container */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Top Row: Overall Stats & Top Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Overall Stats Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Repository & Commit Overview
              </span>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${PROFILE_INFO.githubUsername}&show_icons=true&theme=transparent&hide_border=true&rank_icon=github`}
                alt="GitHub Readme Stats"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Top Languages */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Most Used Languages
              </span>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${PROFILE_INFO.githubUsername}&layout=compact&theme=transparent&hide_border=true`}
                alt="Top Languages"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Middle Row: Streak Stats */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Contribution Streak Metrics
            </span>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${PROFILE_INFO.githubUsername}&theme=transparent&hide_border=true`}
              alt="GitHub Streak Stats"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Activity Graph */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col items-center justify-center text-center overflow-x-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Contribution Activity Frequency
            </span>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${PROFILE_INFO.githubUsername}&theme=minimal&hide_border=true`}
              alt="Activity Graph"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* GitHub Trophies */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col items-center justify-center text-center overflow-x-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              GitHub Profile Trophies
            </span>
            <img
              src={`https://github-profile-trophy.vercel.app/?username=${PROFILE_INFO.githubUsername}&theme=flat&no-frame=true&margin-w=10&row=1`}
              alt="GitHub Profile Trophies"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* CTA Link to Repos */}
          <div className="text-center pt-4">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-sm font-medium hover:text-white transition-all shadow-sm"
            >
              <GitBranch className="w-4 h-4" />
              <span>⭐ Explore all repositories on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
