import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const CalendlySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="calendly-section"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            <span className="text-white">Ready to </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">Transform</span>
            <span className="text-white"> Your Business?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Book a free 30-minute strategy call to discover how we can boost your ROI 
            and accelerate your business growth.
          </p>
          
          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Video className="w-5 h-5 text-indigo-400" />
              <span>Video Call</span>
            </div>
          </div>
        </div>

        {/* Calendly Widget */}
        <div className={`max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div
            ref={calendlyRef}
            className="calendly-inline-widget"
            data-url="https://calendly.com/ianhdez2020/30min"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            During our call, we'll analyze your current marketing efforts, identify growth opportunities, 
            and create a customized strategy to maximize your ROI.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CalendlySection;