import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/Logo1.png';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/vinoura_official/?utm_source=ig_web_button_share_sheet' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/vinoura' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/vinoura' },

  ];

  return (
    <footer className="relative bg-matte-black text-off-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        {/* Subtle Top Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-rose-gold/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-4 group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-center gap-3"
              >
                <img
                  src={logo}
                  alt="VINOURA"
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                />
                <span className="font-serif text-xl lg:text-2xl tracking-wider text-off-white group-hover:text-rose-gold transition-colors duration-300">
                  VINOURA
                </span>
              </motion.div>
            </Link>
            <p className="font-sans text-sm text-off-white/70 leading-relaxed mb-6 max-w-xs">
              Uncommon Fashion for Extraordinary Lives
            </p>
            <div className="w-16 h-px bg-rose-gold/50" />
          </motion.div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-off-white font-medium">Collections</h4>
            <ul className="space-y-3.5 font-sans text-sm text-off-white/70">
              <li>
                <Link to="/collections" className="hover:text-rose-gold transition-colors duration-300 inline-block">
                  All Collections
                </Link>
              </li>
              <li>
                <Link to="/runway" className="hover:text-rose-gold transition-colors duration-300 inline-block">
                  Runway
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-off-white font-medium">Company</h4>
            <ul className="space-y-3.5 font-sans text-sm text-off-white/70">
              <li>
                <Link to="/about" className="hover:text-rose-gold transition-colors duration-300 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-gold transition-colors duration-300 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-rose-gold transition-colors duration-300 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-gold transition-colors duration-300 inline-block">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-off-white font-medium">Connect</h4>
            <p className="font-sans text-sm text-off-white/70 mb-6 leading-relaxed max-w-xs">
              Follow us for the latest updates and exclusive content.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 border border-off-white/30 hover:border-rose-gold hover:bg-rose-gold/10 hover:text-rose-gold transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-off-white/15 mb-10 pt-10" />

        {/* Copyright & Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-sans text-xs text-off-white/60 tracking-wide">
  © 2025{' '}
  <a 
    href="https://sanziq.netlify.app/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="underline hover:text-white"
  >
    SANZIQ Software Solutions
  </a>
  . All rights reserved.
</p>
          <div className="flex gap-6 font-sans text-xs text-off-white/60">
            <a href="#" className="hover:text-rose-gold transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-rose-gold transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="hover:text-rose-gold transition-colors duration-300">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

