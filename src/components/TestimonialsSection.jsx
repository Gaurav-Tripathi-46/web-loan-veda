import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, X, Loader2 } from 'lucide-react';
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

  return (
    <section ref={ref} className="py-16 px-4 bg-white border-t border-blue-100 opacity-0 transition-opacity duration-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">{t.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PLACEHOLDER — replace with real content */}
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-saffron-500 font-bold">{item.initials}</span>
                </div>
                <div>
                  <p className="text-blue-500 font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-saffron-500 fill-saffron-500" />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{item.quote}"</p>
            </div>
          ))}

        </div>

        {/* Submit Review Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowReviewPopup(true)}
            className="bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-full px-8 py-3 transition-colors"
          >
            {t.testimonials.submitReview}
          </button>
        </div>
      </div>

      {/* Review Popup */}
      {showReviewPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => { setShowReviewPopup(false); setReviewSubmitted(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            {reviewSubmitted ? (
              <div className="text-center py-6">
                <Star size={48} className="text-saffron-500 fill-saffron-500 mx-auto mb-4" />
                <p className="text-blue-500 text-xl font-bold">{t.testimonials.reviewPopup.success}</p>
              </div>
            ) : (
              <>
                <h3 className="text-blue-500 text-xl font-bold mb-6">{t.testimonials.reviewPopup.title}</h3>

                {/* Rating */}
                <div className="mb-4">
                  <label className="text-blue-500 text-sm font-medium block mb-2">{t.testimonials.reviewPopup.ratingLabel}</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={28}
                          className={`${
                            star <= (hoverRating || rating)
                              ? 'text-saffron-500 fill-saffron-500'
                              : 'text-gray-300'
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <input
                  type="text"
                  value={reviewData.name}
                  onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                  placeholder={t.testimonials.reviewPopup.namePlaceholder}
                  className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition mb-3"
                />

                {/* Role */}
                <input
                  type="text"
                  value={reviewData.role}
                  onChange={(e) => setReviewData({ ...reviewData, role: e.target.value })}
                  placeholder={t.testimonials.reviewPopup.rolePlaceholder}
                  className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition mb-3"
                />

                {/* Review Text */}
                <textarea
                  rows={3}
                  value={reviewData.review}
                  onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                  placeholder={t.testimonials.reviewPopup.reviewPlaceholder}
                  className="border border-blue-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-saffron-400 focus:border-saffron-500 outline-none transition resize-none mb-4"
                />

                {/* Submit */}
                <button
                  onClick={handleReviewSubmit}
                  disabled={!rating || !reviewData.name.trim() || !reviewData.review.trim() || submitting}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-colors flex items-center justify-center gap-2 ${
                    rating && reviewData.name.trim() && reviewData.review.trim() && !submitting
                      ? 'bg-saffron-500 hover:bg-saffron-600 cursor-pointer'
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
