import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/projectsData';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 relative after:content-[''] after:block after:mx-auto after:w-full after:max-w-xs md:after:max-w-md after:h-2 after:bg-portfolio-teal after:rounded-full after:mt-2 tracking-widest">
          PROJECTS
        </h2>
        
        {/* Project Categories Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {['all', 'web', 'mobile', 'design'].map(category => (
            <button
              key={category}
              className={`px-6 py-3 text-lg font-medium rounded-full mx-2 mb-2 capitalize transition-colors duration-300 ${
                activeTab === category
                  ? 'bg-portfolio-blue text-white hover:bg-portfolio-blue/90'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
