import { CheckCircle, ArrowRight, Shield, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HeroCarousel from './HeroCarousel';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative bg-white py-8 px-4 overflow-hidden"
    >
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-saffron-50/20" />
      
      {/* Subtle grid pattern for fintech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* Trust Badge - Fintech Style */}
            <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1.5">
              <Shield size={14} className="text-blue-600" />
              <span className="text-xs font-medium text-blue-700 tracking-wide uppercase">
                {t.hero.badge}
              </span>
            </div>

            {/* Heading - Clean & Bold */}
            <h1 className="text-blue-900 text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
              {t.hero.title}
            </h1>

            {/* Subtitle - Professional */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons - Minimal & Elegant */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg px-6 py-3 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {t.hero.cta1}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-900 text-gray-700 hover:text-blue-900 font-medium rounded-lg px-6 py-3 transition-all duration-200"
              >
                {t.hero.cta2}
              </a>
            </div>

            {/* Trust Indicators - Fintech Style */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-100">
              {[
                { icon: Shield, text: t.hero.trust1 },
                { icon: Clock, text: t.hero.trust2 },
                { icon: TrendingUp, text: t.hero.trust3 }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon size={16} className="text-green-600" />
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Carousel with professional styling */}
          <div className="relative">
            {/* Sophisticated card shadow */}
            <div className="absolute -inset-4 bg-blue-900/5 rounded-2xl blur-xl" />
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <HeroCarousel />
            </div>

            {/* Floating stats card - fintech touch */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100 backdrop-blur-sm hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                  <TrendingUp size={14} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Trust Score</p>
                  <p className="text-sm font-semibold text-gray-900">4.98 ★ (2.1k+ reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}