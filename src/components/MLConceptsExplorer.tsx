import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Binary, 
  Calculator, 
  CheckCircle, 
  HelpCircle,
  BarChart2,
  PieChart
} from 'lucide-react';
import { ML_CONCEPTS } from '../data/profileData';
import { MLConceptItem } from '../types';

export const MLConceptsExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Data & Statistics',
    'Machine Learning',
    'Classification',
    'Regression'
  ];

  const filteredConcepts = ML_CONCEPTS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.formulaOrKeyIdea && item.formulaOrKeyIdea.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadgeClass = (category: MLConceptItem['category']) => {
    switch (category) {
      case 'Data & Statistics':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Machine Learning':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Classification':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Regression':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <section id="concepts" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mathematical & Statistical Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            📚 Machine Learning Concepts I'm Learning
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Rigorous statistical tests, algorithmic principles, and evaluation metrics explored during coursework and personal studies.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search concepts (e.g. Homoscedasticity, F1)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredConcepts.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 p-5 sm:p-6 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border whitespace-nowrap ${getCategoryBadgeClass(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {item.summary}
                </p>

                {item.formulaOrKeyIdea && (
                  <div className="mb-4 p-3 rounded-lg bg-slate-950/90 border border-slate-800/80 font-mono text-xs text-indigo-300 overflow-x-auto">
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider mb-1 font-sans">
                      Formula / Core Rule
                    </span>
                    <code>{item.formulaOrKeyIdea}</code>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                <strong className="text-slate-300 font-medium">Why it matters: </strong>
                <span>{item.importance}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredConcepts.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No concepts matched your search query. Try searching for "Recall", "Homoscedasticity", or "Hypothesis".
          </div>
        )}
      </div>
    </section>
  );
};
