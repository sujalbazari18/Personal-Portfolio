
import React from 'react';

const InstructionsPanel = () => {
  return (
    <div className="hidden md:block absolute bottom-4 right-4 bg-gray-900/70 backdrop-blur-sm p-2 rounded-lg z-10 text-xs text-gray-300">
      Click on nodes to explore. Hover for details.
    </div>
  );
};

export default InstructionsPanel;
