
import { Globe, Code, Terminal, Database, Cpu, Server, Layers } from "lucide-react";

// New background: deep blue-green gradient, soft circles for depth, better tech icon visibility
const floatingIcons = [
  { Icon: Code,     color: "text-blue-300",    style: "left-10 top-36",      size: 60, opacity: "opacity-45", blur: "blur-[2px]",   glow: "shadow-glow-blue", rotate: "-rotate-8" },
  { Icon: Database, color: "text-yellow-300",  style: "left-48 bottom-28",   size: 54, opacity: "opacity-45", blur: "blur-[1px]",   glow: "shadow-glow-yellow", rotate: "rotate-8" },
  { Icon: Cpu,      color: "text-teal-300",    style: "right-14 top-64",     size: 70, opacity: "opacity-40", blur: "blur-[2px]",   glow: "shadow-glow-green", rotate: "rotate-0" },
  { Icon: Terminal, color: "text-pink-300",    style: "right-1/3 bottom-16", size: 52, opacity: "opacity-35", blur: "blur-[2px]",   glow: "shadow-glow-pink", rotate: "-rotate-3" },
  { Icon: Globe,    color: "text-purple-300",  style: "left-1/2 top-[47%]",  size: 76, opacity: "opacity-35", blur: "blur-[1px]",   glow: "shadow-glow-purple", rotate: "rotate-12" },
  { Icon: Server,   color: "text-green-400",   style: "right-1/4 top-48",    size: 56, opacity: "opacity-35", blur: "blur-[2px]",   glow: "shadow-glow-cyan", rotate: "-rotate-6" },
  { Icon: Layers,   color: "text-indigo-200",  style: "left-32 bottom-12",   size: 59, opacity: "opacity-38", blur: "blur-[2px]",   glow: "shadow-glow-indigo", rotate: "rotate-3" },
];

export default function BackgroundTechIcons() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Layered radial gradient background */}
      <div className="absolute inset-0 bg-primary-gradient"></div>
      {/* Subtle blurred "glow" circles for depth */}
      <div className="absolute w-96 h-96 left-[-10%] top-[-14%] rounded-full bg-cyan-400 opacity-15 blur-3xl"></div>
      <div className="absolute w-60 h-60 right-[8%] top-[10%] rounded-full bg-purple-400 opacity-15 blur-2xl"></div>
      <div className="absolute w-72 h-72 right-1/3 bottom-[8%] rounded-full bg-teal-300 opacity-10 blur-2xl"></div>
      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, style, size, opacity, blur, glow, rotate }, i) => (
        <div
          key={i}
          className={`absolute ${style} ${opacity} ${blur} ${glow} ${rotate} animate-float`}
          style={{
            animationDelay: `${i * 1.1}s`,
            filter: "drop-shadow(0 2px 18px rgba(30,100,180,0.15))"
          }}
        >
          <Icon size={size} className={color} strokeWidth={1.6} />
        </div>
      ))}
    </div>
  );
}
