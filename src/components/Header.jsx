import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Runway', href: '#runway' },
    { name: 'Boutique', href: '#boutique' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const iconLinks = [
    { name: 'Search', icon: '🔍', href: '#' },
    { name: 'Account', icon: '👤', href: '#' },
    { name: 'Bag', icon: '🛍️', href: '#' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-beige-200/30 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-sm shadow-sm'
          : 'bg-ivory-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Name - Centered */}
        <div className="flex items-center justify-center py-6 border-b border-beige-200/50">
          <Link
            to="/"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-wider block"
          >
            <motion.span
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              VINOURA
            </motion.span>
          </Link>
        </div>

        {/* Navigation Bar */}
        <nav className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-charcoal-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="relative font-sans text-sm uppercase tracking-widest text-charcoal-700 hover:text-charcoal-900 transition-colors duration-300 group px-2"
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-px bg-charcoal-900 group-hover:w-full transition-all duration-300"
                      initial={false}
                    />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="relative font-sans text-sm uppercase tracking-widest text-charcoal-700 hover:text-charcoal-900 transition-colors duration-300 group px-2"
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-px bg-charcoal-900 group-hover:w-full transition-all duration-300"
                      initial={false}
                    />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {iconLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-charcoal-700 hover:text-charcoal-900 transition-colors duration-300 relative"
                aria-label={item.name}
              >
                <span className="text-lg sm:text-xl">{item.icon}</span>
                {item.name === 'Bag' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-500 rounded-full"></span>
                )}
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-beige-200/50">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-sans text-sm uppercase tracking-widest text-charcoal-700 hover:text-charcoal-900 transition-colors duration-300 py-2"
                >
                  <motion.span whileHover={{ x: 4 }} className="inline-block">
                    {link.name}
                  </motion.span>
                </Link>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-sans text-sm uppercase tracking-widest text-charcoal-700 hover:text-charcoal-900 transition-colors duration-300 py-2"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

