import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, X, Loader2, Quote, Users, ThumbsUp, Award } from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';
import { supabase } from '../lib/supabase';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const ref = useFadeIn();
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [reviewData, setReviewData] = useState({ name: '', role: '', review: '' });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showReviewPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showReviewPopup]);

  const handleReviewSubmit = async () => {
    setSubmitting(true);
    const { error } = await supabase.from('reviews').insert({
      name: reviewData.name.trim(),
      role: reviewData.role.trim() || null,
      quote: reviewData.review.trim(),
      rating: rating,
    });
    setSubmitting(false);
    if (error) {
      console.error('Review error:', error);
      alert('Something went wrong. Please try again.');
      return;
    }
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewPopup(false);
      setReviewSubmitted(false);
      setReviewData({ name: '', role: '', review: '' });
      setRating(0);
    }, 2000);
  };

  // Stats data
  const stats = [
    { value: "98%", label: "Customer Satisfaction", icon: ThumbsUp },
    { value: "2,100+", label: "Verified Reviews", icon: Users },
    { value: "4.98", label: "Average Rating", icon: Star },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-1.5 mb-5">
            <Award size={14} className="text-saffron-600" />
            <span className="text-xs font-medium text-orange-700 uppercase tracking-wider">
              Real Stories, Real Results
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Trusted by thousands of government employees and working professionals
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {t.testimonials.items.map((item, i) => (
            <div 
              key={i} 
              className={`group relative bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon background */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={48} />
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center shadow-sm">
                  <span className="text-saffron-500 font-bold text-base">{item.initials}</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star 
                    key={j} 
                    size={16} 
                    className="text-saffron-500 fill-saffron-500" 
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400">Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-3">
                  <StatIcon size={20} className="text-saffron-600" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Badge Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className="text-saffron-500 fill-saffron-500" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.98 ★ (2,100+ reviews)</span>
          </div>
          <div className="w-px h-4 bg-gray-200 hidden md:block" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-gray-600">100% Verified Reviews</span>
          </div>
          <div className="w-px h-4 bg-gray-200 hidden md:block" />
          <div className="flex items-center gap-2">
            <ThumbsUp size={14} className="text-saffron-600" />
            <span className="text-sm text-gray-600">98% Recommended</span>
          </div>
        </div>

        {/* Submit Review Button */}
        <div className="text-center">
          <button
            onClick={() => setShowReviewPopup(true)}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-semibold rounded-lg px-8 py-3 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>{t.testimonials.submitReview}</span>
            <Star size={18} className="group-hover:rotate-12 transition-transform duration-200" />
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Share your experience and help others make better financial decisions
          </p>
        </div>
      </div>

      {/* Review Popup - Fixed Z-Index and Positioning */}
      {showReviewPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" style={{ zIndex: 9999 }}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-300" style={{ zIndex: 10000 }}>
            {/* Close Button - Increased tap area and better visibility */}
            <button
              onClick={() => { setShowReviewPopup(false); setReviewSubmitted(false); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center z-10"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            {reviewSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star size={32} className="text-white fill-white" />
                </div>
                <p className="text-gray-900 text-xl font-bold mb-2">{t.testimonials.reviewPopup.success}</p>
                <p className="text-gray-500 text-sm">Thank you for your valuable feedback!</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                    <Star size={24} className="text-saffron-600" />
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold">{t.testimonials.reviewPopup.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">Your feedback helps us improve</p>
                </div>

                {/* Rating */}
                <div className="mb-5">
                  <label className="text-gray-700 text-sm font-medium block mb-2">
                    {t.testimonials.reviewPopup.ratingLabel} <span className="text-saffron-600">*</span>
                  </label>
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-all duration-200 hover:scale-110 focus:outline-none"
                      >
                        <Star
                          size={32}
                          className={`${
                            star <= (hoverRating || rating)
                              ? 'text-saffron-500 fill-saffron-500'
                              : 'text-gray-200 fill-gray-200'
                          } transition-all duration-200`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating === 0 && (
                    <p className="text-red-400 text-xs text-center mt-2">Please select a rating</p>
                  )}
                </div>

                {/* Name */}
                <input
                  type="text"
                  value={reviewData.name}
                  onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                  placeholder={t.testimonials.reviewPopup.namePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20 outline-none transition-all duration-200 mb-3"
                />

                {/* Role */}
                <input
                  type="text"
                  value={reviewData.role}
                  onChange={(e) => setReviewData({ ...reviewData, role: e.target.value })}
                  placeholder={t.testimonials.reviewPopup.rolePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20 outline-none transition-all duration-200 mb-3"
                />

                {/* Review Text */}
                <textarea
                  rows={3}
                  value={reviewData.review}
                  onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                  placeholder={t.testimonials.reviewPopup.reviewPlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-400/20 outline-none transition-all duration-200 resize-none mb-4"
                />

                {/* Submit Button */}
                <button
                  onClick={handleReviewSubmit}
                  disabled={!rating || !reviewData.name.trim() || !reviewData.review.trim() || submitting}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                    rating && reviewData.name.trim() && reviewData.review.trim() && !submitting
                      ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 cursor-pointer shadow-md'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  {submitting && <Loader2 size={18} className="animate-spin" />}
                  {t.testimonials.reviewPopup.submit}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}