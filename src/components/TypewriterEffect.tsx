
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
  titles: string[];
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ titles }) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const title = titles[currentIndex];
      
      if (!isDeleting) {
        setCurrentTitle(title.substring(0, currentTitle.length + 1));
        
        if (currentTitle.length === title.length) {
          setIsDeleting(true);
          setTimeout(() => {}, 1500);
        }
      } else {
        setCurrentTitle(title.substring(0, currentTitle.length - 1));
        
        if (currentTitle.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentTitle, currentIndex, isDeleting, titles]);

  return (
    <motion.div
      className="flex items-center h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>{currentTitle}</span>
      <motion.span 
        className="ml-1 inline-block w-[3px] h-6 bg-blue-500"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.span>
    </motion.div>
  );
};

export default TypewriterEffect;
