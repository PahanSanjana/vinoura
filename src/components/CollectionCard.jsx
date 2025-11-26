import { motion } from 'framer-motion';

const CollectionCard = ({ collection, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div className="bg-off-white overflow-hidden border border-charcoal-soft/20 hover:border-rose-gold/30 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-soft">
          <motion.img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-matte-black mb-3 group-hover:text-charcoal-dark transition-colors">
              {collection.name}
            </h3>
            <p className="font-sans text-sm text-charcoal-dark/80 leading-relaxed">
              {collection.description}
            </p>
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal-dark border-b border-transparent hover:border-charcoal-dark pb-1 transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
          >
            View Collection
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionCard;

