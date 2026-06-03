import { useLanguage } from '../context/LanguageContext';
import { Users, Scale, Clock, Shield } from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';

const icons = [Users, Scale, Clock, Shield];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const ref = useFadeIn();

  return (
    <section id="about" ref={ref} className="py-16 px-4 bg-white opacity-0 transition-opacity duration-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">{t.whyChoose.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.whyChoose.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-blue-100 p-6 transition-all duration-300 hover:shadow-md"
              >
                <Icon size={32} className="text-saffron-500 mb-3" />
                <h3 className="text-blue-500 font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
