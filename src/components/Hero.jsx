import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/85 via-midnight-navy/75 to-matte-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black/50 via-transparent to-matte-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-burnt-sienna/10 via-transparent to-rose-gold/5" />
      </div>

      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245, 243, 237, 0.1) 2px, rgba(245, 243, 237, 0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(245, 243, 237, 0.1) 2px, rgba(245, 243, 237, 0.1) 4px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Elegant Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="font-sans text-sm sm:text-base text-rose-gold uppercase tracking-[0.3em] font-medium mb-4 block">
              Luxury Fashion House
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-off-white mb-8 tracking-tight leading-[0.95]"
          >
            VINOURA
          </motion.h1>
          
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-20 h-px bg-rose-gold mx-auto mb-8"
            />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-off-white/90 mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            Uncommon Fashion for Extraordinary Lives
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-rose-gold text-matte-black font-sans text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-rose-gold/40"
            >
              Explore Collection
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-off-white/30 text-off-white font-sans text-sm tracking-[0.15em] uppercase font-semibold hover:border-off-white hover:bg-off-white/10 backdrop-blur-sm transition-all duration-300"
            >
              View Lookbook
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="font-sans text-xs text-off-white/70 uppercase tracking-widest group-hover:text-off-white transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-off-white/70 group-hover:text-off-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

