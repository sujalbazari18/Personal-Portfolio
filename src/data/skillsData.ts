
import { SkillsData } from "@/types/skills";

export const skillsData: SkillsData = {
  languages: {
    name: "Languages",
    icon: "Code",
    color: "#9b87f5",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "C++", level: 3 },
      { name: "Java", level: 3 },
      { name: "C", level: 3 }
    ]
  },
  frameworks: {
    name: "Frameworks",
    icon: "Layers",
    color: "#7E69AB",
    skills: [
      { name: "React.js", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "React Native", level: 3 }
    ]
  },
  tools: {
    name: "Tools",
    icon: "Settings",
    color: "#1EAEDB",
    skills: [
      { name: "Git", level: 4 },
      { name: "VS Code", level: 4 },
      { name: "Postman", level: 4 },
      { name: "Docker", level: 3 }
    ]
  },
  databases: {
    name: "Databases",
    icon: "Database",
    color: "#0FA0CE",
    skills: [
      { name: "MongoDB", level: 4 },
      { name: "SQL", level: 3 },
      { name: "NoSQL", level: 3 },
      { name: "Redis", level: 2 }
    ]
  },
  devops: {
    name: "DevOps",
    icon: "Server",
    color: "#6E59A5",
    skills: [
      { name: "AWS", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Docker", level: 3 },
      { name: "Kubernetes", level: 2 }
    ]
  }
};
