
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16 bg-white"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center z-10">
        {/* Logo Large and Centered */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-portfolio-blue mb-3 text-center drop-shadow-lg select-none">
          Sujal Bazari
        </h1>
        
        {/* Large Avatar with 5+ Years Experience */}
        <div className="relative flex flex-col items-center mb-4 md:mb-8 w-full">
          <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-portfolio-blue to-portfolio-teal rounded-full mx-auto overflow-hidden border-8 border-white shadow-2xl transition-all duration-300 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1470"
              alt="Professional coder workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-8 py-5 rounded-2xl shadow-2xl border-4 border-portfolio-blue flex items-center text-3xl font-semibold text-portfolio-blue md:text-4xl md:px-10 md:py-6 animate-scale-in font-serif tracking-wide">
            5<span className="text-portfolio-dark mx-1 text-2xl md:text-3xl font-extrabold">+</span>
            <span className="text-portfolio-teal font-extrabold ml-1">Years Experience</span>
          </div>
        </div>

        {/* Title & subtitle below image */}
        <h2 className="text-2xl md:text-4xl font-semibold text-portfolio-blue mb-4 text-center">
          Full Stack Developer
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mb-8 text-center">
          Passionate software engineer with expertise in web development, 
          mobile applications, and system design. Creating efficient and elegant 
          solutions to complex problems.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
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
      
      {/* Background elements */}
      <div className="hidden md:block absolute top-40 left-10 w-32 h-32 bg-portfolio-blue/10 rounded-full"></div>
      <div className="hidden md:block absolute bottom-20 left-1/4 w-40 h-40 bg-portfolio-teal/10 rounded-full"></div>
      <div className="hidden md:block absolute top-1/3 right-10 w-24 h-24 bg-portfolio-amber/10 rounded-full"></div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <a href="#about" className="flex flex-col items-center text-base text-gray-500 hover:text-portfolio-blue transition-colors font-semibold">
          <span className="mb-2 tracking-wide">Scroll Down</span>
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
