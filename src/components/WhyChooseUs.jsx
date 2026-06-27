import { useLanguage } from '../context/LanguageContext';
import { Users, Scale, Clock, Shield, Award, Star, TrendingUp, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const icons = [Users, Scale, Clock, Shield];

export default function WhyChooseUs() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Trust badges data
  const trustBadges = [
    { label: "RBI Registered", icon: Shield },
    { label: "10+ Bank Partners", icon: TrendingUp },
    { label: "4.98 ★ Rating", icon: Star },
    { label: "0% Hidden Fees", icon: CheckCircle },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          {/* Orange accent badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-1.5 mb-5">
            <Award size={14} className="text-saffron-600" />
            <span className="text-xs font-medium text-orange-700 uppercase tracking-wider">
              Why Borrowers Trust Us
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.whyChoose.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We've helped 10,000+ professionals find the right loan with complete transparency
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {t.whyChoose.cards.map((card, i) => {
            const Icon = icons[i];
            const cardColors = [
              { bg: "from-blue-500 to-blue-600", light: "bg-blue-50", iconColor: "text-blue-600", border: "hover:border-blue-200" },
              { bg: "from-saffron-500 to-orange-600", light: "bg-orange-50", iconColor: "text-saffron-600", border: "hover:border-orange-200" },
              { bg: "from-emerald-500 to-green-600", light: "bg-emerald-50", iconColor: "text-emerald-600", border: "hover:border-emerald-200" },
              { bg: "from-purple-500 to-purple-600", light: "bg-purple-50", iconColor: "text-purple-600", border: "hover:border-purple-200" },
            ];
            const colors = cardColors[i % cardColors.length];
            
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-xl border border-gray-100 p-6 lg:p-8 transition-all duration-300 hover:shadow-lg ${colors.border} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon with gradient background */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${colors.light} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm`}>
                    <Icon size={28} className={colors.iconColor} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold text-xl mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                    
                    {/* Orange accent line on hover */}
                    <div className={`mt-4 w-12 h-0.5 rounded-full transition-all duration-300 group-hover:w-20 ${
                      i === 1 ? 'bg-saffron-500' : 'bg-gray-200 group-hover:bg-saffron-500'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {trustBadges.map((badge, i) => {
            const BadgeIcon = badge.icon;
            return (
              <div 
                key={i}
                className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-2">
                  <BadgeIcon size={18} className="text-saffron-600" />
                </div>
                <p className="text-gray-900 font-semibold text-sm">{badge.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonial / Trust Banner */}
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          {/* Orange accent elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-saffron-500/10 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-saffron-500/5 to-transparent rounded-tl-full" />
          
          <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Quote */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Users size={24} className="text-saffron-400" />
              </div>
              <div>
                <p className="text-white font-medium text-lg leading-relaxed">
                  "Loan Veda helped me save ₹2.4 lakhs on my home loan"
                </p>
                <p className="text-blue-200 text-sm mt-1">
                  — Rajesh Sharma, Government Employee
                </p>
              </div>
            </div>
            
            {/* Right side - Rating */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className="fill-saffron-500 text-saffron-500" />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">4.98 ★</p>
                <p className="text-blue-200 text-xs">2,100+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-sm font-medium text-saffron-600 hover:text-saffon-700 transition-colors group"
          >
            <span>Join 10,000+ happy customers</span>
            <TrendingUp size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}