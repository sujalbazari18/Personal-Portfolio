
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Cog, Rocket, Star, Terminal, Database } from "lucide-react";

type Skill = {
  name: string;
  icon?: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillIcons: Record<string, React.ReactNode> = {
  "C++": <Code className="text-slate-600" size={16} />,
  "C": <Code className="text-slate-700" size={16} />,
  "Java": <Rocket className="text-slate-600" size={16} />,
  "JavaScript": <Star className="text-slate-500" size={16} />,
  "TypeScript": <Star className="text-slate-700" size={16} />,
  "Node.js": <Cog className="text-slate-600" size={16} />,
  "Express.js": <Cog className="text-slate-500" size={16} />,
  "React.js": <Rocket className="text-slate-600" size={16} />,
  "React Native": <Rocket className="text-slate-500" size={16} />,
  "MongoDB": <Database className="text-slate-700" size={16} />,
  "Visual Studio Code": <Terminal className="text-slate-600" size={16} />,
  "Git": <Code className="text-slate-500" size={16} />,
  "Postman": <Code className="text-slate-600" size={16} />,
  "AWS": <Rocket className="text-slate-500" size={16} />,
  "Docker": <Cog className="text-slate-600" size={16} />,
  "SQL & NoSQL": <Database size={16} className="text-slate-600" />,
  "Networking": <Cog size={16} className="text-slate-500" />,
  "DBMS": <Database size={16} className="text-slate-700" />,
  "Data Structures": <Code size={16} className="text-slate-600" />,
  "Algorithms": <Code size={16} className="text-slate-500" />,
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories: Record<string, SkillCategory> = {
    languages: {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: skillIcons["C++"] },
        { name: "C", icon: skillIcons["C"] },
        { name: "Java", icon: skillIcons["Java"] },
        { name: "JavaScript", icon: skillIcons["JavaScript"] },
        { name: "TypeScript", icon: skillIcons["TypeScript"] },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Node.js", icon: skillIcons["Node.js"] },
        { name: "Express.js", icon: skillIcons["Express.js"] },
        { name: "React.js", icon: skillIcons["React.js"] },
        { name: "React Native", icon: skillIcons["React Native"] },
        { name: "MongoDB", icon: skillIcons["MongoDB"] },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      skills: [
        { name: "Visual Studio Code", icon: skillIcons["Visual Studio Code"] },
        { name: "Git", icon: skillIcons["Git"] },
        { name: "Postman", icon: skillIcons["Postman"] },
        { name: "AWS", icon: skillIcons["AWS"] },
        { name: "Docker", icon: skillIcons["Docker"] },
      ],
    },
    others: {
      title: "Other Skills",
      skills: [
        { name: "SQL & NoSQL", icon: skillIcons["SQL & NoSQL"] },
        { name: "Networking", icon: skillIcons["Networking"] },
        { name: "DBMS", icon: skillIcons["DBMS"] },
        { name: "Data Structures", icon: skillIcons["Data Structures"] },
        { name: "Algorithms", icon: skillIcons["Algorithms"] },
      ],
    },
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
                <Badge 
                  className={
                    "flex items-center gap-2 text-base font-semibold py-3 px-4 shadow hover:scale-105 transition-transform cursor-pointer bg-slate-100 text-slate-800"
                  }
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </Badge>
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
              <Badge key={tech} className="bg-slate-100 text-slate-800 hover:bg-slate-200 py-1.5 px-3 transition-all hover:scale-110">
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

