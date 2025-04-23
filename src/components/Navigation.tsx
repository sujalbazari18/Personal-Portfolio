
import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = [
  {
    icon: <Github size={22} />,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={22} />,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={22} />,
    href: "mailto:surajsingh@email.com",
    label: "Email",
  },
];

const Navigation = () => (
  <header className="fixed w-full top-0 z-50 bg-[#161f32] border-b border-[#22293b] shadow-none">
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
      {/* Logo */}
      <a
        href="#home"
        className="text-white text-[1.6rem] font-extrabold font-sans tracking-tight"
        style={{ letterSpacing: '-0.5px' }}
      >
        Sujal Bazari
      </a>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-10">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="text-gray-100 hover:text-blue-400 text-base transition-colors font-semibold"
          >
            {item.label}
          </a>
        ))}
      </div>
      {/* External Links */}
      <div className="hidden md:flex items-center gap-5 ml-8">
        {externalLinks.map((ext, idx) => (
          <a
            key={ext.label + idx}
            href={ext.href}
            aria-label={ext.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 hover:scale-110 transition"
            tabIndex={0}
          >
            {ext.icon}
          </a>
        ))}
      </div>
      {/* Mobile (optional: could be expanded if needed) */}
    </nav>
  </header>
);

export default Navigation;
