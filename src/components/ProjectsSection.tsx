
import React, { useState } from 'react';

const mockProjects = [
  { id: 1, name: "Project Alpha", category: "web", desc: "Web project example." },
  { id: 2, name: "Project Beta", category: "mobile", desc: "Mobile project example." },
  { id: 3, name: "Project Gamma", category: "design", desc: "Design project example." },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? mockProjects
    : mockProjects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold text-center mb-10 tracking-widest relative section-underline">
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
            <div key={project.id} className="rounded-lg p-6 bg-white shadow card-gradient">
              <div className="text-xl font-bold mb-2">{project.name}</div>
              <div className="text-gray-700">{project.desc}</div>
              <div className="mt-2">
                <span className="badge">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
