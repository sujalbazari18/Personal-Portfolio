
import React from "react";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-[#18243b] via-[#1b2334] to-[#24304c]"
    style={{ paddingTop: "80px" }}
  >
    {/* Floating colored tech icons are handled by the separate BackgroundTechIcons */}
    <div className="w-full flex flex-col items-center z-10 mt-2 mb-4">
      <h1
        className="text-[2.5rem] md:text-[4rem] font-extrabold tracking-tighter text-white"
        style={{ lineHeight: "1.13" }}
      >
        Hi, I'm{" "}
        <span className="text-blue-500" style={{ fontFamily: "inherit" }}>
          Sujal Bazari
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-2xl text-gray-200 font-medium font-sans">
        Full Stack Developer & Software Engineer
      </p>
      <div className="flex gap-5 mt-10">
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-8 py-3 text-base shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="bg-[#2c3442] hover:bg-[#3a4457] text-gray-100 font-semibold rounded-full px-8 py-3 text-base shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          View Projects
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
