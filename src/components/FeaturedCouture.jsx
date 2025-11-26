import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedCouture = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Refined Background with Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-off-white via-off-white to-charcoal-soft/15">
        {/* Subtle Texture Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(26, 26, 26, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Elegant Accent Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gray/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Large Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-charcoal-soft rounded-sm group"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80"
              alt="Featured Couture"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
              >
                Exclusive Collection
              </motion.span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-6">
                Featured Couture
              </h2>
              <div className="w-20 h-px bg-rose-gold mb-10" />
            </div>

            <div className="space-y-6 text-charcoal-dark font-sans text-base sm:text-lg leading-relaxed">
              <p className="text-charcoal-dark/80">
                Each piece in our couture collection is a testament to unparalleled craftsmanship 
                and timeless elegance. Meticulously handcrafted by master artisans, our garments 
                embody the essence of luxury fashion.
              </p>
              <p className="text-charcoal-dark/80">
                We source only the finest materials from around the world—silks from Italy, 
                cashmere from Scotland, and exclusive fabrics that tell a story of heritage 
                and refinement.
              </p>
              <p className="text-charcoal-dark font-medium">
                Every stitch, every detail, every silhouette is designed to celebrate the 
                extraordinary individual who wears it.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <button className="px-10 py-4 bg-matte-black text-off-white font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-charcoal-dark transition-all duration-300 shadow-lg shadow-matte-black/20 flex items-center gap-3 group">
                Discover Couture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCouture;

