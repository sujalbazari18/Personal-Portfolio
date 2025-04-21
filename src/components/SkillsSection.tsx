import { useState } from "react";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories: Record<string, SkillCategory> = {
    languages: {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "C", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "React.js", level: 90 },
        { name: "React Native", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      skills: [
        { name: "Visual Studio Code", level: 95 },
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
      ],
    },
    others: {
      title: "Other Skills",
      skills: [
        { name: "SQL & NoSQL", level: 85 },
        { name: "Networking", level: 80 },
        { name: "DBMS", level: 85 },
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 90 },
      ],
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-3 relative after:content-[''] after:block after:mx-auto after:w-28 after:h-1.5 after:bg-portfolio-teal after:rounded-full after:mt-2">
          My Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-portfolio-blue text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 animate-fade-in">
          <div className="grid grid-cols-1 gap-8">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-portfolio-dark">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress transition-all duration-1000 ease-out group-hover:opacity-80"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "MongoDB", 
              "SQL", "NoSQL", "AWS", "Git", "REST API", "GraphQL", "Docker", "Redux",
              "Tailwind CSS", "CI/CD", "Jest", "Mocha", "Agile", "Scrum"
            ].map((tech) => (
              <Badge key={tech} className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-1.5 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
