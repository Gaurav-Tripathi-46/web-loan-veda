import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageSquare, CheckCircle } from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';

const icons = [Phone, MessageSquare, CheckCircle];

export default function HowItWorks() {
  const { t } = useLanguage();
  const ref = useFadeIn();

  return (
    <section id="how-it-works" ref={ref} className="py-16 px-4 bg-white border-t border-b border-blue-100 opacity-0 transition-opacity duration-700">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">{t.howItWorks.title}</h2>
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-saffron-300" />

          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex flex-col items-center text-center relative z-10 flex-1">
                <div className="w-12 h-12 rounded-full bg-saffron-500 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{i + 1}</span>
                </div>
                <Icon size={28} className="text-blue-500 mb-3" />
                <h3 className="text-blue-500 font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
