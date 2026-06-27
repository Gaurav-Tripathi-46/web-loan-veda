import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, Clock, Globe, MessageCircle, Share2, ArrowRight, Shield, Lock, MapPin, X } from 'lucide-react';

export default function Footer() {
  const { t, lang } = useLanguage();
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  // Debug: Log available translations
  useEffect(() => {
    console.log('🔍 Footer Debug:');
    console.log('  Current Language:', lang);
    console.log('  Terms Content Available:', !!t.footer?.termsAndConditions?.content);
    console.log('  Privacy Content Available:', !!t.footer?.privacyPolicy?.content);
    console.log('  Full Footer t Object:', t.footer);
  }, [t, lang]);

  const quickLinks = [
    { label: t.nav?.home || 'Home', href: '#home' },
    { label: t.nav?.products || 'Financial Products', href: '#products' },
    { label: t.nav?.howItWorks || 'How It Works', href: '#how-it-works' },
    { label: t.nav?.about || 'About Us', href: '#about' },
    { label: t.nav?.bookCall || 'Book a Call', href: '#booking' },
  ];

  const legalLinks = [
    { label: t.footer?.legal?.terms || 'Terms & Conditions', action: () => setShowTermsPopup(true) },
    { label: t.footer?.legal?.privacy || 'Privacy Policy', action: () => setShowPrivacyPopup(true) },
    { label: t.footer?.legal?.disclaimer || 'Disclaimer', action: () => {} },
    { label: t.footer?.legal?.complaints || 'Complaints', action: () => {} },
  ];

  // Prevent body scroll when popup is open
  const handlePopupOpen = (setter) => {
    document.body.style.overflow = 'hidden';
    setter(true);
  };

  const handlePopupClose = (setter) => {
    document.body.style.overflow = 'unset';
    setter(false);
  };

  // Format content with line breaks and styling
  const formatContent = (content) => {
    if (!content) {
      return (
        <div className="text-gray-500 text-sm py-8 text-center">
          <p>Content not available in {lang === 'en' ? 'English' : 'Hindi'}.</p>
          <p className="text-xs mt-2">Please update the translations file.</p>
        </div>
      );
    }

    const lines = content.split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Empty line
      if (trimmed === '') {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside text-gray-600 text-sm mb-4 ml-2 space-y-1">
              {listItems.map((item, idx) => (
                <li key={idx} className="text-gray-600 text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(<br key={`br-${index}`} />);
        return;
      }

      // Check if it's a numbered heading (e.g., "1. Nature of the Platform")
      if (trimmed.match(/^\d+\./)) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside text-gray-600 text-sm mb-4 ml-2 space-y-1">
              {listItems.map((item, idx) => (
                <li key={idx} className="text-gray-600 text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h4 key={`heading-${index}`} className="text-gray-800 font-semibold text-base mb-2 mt-4">
            {trimmed}
          </h4>
        );
        return;
      }

      // Check if it's a list item starting with "-"
      if (trimmed.startsWith('-')) {
        inList = true;
        listItems.push(trimmed.substring(1).trim());
        return;
      }

      // Check if it's a list item starting with "•" or "*"
      if (trimmed.startsWith('•') || trimmed.startsWith('*')) {
        inList = true;
        listItems.push(trimmed.substring(1).trim());
        return;
      }

      // Regular paragraph
      if (inList) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside text-gray-600 text-sm mb-4 ml-2 space-y-1">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-gray-600 text-sm leading-relaxed">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }

      // Check if it's a bold/important text (contains "NOT" or "DO NOT")
      if (trimmed.includes('NOT') || trimmed.includes('DO NOT')) {
        elements.push(
          <p key={`p-${index}`} className="text-gray-700 text-sm mb-2 leading-relaxed font-medium">
            {trimmed}
          </p>
        );
      } else {
        elements.push(
          <p key={`p-${index}`} className="text-gray-600 text-sm mb-2 leading-relaxed">
            {trimmed}
          </p>
        );
      }
    });

    // Close any remaining list
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside text-gray-600 text-sm mb-4 ml-2 space-y-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-gray-600 text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  // Get content with fallback
  const getTermsContent = () => {
    return t.footer?.termsAndConditions?.content || null;
  };

  const getPrivacyContent = () => {
    return t.footer?.privacyPolicy?.content || null;
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          
          {/* Col 1: Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Circular Logo in Footer */}
              <div className="w-12 h-12 rounded-full border-2 border-transparent hover:border-saffron-500 transition-all duration-300 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo.png"
                  alt="Loan Veda Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">Loan Veda</span>
                <p className="text-gray-400 text-xs mt-0.5">{t.footer?.tagline || 'Apno jaisi guidance'}</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t.footer?.about || 'Helping government employees and working professionals make smarter financial decisions with unbiased guidance.'}
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Shield size={14} className="text-saffron-500" />
              <span className="text-xs text-gray-400">RBI Compliant</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <Lock size={14} className="text-saffron-500" />
              <span className="text-xs text-gray-400">Data Secure</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-all duration-200 group">
                <Globe size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-all duration-200 group">
                <MessageCircle size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-all duration-200 group">
                <Share2 size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-saffron-500 text-sm font-semibold uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-saffron-500 transition-colors duration-200"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal Links */}
          <div>
            <h4 className="text-saffron-500 text-sm font-semibold uppercase tracking-wider mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handlePopupOpen(setShowTermsPopup)}
                  className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-saffron-500 transition-colors duration-200 cursor-pointer"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t.footer?.legal?.terms || 'Terms & Conditions'}
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePopupOpen(setShowPrivacyPopup)}
                  className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-saffron-500 transition-colors duration-200 cursor-pointer"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t.footer?.legal?.privacy || 'Privacy Policy'}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-saffron-500 text-sm font-semibold uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-saffron-500 mt-0.5 flex-shrink-0" />
                <span>{t.footer?.phone || '+91 7619888990'}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-saffron-500 mt-0.5 flex-shrink-0" />
                <span className="break-all">{t.footer?.email || 'support@loanveda.in'}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock size={16} className="text-saffron-500 mt-0.5 flex-shrink-0" />
                <span>{t.footer?.hours || 'Mon–Sat, 10AM–6PM'}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-saffron-500 mt-0.5 flex-shrink-0" />
                <span>Lucknow, India (Virtual Office)</span>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="#booking"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-saffron-500 hover:bg-saffron-600 text-gray-900 font-semibold text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Free Consultation
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              {t.footer?.copyright || '© 2024 Loan Veda. All rights reserved.'}
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link, i) => (
                <button 
                  key={i} 
                  onClick={link.action}
                  className="text-gray-500 text-xs hover:text-saffron-500 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <p className="text-gray-600 text-[10px] text-center mt-4 leading-relaxed">
            {t.footer?.disclaimer || 'Disclaimer: We provide financial awareness and guidance only, not regulated financial advice.'}
          </p>
        </div>
      </div>

      {/* Terms & Conditions Popup */}
      {showTermsPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden relative">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h3 className="text-gray-900 text-xl font-bold">
                {t.footer?.termsAndConditions?.title || 'Terms and Conditions'}
              </h3>
              <button
                onClick={() => handlePopupClose(setShowTermsPopup)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center"
                aria-label="Close popup"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              <div className="prose prose-sm max-w-none">
                {getTermsContent() ? (
                  formatContent(getTermsContent())
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-sm">
                      <p className="font-medium text-gray-600">Content not available</p>
                      <p className="text-xs mt-2">
                        Please add <code className="bg-gray-100 px-2 py-1 rounded text-xs">termsAndConditions.content</code> to your translations file.
                      </p>
                      <p className="text-xs mt-1 text-gray-400">
                        Current language: {lang === 'en' ? 'English' : 'Hindi'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Popup */}
      {showPrivacyPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden relative">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h3 className="text-gray-900 text-xl font-bold">
                {t.footer?.privacyPolicy?.title || 'Privacy Policy'}
              </h3>
              <button
                onClick={() => handlePopupClose(setShowPrivacyPopup)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center"
                aria-label="Close popup"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              <div className="prose prose-sm max-w-none">
                {getPrivacyContent() ? (
                  formatContent(getPrivacyContent())
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-sm">
                      <p className="font-medium text-gray-600">Content not available</p>
                      <p className="text-xs mt-2">
                        Please add <code className="bg-gray-100 px-2 py-1 rounded text-xs">privacyPolicy.content</code> to your translations file.
                      </p>
                      <p className="text-xs mt-1 text-gray-400">
                        Current language: {lang === 'en' ? 'English' : 'Hindi'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}