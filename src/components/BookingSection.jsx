import { useState } from 'react';
import { CheckCircle, X, Loader2, User, Phone, MapPin, Briefcase, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BookingCalendar from './BookingCalendar';
import useFadeIn from '../hooks/useFadeIn';
import { supabase } from '../lib/supabase';

export default function BookingSection() {
  const { t } = useLanguage();
  const ref = useFadeIn();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', interest: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showReferrerPopup, setShowReferrerPopup] = useState(false);
  const [referrerName, setReferrerName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = t.booking.errors.name;
    if (!formData.phone.trim() || formData.phone.length !== 10) errs.phone = t.booking.errors.phone;
    if (!formData.city.trim()) errs.city = t.booking.errors.city;
    if (!selectedDate) errs.date = t.booking.errors.date;
    if (!selectedTime) errs.time = t.booking.errors.time;
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setShowReferrerPopup(true);
  };

  const submitBooking = async (referrer) => {
    setSubmitting(true);
    const bookingDate = selectedDate.toISOString().split('T')[0];
    const { error } = await supabase.from('bookings').insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
      product: formData.interest || null,
      message: formData.message.trim() || null,
      referrer: referrer || null,
      booking_date: bookingDate,
      booking_slot: selectedTime,
    });
    setSubmitting(false);
    if (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again.');
      return;
    }
    setShowReferrerPopup(false);
    setSubmitted(true);
  };

  const handleReferrerSubmit = () => {
    submitBooking(referrerName.trim());
  };

  const handleSkipReferrer = () => {
    submitBooking(null);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <section id="booking" ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-1.5 mb-5">
            <Sparkles size={14} className="text-saffron-600" />
            <span className="text-xs font-medium text-orange-700 uppercase tracking-wider">
              Free Consultation
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.booking.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.booking.subtitle}
          </p>
        </div>

        {submitted ? (
          // Success State
          <div className="max-w-md mx-auto bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle size={32} className="text-white" />
            </div>
            <h3 className="text-gray-900 text-2xl font-bold mb-2">{t.booking.success.title}</h3>
            <p className="text-gray-600 mb-4">
              {t.booking.success.message}
            </p>
            <div className="bg-white rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-500">Your scheduled consultation</p>
              <p className="text-gray-900 font-semibold">
                {formatDate(selectedDate)} {t.booking.success.at} {selectedTime}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              A confirmation SMS will be sent to your mobile number
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Calendar Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
              <BookingCalendar
                selectedDate={selectedDate}
                setSelectedDate={(d) => { setSelectedDate(d); if (errors.date) setErrors((p) => ({ ...p, date: '' })); }}
                selectedTime={selectedTime}
                setSelectedTime={(t) => { setSelectedTime(t); if (errors.time) setErrors((p) => ({ ...p, time: '' })); }}
              />
              {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date}</p>}
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-100">
                <User size={20} className="text-saffron-600" />
                <h3 className="text-gray-900 font-semibold text-lg">Your Information</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="text-gray-700 text-sm font-medium block mb-2">
                    Full Name <span className="text-saffron-600">*</span>
                  </label>
                  <div className={`relative transition-all duration-200 ${focusedField === 'name' ? 'transform scale-[1.01]' : ''}`}>
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 outline-none ${
                        errors.name 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-gray-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="text-gray-700 text-sm font-medium block mb-2">
                    Mobile Number <span className="text-saffron-600">*</span>
                  </label>
                  <div className="flex">
                    <span className="bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl px-3 py-3 text-sm text-gray-600 flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        handleChange('phone', val);
                      }}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      placeholder="98765 43210"
                      className={`flex-1 border rounded-r-xl px-4 py-3 transition-all duration-200 outline-none ${
                        errors.phone 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-gray-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* City Field */}
                <div>
                  <label className="text-gray-700 text-sm font-medium block mb-2">
                    City <span className="text-saffron-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={formData.city}
                      onFocus={() => setFocusedField('city')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleChange('city', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 outline-none ${
                        errors.city 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-gray-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20'
                      }`}
                      placeholder="Enter your city"
                    />
                  </div>
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>

                {/* Interest Field */}
                <div>
                  <label className="text-gray-700 text-sm font-medium block mb-2">
                    I'm interested in
                  </label>
                  <div className="relative">
                    <Briefcase size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={formData.interest}
                      onChange={(e) => handleChange('interest', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20 outline-none transition-all duration-200 bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select a product</option>
                      {t.booking.form.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="text-gray-700 text-sm font-medium block mb-2">
                    Additional Notes (Optional)
                  </label>
                  <div className="relative">
                    <MessageCircle size={18} className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20 outline-none transition-all duration-200 resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-semibold rounded-xl py-4 text-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>{t.booking.form.submit}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <p className="text-gray-400 text-xs text-center">
                  {t.booking.form.note}
                </p>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Referrer Popup - Enhanced */}
      {showReferrerPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowReferrerPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <User size={24} className="text-saffron-600" />
              </div>
              <h3 className="text-gray-900 text-xl font-bold">{t.booking.referrer.title}</h3>
              <p className="text-gray-500 text-sm mt-1">Get a special welcome offer!</p>
            </div>
            
            <input
              type="text"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              placeholder={t.booking.referrer.placeholder}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20 outline-none transition-all duration-200 mb-6"
              autoFocus
            />
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleReferrerSubmit}
                disabled={!referrerName.trim() || submitting}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                  referrerName.trim() && !submitting
                    ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 cursor-pointer shadow-md'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {submitting && <Loader2 size={18} className="animate-spin" />}
                {t.booking.referrer.submit}
              </button>
              <button
                onClick={handleSkipReferrer}
                disabled={submitting}
                className="w-full py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-600 hover:border-saffron-500 hover:text-saffron-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 size={18} className="animate-spin" />}
                {t.booking.referrer.skip}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}