
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = [
  {
    icon: <Github size={22} />,
    href: "https://github.com/sujalbazari18/",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={22} />,
    href: "https://linkedin.com/in/sujal-bazari/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={22} />,
    href: "mailto:sujalbazari@email.com",
    label: "Email",
  },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#161f32]/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-[#22293b]/70" 
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-white text-[1.6rem] font-extrabold font-sans tracking-tight relative group"
          style={{ letterSpacing: '-0.5px' }}
        >
          Sujal Bazari
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-100 hover:text-blue-400 text-base transition-colors font-semibold relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
        {/* External Links */}
        <div className="hidden md:flex items-center gap-5 ml-8">
          {externalLinks.map((ext, idx) => (
            <motion.a
              key={ext.label + idx}
              href={ext.href}
              aria-label={ext.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400 transition relative z-10 p-2"
              tabIndex={0}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 + idx * 0.1 }}
            >
              {ext.icon}
            </motion.a>
          ))}
        </div>
        {/* Mobile menu button (can be expanded later) */}
        <div className="md:hidden">
          <button className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
