import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-serif text-white">
              Sujal Bazari
            </a>
            <p className="text-gray-200 mt-2">
              Backend Developer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <nav className="flex space-x-6 mb-4 md:mb-0 md:mr-8">
              {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-white transition-colors capitalize text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sujal Bazari. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Created by SUJAL BAZARI
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
