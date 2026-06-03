import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'about', label: t.nav.about },
    { id: 'booking', label: t.nav.bookCall },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  return (
    <nav className="sticky top-0 z-50 bg-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* PLACEHOLDER — replace with real logo */}
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
              <span className="text-saffron-500 font-bold text-lg">LV</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg">Loan Veda</span>
              {/* PLACEHOLDER — replace with real tagline */}
              <p className="text-saffron-200 text-xs italic -mt-1">Your Financial Guide</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-white text-sm font-medium pb-1 transition-colors hover:text-saffron-200 ${
                  activeSection === link.id ? 'border-b-2 border-saffron-500' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center rounded-full overflow-hidden text-sm font-semibold"
            >
              <span
                className={`px-3 py-1 transition-colors ${
                  lang === 'en' ? 'bg-saffron-500 text-blue-500' : 'bg-blue-700 text-white'
                }`}
              >
                EN
              </span>
              <span
                className={`px-3 py-1 transition-colors ${
                  lang === 'hi' ? 'bg-saffron-500 text-blue-500' : 'bg-blue-700 text-white'
                }`}
              >
                हि
              </span>
            </button>
            {/* CTA */}
            <a
              href="#booking"
              className="bg-saffron-500 text-blue-500 font-semibold rounded-full px-5 py-2 text-sm hover:bg-saffron-600 transition-colors"
            >
              {t.nav.bookCall}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-blue-500 border-t border-blue-600 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-white text-sm font-medium hover:text-saffron-200 ${
                activeSection === link.id ? 'text-saffron-500' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center rounded-full overflow-hidden text-sm font-semibold"
            >
              <span className={`px-3 py-1 ${lang === 'en' ? 'bg-saffron-500 text-blue-500' : 'bg-blue-700 text-white'}`}>EN</span>
              <span className={`px-3 py-1 ${lang === 'hi' ? 'bg-saffron-500 text-blue-500' : 'bg-blue-700 text-white'}`}>हि</span>
            </button>
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="bg-saffron-500 text-blue-500 font-semibold rounded-full px-5 py-2 text-sm"
            >
              {t.nav.bookCall}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
