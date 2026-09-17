import React, { useState } from 'react';
import { Layers, Search, Code, Cpu, Database, Wrench, Globe } from 'lucide-react';
import { TECH_ITEMS } from '../data/profileData';
import { TechItem } from '../types';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Programming', 'Data & ML', 'Web & Software', 'Database', 'Tools'];

  const filteredTech = TECH_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getCategoryColor = (category: TechItem['category']) => {
    switch (category) {
      case 'Programming':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Data & ML':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Web & Software':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Database':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Tools':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <section id="tech" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technologies & Frameworks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            🛠️ Tech Stack & Tooling
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Languages, scientific computing frameworks, web technologies, and developer tools.
          </p>
        </div>

        {/* Skill Icons Strip from README */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 text-center mb-4">
            Official Skill Badges from GitHub Profile
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <div className="text-center">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">Programming</span>
              <img
                src="https://skillicons.dev/icons?i=python,c,cpp,java"
                alt="Programming Icons"
                className="h-10 hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-center">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">Web & Software</span>
              <img
                src="https://skillicons.dev/icons?i=html,css,js,react,typescript,vite,tailwind"
                alt="Web Dev Icons"
                className="h-10 hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-center">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">Database</span>
              <img
                src="https://skillicons.dev/icons?i=mysql"
                alt="MySQL Icon"
                className="h-10 hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-center">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">Tools & Workflow</span>
              <img
                src="https://skillicons.dev/icons?i=git,github,vscode,colab"
                alt="Tools Icons"
                className="h-10 hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/90 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-slate-100 text-base group-hover:text-indigo-400 transition-colors">
                    {tech.name}
                  </h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${getCategoryColor(tech.category)}`}>
                    {tech.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono">In Nitin's Stack</span>
                <span className="text-indigo-400 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>

        {filteredTech.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No technologies found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
};
