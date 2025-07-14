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
          <div className="grid items-center justify-items-center text-center grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center gap-2 text-gray-300">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>Free Strategy Session</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-300">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>30 Minutes</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-300">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-indigo-400" />
                <span>Video Call</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className={`w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row gap-6 items-stretch justify-center px-2 sm:px-4 md:px-8 lg:px-12 py-6 border-t-8 border-blue-500 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Calendly Widget */}
          <div className="flex-1 w-full rounded-2xl flex items-center justify-center min-w-0 mx-0 sm:mx-2 mb-6 lg:mb-0">
            <div
              ref={calendlyRef}
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/ianhdez2020/30min"
              style={{ minWidth: '100%', minHeight: 500, height: '60vw', maxHeight: 850 }}
            />
          </div>

          {/* Info Panel */}
          <div className="flex-1 w-full flex flex-col items-center justify-start min-w-0 max-w-full mx-0 sm:mx-2">
            <div className="w-full bg-none rounded-2xl p-4 sm:p-6 flex flex-col items-start h-auto">
          <div className="w-28 h-28 rounded-full border-4 border-blue-400 mb-4 overflow-hidden flex items-center justify-center bg-gray-100">
            <img src="/favicon.png" alt="WHOOPFLOW Logo" className="w-25 h-25 object-contain" />
          </div>
          <span className="uppercase text-xs tracking-widest text-blue-500 font-bold mb-2 text-left">Schedule your call with WHOOPFLOW</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2 text-left">Free 30-Minute Demo Call</h2>
          <p className="text-gray-700 text-base mb-4 text-left w-full">
            By the end of this call, you'll have a clear understanding of the next steps to generate consistent and reliable results online with Funnels & Paid Advertising.
          </p>
          <p className="text-gray-700 text-sm mb-4 text-left w-full">
            Find a time on our calendar to schedule your call today. We look forward to speaking with you soon!
          </p>
          <span className="block text-blue-500 font-bold mb-2 text-left w-full">THIS CALL IS PERFECT FOR:</span>
          <ul className="space-y-2 mb-2 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <li className="flex items-start gap-2 text-gray-800 text-sm leading-relaxed">
              <span className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#3B82F6"/>
                  <path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Businesses looking to convert their current website into a <span className="font-semibold">high quality & streamlined funnel format</span>.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-800 text-sm leading-relaxed">
              <span className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#3B82F6"/>
                  <path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Businesses looking to take their offline business <span className="font-semibold">online</span>.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-800 text-sm leading-relaxed">
              <span className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#3B82F6"/>
                  <path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Businesses looking to understand their <span className="font-semibold">increased revenue potential</span> with funnels & conversion rate optimization.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-800 text-sm leading-relaxed">
              <span className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#3B82F6"/>
                  <path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Businesses looking to <span className="font-semibold">maximize their conversion rates</span> & average order value.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-800 text-sm leading-relaxed">
              <span className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#3B82F6"/>
                  <path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Businesses looking for a reliable agency that can <span className="font-semibold">make their company a priority</span>.</span>
            </li>
          </ul>
        </div>
</div>
      </div>
    
      </div>
    </section>
  );
}

export default CalendlySection;