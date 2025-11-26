import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: 'https://instagram.com/vinoura' },
    { name: 'Facebook', icon: '📘', href: 'https://facebook.com/vinoura' },
    { name: 'Pinterest', icon: '📌', href: 'https://pinterest.com/vinoura' },
    { name: 'YouTube', icon: '▶️', href: 'https://youtube.com/vinoura' },
  ];

  return (
    <div className="min-h-screen bg-ivory-50">
      <Header />

      {/* Main Content */}
      <main className="pt-32 sm:pt-40 pb-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 px-4 sm:px-6 lg:px-8"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal-900 mb-6">
            Contact Vinoura
          </h1>
          <div className="w-24 h-px bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-lg sm:text-xl text-charcoal-600 max-w-2xl mx-auto">
            We would love to hear from you
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 sm:p-12 rounded-sm shadow-lg"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 mb-8 text-center">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="What is your inquiry about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-4 bg-charcoal-900 text-ivory-50 font-sans text-sm uppercase tracking-wider hover:bg-charcoal-800 transition-colors duration-300 mx-auto block"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
                Get in Touch
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto mb-6" />
              <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
                For press, partnership, or couture inquiries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-sm shadow-md text-center"
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-3">Email</h3>
                <a
                  href="mailto:info@vinoura.com"
                  className="font-sans text-charcoal-700 hover:text-gold-600 transition-colors"
                >
                  info@vinoura.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-sm shadow-md text-center"
              >
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-3">Phone</h3>
                <a
                  href="tel:+33123456789"
                  className="font-sans text-charcoal-700 hover:text-gold-600 transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-sm shadow-md text-center"
              >
                <div className="text-4xl mb-4">🕐</div>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-3">
                  Business Hours
                </h3>
                <p className="font-sans text-charcoal-700">
                  Monday - Saturday
                  <br />
                  10:00 AM - 7:00 PM
                  <br />
                  <span className="text-charcoal-500">Sunday: Closed</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Map Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
                Visit Our Boutique
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-sm shadow-lg bg-beige-200"
              >
                {/* Map Placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📍</div>
                    <p className="font-sans text-charcoal-600">Map Placeholder</p>
                  </div>
                </div>
                {/* You can replace this with an actual map component or iframe */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 sm:p-12 rounded-sm shadow-md"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-6">
                  Flagship Boutique
                </h3>
                <div className="space-y-4 font-sans text-charcoal-700">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-charcoal-500 mb-1">
                      Address
                    </p>
                    <p className="leading-relaxed">
                      123 Avenue des Champs-Élysées
                      <br />
                      75008 Paris, France
                    </p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-charcoal-500 mb-1">
                      Hours
                    </p>
                    <p className="leading-relaxed">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                      <br />
                      Sunday: 12:00 PM - 6:00 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-charcoal-500 mb-1">
                      Contact
                    </p>
                    <p className="leading-relaxed">
                      <a
                        href="tel:+33123456789"
                        className="hover:text-gold-600 transition-colors"
                      >
                        +33 1 23 45 67 89
                      </a>
                      <br />
                      <a
                        href="mailto:paris@vinoura.com"
                        className="hover:text-gold-600 transition-colors"
                      >
                        paris@vinoura.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 mb-8">
                Connect With Us
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <span className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </span>
                    <span className="font-sans text-sm uppercase tracking-wider text-charcoal-700 group-hover:text-gold-600 transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

