import { motion } from 'framer-motion';

const BrandStory = () => {
  const images = [
    'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80',
    'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-6">
            The House of Vinoura
          </h2>
          <div className="w-24 h-px bg-gold-500 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-sans text-lg sm:text-xl text-charcoal-700 leading-relaxed">
            Founded on the principle that fashion should be both extraordinary and personal, 
            VINOURA represents a new era of luxury. We believe in creating pieces that transcend 
            trends, garments that become part of your story, and collections that honor both 
            tradition and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative aspect-[4/5] overflow-hidden bg-beige-200"
            >
              <motion.img
                src={image}
                alt={`Brand story ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;

