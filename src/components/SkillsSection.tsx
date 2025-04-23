
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Cog, Rocket, Star, Terminal, Database } from "lucide-react";

type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon?: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillIcons: Record<string, React.ReactNode> = {
  "C++": <Code className="text-blue-400" size={16} />,
  "C": <Code className="text-blue-700" size={16} />,
  "Java": <Rocket className="text-yellow-600" size={16} />,
  "JavaScript": <Star className="text-yellow-400" size={16} />,
  "TypeScript": <Star className="text-sky-400" size={16} />,
  "Node.js": <Cog className="text-green-600" size={16} />,
  "Express.js": <Cog className="text-gray-500" size={16} />,
  "React.js": <Rocket className="text-blue-400" size={16} />,
  "React Native": <Rocket className="text-cyan-400" size={16} />,
  "MongoDB": <Database className="text-green-700" size={16} />,
  "Visual Studio Code": <Terminal className="text-indigo-400" size={16} />,
  "Git": <Code className="text-red-500" size={16} />,
  "Postman": <Code className="text-orange-500" size={16} />,
  "AWS": <Rocket className="text-yellow-400" size={16} />,
  "Docker": <Cog className="text-blue-500" size={16} />,
  "SQL & NoSQL": <Database size={16} className="text-indigo-600" />,
  "Networking": <Cog size={16} className="text-sky-500" />,
  "DBMS": <Database size={16} className="text-cyan-800" />,
  "Data Structures": <Code size={16} className="text-fuchsia-600" />,
  "Algorithms": <Code size={16} className="text-pink-500" />,
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories: Record<string, SkillCategory> = {
    languages: {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: "Expert", icon: skillIcons["C++"] },
        { name: "C", level: "Advanced", icon: skillIcons["C"] },
        { name: "Java", level: "Advanced", icon: skillIcons["Java"] },
        { name: "JavaScript", level: "Expert", icon: skillIcons["JavaScript"] },
        { name: "TypeScript", level: "Advanced", icon: skillIcons["TypeScript"] },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Node.js", level: "Advanced", icon: skillIcons["Node.js"] },
        { name: "Express.js", level: "Advanced", icon: skillIcons["Express.js"] },
        { name: "React.js", level: "Expert", icon: skillIcons["React.js"] },
        { name: "React Native", level: "Intermediate", icon: skillIcons["React Native"] },
        { name: "MongoDB", level: "Intermediate", icon: skillIcons["MongoDB"] },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      skills: [
        { name: "Visual Studio Code", level: "Expert", icon: skillIcons["Visual Studio Code"] },
        { name: "Git", level: "Expert", icon: skillIcons["Git"] },
        { name: "Postman", level: "Advanced", icon: skillIcons["Postman"] },
        { name: "AWS", level: "Intermediate", icon: skillIcons["AWS"] },
        { name: "Docker", level: "Intermediate", icon: skillIcons["Docker"] },
      ],
    },
    others: {
      title: "Other Skills",
      skills: [
        { name: "SQL & NoSQL", level: "Advanced", icon: skillIcons["SQL & NoSQL"] },
        { name: "Networking", level: "Intermediate", icon: skillIcons["Networking"] },
        { name: "DBMS", level: "Advanced", icon: skillIcons["DBMS"] },
        { name: "Data Structures", level: "Expert", icon: skillIcons["Data Structures"] },
        { name: "Algorithms", level: "Expert", icon: skillIcons["Algorithms"] },
      ],
    },
  };

  // Fun and animated badge backgrounds for each level
  const levelColor: Record<Skill["level"], string> = {
    "Expert": "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white animate-pulse",
    "Advanced": "bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-white",
    "Intermediate": "bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-400 text-white",
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        
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
        
        <div className="max-w-3xl mx-auto mt-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div 
                key={skill.name}
                className="flex items-center gap-3 mb-2 group relative"
              >
                <span>
                  <Badge 
                    className={
                      "flex items-center gap-2 text-base font-semibold py-3 px-4 shadow hover:scale-105 transition-transform cursor-pointer " +
                      levelColor[skill.level]
                    }
                    title={`Level: ${skill.level}`}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </Badge>
                </span>
                <span className="ml-2 text-sm text-gray-200 opacity-80 italic group-hover:animate-fade-in">
                  {skill.level}
                </span>
                {/* Add a sparkle icon for "Expert" */}
                {skill.level === "Expert" && <Star size={16} className="text-yellow-300 animate-bounce ml-1" />}
                {/* Add a tooltip with a fun, encouraging message */}
                <span className="absolute left-0 top-10 z-10 opacity-0 group-hover:opacity-100 bg-black/80 text-white text-xs rounded px-3 py-1 transition-all pointer-events-none whitespace-nowrap">
                  {skill.level === "Expert"
                    ? "Top-tier skill! 🚀"
                    : skill.level === "Advanced"
                    ? "Well-practiced! 💡"
                    : "On your way up! 🌱"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "MongoDB", 
              "SQL", "NoSQL", "AWS", "Git", "REST API", "GraphQL", "Docker", "Redux",
              "Tailwind CSS", "CI/CD", "Jest", "Mocha", "Agile", "Scrum"
            ].map((tech) => (
              <Badge key={tech} className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-1.5 px-3 transition-all hover:scale-110">
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
