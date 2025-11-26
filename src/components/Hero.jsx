import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-off-white">
      {/* Clean Background with Split Layout */}
      <div className="absolute inset-0">
        {/* Left Side - Image */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80)',
          }}
        />
        
        {/* Right Side - Solid Color */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-off-white" />
        
        {/* Subtle Divider Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal-soft/15 hidden lg:block" />
      </div>


      {/* Content Container */}
      <div className="relative z-10 flex h-screen items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Spacer (for image background) */}
            <div className="hidden lg:block" />

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-sans text-xs sm:text-sm text-rose-gold uppercase tracking-[0.3em] font-medium mb-6 block">
                  Luxury Fashion House
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-matte-black mb-6 tracking-tight leading-[0.95]"
              >
                VINOURA
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-20 h-px bg-rose-gold mb-8 lg:mx-0 mx-auto"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-dark mb-10 font-light tracking-wide max-w-xl lg:max-w-2xl leading-relaxed"
              >
                Uncommon Fashion for Extraordinary Lives
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/collections">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-matte-black text-off-white font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-charcoal-dark transition-all duration-300 shadow-lg shadow-matte-black/20 flex items-center justify-center gap-2"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border-2 border-matte-black text-matte-black font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-matte-black hover:text-off-white transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

