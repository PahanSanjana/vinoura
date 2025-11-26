import { motion } from 'framer-motion';

const FeaturedCouture = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Large Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-beige-200"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80"
              alt="Featured Couture"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-6">
                Featured Couture
              </h2>
              <div className="w-24 h-px bg-gold-500 mb-8" />
            </div>

            <div className="space-y-6 text-charcoal-700 font-sans text-lg leading-relaxed">
              <p>
                Each piece in our couture collection is a testament to unparalleled craftsmanship 
                and timeless elegance. Meticulously handcrafted by master artisans, our garments 
                embody the essence of luxury fashion.
              </p>
              <p>
                We source only the finest materials from around the world—silks from Italy, 
                cashmere from Scotland, and exclusive fabrics that tell a story of heritage 
                and refinement.
              </p>
              <p>
                Every stitch, every detail, every silhouette is designed to celebrate the 
                extraordinary individual who wears it.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-8 py-4 bg-charcoal-900 text-ivory-50 font-sans text-sm tracking-widest uppercase hover:bg-charcoal-800 transition-colors duration-300">
                Discover Couture
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCouture;

