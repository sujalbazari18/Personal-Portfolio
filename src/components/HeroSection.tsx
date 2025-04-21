
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-start items-center pt-20 bg-white"
    >
      {/* Logo Large and Centered */}
      <div className="w-full flex flex-col items-center mt-4 mb-12">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-portfolio-blue mb-4 text-center drop-shadow-lg select-none tracking-wider"
          style={{ letterSpacing: ".05em" }}
        >
          Sujal Bazari
        </h1>
      </div>
      
      {/* Big Coding Image with Large '5+ Years Experience' Badge */}
      <div className="relative flex flex-col items-center mb-4 w-full">
        <div className="w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] max-w-full bg-gradient-to-br from-portfolio-blue to-portfolio-teal rounded-full mx-auto overflow-hidden border-[12px] border-white shadow-2xl flex items-center justify-center transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1470"
            alt="Professional coder workspace"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white px-12 py-7 rounded-2xl shadow-2xl border-8 border-portfolio-blue flex items-center text-4xl font-bold text-portfolio-blue md:text-5xl md:px-16 md:py-8 animate-scale-in font-serif tracking-wide"
          style={{ zIndex: 2 }}
        >
          5<span className="text-portfolio-dark mx-2 text-3xl md:text-4xl font-extrabold">+</span>
          <span className="text-portfolio-teal font-extrabold ml-1">Years Experience</span>
        </div>
      </div>

      {/* Title & subtitle below image */}
      <div className="mt-20 mb-4 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-portfolio-blue text-center mb-2 tracking-wide">
          Full Stack Developer
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
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
