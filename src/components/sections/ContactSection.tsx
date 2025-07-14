import { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Check, AlertCircle, X } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    monthlyRevenue: '',
    currentChallenges: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create mailto link for now (in production, you'd use a backend service)
      const subject = `New Business Inquiry from ${formData.companyName}`;
      const body = `
Company: ${formData.companyName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website}
Industry: ${formData.industry}
Monthly Revenue: ${formData.monthlyRevenue}
Current Challenges: ${formData.currentChallenges}

Message:
${formData.message}
      `;
      
      const mailtoLink = `mailto:contacto@whoopflow.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        industry: '',
        monthlyRevenue: '',
        currentChallenges: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact-section"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Tell us about your business and challenges. We'll create a customized strategy 
            to drive real results and maximize your ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Industry</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="realestate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* <div>
                <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-300 mb-2">
                  Monthly Revenue Range
                </label>
                <select
                  id="monthlyRevenue"
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Range</option>
                  <option value="0-10k">$0 - $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div> */}

              <div>
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-300 mb-2">
                  Current Marketing Challenges
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="What marketing challenges are you facing?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us more about your goals and expectations..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                  <Check className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>There was an error sending your message. Please try again.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full"> */}
              {/* <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">contacto@whoopflow.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white">Available via scheduled call</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Remote • Worldwide</p>
                  </div>
                </div>
              </div> */}

              <div className="mt-12 mb-8 p-8 bg-gradient-to-br from-blue-900/60 via-blue-800/70 to-purple-900/60 rounded-2xl border-2 border-blue-400/40 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="w-7 h-7 text-green-400" />
                  <h4 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">Why Choose WHOOPFLOW?</h4>
                </div>
                <ul className="space-y-3 text-gray-100 text-lg pl-10">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Proven ROI optimization strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Data-driven decision making</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Transparent reporting & analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Dedicated account management</span>
                  </li>
                </ul>
              </div>
              {/* What We Don't Do - Improved Section */}
              <div className="mt-8 relative z-20 p-8 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border-t-2 border-red-500/30 rounded-xl shadow-lg text-left">
                <div className="flex items-center gap-3 mb-2">
                  <X className="w-7 h-7 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">What We Don't Do</h3>
                </div>
                <p className="text-base text-gray-400 mb-4 pl-10">
                  We focus on what truly drives ROI. These are areas that <span className="text-red-400 font-semibold">we do not offer</span> as core services:
                </p>
                <ul className="space-y-3 pl-10">
                  {[
                    "Content Creation (as a standalone service)",
                    "Social Media Management (posting, community management)"
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-200">
                      <X className="w-5 h-5 text-red-400 shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pl-10">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-white">Note:</span> We do create photos and videos for campaigns and web development as part of our projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default ContactSection;