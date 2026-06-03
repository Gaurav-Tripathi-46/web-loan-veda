import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HeroCarousel from './HeroCarousel';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-white py-16 px-4 border-b border-blue-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <span className="inline-block bg-saffron-500 text-white rounded-full px-4 py-1 text-sm font-semibold mb-6">
            {t.hero.badge}
          </span>
          <h1 className="text-blue-500 text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {t.hero.title}
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#products"
              className="bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-full px-8 py-3 transition-colors"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#booking"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-8 py-3 font-semibold transition-colors"
            >
              {t.hero.cta2}
            </a>
          </div>
          <div className="flex flex-wrap gap-6">
            {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-saffron-500" />
                <span className="text-blue-500 text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Carousel */}
        <div>
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
