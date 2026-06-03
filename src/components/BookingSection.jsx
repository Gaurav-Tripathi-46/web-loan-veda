import { useState } from 'react';
import { CheckCircle, X, Loader2 } from 'lucide-react';
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
    <section id="booking" ref={ref} className="py-16 px-4 bg-white border-t border-blue-100 opacity-0 transition-opacity duration-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-2">{t.booking.title}</h2>
        <p className="text-gray-500 text-center mb-10">{t.booking.subtitle}</p>

        {submitted ? (
          <div className="max-w-md mx-auto bg-saffron-50 border border-saffron-200 rounded-2xl p-8 text-center">
            <CheckCircle size={48} className="text-saffron-500 mx-auto mb-4" />
            <h3 className="text-blue-500 text-2xl font-bold mb-2">{t.booking.success.title}</h3>
            <p className="text-gray-600">
              {t.booking.success.message} {formatDate(selectedDate)} {t.booking.success.at} {selectedTime}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
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
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-blue-500 text-sm font-medium block mb-1">{t.booking.form.name}*</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-blue-500 text-sm font-medium block mb-1">{t.booking.form.phone}*</label>
                  <div className="flex">
                    <span className="bg-blue-500 text-white rounded-l-xl px-3 py-3 text-sm flex items-center">+91</span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        handleChange('phone', val);
                      }}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      placeholder="10 digit number"
                      className="border border-blue-200 border-l-0 rounded-r-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* City */}
                <div>
                  <label className="text-blue-500 text-sm font-medium block mb-1">{t.booking.form.city}*</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                {/* Interest */}
                <div>
                  <label className="text-blue-500 text-sm font-medium block mb-1">{t.booking.form.interest}</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => handleChange('interest', e.target.value)}
                    className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition bg-white"
                  >
                    <option value="">{t.booking.form.selectOption}</option>
                    {t.booking.form.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-blue-500 text-sm font-medium block mb-1">{t.booking.form.message}</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-xl py-4 w-full text-lg transition-colors"
                >
                  {t.booking.form.submit}
                </button>
                <p className="text-gray-500 text-sm text-center">{t.booking.form.note}</p>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Referrer Popup */}
      {showReferrerPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowReferrerPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <h3 className="text-blue-500 text-xl font-bold mb-4">{t.booking.referrer.title}</h3>
            <input
              type="text"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              placeholder={t.booking.referrer.placeholder}
              className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition mb-6"
            />
            <div className="flex flex-col gap-3">
              <button
                onClick={handleReferrerSubmit}
                disabled={!referrerName.trim() || submitting}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-colors flex items-center justify-center gap-2 ${
                  referrerName.trim() && !submitting
                    ? 'bg-saffron-500 hover:bg-saffron-600 cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {submitting && <Loader2 size={18} className="animate-spin" />}
                {t.booking.referrer.submit}
              </button>
              <button
                onClick={handleSkipReferrer}
                disabled={submitting}
                className="w-full py-3 rounded-xl font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
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
