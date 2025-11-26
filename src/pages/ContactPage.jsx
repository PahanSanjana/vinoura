import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Instagram, Facebook, Twitter, Share2 } from 'lucide-react';
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
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/vinoura_official?igsh=cjBwM2F6cmxvM2cz' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/vinoura' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/vinoura' },
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Main Content */}
      <main className="pt-32 sm:pt-40 pb-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 px-4 sm:px-6 lg:px-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
          >
            Get in Touch
          </motion.span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-matte-black mb-6 tracking-tight">
            Contact VINOURA
          </h1>
          <div className="w-20 h-px bg-rose-gold mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg md:text-xl text-charcoal-dark/80 max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <section className="mb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-off-white" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-off-white p-8 sm:p-12 rounded-sm border border-charcoal-soft/20"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
                >
                  Send a Message
                </motion.span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-matte-black mb-6">
                  Send Us a Message
                </h2>
                <div className="w-20 h-px bg-rose-gold mx-auto" />
              </motion.div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium"
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
                    className="w-full px-4 py-3 bg-off-white border border-charcoal-soft/30 text-matte-black font-sans focus:outline-none focus:border-rose-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium"
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
                      className="w-full px-4 py-3 bg-off-white border border-charcoal-soft/30 text-matte-black font-sans focus:outline-none focus:border-rose-gold transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-off-white border border-charcoal-soft/30 text-matte-black font-sans focus:outline-none focus:border-rose-gold transition-colors"
                      placeholder="+94 71 557 4939"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-sans text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium"
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
                    className="w-full px-4 py-3 bg-off-white border border-charcoal-soft/30 text-matte-black font-sans focus:outline-none focus:border-rose-gold transition-colors"
                    placeholder="What is your inquiry about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium"
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
                    className="w-full px-4 py-3 bg-off-white border border-charcoal-soft/30 text-matte-black font-sans focus:outline-none focus:border-rose-gold transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-4 bg-matte-black text-off-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-charcoal-dark transition-all duration-300 shadow-lg shadow-matte-black/20 mx-auto block"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-off-white" />
          
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
                Contact Information
              </motion.span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-4">
                Get in Touch
              </h2>
              <p className="font-sans text-base text-charcoal-dark/80 max-w-2xl mx-auto mb-6">
                For press, partnership, or couture inquiries
              </p>
              <div className="w-20 h-px bg-rose-gold mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-off-white p-8 rounded-sm border border-charcoal-soft/20 hover:border-rose-gold/30 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-rose-gold/10 rounded-full">
                    <Mail className="w-6 h-6 text-rose-gold" />
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-matte-black mb-3">Email</h3>
                <a
                  href="mailto:vinulikalubowila@gmail.com"
                  className="font-sans text-charcoal-dark/80 hover:text-rose-gold transition-colors"
                >
                  vinulikalubowila@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-off-white p-8 rounded-sm border border-charcoal-soft/20 hover:border-rose-gold/30 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-rose-gold/10 rounded-full">
                    <Phone className="w-6 h-6 text-rose-gold" />
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-matte-black mb-3">Phone</h3>
                <a
                  href="tel:+94715574939"
                  className="font-sans text-charcoal-dark/80 hover:text-rose-gold transition-colors"
                >
                  +94 71 557 4939
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-off-white p-8 rounded-sm border border-charcoal-soft/20 hover:border-rose-gold/30 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-rose-gold/10 rounded-full">
                    <Clock className="w-6 h-6 text-rose-gold" />
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-matte-black mb-3">
                  Business Hours
                </h3>
                <p className="font-sans text-charcoal-dark/80 leading-relaxed">
                  Monday - Saturday
                  <br />
                  10:00 AM - 7:00 PM
                  <br />
                  <span className="text-charcoal-dark/60">Sunday: 12:00 PM - 2:00 PM</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-off-white" />
          
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
                Visit Us
              </motion.span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-4">
                Our Location
              </h2>
              <div className="w-20 h-px bg-rose-gold mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-sm bg-charcoal-soft"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63415.59215060703!2d79.93606009075971!3d6.58778811180505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2371ee59557e5%3A0x8b86ba840e8a7b51!2sKalutara!5e0!3m2!1sen!2slk!4v1764135905524!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="VINOURA Studio Location - Kaluthara, Sri Lanka"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-off-white p-8 sm:p-12 rounded-sm border border-charcoal-soft/20"
              >
                <h3 className="font-serif text-3xl sm:text-4xl text-matte-black mb-6">
                  VINOURA Studio
                </h3>
                <div className="w-16 h-px bg-rose-gold mb-8" />
                <div className="space-y-6 font-sans text-charcoal-dark/80">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium">
                      Address
                    </p>
                    <p className="leading-relaxed">
                      Kaluthara, Sri Lanka
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium">
                      Hours
                    </p>
                    <p className="leading-relaxed">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                      <br />
                      Sunday: 12:00 PM - 2:00 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-charcoal-dark mb-2 font-medium">
                      Contact
                    </p>
                    <p className="leading-relaxed">
                      <a
                        href="tel:+94715574939"
                        className="hover:text-rose-gold transition-colors"
                      >
                        +94 71 557 4939
                      </a>
                      <br />
                      <a
                        href="mailto:vinulikalubowila@gmail.com"
                        className="hover:text-rose-gold transition-colors"
                      >
                        vinulikalubowila@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-off-white" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
              >
                Follow Us
              </motion.span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-matte-black mb-8">
                Connect With Us
              </h2>
              <div className="w-20 h-px bg-rose-gold mx-auto mb-12" />
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
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
                      className="flex flex-col items-center gap-3 group p-4 border border-charcoal-soft/20 hover:border-rose-gold/50 hover:bg-rose-gold/10 transition-all duration-300 rounded-sm"
                    >
                      <IconComponent className="w-6 h-6 text-charcoal-dark group-hover:text-rose-gold transition-colors" />
                      <span className="font-sans text-xs uppercase tracking-wider text-charcoal-dark/80 group-hover:text-rose-gold transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
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

