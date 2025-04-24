
import { useState } from "react";
import ProjectCard from "./ProjectCard";

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
      githubUrl: "https://github.com/sujalbazari18/Book_Store",
      achievements: [
        "Enhanced security protocols, cutting unauthorized access by 35% through JWT token-based authentication",
        "Boosted query performance by 22% through efficient integration of CRUD endpoints with database logic",
        "Lowered client-side failures by 40% by adding layered middleware for structured input validation",
        "Sustained 99.8% system uptime during load testing, successfully handling 50+ active connections simultaneously"
      ]
    },
    {
      title: "Smart Voice Assistant | Android",
      description: "Built an interactive mobile assistant using React Native for voice-command-driven task automation with real-time voice recognition.",
      date: "Jan 2025",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1636",
      technologies: ["React Native", "Voice Recognition APIs", "JavaScript", "Redux"],
      githubUrl: "https://github.com/sujalbazari18/SmartVoiceAssistant",
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
      githubUrl: "https://github.com/sujalbazari18/-Advanced-Linux-File-System-Management-Using-C-with-Data-Structures-and-Algorithms-",
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
      <div className="container mx-auto px-4">
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
            <ProjectCard
              key={project.title}
              project={project}
              animationDelay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
