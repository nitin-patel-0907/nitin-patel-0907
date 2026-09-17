export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  builtWith: string[];
  liveUrl?: string;
  repoUrl: string;
  iconName: string;
  status: 'Live' | 'In Development' | 'Completed';
  category: 'Web App' | 'Finance / Data' | 'Data Analytics';
  highlights: string[];
}

export interface TechItem {
  name: string;
  category: 'Programming' | 'Data & ML' | 'Web & Software' | 'Database' | 'Tools';
  iconUrl?: string;
  badgeUrl?: string;
  description: string;
}

export interface MLConceptItem {
  title: string;
  category: 'Data & Statistics' | 'Machine Learning' | 'Classification' | 'Regression';
  summary: string;
  formulaOrKeyIdea?: string;
  importance: string;
}

export interface RoadmapStep {
  step: number;
  title: string;
  status: 'Mastered' | 'In Progress' | 'Upcoming';
  skills: string[];
  description: string;
}

export interface MLStage {
  id: number;
  title: string;
  shortDesc: string;
  details: string;
  tools: string[];
}
