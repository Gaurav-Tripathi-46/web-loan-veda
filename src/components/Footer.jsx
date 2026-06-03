import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, Clock, Globe, MessageCircle, Share2 } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.bookCall, href: '#booking' },
  ];

  const productLinks = [
    'Home Loan', 'Personal Loan', 'Balance Transfer',
    'Vehicle Loan', 'Education Loan', 'Business Loan',
  ];

  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* PLACEHOLDER — replace with real logo */}
            <div className="w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center">
              <span className="text-blue-500 font-bold text-lg">LV</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg">Loan Veda</span>
              {/* PLACEHOLDER — replace with real tagline */}
              <p className="text-saffron-200 text-xs">{t.footer.tagline}</p>
            </div>
          </div>
          {/* PLACEHOLDER — replace with real content */}
          <p className="text-blue-200 text-sm leading-relaxed mb-4">{t.footer.about}</p>
          <div className="flex gap-3">
            <a href="#" className="text-saffron-500 hover:text-saffron-400 transition-colors" aria-label="LinkedIn"><Globe size={20} /></a>
            <a href="#" className="text-saffron-500 hover:text-saffron-400 transition-colors"><MessageCircle size={20} /></a>
            <a href="#" className="text-saffron-500 hover:text-saffron-400 transition-colors" aria-label="Instagram"><Share2 size={20} /></a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-saffron-500 text-sm uppercase tracking-wider font-semibold mb-4">{t.footer.quickLinks}</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-blue-200 text-sm hover:text-saffron-400 transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Financial Products */}
        <div>
          <h4 className="text-saffron-500 text-sm uppercase tracking-wider font-semibold mb-4">{t.footer.financialProducts}</h4>
          <ul className="space-y-2">
            {productLinks.map((link, i) => (
              <li key={i}>
                <a href="#products" className="text-blue-200 text-sm hover:text-saffron-400 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="text-saffron-500 text-sm uppercase tracking-wider font-semibold mb-4">{t.footer.contact}</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-blue-200 text-sm">
              <Phone size={16} className="text-saffron-500" />
              {/* PLACEHOLDER — replace with real content */}
              {t.footer.phone}
            </li>
            <li className="flex items-center gap-2 text-blue-200 text-sm">
              <Mail size={16} className="text-saffron-500" />
              {/* PLACEHOLDER — replace with real content */}
              {t.footer.email}
            </li>
            <li className="flex items-center gap-2 text-blue-200 text-sm">
              <Clock size={16} className="text-saffron-500" />
              {t.footer.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-blue-700 mt-8 pt-4">
        <p className="text-blue-300 text-xs text-center">
          {t.footer.copyright} | {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
