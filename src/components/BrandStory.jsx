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
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elegant Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-soft/35 via-charcoal-soft/25 to-off-white">
        {/* Subtle Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(26, 26, 26, 0.1) 35px,
                rgba(26, 26, 26, 0.1) 70px
              )
            `
          }}
        />
        {/* Soft Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gray/10 to-transparent" />
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
            Our Heritage
          </motion.span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-6">
            The House of Vinoura
          </h2>
          <div className="w-20 h-px bg-rose-gold mx-auto mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="font-sans text-lg sm:text-xl text-charcoal-dark leading-relaxed">
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative aspect-[4/5] overflow-hidden bg-charcoal-soft rounded-sm group"
            >
              <motion.img
                src={image}
                alt={`Brand story ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;

