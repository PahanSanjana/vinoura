import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const NewsletterCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-navy via-matte-black/95 to-midnight-navy">
        {/* Subtle Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 50px,
                rgba(250, 249, 247, 0.1) 50px,
                rgba(250, 249, 247, 0.1) 100px
              )
            `
          }}
        />
        {/* Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage-green/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-rose-gold/10 rounded-full">
              <Mail className="w-8 h-8 text-rose-gold" />
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-off-white mb-4">
            Stay in the Loop
          </h2>
          <div className="w-20 h-px bg-rose-gold mx-auto mb-6" />
          <p className="font-sans text-lg text-off-white/80 mb-10 max-w-2xl mx-auto">
            Be the first to discover our latest collections, exclusive events, and special offers. 
            Join our community of fashion enthusiasts.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-off-white/10 backdrop-blur-sm border border-off-white/20 text-off-white placeholder-off-white/50 focus:outline-none focus:border-rose-gold transition-colors font-sans text-sm"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-rose-gold text-matte-black font-sans text-sm uppercase tracking-wider font-semibold hover:bg-gold-500 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;

