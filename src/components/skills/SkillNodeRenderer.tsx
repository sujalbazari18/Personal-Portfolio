
import React, { useCallback } from 'react';
import { SkillNode } from '@/types/skills';

interface SkillNodeRendererProps {
  hoveredNode: SkillNode | null;
}

const SkillNodeRenderer = ({ hoveredNode }: SkillNodeRendererProps) => {
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

  return { renderNode };
};

export default SkillNodeRenderer;
