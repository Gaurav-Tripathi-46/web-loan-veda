import { useLanguage } from '../context/LanguageContext';
import { Home, User, ArrowRightLeft, Plus, Car, GraduationCap, Briefcase, Building } from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';

const icons = [Home, User, ArrowRightLeft, Plus, Car, GraduationCap, Briefcase, Building];

export default function ProductsSection() {
  const { t } = useLanguage();
  const ref = useFadeIn();

  return (
    <section id="products" ref={ref} className="py-16 px-4 bg-white opacity-0 transition-opacity duration-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">{t.products.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-l-4 hover:border-l-saffron-500 group"
              >
                <Icon size={32} className="text-saffron-500 mb-3" />
                <h3 className="text-blue-500 font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.desc}</p>
                <a href="#booking" className="text-saffron-600 text-sm font-medium hover:text-saffron-700 transition-colors">
                  {t.products.learnMore}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
