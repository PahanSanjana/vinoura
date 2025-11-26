import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RunwayPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const runwayImages = [
    'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1600&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1600&q=80',
    'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1600&q=80',
    'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=1600&q=80',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1600&q=80',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1600&q=80',
  ];

  const behindScenesImages = [
    'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=800&q=80',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % runwayImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [runwayImages.length]);

  return (
    <div className="min-h-screen bg-charcoal-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/70 to-charcoal-900/80" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory-50 mb-6 tracking-tight"
            >
              VINOURA RUNWAY
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="font-sans text-xl sm:text-2xl md:text-3xl text-ivory-200 font-light tracking-widest uppercase"
            >
              Autumn / Winter Collection
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-ivory-200 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-ivory-200 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Runway Highlights Slider */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 mb-4">
              Runway Highlights
            </h2>
            <div className="w-24 h-px bg-gold-500 mx-auto mt-6" />
          </motion.div>

          <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={runwayImages[currentSlide]}
                  alt={`Runway ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {runwayImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gold-500 w-8'
                      : 'bg-ivory-200/50 hover:bg-ivory-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + runwayImages.length) % runwayImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-ivory-50 hover:text-gold-400 transition-colors p-2"
              aria-label="Previous slide"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % runwayImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-ivory-50 hover:text-gold-400 transition-colors p-2"
              aria-label="Next slide"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 mb-4">
              Behind the Scenes
            </h2>
            <div className="w-24 h-px bg-gold-500 mx-auto mt-6" />
            <p className="font-sans text-lg text-ivory-200 mt-6 max-w-2xl mx-auto">
              A glimpse into the artistry and craftsmanship that brings each collection to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {behindScenesImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden bg-charcoal-800 aspect-square"
              >
                <motion.img
                  src={image}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Designer Notes Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-8">
              Designer Notes
            </h2>
            <div className="w-24 h-px bg-gold-500 mx-auto mb-8" />
            <div className="space-y-6 text-charcoal-700 font-sans text-lg sm:text-xl leading-relaxed">
              <p>
                This collection represents a journey through the quiet elegance of autumn and the 
                refined sophistication of winter. Each piece is crafted to celebrate the woman who 
                understands that true luxury lies in the details—the way fabric drapes, the 
                precision of a seam, the subtle play of light on texture.
              </p>
              <p>
                Inspired by the architectural lines of modern cities and the organic flow of nature, 
                we've created silhouettes that are both structured and fluid. The palette moves from 
                deep charcoals and rich ivories to warm golds and soft beiges, reflecting the 
                changing seasons and the timeless beauty of understated elegance.
              </p>
              <p>
                Every garment tells a story of craftsmanship, of hours spent perfecting each detail, 
                of a commitment to creating pieces that transcend trends and become part of your 
                personal narrative.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Look Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 mb-4">
              Featured Look
            </h2>
            <div className="w-24 h-px bg-gold-500 mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Large Editorial Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative aspect-[4/5] overflow-hidden bg-charcoal-800"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80"
                alt="Featured Look"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Text Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-ivory-50 mb-4">
                The Statement Piece
              </h3>
              <div className="w-16 h-px bg-gold-500 mb-6" />
              <div className="space-y-4 text-ivory-200 font-sans text-lg leading-relaxed">
                <p>
                  This season's signature look embodies the essence of VINOURA—where architectural 
                  precision meets flowing elegance. The structured bodice creates a powerful silhouette, 
                  while the cascading fabric adds movement and grace.
                </p>
                <p>
                  Crafted from the finest Italian silk and featuring hand-embroidered details, this 
                  piece represents over 200 hours of meticulous craftsmanship. The deep charcoal tone 
                  is accented with subtle gold threadwork, creating a garment that is both bold 
                  and refined.
                </p>
                <p>
                  Designed to be the centerpiece of your wardrobe, this look transitions seamlessly 
                  from day to evening, embodying the versatility and sophistication that defines 
                  the VINOURA woman.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-gold-600 text-charcoal-900 font-sans text-sm tracking-widest uppercase hover:bg-gold-500 transition-colors duration-300"
              >
                Explore Collection
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RunwayPage;

