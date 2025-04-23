import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen = useState(false);

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
        isScrolled ? 'bg-[rgba(20,28,43,0.92)] shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-cyan-300 text-xl md:text-2xl font-serif font-bold drop-shadow">
          Sujal Bazari
        </a>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-cyan-200 mb-1.5 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-cyan-200 mb-1.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-cyan-200 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white hover:text-cyan-300 transition-colors link-underline capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-[rgba(30,35,50,0.95)] shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-3 px-4">
          {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-cyan-300 py-2 transition-colors capitalize"
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
