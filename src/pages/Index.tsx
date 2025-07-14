

import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CalendlySection from '@/components/sections/CalendlySection';
import ContactSection from '@/components/sections/ContactSection';
import { useEffect, useRef, useState } from 'react';


const Index = () => {
  const [showServices, setShowServices] = useState(true);
  const [showBookButton, setShowBookButton] = useState(true);
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (window.scrollY < window.innerHeight * 1.5) {
          setShowServices(!entry.isIntersecting);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    if (calendlyRef.current) {
      observer.observe(calendlyRef.current);
    }
    return () => {
      if (calendlyRef.current) observer.unobserve(calendlyRef.current);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowBookButton(true); // scroll up
      } else if (currentScrollY > lastScrollY) {
        setShowBookButton(false); // scroll down
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Floating Book a call button */}
      <button
        style={{
          transition: 'opacity 0.3s',
          opacity: showBookButton ? 1 : 0,
          pointerEvents: showBookButton ? 'auto' : 'none',
        }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 transition-all duration-300 hover:scale-105 fixed top-8 right-8 z-50 px-6 py-3 bg-white rounded-full shadow-lg hover:bg-gray-200"
        onClick={() => {
          calendlyRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Book a call
      </button>
      <HeroSection />
      {showServices && <ServicesSection />}
      <div ref={calendlyRef} id="calendly-section">
        <CalendlySection />
      </div>
      <ContactSection />
    </div>
  );
};

export default Index;
