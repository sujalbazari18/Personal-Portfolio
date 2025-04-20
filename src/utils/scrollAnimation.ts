
// Intersection Observer utility for scroll animations
export const setupScrollAnimation = () => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation class when element is in viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Once the animation is applied, we can stop observing this element
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      animationObserver.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      element.classList.add('animated');
    });
  }
};

// Function to apply scroll effects to specific elements
export const setupParallaxEffects = () => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    // Apply parallax effect to elements with 'parallax' class
    document.querySelectorAll('.parallax').forEach((element) => {
      const speed = element.getAttribute('data-speed') || '0.5';
      const yPos = -(scrollPosition * parseFloat(speed));
      
      // Type assertion to HTMLElement since we know we're working with HTML elements
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Call once on load to position elements
  handleScroll();
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Typed text animation utility
export class TypedText {
  element: HTMLElement;
  texts: string[];
  period: number;
  loopNum: number;
  txt: string;
  isDeleting: boolean;
  
  constructor(element: HTMLElement, texts: string[], period: number = 2000) {
    this.element = element;
    this.texts = texts;
    this.period = period;
    this.loopNum = 0;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }
  
  tick() {
    const i = this.loopNum % this.texts.length;
    const fullText = this.texts[i];
    
    if (this.isDeleting) {
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullText.substring(0, this.txt.length + 1);
    }
    
    this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;
    
    let delta = 200 - Math.random() * 100;
    
    if (this.isDeleting) {
      delta /= 2;
    }
    
    if (!this.isDeleting && this.txt === fullText) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    
    setTimeout(() => this.tick(), delta);
  }
}
