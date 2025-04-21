import React from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiDocker, SiFirebase } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "React", icon: FaReact, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 80 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Python", icon: FaPython, level: 75 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
        { name: "Firebase", icon: SiFirebase, level: 70 },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Docker", icon: SiDocker, level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 relative after:content-[''] after:block after:mx-auto after:w-full after:max-w-xs md:after:max-w-md after:h-2 after:bg-portfolio-teal after:rounded-full after:mt-2 tracking-widest">
          SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="card-gradient p-6 rounded-lg shadow-md animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-4 text-portfolio-dark">{skillCategory.category}</h3>
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-3">
                  <div className="flex items-center mb-1">
                    <skill.icon className="mr-2 text-xl text-portfolio-blue" />
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
