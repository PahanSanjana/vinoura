import { motion } from 'framer-motion';

const CollectionCard = ({ collection, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-beige-100">
          <motion.img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-2">
              {collection.name}
            </h3>
            <p className="font-sans text-sm text-charcoal-600 leading-relaxed">
              {collection.description}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-sans text-xs uppercase tracking-widest text-charcoal-900 border-b-2 border-charcoal-900 pb-1 hover:text-charcoal-700 hover:border-charcoal-700 transition-colors duration-300"
          >
            View Collection
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionCard;

