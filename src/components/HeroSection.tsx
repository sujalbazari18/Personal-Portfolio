
import React, { useEffect, useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const titles = [
    "Backend Developer",
    "Cloud Enthusiast",
    "API Architect",
    "Software Engineer"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      <ParticleBackground />
      
      <motion.div 
        className="w-full flex flex-col items-center z-10 mt-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-[2.5rem] md:text-[4rem] font-extrabold tracking-tighter text-white"
          style={{ lineHeight: "1.13" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm{" "}
          <span className="text-blue-500 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" style={{ fontFamily: "inherit" }}>
            Sujal Bazari
          </span>
        </motion.h1>
        
        <motion.div
          className="mt-6 text-lg md:text-2xl text-gray-200 font-medium font-sans h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TypewriterEffect titles={titles} />
        </motion.div>
        
        <motion.div 
          className="flex gap-5 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full px-8 py-3 text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="bg-[#2c3442] hover:bg-[#3a4457] text-gray-100 font-semibold rounded-full px-8 py-3 text-base shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-gray-700 border border-gray-700/30 hover:scale-105"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="flex gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 1, duration: 0.5, delay: 1 }}
        >
          {[
            { Icon: Github, href: "https://github.com/sujalbazari18/", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/in/sujal-bazari/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:sujalbazari@email.com", label: "Email" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10"
              aria-label={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.Icon size={22} className="text-white/70 hover:text-white" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
