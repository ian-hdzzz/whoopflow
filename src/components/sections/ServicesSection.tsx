import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Bot, Globe, X, Mail } from 'lucide-react';

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <i className="fab fa-meta text-4xl" />,
      title: "Meta ADS",
      description: "Strategic Facebook & Instagram advertising campaigns that convert prospects into customers.",
      subtitle: "ROI-Driven Social Media Advertising",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      bgColor: "bg-blue-950/20"
    },
    {
      icon: <i className="fab fa-google text-4xl" />,
      title: "Google ADS",
      description: "Targeted search campaigns that capture high-intent customers at the perfect moment.",
      subtitle: "High-Intent Search Marketing",
      gradient: "from-green-500 via-yellow-500 to-red-500",
      bgColor: "bg-green-950/20"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO Optimization",
      description: "Organic search strategies that build long-term visibility and sustainable growth.",
      subtitle: "Long-Term Organic Growth",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgColor: "bg-purple-950/20"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Analytics",
      description: "Data-driven insights that reveal opportunities and optimize performance continuously.",
      subtitle: "Performance Intelligence",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      bgColor: "bg-indigo-950/20"
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Marketing",
      description: "Automated email sequences that nurture leads and drive repeat business.",
      subtitle: "Automated Lead Nurturing",
      gradient: "from-pink-500 via-red-500 to-orange-500",
      bgColor: "bg-pink-950/20"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Process Optimization Chatbots",
      description: "AI-powered chatbots that streamline customer acquisition and support processes.",
      subtitle: "AI-Powered Automation",
      gradient: "from-cyan-500 via-teal-500 to-green-500",
      bgColor: "bg-cyan-950/20"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "High-converting websites designed to transform visitors into customers.",
      subtitle: "Conversion-Focused Development",
      gradient: "from-orange-500 via-yellow-500 to-red-500",
      bgColor: "bg-orange-950/20"
    }
  ];

  const notServices = [
    "Content Creation",
    "Social Media Management"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const scrollTop = -rect.top;
      const maxScroll = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
      
      setScrollProgress(progress);
      
      // Determine current service based on scroll progress
      const serviceIndex = Math.floor(progress * services.length);
      setCurrentService(Math.min(serviceIndex, services.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  const currentServiceData = services[currentService];

  return (
    <section 
      ref={sectionRef}
      id="services-section"
      className="relative overflow-hidden"
      style={{ height: `${services.length * 100}vh` }}
    >
      {/* Background with Dynamic Colors */}
      <div className={`absolute inset-0 transition-all duration-1000 bg-gradient-to-br ${currentServiceData.gradient} opacity-5`} />
      <div className={`absolute inset-0 transition-all duration-1000 ${currentServiceData.bgColor}`} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 bg-gradient-to-r ${currentServiceData.gradient} opacity-10`} 
             style={{ 
               left: `${20 + (currentService * 10)}%`, 
               top: `${10 + (currentService * 5)}%`,
               transform: `scale(${1 + scrollProgress * 0.5})` 
             }} />
        <div className={`absolute w-64 h-64 rounded-full blur-2xl transition-all duration-1000 bg-gradient-to-r ${currentServiceData.gradient} opacity-20`} 
             style={{ 
               right: `${15 + (currentService * 8)}%`, 
               bottom: `${20 + (currentService * 7)}%`,
               transform: `scale(${0.8 + scrollProgress * 0.3})` 
             }} />
      </div>

      {/* Main Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-white">
          
          {/* Service Content */}
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Icon with Animation */}
            <div className="mb-8 flex justify-center transform transition-all duration-1000"
                 style={{ 
                   transform: `scale(${1 + scrollProgress * 0.2}) rotate(${scrollProgress * 360}deg)`,
                   opacity: 1 - (scrollProgress * 0.3)
                 }}>
              <div className={`p-6 rounded-full bg-gradient-to-r ${currentServiceData.gradient} bg-opacity-20 backdrop-blur-sm border border-white/20`}>
                <div className="text-white transform transition-all duration-500">
                  {currentServiceData.icon}
                </div>
              </div>
            </div>

            {/* Title with Morphing Animation */}
            <div className="mb-6">
              <h2 className="text-6xl md:text-8xl font-bold mb-4 leading-tight transform transition-all duration-1000"
                  style={{ 
                    transform: `translateY(${scrollProgress * -20}px) scale(${1 + scrollProgress * 0.1})`,
                    opacity: 1 - (scrollProgress * 0.2)
                  }}>
                <span className={`bg-gradient-to-r ${currentServiceData.gradient} bg-clip-text text-transparent`}>
                  {currentServiceData.title}
                </span>
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-300 transform transition-all duration-1000"
                  style={{ 
                    transform: `translateY(${scrollProgress * -15}px)`,
                    opacity: 0.8 - (scrollProgress * 0.3)
                  }}>
                {currentServiceData.subtitle}
              </h3>
            </div>

            {/* Description with Reveal Animation */}
            <div className="mb-12 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed transform transition-all duration-1000"
                 style={{ 
                   transform: `translateY(${scrollProgress * -10}px)`,
                   opacity: 0.9 - (scrollProgress * 0.4)
                 }}>
                {currentServiceData.description}
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentService 
                        ? `bg-gradient-to-r ${currentServiceData.gradient} scale-150` 
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ROI Message */}
            <div className="text-center transform transition-all duration-1000"
                 style={{ 
                   transform: `translateY(${scrollProgress * -5}px)`,
                   opacity: 0.7 - (scrollProgress * 0.5)
                 }}>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                No vanity metrics. No empty promises. Just real ROI.
              </p>
              <button 
                onClick={() => document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' })}
                className={`bg-gradient-to-r ${currentServiceData.gradient} hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-current/25`}
              >
                Get Real Results Now
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* What We Don't Do - Final Section */}
      {currentService === services.length - 1 && (
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 bg-black/50 backdrop-blur-sm border-t border-red-500/20">
          <div className="container mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center justify-center gap-3">
              <X className="w-5 h-5 text-red-400" />
              What We Don't Do
            </h3>
            <div className="flex justify-center gap-8 text-gray-300">
              {notServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              However, we do create photos and videos for campaigns and website development.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;