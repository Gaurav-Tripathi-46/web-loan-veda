import { useLanguage } from '../context/LanguageContext';
import { Users, Scale, Clock, Shield, TrendingUp, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const featureIcons = [Users, Scale, Shield, TrendingUp, Clock, Heart];
const featureColors = [
  { bg: 'bg-blue-50', icon: 'text-blue-500' },
  { bg: 'bg-orange-50', icon: 'text-orange-500' },
  { bg: 'bg-green-50', icon: 'text-green-500' },
  { bg: 'bg-purple-50', icon: 'text-purple-500' },
  { bg: 'bg-pink-50', icon: 'text-pink-500' },
  { bg: 'bg-indigo-50', icon: 'text-indigo-500' },
];

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = t.whyChoose.cards;
  const advisors = t.whyChoose.advisors;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Why Choose Loan Veda
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {t.whyChoose.title}
          </h2>
        </div>

        {/* 6-Feature Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {cards.map((card, i) => {
            const Icon = featureIcons[i] || Users;
            const color = featureColors[i % featureColors.length];
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${color.bg}`}>
                  <Icon size={26} className={color.icon} />
                </div>
                <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Meet Your Advisors Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left — Label + Heading + CTA */}
            <div className="lg:w-56 flex-shrink-0 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
                {advisors.sectionLabel}
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                {advisors.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {advisors.subtitle}
              </p>
              <a
                href="#booking"
                className="inline-flex items-center justify-center bg-gray-900 text-white text-sm font-semibold rounded-xl px-5 py-3 hover:bg-gray-800 transition-colors w-fit"
              >
                {advisors.cta}
              </a>
            </div>

            {/* Right — Advisor Cards */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              {advisors.list.map((advisor, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(i + 6) * 80}ms` }}
                >
                  {/* Avatar placeholder — replace inner div with <img src={...} className="w-full h-full object-cover" /> */}
                  <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <Users size={40} className="text-gray-400" />
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-gray-900 text-sm leading-tight">
                      {advisor.name}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 mb-2">{advisor.role}</p>
                    <div className="flex items-center gap-1 mb-1">
                      <Clock size={10} className="text-gray-400 flex-shrink-0" />
                      <span className="text-gray-500 text-xs">{advisor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={10} className="text-blue-500 flex-shrink-0" />
                      <span className="text-gray-500 text-xs">{advisor.assisted}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}