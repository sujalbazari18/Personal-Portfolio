
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <a 
          href="#home" 
          className="text-4xl md:text-5xl font-serif font-bold text-portfolio-blue mb-2 md:mb-0"
          aria-label="Logo - Sujal Bazari"
        >
          Sujal Bazari
        </a>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-portfolio-dark mb-1.5 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-portfolio-dark mb-1.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-portfolio-dark transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-12">
          {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-portfolio-dark hover:text-portfolio-blue transition-colors capitalize relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-portfolio-blue after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-3 px-4">
          {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-portfolio-dark hover:text-portfolio-blue py-2 transition-colors capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

