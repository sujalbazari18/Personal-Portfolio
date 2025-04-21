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
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-portfolio-blue/20 to-portfolio-teal/20 rounded-full mx-auto overflow-hidden border-4 border-white/50 shadow-2xl">
              <img 
                src="/lovable-uploads/508a7631-c2c1-466c-8073-3ea8d72e7a0d.png" 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-0 md:right-10 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <span className="text-sm font-medium">OPEN TO WORK</span>
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
