import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageSquare, CheckCircle, ArrowRight, Clock, Shield, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const icons = [Phone, MessageSquare, CheckCircle];

export default function HowItWorks() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Additional stats for bottom section
  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: Users },
    { value: "24hrs", label: "Average Disbursal", icon: Clock },
    { value: "100%", label: "Free Consultation", icon: Shield },
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef} 
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          {/* Orange accent badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
            <span className="text-xs font-medium text-orange-700 uppercase tracking-wider">
              Simple 3-Step Process
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Get your loan approved in 3 simple steps — no paperwork, no branch visits
          </p>
        </div>

        {/* Steps Container - Fixed for mobile */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Connecting Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%]">
            <div className="relative h-[2px] bg-gradient-to-r from-transparent via-saffron-500/60 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-saffron-500 animate-pulse" />
          </div>

          {/* Steps - Vertical on mobile, horizontal on desktop */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-12 lg:gap-6">
            
            {t.howItWorks.steps.map((step, i) => {
              const Icon = icons[i];
              const stepColors = [
                { bg: "from-orange-500 to-saffron-600", light: "bg-orange-50", border: "border-orange-100" },
                { bg: "from-blue-600 to-blue-700", light: "bg-blue-50", border: "border-blue-100" },
                { bg: "from-emerald-500 to-green-600", light: "bg-emerald-50", border: "border-emerald-100" },
              ];
              const colors = stepColors[i];
              
              return (
                <div 
                  key={i} 
                  className={`w-full lg:flex-1 group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Step Card - Full width on mobile */}
                  <div className="relative bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto lg:max-w-none">
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-sm">{i + 1}</span>
                      </div>
                    </div>

                    {/* Icon Container */}
                    <div className="mt-4 mb-4 flex justify-center">
                      <div className={`w-16 h-16 rounded-2xl ${colors.light} flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}>
                        <Icon size={32} className={`${
                          i === 0 ? 'text-saffron-600' : i === 1 ? 'text-blue-600' : 'text-emerald-600'
                        }`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-gray-900 font-semibold text-xl mb-3 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Small accent indicator */}
                    <div className={`mt-5 w-12 h-0.5 mx-auto rounded-full ${
                      i === 0 ? 'bg-saffron-500' : 'bg-gray-200'
                    } group-hover:w-16 transition-all duration-300`} />
                  </div>

                  {/* Arrow connector - Hidden on mobile, shown between desktop cards */}
                  {i < t.howItWorks.steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-saffron-400 transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  )}
                  
                  {/* Mobile Arrow - Downward arrow between steps on mobile */}
                  {i < t.howItWorks.steps.length - 1 && (
                    <div className="flex lg:hidden justify-center -my-2">
                      <ArrowRight size={20} className="text-gray-300 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
            {/* Orange accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-saffron-500/20 to-transparent rounded-bl-full" />
            
            <div className="relative p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-3">
                Ready to get started?
              </h3>
              <p className="text-blue-100 mb-6 max-w-md mx-auto">
                Get free expert guidance from our loan specialists
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book a Free Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Stats Row - Responsive */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <StatIcon size={18} className="text-saffron-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-gray-200 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}