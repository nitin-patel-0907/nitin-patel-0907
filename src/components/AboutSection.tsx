import React, { useState } from 'react';
import { 
  User, 
  Sparkles, 
  Brain, 
  LineChart, 
  Code2, 
  Bot, 
  Binary, 
  TrendingUp, 
  GitFork, 
  Cloud, 
  Rocket, 
  ChevronRight,
  Database,
  Terminal
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-5 h-5 text-indigo-400" />,
  LineChart: <LineChart className="w-5 h-5 text-emerald-400" />,
  Binary: <Binary className="w-5 h-5 text-cyan-400" />,
  Brain: <Brain className="w-5 h-5 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  GitFork: <GitFork className="w-5 h-5 text-rose-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  Rocket: <Rocket className="w-5 h-5 text-orange-400" />,
};

export const AboutSection: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<'ml' | 'da' | 'sw'>('ml');

  const branches = {
    ml: {
      name: "Machine Learning",
      tagline: "Predictive Models & Automated Intelligence",
      items: [
        { name: "Data Preprocessing", desc: "Handling missing values, scaling, normalization" },
        { name: "Feature Engineering", desc: "Extracting high-signal variables and encodings" },
        { name: "Model Training", desc: "Fitting regression, tree-based, and ensemble algorithms" },
        { name: "Model Evaluation", desc: "Confusion matrix, PR-AUC, cross-validation metrics" }
      ]
    },
    da: {
      name: "Data Analysis",
      tagline: "Statistical Insights & Quantitative Exploration",
      items: [
        { name: "Data Cleaning", desc: "Deduplication, anomaly identification, sanity checks" },
        { name: "Exploratory Data Analysis", desc: "Univariate/multivariate correlation analysis" },
        { name: "Data Visualization", desc: "Actionable dashboards with Matplotlib & Seaborn" }
      ]
    },
    sw: {
      name: "Software Development",
      tagline: "Engineering Practices & Maintainable Systems",
      items: [
        { name: "Problem Solving", desc: "Data structures, algorithms, and modular design" },
        { name: "Version Control", desc: "Git branching, commit hygiene, and repository workflows" },
        { name: "Collaborative Development", desc: "Team pull requests, code reviews, and docs" }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & Core Interests
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Bridging data science with practical software engineering to build intelligent solutions.
          </p>
        </div>

        {/* Top Split: Bio & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Bio Card */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Nitin Patel</h3>
                <p className="text-sm text-indigo-400">AI & Machine Learning Student | Developer</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm <strong className="text-white">Nitin Patel</strong>, an AI & Machine Learning student and software developer interested in building practical, data-driven solutions.
              </p>
              <p>
                My passion sits at the crossroads of artificial intelligence, statistical data science, and modern software engineering. I enjoy taking a problem through the complete lifecycle:
              </p>

              {/* Data -> Analysis -> Model -> Solution banner */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/30 font-mono text-xs sm:text-sm text-center text-indigo-300 shadow-inner flex items-center justify-center flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold">
                  data
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold">
                  analysis
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300 font-semibold">
                  model
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold">
                  solution
                </span>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm">
                Currently strengthening my foundations in Python, data analysis, machine learning, statistics, model evaluation, and collaborative software development.
              </p>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
              Core Technical Focus
            </h3>
            {PROFILE_INFO.coreInterests.map((interest, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Core Interests Tree Architecture (From README) */}
        <div className="mb-20">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Technical Taxonomy</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Artificial Intelligence Architecture
                </h3>
              </div>

              {/* Branch Selector Tabs */}
              <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800">
                {(['ml', 'da', 'sw'] as const).map((branchKey) => (
                  <button
                    key={branchKey}
                    onClick={() => setActiveBranch(branchKey)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeBranch === branchKey
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {branches[branchKey].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tree Branch Visual Display */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Root node */}
              <div className="md:col-span-4 p-5 rounded-xl bg-slate-950/70 border border-indigo-500/30">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wide mb-1">
                  Root Domain
                </div>
                <div className="text-xl font-extrabold text-white mb-2">
                  Artificial Intelligence
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The overarching discipline of creating systems capable of human-like perception, reasoning, and automated decision making.
                </p>
              </div>

              {/* Connector */}
              <div className="hidden md:flex md:col-span-1 justify-center text-slate-600">
                <ChevronRight className="w-6 h-6 text-indigo-500 animate-pulse" />
              </div>

              {/* Sub-branch card */}
              <div className="md:col-span-7 bg-slate-950/90 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Active Sub-Branch
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {branches[activeBranch].name}
                    </h4>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {branches[activeBranch].tagline}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {branches[activeBranch].items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                    >
                      <div className="text-sm font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "What I'm Working On" Grid (From README table) */}
        <div id="focus">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">🎯 What I'm Working On</h3>
            <p className="text-sm text-slate-400 mt-1">
              Key areas of active experimentation, learning, and hands-on implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROFILE_INFO.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all flex items-start gap-3.5 group"
              >
                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-colors flex-shrink-0">
                  {iconMap[area.icon] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                </div>
                <div>
                  <span className="inline-block text-[10px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">
                    {area.category}
                  </span>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {area.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
