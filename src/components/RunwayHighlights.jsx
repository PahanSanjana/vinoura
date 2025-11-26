import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const RunwayHighlights = () => {
  const images = [
    'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&q=80',
    'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200&q=80',
    'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=1200&q=80',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
            Runway
          </h2>
          <p className="font-sans text-lg text-charcoal-600 mb-2">Autumn/Winter Collection</p>
          <div className="w-24 h-px bg-gold-500 mx-auto mt-6" />
        </motion.div>

        <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={images[currentIndex]}
                alt={`Runway ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-charcoal-300 hover:bg-charcoal-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunwayHighlights;

