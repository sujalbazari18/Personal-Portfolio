
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SkillNode } from '@/types/skills';
import { SkillsData } from '@/types/skills';

interface SkillDetailPanelProps {
  hoveredNode: SkillNode | null;
  skillsData: SkillsData;
  setHoveredNode: (node: SkillNode | null) => void;
}

const SkillDetailPanel = ({ hoveredNode, skillsData, setHoveredNode }: SkillDetailPanelProps) => {
  if (!hoveredNode?.level) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.2 }}
        className="absolute top-4 right-4 w-64 bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10"
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-white">{hoveredNode.name}</h3>
          <button 
            onClick={() => setHoveredNode(null)}
            className="text-gray-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mb-2">
          <div className="text-xs text-gray-400 mb-1">Proficiency</div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full" 
              style={{ 
                width: `${(hoveredNode.level || 0) * 20}%`,
                backgroundColor: hoveredNode.color 
              }}
            ></div>
          </div>
        </div>
        
        <div className="text-xs text-gray-400">
          Category: {Object.entries(skillsData).find(([key]) => 
            key === hoveredNode.category
          )?.[1].name}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillDetailPanel;
