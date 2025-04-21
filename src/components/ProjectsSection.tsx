import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Code, 
  ExternalLink,
  Github
} from "lucide-react";

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

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      title: "Book-Store API | Backend Application",
      description: "Designed and deployed a scalable RESTful API for managing book inventory with comprehensive CRUD operations, authentication, and search functionality.",
      date: "Mar 2025",
      category: "backend",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1528",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      githubUrl: "https://github.com/sujalbazari18/",
      achievements: [
        "Enhanced security protocols, cutting unauthorized access by 35% through JWT token-based authentication",
        "Boosted query performance by 22% through efficient integration of CRUD endpoints with database logic",
        "Lowered client-side failures by 40% by adding layered middleware for structured input validation",
        "Sustained 99.8% system uptime during load testing, successfully handling 50+ active connections simultaneously"
      ]
    },
    {
      title: "Smart Voice Assistant | Mobile Application",
      description: "Built an interactive mobile assistant using React Native for voice-command-driven task automation with real-time voice recognition.",
      date: "Jan 2025",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1636",
      technologies: ["React Native", "Voice Recognition APIs", "JavaScript", "Redux"],
      githubUrl: "https://github.com/sujalbazari18/",
      achievements: [
        "Incorporated real-time voice recognition APIs to interpret and respond to spoken instructions",
        "Connected external platforms to enable updates for weather, scheduling, and general queries",
        "Developed a clean and responsive UI, offering users immediate visual responses to voice input"
      ]
    },
    {
      title: "Linux File System Simulator",
      description: "Engineered a Linux-like file system simulator with C++, utilizing advanced data structures for file management operations.",
      date: "Jul 2024",
      category: "system",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1474",
      technologies: ["C++", "Data Structures", "OOP", "File System Architecture"],
      githubUrl: "https://github.com/sujalbazari18/",
      achievements: [
        "Implemented essential commands for managing files and directories including create, delete, and rename",
        "Increased retrieval efficiency by 40% through optimized search and indexing algorithms",
        "Used object-oriented programming to reflect real-world file system structure via class inheritance"
      ]
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title text-center mx-auto">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
          {["all", "backend", "mobile", "system"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                filter === category
                  ? "bg-portfolio-blue text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category === "all" ? "All Projects" : `${category} Projects`}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
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
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
                  <a 
                    href="#" 
                    className="flex items-center ml-auto text-portfolio-teal hover:text-portfolio-teal/80 text-sm"
                  >
                    <Code size={18} className="mr-1" />
                    <span>Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
