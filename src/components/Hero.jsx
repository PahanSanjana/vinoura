import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const MotionLink = motion(Link);
const BRAND = 'VINOURA';

const Hero = () => {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Cursor-reactive glow (desktop only, disabled if reduced motion is requested)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const letters = BRAND.split('');

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-off-white"
    >
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-matte-black/10" aria-hidden="true" />

          {/* Technical grid overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage:
                'linear-gradient(rgba(244,241,234,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.6) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          {/* Slow scan line */}
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0"
            initial={{ top: '0%' }}
            animate={shouldReduceMotion ? { top: '50%' } : { top: ['0%', '100%', '0%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          >
            <div className="h-px bg-rose-gold shadow-[0_0_16px_2px_theme(colors.rose-gold/50%)]" />
          </motion.div>

          {/* Load-in wipe reveal */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: 'right' }}
            className="absolute inset-0 bg-off-white"
          />
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-off-white" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal-soft/15 hidden lg:block" />
      </div>

      {/* Cursor-reactive glow */}
      {isDesktop && !shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute w-[420px] h-[420px] rounded-full bg-rose-gold/20 blur-[100px] z-[1]"
          style={{ left: glowX, top: glowY, translateX: '-50%', translateY: '-50%' }}
        />
      )}

      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center pb-16 lg:pb-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="hidden lg:block" />

            <div className="text-center lg:text-left">
              {/* Rotating badge, replaces the flat eyebrow label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative w-28 h-28 mx-auto lg:mx-0 mb-8"
              >
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full"
                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  <defs>
                    <path
                      id="vinouraBadgeCircle"
                      d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="fill-charcoal-dark" fontSize="7.2" letterSpacing="2">
                    <textPath href="#vinouraBadgeCircle" xlinkHref="#vinouraBadgeCircle" startOffset="0%">
                      LUXURY FASHION HOUSE · AUTUMN—WINTER ·
                    </textPath>
                  </text>
                </motion.svg>
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-rose-gold" />
                </div>
              </motion.div>

              {/* Letter-reveal headline */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-matte-black tracking-tight leading-[0.95] flex justify-center lg:justify-start">
                {letters.map((ch, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        duration: 0.9,
                        delay: 0.35 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {ch}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
                className="w-20 h-px bg-gradient-to-r from-rose-gold to-transparent my-8 mx-auto lg:mx-0"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-dark mb-10 font-light tracking-wide max-w-xl lg:max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                Uncommon fashion for extraordinary lives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.15 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* Primary CTA with viewfinder corner brackets */}
                <div className="relative inline-block group">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-rose-gold opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-rose-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"
                  />
                  <MotionLink
                    to="/collections"
                    whileTap={{ scale: 0.98 }}
                    className="relative px-8 py-4 bg-matte-black text-off-white font-sans text-xs tracking-[0.2em] uppercase font-semibold group-hover:bg-charcoal-dark transition-colors duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </MotionLink>
                </div>

                <MotionLink
                  to="/contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-matte-black text-matte-black font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-matte-black hover:text-off-white transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
                >
                  Contact Us
                  <ArrowUpRight className="w-4 h-4" />
                </MotionLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee ticker */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 border-t border-charcoal-soft/15 bg-off-white/80 backdrop-blur-sm overflow-hidden py-3 z-10"
      >
        <motion.div
          className="flex gap-10 whitespace-nowrap font-sans text-[11px] tracking-[0.25em] text-charcoal-dark/70"
          animate={shouldReduceMotion ? {} : { x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>AUTUMN — WINTER COLLECTION</span>
              <span className="text-rose-gold">NEW ARRIVALS</span>
              <span>LIMITED EDITION PIECES</span>
              <span className="text-rose-gold">CRAFTED IN-HOUSE</span>
              <span>WORLDWIDE SHIPPING</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="hidden lg:flex flex-col items-center gap-2 absolute right-8 bottom-16 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] text-charcoal-dark/60 [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <span className="w-px h-10 bg-charcoal-soft/40 relative overflow-hidden block">
          <motion.span
            className="absolute top-0 left-0 w-full h-3 bg-rose-gold"
            animate={shouldReduceMotion ? {} : { y: ['-100%', '250%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;