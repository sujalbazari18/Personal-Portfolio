
import { Globe, Code, Terminal, Database, Cpu, Server, Layers, LayoutGrid, LayoutList, LayoutDashboard } from "lucide-react";

const floatingIcons = [
  { Icon: Code,    color: "text-blue-400",    style: "left-10 top-32",         size: 56, opacity: "opacity-30", blur: "blur-sm", rotate: "-rotate-12" },
  { Icon: Database,color: "text-yellow-400",  style: "left-40 bottom-24",      size: 52, opacity: "opacity-25", blur: "blur-0", rotate: "rotate-6" },
  { Icon: Cpu,     color: "text-teal-400",    style: "right-14 top-60",        size: 62, opacity: "opacity-30", blur: "blur-md", rotate: "rotate-0" },
  { Icon: Terminal,color: "text-rose-400",    style: "right-1/4 bottom-20",    size: 48, opacity: "opacity-20", blur: "blur-lg", rotate: "-rotate-3" },
  { Icon: Globe,   color: "text-purple-400",  style: "left-1/2 top-[45%]",     size: 68, opacity: "opacity-20", blur: "blur-0", rotate: "rotate-12" },
  { Icon: Server,  color: "text-green-400",   style: "right-1/3 top-40",       size: 44, opacity: "opacity-20", blur: "blur-0", rotate: "-rotate-6" },
  { Icon: Layers,  color: "text-indigo-400",  style: "left-28 bottom-10",      size: 50, opacity: "opacity-25", blur: "blur", rotate: "rotate-3" },
];

export default function BackgroundTechIcons() {
  // Each icon floats with a "gentle drift" animation.
  // To avoid tailwind's purging, animate-float is manually defined in src/index.css.
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* bg-gradient makes the main dark effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151c26] via-[#20283a] to-[#22273b]"></div>
      {/* Tech icons */}
      {floatingIcons.map(({ Icon, color, style, size, opacity, blur, rotate }, i) => (
        <div
          key={i}
          className={`absolute ${style} ${opacity} ${blur} ${rotate} animate-float`}
          style={{ animationDelay: `${i * 1.2}s`, filter: "drop-shadow(0 2px 12px rgba(30,41,59,0.07))" }}
        >
          <Icon size={size} className={color} strokeWidth={1.6} />
        </div>
      ))}
    </div>
  );
}
