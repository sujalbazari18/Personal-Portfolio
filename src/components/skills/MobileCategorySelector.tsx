
import React from 'react';
import { SkillsData } from '@/types/skills';

interface MobileCategorySelectorProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  skillsData: SkillsData;
}

const MobileCategorySelector = ({ 
  selectedCategory, 
  setSelectedCategory, 
  skillsData 
}: MobileCategorySelectorProps) => {
  return (
    <div className="md:hidden absolute top-4 left-4 right-4 bg-gray-900/70 backdrop-blur-sm p-3 rounded-lg z-10">
      <h3 className="text-white text-sm mb-2">Select Skill Category:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-2 py-1 text-xs rounded-full ${!selectedCategory ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}
        >
          All
        </button>
        {Object.entries(skillsData).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-2 py-1 text-xs rounded-full ${selectedCategory === key ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileCategorySelector;
