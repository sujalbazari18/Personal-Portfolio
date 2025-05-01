
import React, { useCallback, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ForceGraph2D from 'react-force-graph-2d';
import { useToast } from "@/hooks/use-toast";
import { SkillNode } from "@/types/skills";
import { useWindowSize } from "@/hooks/use-window-size";
import { skillsData } from "@/data/skillsData";
import { useSkillsGraph } from "@/hooks/use-skills-graph";

import SkillNodeRenderer from "./skills/SkillNodeRenderer";
import SkillDetailPanel from "./skills/SkillDetailPanel";
import MobileCategorySelector from "./skills/MobileCategorySelector";
import CategoryLegend from "./skills/CategoryLegend";
import InstructionsPanel from "./skills/InstructionsPanel";

const SkillsGalaxy = () => {
  const { toast } = useToast();
  const graphRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isGraphReady, setIsGraphReady] = useState(false);
  
  // Get graph data from our custom hook
  const graphData = useSkillsGraph(skillsData, selectedCategory);
  
  // Get node renderer from our component
  const { renderNode } = SkillNodeRenderer({ hoveredNode });

  useEffect(() => {
    // Adjust graph after a small delay to ensure proper initialization
    const timer = setTimeout(() => {
      if (graphRef.current) {
        graphRef.current.d3Force('charge').strength(-150);
        graphRef.current.d3Force('link').distance(link => {
          if (link.source.id === 'center') return 100;
          return 60;
        });
        
        // Center the graph
        graphRef.current.zoomToFit(400);
        setIsGraphReady(true);
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [graphData, windowSize]);

  const handleNodeClick = useCallback((node: SkillNode) => {
    if (node.id === "center") {
      setSelectedCategory(null);
      toast({
        title: "All Skills",
        description: "Showing all skill categories"
      });
    } else if (node.category && !node.id.includes('-')) {
      setSelectedCategory(node.category === selectedCategory ? null : node.category);
      toast({
        title: node.name,
        description: selectedCategory === node.category 
          ? "Showing all skill categories" 
          : `Showing ${node.name} skills`
      });
    }
  }, [selectedCategory, toast]);

  const handleNodeHover = useCallback((node: SkillNode | null) => {
    setHoveredNode(node);
    if (graphRef.current && node) {
      graphRef.current.centerAt(
        node.x, 
        node.y, 
        1000
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full relative" style={{ height: "600px" }}>
      <AnimatePresence>
        {isGraphReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full absolute"
          >
            <ForceGraph2D
              ref={graphRef}
              graphData={graphData}
              nodeRelSize={6}
              enableNodeDrag={false}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              nodeCanvasObject={renderNode}
              onNodeClick={handleNodeClick}
              onNodeHover={handleNodeHover}
              cooldownTicks={100}
              linkColor={() => "rgba(255,255,255,0.2)"}
              linkWidth={1}
              nodeAutoColorBy="category"
              width={containerRef.current?.clientWidth || 800}
              height={containerRef.current?.clientHeight || 600}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile category selector */}
      <MobileCategorySelector 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        skillsData={skillsData}
      />

      {/* Skill details panel */}
      <SkillDetailPanel 
        hoveredNode={hoveredNode} 
        skillsData={skillsData}
        setHoveredNode={setHoveredNode}
      />

      {/* Category legend - Desktop only */}
      <CategoryLegend 
        skillsData={skillsData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Instructions - Desktop only */}
      <InstructionsPanel />
    </div>
  );
};

export default SkillsGalaxy;
