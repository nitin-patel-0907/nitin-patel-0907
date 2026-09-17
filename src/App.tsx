import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { MLWorkflowSection } from './components/MLWorkflowSection';
import { MLConceptsExplorer } from './components/MLConceptsExplorer';
import { LearningRoadmap } from './components/LearningRoadmap';
import { GitHubActivity } from './components/GitHubActivity';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <MLWorkflowSection />
        <MLConceptsExplorer />
        <LearningRoadmap />
        <GitHubActivity />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
