
import { useState, useEffect } from 'react';

const Navigation = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Removed setIsOpen call as there is no menu to open/close anymore
  };

  return (
    <nav className={`w-full transition-all duration-300 ${
      scrolled
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800/90 backdrop-blur-sm border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-end">
          <button 
            onClick={() => scrollToSection('#calendly-section')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;