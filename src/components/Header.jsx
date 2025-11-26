import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo1.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Runway', href: '/runway' },
    { name: 'Boutique', href: '/boutique' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/80'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo Section - Left Aligned */}
          <Link
            to="/"
            className="flex items-center gap-4 group relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative"
            >
              <img
                src={logo}
                alt="VINOURA"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </motion.div>
            <motion.span
              className="hidden sm:block font-serif text-2xl lg:text-3xl text-gray-900 tracking-wide font-normal"
              whileHover={{ letterSpacing: '0.15em' }}
              transition={{ duration: 0.3 }}
            >
              VINOURA
            </motion.span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
                >
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="relative group"
                    >
                      <span
                        className={`block px-5 py-2 text-sm font-medium tracking-wider transition-all duration-300 ${
                          location.pathname === link.href
                            ? 'text-gray-900'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {link.name}
                      </span>
                      <motion.span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gray-900 transition-all duration-300 ${
                          location.pathname === link.href ? 'w-8' : 'w-0 group-hover:w-8'
                        }`}
                        layoutId={location.pathname === link.href ? 'activeLink' : undefined}
                      />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="relative group"
                    >
                      <span className="block px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 tracking-wider transition-all duration-300">
                        {link.name}
                      </span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-8 transition-all duration-300" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="hidden lg:block"
            >
              <Link
                to="/boutique"
                className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium tracking-wide rounded-full hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Shop Now
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-1 border-t border-gray-200">
            {navLinks.map((link, index) =>
              link.href.startsWith('/') ? (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3.5 text-base font-medium tracking-wide rounded-lg transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-base font-medium text-gray-600 hover:text-gray-900 tracking-wide rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </motion.div>
              )
            )}
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * navLinks.length }}
              className="pt-4 px-4"
            >
              <Link
                to="/boutique"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gray-900 text-white text-base font-medium tracking-wide rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;