
import React from 'react';

const skillCategories = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold text-center mb-10 tracking-widest relative section-underline">
          SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skillCategory, index) => (
            <div key={index} className="card-gradient p-6 rounded-lg shadow-md animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-4 text-portfolio-dark">{skillCategory.category}</h3>
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-3">
                  <div className="flex items-center mb-1">
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
