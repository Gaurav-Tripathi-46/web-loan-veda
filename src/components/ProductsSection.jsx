import { useLanguage } from '../context/LanguageContext';
import { Home, User, ArrowRightLeft, Plus, Car, GraduationCap, Briefcase, Building, ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const icons = [Home, User, ArrowRightLeft, Plus, Car, GraduationCap, Briefcase, Building];

export default function ProductsSection() {
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

  // Product categories with enhanced data
  const productCategories = [
    { label: "Government Employees", badge: "Special Offer" },
    { label: "Working Professionals", badge: "Quick Approval" },
    { label: "Balance Transfer", badge: "Save ₹50k+" },
  ];

  return (
    <section 
      id="products" 
      ref={sectionRef} 
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Professional */}
        <div className="text-center mb-14">
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-1.5 mb-5">
            <Shield size={14} className="text-blue-700" />
            <span className="text-xs font-medium text-blue-700 uppercase tracking-wider">
              Trusted by 10,000+ Customers
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.products.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Compare & choose from India's best financial products tailored for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.products.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const category = productCategories[i % productCategories.length];
            
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Badge for special products */}
                {i < 3 && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {category.badge}
                    </div>
                  </div>
                )}

                {/* Icon with gradient background */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-semibold text-xl mb-2 tracking-tight">
                  {item.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Key feature highlight */}
                <div className="flex items-center gap-2 mb-5 text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <Clock size={12} />
                  <span>Approval in 24hrs</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <TrendingUp size={12} />
                  <span>Starting @ 8.5% p.a.</span>
                </div>

                {/* Learn More Link */}
                <a 
                  href="#booking" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors group-hover:gap-3"
                >
                  <span>{t.products.learnMore}</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-700">✓</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Trusted by 10,000+ professionals</p>
                <p className="text-xs text-gray-500">4.98 ★ (2.1k+ verified reviews)</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">₹0</p>
                <p className="text-xs text-gray-500">Processing Fee</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">8.5%</p>
                <p className="text-xs text-gray-500">Interest Rate</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">24hrs</p>
                <p className="text-xs text-gray-500">Disbursal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}