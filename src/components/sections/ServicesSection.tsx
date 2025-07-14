import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Bot, Globe, X, Mail, BarChart3, Search, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-20 h-20" fill="currentColor">
          <path d="M640 317.9C640 409.2 600.6 466.4 529.7 466.4C467.1 466.4 433.9 431.8 372.8 329.8L341.4 277.2C333.1 264.7 326.9 253 320.2 242.2C300.1 276 273.1 325.2 273.1 325.2C206.1 441.8 168.5 466.4 116.2 466.4C43.4 466.4 0 409.1 0 320.5C0 177.5 79.8 42.4 183.9 42.4C234.1 42.4 277.7 67.1 328.7 131.9C365.8 81.8 406.8 42.4 459.3 42.4C558.4 42.4 640 168.1 640 317.9H640zM287.4 192.2C244.5 130.1 216.5 111.7 183 111.7C121.1 111.7 69.2 217.8 69.2 321.7C69.2 370.2 87.7 397.4 118.8 397.4C149 397.4 167.8 378.4 222 293.6C222 293.6 246.7 254.5 287.4 192.2V192.2zM531.2 397.4C563.4 397.4 578.1 369.9 578.1 322.5C578.1 198.3 523.8 97.1 454.9 97.1C421.7 97.1 393.8 123 360 175.1C369.4 188.9 379.1 204.1 389.3 220.5L426.8 282.9C485.5 377 500.3 397.4 531.2 397.4L531.2 397.4z"/>
        </svg>
      ),
      title: "Meta ADS",
      description: "Strategic Facebook & Instagram advertising campaigns that convert prospects into customers.",
      subtitle: "ROI-Driven Social Media Advertising",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      bgColor: "bg-blue-950/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-20 h-20" fill="currentColor">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
        </svg>
      ),
      title: "Google ADS",
      description: "Targeted search campaigns that capture high-intent customers at the perfect moment.",
      subtitle: "High-Intent Search Marketing",
      gradient: "from-green-500 via-yellow-500 to-red-500",
      bgColor: "bg-green-950/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512" className="w-20 h-20" fill="currentColor">
          <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"/>
        </svg>
      ),
      title: "SEO Optimization",
      description: "Organic search strategies that build long-term visibility and sustainable growth.",
      subtitle: "Long-Term Organic Growth",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgColor: "bg-purple-950/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-20 h-20" fill="currentColor">
          <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/>
        </svg>
      ),
      title: "Analytics",
      description: "Data-driven insights that reveal opportunities and optimize performance continuously.",
      subtitle: "Performance Intelligence",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      bgColor: "bg-indigo-950/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-20 h-20" fill="currentColor">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>
      ),
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-20 h-20" fill="currentColor">
          <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
        </svg>
      ),
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleServices(prev => [...prev.filter(i => i !== index), index]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-section" className="py-32 px-32  bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-72 h-72 bg-cyan-600/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="hidden md:block absolute top-1/4 right-8 animate-bounce delay-1000">
        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
      </div>
      <div className="hidden md:block absolute bottom-1/4 left-8 animate-bounce delay-2000">
        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>
      <div className="hidden md:block absolute top-3/4 right-1/4 animate-bounce delay-1500">
        <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
      </div>
      <div className="hidden md:block absolute top-1/3 left-1/3 animate-bounce delay-3000">
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">Services</span>
          </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          No vanity metrics. No empty promises. Just real ROI.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              data-index={index}
              className={`transition-all duration-1000 transform ${
                visibleServices.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:grid-cols-2'
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-6xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                  </div>
                  
                  <div className={`inline-block px-4 py-2 rounded-full ${service.bgColor} border border-white/10`}>
                    <span className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.subtitle.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={() => document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`bg-gradient-to-r ${service.gradient} hover:scale-105 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-current/30 text-lg`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Visual */}
                <div className={`flex justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`relative transition-all duration-1000 ${
                    visibleServices.includes(index) ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                  }`}>
                    {/* Background Elements */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20 animate-pulse`} />
                    <div className={`absolute inset-4 bg-gradient-to-tr ${service.gradient} rounded-full blur-2xl opacity-30`} />
                    
                    {/* Icon Container */}
                    <div className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br ${service.gradient} p-1`}>
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <div className={`text-white bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </section>
  );
};

export default ServicesSection;