
import React, { useEffect } from "react";
import TypewriterText from "./TypewriterText";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  useEffect(() => {
    // Add entrance animation to buttons
    const buttons = document.querySelectorAll('.hero-button');
    buttons.forEach((button, index) => {
      button.classList.add('opacity-0', 'translate-y-4');
      setTimeout(() => {
        button.classList.remove('opacity-0', 'translate-y-4');
        button.classList.add('opacity-100', 'translate-y-0');
      }, 1000 + index * 150);
    });
  }, []);

  const titles = [
    "Backend Developer",
    "Software Engineer",
    "API Specialist",
    "System Architect"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-[#18243b] via-[#1b2334] to-[#24304c] overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Particle Background */}
      <ParticleBackground count={60} />
      
      {/* Content */}
      <div className="w-full flex flex-col items-center z-10 mt-2 mb-4 px-4 relative">
        <h1
          className="text-[2.5rem] md:text-[4rem] font-extrabold tracking-tighter text-white animate-fade-in"
          style={{ lineHeight: "1.13" }}
        >
          Hi, I'm{" "}
          <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-[#4ecdc4] to-[#ff6b6b]" style={{ fontFamily: "inherit" }}>
            Sujal Bazari
          </span>
        </h1>
        
        <p className="mt-6 text-lg md:text-2xl text-gray-200 font-medium font-sans h-8 mb-2">
          <TypewriterText 
            texts={titles} 
            typingSpeed={80} 
            deletingSpeed={40}
            delayBetween={1500}
          />
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 mt-10">
          <a
            href="#contact"
            className="hero-button bg-gradient-to-r from-[#4ecdc4] to-[#2d4b66] hover:from-[#4ecdc4] hover:to-[#21394f] text-white font-semibold rounded-full px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="hero-button bg-[#2c3442] hover:bg-[#3a4457] text-gray-100 font-semibold rounded-full px-8 py-3 text-base shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
