
import React from 'react';
import { SkillsData } from '@/types/skills';

interface CategoryLegendProps {
  skillsData: SkillsData;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryLegend = ({ 
  skillsData, 
  selectedCategory, 
  setSelectedCategory 
}: CategoryLegendProps) => {
  return (
    <div className="hidden md:block absolute bottom-4 left-4 bg-gray-900/70 backdrop-blur-sm p-3 rounded-lg z-10">
      <h3 className="text-white text-xs mb-2">Skill Categories:</h3>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {Object.entries(skillsData).map(([key, category]) => (
          <div 
            key={key}
            className="flex items-center gap-1 cursor-pointer hover:bg-gray-800 p-1 rounded"
            onClick={() => setSelectedCategory(key === selectedCategory ? null : key)}
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: category.color }}
            ></div>
            <span 
              className={selectedCategory === key ? "text-white font-medium" : "text-gray-300"}
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLegend;
