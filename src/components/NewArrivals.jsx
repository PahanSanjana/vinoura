import { motion } from 'framer-motion';

const NewArrivals = () => {
  const items = [
    { id: 1, name: 'Ethereal Evening', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80' },
    { id: 2, name: 'Midnight Elegance', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80' },
    { id: 3, name: 'Golden Hour', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80' },
    { id: 4, name: 'Ivory Dreams', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80' },
    { id: 5, name: 'Charcoal Symphony', image: 'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=800&q=80' },
    { id: 6, name: 'Beige Serenity', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
            New Arrivals
          </h2>
          <div className="w-24 h-px bg-gold-500 mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-beige-100 aspect-[3/4] mb-4">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                  {item.name}
                </h3>
                <button className="font-sans text-sm text-charcoal-700 uppercase tracking-wider border-b border-charcoal-700 pb-1 hover:text-charcoal-900 transition-colors">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;

