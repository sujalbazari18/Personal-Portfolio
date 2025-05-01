
import React from "react";
import SkillsGalaxy from "./SkillsGalaxy";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        
        <motion.div 
          className="mt-10 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SkillsGalaxy />
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
