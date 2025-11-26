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
    <div className="min-h-screen bg-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-off-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black/70 via-matte-black/60 to-matte-black/70" />
        </div>

        <div className="relative z-10 flex h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs sm:text-sm text-rose-gold uppercase tracking-[0.3em] font-medium mb-6 block"
            >
              Fashion Week
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-off-white mb-6 tracking-tight leading-[0.95]"
            >
              VINOURA RUNWAY
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-20 h-px bg-rose-gold mx-auto mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-off-white/80 font-light tracking-wide"
            >
              Autumn / Winter Collection 2024
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Runway Highlights Slider */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 bg-matte-black" />
        
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
              Collection Highlights
            </motion.span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-off-white mb-4">
              Runway
            </h2>
            <p className="font-sans text-base text-off-white/80 mb-6">Autumn/Winter Collection 2024</p>
            <div className="w-20 h-px bg-rose-gold mx-auto" />
          </motion.div>

          <div className="relative h-[600px] sm:h-[700px] lg:h-[850px] overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={runwayImages[currentSlide]}
                  alt={`Runway ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-matte-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + runwayImages.length) % runwayImages.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-off-white/10 backdrop-blur-md hover:bg-off-white/20 border border-off-white/20 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-off-white group-hover:text-rose-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % runwayImages.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-off-white/10 backdrop-blur-md hover:bg-off-white/20 border border-off-white/20 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-off-white group-hover:text-rose-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {runwayImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentSlide
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
                  {currentSlide + 1} / {runwayImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-off-white" />
        
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
              className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
            >
              Exclusive Access
            </motion.span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-4">
              Behind the Scenes
            </h2>
            <p className="font-sans text-base text-charcoal-dark/80 mb-6 max-w-2xl mx-auto">
              A glimpse into the artistry and craftsmanship that brings each collection to life
            </p>
            <div className="w-20 h-px bg-rose-gold mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {behindScenesImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer overflow-hidden bg-charcoal-soft aspect-square rounded-sm"
              >
                <motion.img
                  src={image}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Designer Notes Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-off-white" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
            >
              Inspiration
            </motion.span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-6">
              Designer Notes
            </h2>
            <div className="w-20 h-px bg-rose-gold mx-auto mb-10" />
            <div className="space-y-6 text-charcoal-dark/80 font-sans text-base sm:text-lg leading-relaxed">
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 bg-matte-black" />
        
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
              Signature Collection
            </motion.span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-off-white mb-4">
              Featured Look
            </h2>
            <div className="w-20 h-px bg-rose-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Large Editorial Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-charcoal-soft rounded-sm group"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80"
                alt="Featured Look"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Text Description */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-off-white mb-6">
                  The Statement Piece
                </h3>
                <div className="w-16 h-px bg-rose-gold mb-10" />
              </div>
              <div className="space-y-6 text-off-white/80 font-sans text-base sm:text-lg leading-relaxed">
                <p>
                  This season's signature look embodies the essence of VINOURA—where architectural 
                  precision meets flowing elegance. The structured bodice creates a powerful silhouette, 
                  while the cascading fabric adds movement and grace.
                </p>
                <p>
                  Crafted from the finest Italian silk and featuring hand-embroidered details, this 
                  piece represents over 200 hours of meticulous craftsmanship. The deep charcoal tone 
                  is accented with subtle rose-gold threadwork, creating a garment that is both bold 
                  and refined.
                </p>
                <p className="text-off-white font-medium">
                  Designed to be the centerpiece of your wardrobe, this look transitions seamlessly 
                  from day to evening, embodying the versatility and sophistication that defines 
                  the VINOURA woman.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-rose-gold text-matte-black font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-rose-gold/20 flex items-center gap-3 group"
              >
                Explore Collection
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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


