
export interface SkillNode {
  id: string;
  name: string;
  val: number;
  color: string;
  icon?: string;
  category?: string;
  level?: number;
  x?: number;
  y?: number;
}

export interface SkillLink {
  source: string;
  target: string;
  value?: number;
}

export interface GraphData {
  nodes: SkillNode[];
  links: SkillLink[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export interface SkillsData {
  [key: string]: SkillCategory;
}
