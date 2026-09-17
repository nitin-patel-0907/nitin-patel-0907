import React from 'react';
import { Compass, CheckCircle2, Clock, Sparkles, ArrowDown } from 'lucide-react';
import { LEARNING_ROADMAP } from '../data/profileData';
import { RoadmapStep } from '../types';

export const LearningRoadmap: React.FC = () => {
  const getStatusBadge = (status: RoadmapStep['status']) => {
    switch (status) {
      case 'Mastered':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            <span>Mastered</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Clock className="w-3 h-3 animate-spin" />
            <span>Active Focus</span>
          </span>
        );
      case 'Upcoming':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
            <Sparkles className="w-3 h-3" />
            <span>Next Horizon</span>
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Continuous Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            🎓 Learning Roadmap
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            A structured, long-term technical trajectory from programming foundations to deploying production AI solutions.
          </p>

          {/* Quick Flow Breadcrumb from README */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto whitespace-nowrap">
            <span className="text-emerald-400 font-semibold">Python</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-emerald-400 font-semibold">NumPy + Pandas</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-emerald-400 font-semibold">Data Analysis</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-indigo-400 font-semibold">Statistics</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-indigo-400 font-semibold">Machine Learning</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-indigo-400 font-semibold">Model Evaluation</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-slate-400">Advanced ML</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-slate-400">Deep Learning</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-slate-400">Real-World AI</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEARNING_ROADMAP.map((step) => (
            <div
              key={step.step}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                step.status === 'In Progress'
                  ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                  : step.status === 'Mastered'
                  ? 'bg-slate-900/60 border-slate-800/80'
                  : 'bg-slate-950/50 border-slate-850 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-sm text-indigo-400 font-mono">
                    0{step.step}
                  </span>
                  {getStatusBadge(step.status)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Skills & Concepts
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {step.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
