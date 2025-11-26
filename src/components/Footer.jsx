import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📷' },
    { name: 'Facebook', icon: '📘' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'Pinterest', icon: '📌' },
  ];

  return (
    <footer className="bg-charcoal-900 text-ivory-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl mb-4">VINOURA</h3>
            <p className="font-sans text-sm text-ivory-200 leading-relaxed">
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
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 font-sans text-sm text-ivory-200">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="font-sans text-sm text-ivory-200 mb-4">
              Subscribe to receive updates on new collections
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-charcoal-800 border border-charcoal-700 text-ivory-50 placeholder-ivory-400 focus:outline-none focus:border-gold-500 transition-colors font-sans text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gold-600 text-charcoal-900 font-sans text-sm uppercase tracking-wider hover:bg-gold-500 transition-colors"
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
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href="#"
              aria-label={social.name}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-gold-400 transition-colors"
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
          className="text-center border-t border-charcoal-800 pt-8"
        >
          <p className="font-sans text-xs text-ivory-300">
            © {new Date().getFullYear()} VINOURA. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

