
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
  className
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const currentText = texts[currentIndex];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // If waiting between words, do nothing
      if (isWaiting) return;

      // Set the text based on whether we're typing or deleting
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          const nextChar = currentText.charAt(displayText.length);
          setDisplayText(prev => prev + nextChar);
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true);
          timeoutRef.current = setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
            handleTyping();
          }, delayBetween);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    handleTyping();

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, currentIndex, currentText, isWaiting, typingSpeed, deletingSpeed, delayBetween, texts]);

  return (
    <span className={className}>
      {displayText}<span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
