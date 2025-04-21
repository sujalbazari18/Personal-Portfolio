
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-portfolio-teal font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-portfolio-dark">
            Sujal Bazari
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-blue mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 max-w-lg mb-8">
            Passionate software engineer with expertise in web development, 
            mobile applications, and system design. Creating efficient and elegant 
            solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="btn-outline"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-2/5 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="relative flex flex-col items-center">
            <div className="w-72 h-72 md:w-[22rem] md:h-[22rem] bg-gradient-to-br from-portfolio-blue to-portfolio-teal rounded-full mx-auto overflow-hidden border-8 border-white shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1470" 
                alt="Professional coder workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-1 md:right-12 bg-white px-6 py-4 rounded-xl shadow-2xl border-2 border-portfolio-blue flex items-center text-2xl font-semibold text-portfolio-blue md:text-3xl md:px-8 md:py-5 md:-bottom-12 animate-scale-in">
              5<span className="text-portfolio-dark mx-1 text-xl md:text-2xl font-bold">+</span>
              <span className="text-portfolio-teal font-extrabold">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="hidden md:block absolute top-40 left-10 w-20 h-20 bg-portfolio-blue/10 rounded-full"></div>
      <div className="hidden md:block absolute bottom-20 left-1/4 w-32 h-32 bg-portfolio-teal/10 rounded-full"></div>
      <div className="hidden md:block absolute top-1/3 right-10 w-16 h-16 bg-portfolio-amber/10 rounded-full"></div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-500 hover:text-portfolio-blue transition-colors">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
