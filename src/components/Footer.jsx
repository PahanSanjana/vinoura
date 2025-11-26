import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📷' },
    { name: 'Facebook', icon: '📘' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'Pinterest', icon: '📌' },
  ];

  return (
    <footer className="relative bg-matte-black text-off-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Polished Background with Texture */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(250, 249, 247, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 249, 247, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Elegant Top Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
        {/* Soft Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-rose-gold/15" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-rose-gold/15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl mb-4 tracking-wider">VINOURA</h3>
            <p className="font-sans text-sm text-off-white/70 leading-relaxed">
              Uncommon Fashion for Extraordinary Lives
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-off-white/90">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm text-off-white/70">
              <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Collections</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Privacy</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-off-white/90">Newsletter</h4>
            <p className="font-sans text-sm text-off-white/70 mb-6">
              Subscribe to receive updates on new collections
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-charcoal-dark/50 border border-charcoal-dark text-off-white placeholder-off-white/50 focus:outline-none focus:border-rose-gold transition-colors font-sans text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-rose-gold text-matte-black font-sans text-xs uppercase tracking-wider hover:bg-gold-500 transition-colors font-semibold"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href="#"
              aria-label={social.name}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-rose-gold transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center border-t border-charcoal-dark pt-8"
        >
          <p className="font-sans text-xs text-off-white/60">
            © {new Date().getFullYear()} VINOURA. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

