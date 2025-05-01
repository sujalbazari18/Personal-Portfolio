
import { useState, useEffect } from "react";
import { GraphData, SkillsData } from "@/types/skills";

export const useSkillsGraph = (skillsData: SkillsData, selectedCategory: string | null) => {
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  
  useEffect(() => {
    const nodes = [
      { id: "center", name: "My Skills", val: 25, color: "#D6BCFA" }
    ];
    
    const links = [];
    
    // Add category nodes
    Object.entries(skillsData).forEach(([key, category]) => {
      nodes.push({
        id: key,
        name: category.name,
        val: 15,
        color: category.color,
        icon: category.icon,
        category: key
      });
      
      links.push({
        source: "center",
        target: key,
        value: 5
      });
      
      if (selectedCategory === key || !selectedCategory) {
        // Add skills for the selected category (or all if none selected)
        category.skills.forEach((skill) => {
          const skillId = `${key}-${skill.name.replace(/\s+/g, '-').toLowerCase()}`;
          
          nodes.push({
            id: skillId,
            name: skill.name,
            val: 10 * (skill.level / 5), // Size based on skill level
            color: category.color,
            category: key,
            level: skill.level
          });
          
          links.push({
            source: key,
            target: skillId,
            value: 3
          });
        });
      }
    });
    
    setGraphData({ nodes, links });
  }, [selectedCategory, skillsData]);

  return graphData;
};
