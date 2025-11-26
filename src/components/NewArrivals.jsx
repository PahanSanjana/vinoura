import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NewArrivals = () => {
  const items = [
    { id: 1, name: 'Ethereal Evening', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80', price: '$2,890' },
    { id: 2, name: 'Midnight Elegance', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80', price: '$3,200' },
    { id: 3, name: 'Golden Hour', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80', price: '$2,650' },
    { id: 4, name: 'Ivory Dreams', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', price: '$2,950' },
    { id: 5, name: 'Charcoal Symphony', image: 'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=800&q=80', price: '$3,100' },
    { id: 6, name: 'Beige Serenity', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', price: '$2,750' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elegant Background with Subtle Texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-charcoal-soft/10">
        {/* Subtle Diagonal Texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                135deg,
                transparent,
                transparent 2px,
                rgba(26, 26, 26, 0.08) 2px,
                rgba(26, 26, 26, 0.08) 4px
              )
            `
          }}
        />
        {/* Soft Shadow Accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gray/20 to-transparent" />
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
            className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
          >
            Latest Collection
          </motion.span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-6">
            New Arrivals
          </h2>
          <div className="w-20 h-px bg-rose-gold mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-charcoal-soft aspect-[3/4] mb-6 rounded-sm">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-rose-gold text-matte-black font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-matte-black group-hover:text-charcoal-dark transition-colors">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-charcoal-dark uppercase tracking-wider">
                  {item.price}
                </p>
                <motion.button 
                  className="font-sans text-xs text-charcoal-dark uppercase tracking-[0.2em] border-b border-transparent hover:border-charcoal-dark pb-1 transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
                  whileHover={{ x: 4 }}
                >
                  Explore
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;

