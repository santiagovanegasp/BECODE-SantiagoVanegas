import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['home', 'projects', 'about', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-background-light dark:bg-background-dark z-50 shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            
            <img 
              src="/images/logo.png"
              // src="./public/images/logo.png"  
              alt="Santi Dev Logo Light"
              className="h-8 w-8 mr-2 dark:hidden"
            /> 
    
            <img
              // src="./public/images/logodark.png" 
              src="/images/logodark.png" 
              alt="Santi Dev Logo Dark"
              className="h-8 w-8 mr-2 hidden dark:block"
            />
            <h1 className="text-2xl font-bold text-primary-light dark:text-primary-dark">
              Santi Dev
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="nav-link capitalize hover:underline"
              >
                {section}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background-light dark:bg-background-dark"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 nav-link capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

