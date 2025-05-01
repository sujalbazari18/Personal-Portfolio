
import React, { useCallback, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ForceGraph2D } from 'react-force-graph-2d';
import { useToast } from "@/hooks/use-toast";
import { 
  Box, 
  Code, 
  Database, 
  Layers, 
  Server, 
  Settings,
  X
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useWindowSize } from "@/hooks/use-window-size";

interface SkillNode {
  id: string;
  name: string;
  val: number;
  color: string;
  icon?: string;
  category?: string;
  level?: number;
}

interface SkillLink {
  source: string;
  target: string;
  value?: number;
}

interface GraphData {
  nodes: SkillNode[];
  links: SkillLink[];
}

const SkillsGalaxy = () => {
  const { toast } = useToast();
  const graphRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isGraphReady, setIsGraphReady] = useState(false);

  // Skill categories and their respective skills
  const skillsData = {
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

  // Generate graph data from skills data
  useEffect(() => {
    const nodes: SkillNode[] = [
      { id: "center", name: "My Skills", val: 25, color: "#D6BCFA" }
    ];
    
    const links: SkillLink[] = [];
    
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
  }, [selectedCategory]);

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
    if (graphRef.current) {
      graphRef.current.centerAt(
        node?.x, 
        node?.y, 
        1000
      );
    }
  }, []);

  // Custom node renderer
  const renderNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const { x, y, name, color, id } = node;
    const fontSize = 12 / globalScale;
    const nodeSize = node.val;
    const isHovered = hoveredNode?.id === id;
    const isCenter = id === 'center';
    
    // Draw node circle
    ctx.beginPath();
    ctx.arc(x, y, nodeSize, 0, 2 * Math.PI);
    ctx.fillStyle = isHovered ? '#ffffff' : color;
    ctx.fill();
    
    // Add glow effect for center and hovered nodes
    if (isCenter || isHovered) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = isCenter ? 15 : 10;
      ctx.strokeStyle = color;
      ctx.lineWidth = isCenter ? 2 : 1;
      ctx.stroke();
      ctx.restore();
    }
    
    // Add a border
    ctx.strokeStyle = isHovered ? '#ffffff' : color;
    ctx.lineWidth = isHovered ? 2 / globalScale : 1 / globalScale;
    ctx.stroke();
    
    // Draw the node label for larger nodes or hovered nodes
    if (nodeSize > 8 || isHovered || isCenter) {
      ctx.font = `${fontSize}px Sans-Serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isHovered ? color : '#ffffff';
      ctx.fillText(name, x, y);
    }
  }, [hoveredNode]);

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

      {/* Mobile interface */}
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

      {/* Skill details panel */}
      <AnimatePresence>
        {hoveredNode?.level && (
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
        )}
      </AnimatePresence>

      {/* Legend - Desktop only */}
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

      {/* Instructions */}
      <div className="hidden md:block absolute bottom-4 right-4 bg-gray-900/70 backdrop-blur-sm p-2 rounded-lg z-10 text-xs text-gray-300">
        Click on nodes to explore. Hover for details.
      </div>
    </div>
  );
};

export default SkillsGalaxy;
