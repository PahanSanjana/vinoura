import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-matte-black overflow-hidden relative">
      {/* Elegant Background Texture */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(250, 249, 247, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 249, 247, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Elegant Border Accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />
        {/* Soft Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-rose-gold/10" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-rose-gold/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-rose-gold mb-4 block"
          >
            Fashion Week
          </motion.span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-off-white mb-4">
            Runway
          </h2>
          <p className="font-sans text-base text-off-white/80 mb-6">Autumn/Winter Collection 2024</p>
          <div className="w-20 h-px bg-rose-gold mx-auto" />
        </motion.div>

        <div className="relative h-[600px] sm:h-[700px] lg:h-[850px] overflow-hidden rounded-sm">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0"
            >
              <img
                src={images[currentIndex]}
                alt={`Runway ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-matte-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-off-white/10 backdrop-blur-md hover:bg-off-white/20 border border-off-white/20 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-off-white group-hover:text-rose-gold transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-off-white/10 backdrop-blur-md hover:bg-off-white/20 border border-off-white/20 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-off-white group-hover:text-rose-gold transition-colors" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-rose-gold w-10 h-1.5'
                    : 'bg-off-white/40 hover:bg-off-white/60 w-1.5 h-1.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-10 right-10 z-20">
            <div className="px-4 py-2 bg-off-white/10 backdrop-blur-md border border-off-white/20">
              <span className="font-sans text-sm text-off-white">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunwayHighlights;

