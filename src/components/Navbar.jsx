import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'about', label: t.nav.about },
    { id: 'booking', label: t.nav.bookCall },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  const handleLinkClick = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="h-16 lg:h-20" />

      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm border-b border-gray-100'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-100/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo with Circular Border on Hover */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 cursor-pointer shrink-0"
            >
              {/* Circular Logo with Orange Hover Border */}
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-transparent hover:border-saffron-500 hover:shadow-md transition-all duration-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/logo.png"
                    alt="Loan Veda"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Text Logo */}
              <div className="hidden sm:block">
                <span className="font-bold text-lg lg:text-xl tracking-tight text-gray-900">
                  Loan Veda
                </span>
                <p className="text-xs leading-tight text-gray-500">
                  Apno Jaisi Guidance
                </p>
              </div>
            </a>

            {/* Desktop Navigation with Orange Hover Effects */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    activeSection === link.id
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-600 hover:text-saffron-600 hover:bg-orange-50'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-blue-900" />
                  )}
                  {activeSection !== link.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-saffron-500 group-hover:w-6 transition-all duration-300" />
                  )}
                </a>
              ))}
            </div>

            {/* Right Side Actions with Orange Hover Effects */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Toggle */}
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-saffron-600 hover:bg-orange-50 transition-all duration-200"
                >
                  <Globe size={16} />
                  <span>{lang === 'en' ? 'EN' : 'हि'}</span>
                  <ChevronDown size={14} className="opacity-60" />
                </button>
              </div>

              {/* CTA Button - Orange on Hover */}
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('booking');
                }}
                className="rounded-lg px-5 py-2 text-sm font-semibold bg-blue-900 text-white hover:bg-saffron-500 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {t.nav.bookCall}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-saffron-600 hover:bg-orange-50 transition-all duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <>
          <div
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 md:hidden ${
              mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setMobileOpen(false)}
          />

          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
              mobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ zIndex: 10000 }}
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-transparent flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/logo.png"
                      alt="Loan Veda"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">Loan Veda</span>
                    <p className="text-xs text-gray-500">Apno Jaisi Guidance</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-orange-50 hover:text-saffron-600 transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Drawer Navigation with Orange Hover */}
              <div className="flex-1 py-6 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={`block py-3 text-base font-medium transition-colors rounded-lg px-3 ${
                      activeSection === link.id
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-gray-700 hover:text-saffron-600 hover:bg-orange-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Language</span>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:text-saffron-600 hover:bg-orange-50 transition-colors"
                  >
                    <Globe size={14} />
                    <span>{lang === 'en' ? 'English' : 'हिंदी'}</span>
                  </button>
                </div>
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('booking');
                  }}
                  className="block w-full text-center bg-blue-900 text-white font-semibold rounded-lg px-5 py-3 text-sm hover:bg-saffron-500 hover:text-gray-900 transition-colors"
                >
                  {t.nav.bookCall}
                </a>
              </div>
            </div>
          </div>
        </>
      </nav>
    </>
  );
}