import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  GitBranch, 
  CheckCircle2, 
  Layers, 
  Globe, 
  Coins, 
  BarChart3,
  X,
  Code2
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/profileData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-400" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-amber-400" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            🚀 Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Showcasing practical applications built across web engineering, data science, and financial modeling.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between overflow-hidden shadow-lg group hover:-translate-y-1"
            >
              {/* Card Header & Body */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-slate-800 text-slate-300 border border-slate-700">
                      {project.category}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Built With Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.builtWith.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-950 font-mono text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Highlights snippet */}
                <div className="space-y-2 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-7 sm:py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View Source on GitHub"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <GitBranch className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
                      title="Open Live Website"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Project View */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  {getProjectIcon(activeModalProject.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {activeModalProject.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-indigo-400 font-medium">
                      {activeModalProject.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-emerald-400 font-medium">
                      {activeModalProject.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeModalProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Tech Stack & Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.builtWith.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-950 text-indigo-300 border border-indigo-500/30 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Technical Architecture Highlights
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <a
                  href={activeModalProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
