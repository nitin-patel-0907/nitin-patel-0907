import React, { useState } from 'react';
import { 
  GitBranch, 
  Workflow, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Code, 
  Terminal, 
  Database,
  Layers
} from 'lucide-react';
import { ML_WORKFLOW_STAGES } from '../data/profileData';

export const MLWorkflowSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<number>(1);

  const selectedStage = ML_WORKFLOW_STAGES.find((s) => s.id === selectedStageId) || ML_WORKFLOW_STAGES[0];

  return (
    <section id="ml-workflow" className="py-20 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>End-to-End Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            🤖 Current Machine Learning Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Collaborative, team-based ML development covering the complete model lifecycle from raw dataset ingestion to final inference.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-indigo-400 font-mono">
            <span>Tools: GitHub • VS Code • Google Colab • Scikit-Learn</span>
          </div>
        </div>

        {/* Pipeline Stepper Bar */}
        <div className="mb-10 bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-inner">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
            <span>Interactive 11-Stage Pipeline</span>
            <span className="text-indigo-400">Click any stage to inspect</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-2">
            {ML_WORKFLOW_STAGES.map((stage) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`flex flex-col items-center text-center p-2.5 rounded-xl transition-all border text-xs ${
                    isSelected
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30 scale-105'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] mb-1.5 ${
                      isSelected ? 'bg-white text-indigo-600' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {stage.id}
                  </span>
                  <span className="font-semibold line-clamp-2 leading-tight">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-1">
                <span>Stage {selectedStage.id} of 11</span>
                <span>•</span>
                <span>Team ML Workflow</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedStage.title}
              </h3>
            </div>

            {/* Stepper navigation */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={() => setSelectedStageId((prev) => Math.max(1, prev - 1))}
                disabled={selectedStageId === 1}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setSelectedStageId((prev) => Math.min(11, prev + 1))}
                disabled={selectedStageId === 11}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next Stage
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            <div className="md:col-span-8 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Phase Objective
                </h4>
                <p className="text-base text-slate-200 font-medium leading-relaxed">
                  {selectedStage.shortDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Implementation Details
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {selectedStage.details}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-950/70 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  <span>Key Techniques & Tools</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Team Execution</span>
                <span className="text-emerald-400 font-medium">Standard Pipeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
