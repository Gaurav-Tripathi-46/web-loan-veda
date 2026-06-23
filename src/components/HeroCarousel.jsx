// TO REPLACE POSTERS: swap the files at src/assets/posters/poster1.jpg, poster2.jpg, poster3.jpg
// with your own images. Keep the same filenames or update the POSTER_PATHS array below.

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * POSTER_PATHS — Single source of truth for carousel images.
 * To swap images, replace the files at these paths or update the paths here.
 * Supported formats: jpg, png, webp.
 */
export const POSTER_PATHS = [
  '/public/images/poster1.png',
  '/src/assets/posters/poster2.jpg',
  '/src/assets/posters/poster3.jpg',
];

const PLACEHOLDER_LABELS = ['Poster 1', 'Poster 2', 'Poster 3'];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % POSTER_PATHS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + POSTER_PATHS.length) % POSTER_PATHS.length);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
    pauseAutoScroll();
  };

  const pauseAutoScroll = () => {
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [paused, next]);

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
      {/* Slides */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: 'transform 0.6s ease-in-out',
        }}
      >
        {POSTER_PATHS.map((path, i) => (
          <div key={i} className="min-w-full h-full flex-shrink-0">
            {imageErrors[i] ? (
              <div className="w-full h-full bg-blue-700 rounded-2xl flex items-center justify-center">
                <span className="text-saffron-500 text-2xl font-bold">{PLACEHOLDER_LABELS[i]}</span>
              </div>
            ) : (
              <img
                src={path}
                alt={PLACEHOLDER_LABELS[i]}
                className="w-full h-full object-cover"
                onError={() => handleImageError(i)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => { prev(); pauseAutoScroll(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center shadow-md hover:bg-saffron-600 transition-colors"
      >
        <ChevronLeft size={20} className="text-blue-500" />
      </button>
      <button
        onClick={() => { next(); pauseAutoScroll(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center shadow-md hover:bg-saffron-600 transition-colors"
      >
        <ChevronRight size={20} className="text-blue-500" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {POSTER_PATHS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current
                ? 'bg-saffron-500'
                : 'border-2 border-white bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
