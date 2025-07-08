import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo */}
          <div className={`mb-8 transform transition-all duration-1500 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              WHOOPFLOW
            </h1>
            <p className="text-lg md:text-xl text-gray-300 tracking-wide">
              DIGITAL MARKETING AGENCY
            </p>
          </div>

          {/* Main Value Proposition */}
          <div className={`mb-12 transform transition-all duration-1500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              <span className="text-white">We don't chase </span>
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent font-bold">likes.</span>
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              <span className="text-white">We deliver </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">ROI.</span>
            </h3>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Forget vanity metrics. We're not your typical agency making empty promises. 
              We focus on what matters: <span className="text-blue-400 font-semibold">real results</span>, 
              <span className="text-purple-400 font-semibold"> measurable growth</span>, and 
              <span className="text-indigo-400 font-semibold"> actual revenue</span>.
            </p>
          </div>

          {/* Key Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transform transition-all duration-1500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <TrendingUp className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:text-white transition-colors duration-300" />
              <h4 className="text-2xl font-bold text-white mb-2">3.2x</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Average ROI Increase</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <Users className="w-8 h-8 text-purple-400 mb-4 mx-auto group-hover:text-white transition-colors duration-300" />
              <h4 className="text-2xl font-bold text-white mb-2">250%</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Lead Generation Boost</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <Target className="w-8 h-8 text-indigo-400 mb-4 mx-auto group-hover:text-white transition-colors duration-300" />
              <h4 className="text-2xl font-bold text-white mb-2">90%</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Client Retention Rate</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1500 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={scrollToCalendly}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3 text-lg"
            >
              Schedule Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 text-lg"
            >
              See Our Services
            </button>
          </div>

        </div>
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
    </section>
  );
};

export default HeroSection;