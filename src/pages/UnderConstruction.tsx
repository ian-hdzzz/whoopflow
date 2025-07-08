import { useState, useEffect } from 'react';
import { ArrowUp, Globe, Search, Target, TrendingUp } from 'lucide-react';

const UnderConstruction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Meta ADS",
      description: "Strategic campaign management"
    },
    {
      icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
      title: "SEO Optimization",
      description: "Search engine visibility"
    },
    {
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Web Development",
      description: "Professional websites"
    },
    {
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Analytics",
      description: "Data-driven insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8 md:top-16 md:left-16 w-24 h-24 md:w-48 md:h-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-32 h-32 md:w-64 md:h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-72 md:h-72 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation Icon */}
      <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white transform rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-6 md:py-12">
        
        {/* Logo/Brand */}
        <div className={`mb-6 md:mb-12 text-center transform transition-all duration-1500 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-2 md:mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent px-4">
            WHOOPFLOW
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 tracking-wide px-4">
            MARKETING AGENCY
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className={`text-center mb-6 md:mb-12 max-w-xs sm:max-w-xl md:max-w-3xl px-4 transform transition-all duration-1500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-6 leading-tight">
            <span className="text-white">We're </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">Under Construction</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-2 md:mb-3">
            We're working hard to bring you the best digital marketing solutions. 
            Our team is crafting something extraordinary that will transform your business presence.
          </p>
          <p className="text-xs md:text-sm text-gray-400">
            Stay tuned for innovative strategies and exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-12 max-w-sm sm:max-w-3xl lg:max-w-5xl w-full px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${1000 + index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-3 md:p-5 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/30 group h-full">
                <div className="flex justify-center mb-2 md:mb-3 text-blue-400 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xs md:text-base font-semibold mb-1 md:mb-2 text-white">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className={`w-full max-w-xs sm:max-w-sm px-4 transform transition-all duration-1500 delay-1500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="text-center mb-3">
            <p className="text-gray-400 text-xs">Development Progress</p>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 mb-3 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
          </div>
          <p className="text-center text-xs text-gray-500">Coming Soon</p>
        </div>

      </div>

      {/* Floating Elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-1/4 right-8 animate-bounce delay-1000">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
      </div>
      <div className="hidden md:block absolute bottom-1/4 left-8 animate-bounce delay-2000">
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
      </div>
      <div className="hidden md:block absolute top-3/4 right-1/4 animate-bounce delay-1500">
        <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 px-4">
        <div className={`text-center transform transition-all duration-1500 delay-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-500 text-xs">
            © 2024 WHOOPFLOW • Strategic Digital Marketing
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;