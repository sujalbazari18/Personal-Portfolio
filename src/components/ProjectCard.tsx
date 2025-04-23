
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code, ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  achievements: string[];
};

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, animationDelay = 0 }) => (
  <div
    className="flip-card group"
    style={{ animationDelay: `${animationDelay}s` }}
  >
    <div className="flip-card-inner group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className="flip-card-front bg-white rounded-lg overflow-hidden shadow-lg transition-transform">
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Badge className="bg-portfolio-blue/10 text-portfolio-blue">
              {project.category}
            </Badge>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={14} className="mr-1" />
              {project.date}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-portfolio-blue"
              >
                <Github size={18} className="mr-1" />
                <span className="text-sm">Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-portfolio-blue"
              >
                <ExternalLink size={18} className="mr-1" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
            <span className="flex items-center ml-auto text-portfolio-teal hover:text-portfolio-teal/80 text-sm">
              <Code size={18} className="mr-1" />
              <span>Details</span>
            </span>
          </div>
        </div>
      </div>
      {/* Back */}
      <div className="flip-card-back rounded-lg bg-white p-6 flex flex-col justify-center items-center shadow-lg">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <ul className="list-disc list-inside text-left text-gray-700 text-sm mb-6">
          {project.achievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-portfolio-blue"
            >
              <Github size={18} className="mr-1" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-portfolio-blue"
            >
              <ExternalLink size={18} className="mr-1" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
