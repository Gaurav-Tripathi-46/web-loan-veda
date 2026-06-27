import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageSquare, Building2, Target, UserCheck, BadgeCheck, ArrowRight, Clock, Shield, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const icons = [Phone, MessageSquare, Building2, Target, UserCheck, BadgeCheck];

const stepColors = [
  { numBg: 'bg-orange-500',   iconBg: 'bg-orange-50',   iconColor: 'text-orange-500'  },
  { numBg: 'bg-blue-900',     iconBg: 'bg-blue-50',     iconColor: 'text-blue-700'    },
  { numBg: 'bg-emerald-500',  iconBg: 'bg-emerald-50',  iconColor: 'text-emerald-600' },
  { numBg: 'bg-purple-600',   iconBg: 'bg-purple-50',   iconColor: 'text-purple-600'  },
  { numBg: 'bg-orange-500',   iconBg: 'bg-orange-50',   iconColor: 'text-orange-500'  },
  { numBg: 'bg-blue-900',     iconBg: 'bg-blue-50',     iconColor: 'text-blue-700'    },
];

const defaultSteps = [
  { title: 'Book Free Consultation', desc: 'Choose a convenient 30-min time slot' },
  { title: 'Financial Profile Analysis', desc: 'We analyse your income, CIBIL, existing loans & eligibility' },
  { title: 'Compare Multiple Banks', desc: 'We compare top banks to find the best offers for you' },
  { title: 'Best Loan Strategy', desc: 'Get the best interest rate, terms & EMI structure' },
  { title: 'Dedicated Advisor Assigned', desc: 'Your personal advisor till your loan closure & beyond' },
  { title: 'Support Till Loan Closure', desc: 'End-to-end support until your loan is successfully closed' },
];

const stats = [
  { value: '10,000+', label: 'Happy Customers', icon: Users },
  { value: '24hrs',   label: 'Average Disbursal', icon: Clock },
  { value: '100%',    label: 'Free Consultation', icon: Shield },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Use translation steps if 6 exist, otherwise fall back to defaults
  const steps = (t.howItWorks?.steps?.length >= 6)
    ? t.howItWorks.steps
    : defaultSteps;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Our Simple 6-Step Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.howItWorks?.title || 'How Loan Veda Helps You'}
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Get your loan approved with complete support — from start to finish
          </p>
        </div>

        {/* Steps Grid */}
        {/* 
          Layout per card (desktop):
            [number badge]          ← top, no line here
            [card with icon         ← arrow sits at vertical center of icon circle
             → arrow →
             title, desc]
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.slice(0, 6).map((step, i) => {
            const Icon = icons[i];
            const color = stepColors[i];
            return (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step number badge */}
                <div className={`w-9 h-9 rounded-full ${color.numBg} flex items-center justify-center mb-3 shadow-md z-10`}>
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>

                {/* Card — position:relative so the arrow can be absolutely placed at icon mid */}
                <div className="relative bg-white border border-gray-100 rounded-2xl p-5 w-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">

                  {/* Icon — w-14 h-14, so center is at p-5(20px) + 28px = 48px from card top */}
                  <div className={`w-14 h-14 rounded-full ${color.iconBg} flex items-center justify-center mb-4`}>
                    <Icon size={26} className={color.iconColor} />
                  </div>

                  <h3 className="text-gray-900 font-bold text-sm leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Arrow — positioned at vertical center of the icon (top: 20px padding + 28px = 48px) */}
                  {i < 5 && (
                    <div
                      className="hidden lg:flex absolute -right-4 items-center justify-center text-gray-300 z-20"
                      style={{ top: '48px', transform: 'translateY(-50%)' }}
                    >
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-bl-full" />
            <div className="relative p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-blue-200 mb-6 text-sm">Get free expert guidance from our loan specialists</p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book a Free Call
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <StatIcon size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
                {i < stats.length - 1 && <div className="hidden md:block w-px h-8 bg-gray-200 ml-2" />}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}