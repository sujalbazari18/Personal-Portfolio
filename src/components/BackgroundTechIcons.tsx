
import { Globe, Code, Terminal, Database, Cpu, Layers } from "lucide-react";

// Floating colored icons behind hero text, matching the faint, soft-blur vibe
const floatingIcons = [
  {
    Icon: Code,
    color: "text-yellow-300",
    style: "left-[8vw] top-[29vh]",
    size: 54,
    opacity: "opacity-30",
    blur: "blur-[0.5px]",
    glow: "shadow-glow-yellow",
    rotate: "-rotate-6",
  },
  {
    Icon: Terminal,
    color: "text-pink-400",
    style: "left-[14vw] bottom-[16vh]",
    size: 48,
    opacity: "opacity-20",
    blur: "blur-[1px]",
    glow: "shadow-glow-pink",
    rotate: "rotate-2",
  },
  {
    Icon: Globe,
    color: "text-purple-400",
    style: "right-[28vw] top-[33%]",
    size: 74,
    opacity: "opacity-25",
    blur: "blur-[1.2px]",
    glow: "shadow-glow-purple",
    rotate: "rotate-8",
  },
  {
    Icon: Cpu,
    color: "text-blue-300",
    style: "right-[8vw] top-[37vh]",
    size: 57,
    opacity: "opacity-28",
    blur: "blur-sm",
    glow: "shadow-glow-blue",
    rotate: "-rotate-3",
  },
  {
    Icon: Database,
    color: "text-green-300",
    style: "left-[36vw] bottom-[10vh]",
    size: 50,
    opacity: "opacity-20",
    blur: "blur-[1.2px]",
    glow: "shadow-glow-green",
    rotate: "rotate-3",
  },
  {
    Icon: Layers,
    color: "text-indigo-300",
    style: "left-[52vw] top-[18vh]",
    size: 48,
    opacity: "opacity-16",
    blur: "blur-[1px]",
    glow: "shadow-glow-indigo",
    rotate: "rotate-4",
  },
];

export default function BackgroundTechIcons() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#151b27] via-[#1b2032] to-[#232c48]"></div>
      {floatingIcons.map(
        ({ Icon, color, style, size, opacity, blur, glow, rotate }, i) => (
          <div
            key={i}
            className={`absolute ${style} ${opacity} ${blur} ${glow} ${rotate} animate-float`}
            style={{
              animationDelay: `${i * 1.4}s`,
              filter: "drop-shadow(0 2px 20px rgba(30,100,180,0.07))",
            }}
          >
            <Icon size={size} className={color} strokeWidth={1.7} />
          </div>
        )
      )}
    </div>
  );
}
