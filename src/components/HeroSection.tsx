import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-cyan-300 font-medium mb-2 text-lg">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow text-glow">
            Sujal Bazari
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-cyan-300 mb-6 drop-shadow">Full Stack Developer</h2>
          <p className="text-gray-200 max-w-lg mb-8 shadow-sm">
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
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-800 to-teal-600 rounded-full mx-auto overflow-hidden border-4 border-white/40 shadow-2xl">
              <img 
                src="/lovable-uploads/508a7631-c2c1-466c-8073-3ea8d72e7a0d.png" 
                alt="Sujal Bazari profile picture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-0 md:right-10 bg-white/80 p-3 rounded-lg shadow-lg">
              <span className="text-sm font-medium text-portfolio-dark">OPEN TO WORK</span>
            </div>
          </div>
        </div>
      </div>
      {/* Background elements */}
      {/* Subtle glows */}
      <div className="hidden md:block absolute top-40 left-10 w-20 h-20 bg-cyan-400/10 rounded-full mix-blend-lighten"></div>
      <div className="hidden md:block absolute bottom-20 left-1/4 w-32 h-32 bg-purple-400/10 rounded-full mix-blend-lighten"></div>
      <div className="hidden md:block absolute top-1/3 right-10 w-16 h-16 bg-teal-300/10 rounded-full mix-blend-lighten"></div>
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-200 hover:text-cyan-300 transition-colors">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
