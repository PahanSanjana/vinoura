import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BoutiquePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
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
    alert('Thank you for your appointment request. We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: '',
    });
  };

  const locations = [
    {
      city: 'Paris',
      address: '123 Avenue des Champs-Élysées, 75008 Paris, France',
      hours: 'Monday - Saturday: 10:00 AM - 7:00 PM\nSunday: 12:00 PM - 6:00 PM',
      phone: '+33 1 23 45 67 89',
      email: 'paris@vinoura.com',
    },
    {
      city: 'New York',
      address: '456 Fifth Avenue, New York, NY 10018, USA',
      hours: 'Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 6:00 PM',
      phone: '+1 (212) 555-0123',
      email: 'newyork@vinoura.com',
    },
    {
      city: 'London',
      address: '789 Bond Street, Mayfair, London W1S 1AA, UK',
      hours: 'Monday - Saturday: 10:00 AM - 7:00 PM\nSunday: Closed',
      phone: '+44 20 7123 4567',
      email: 'london@vinoura.com',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    'https://images.unsplash.com/photo-1555529909-43194d2c1f3a?w=800&q=80',
    'https://images.unsplash.com/photo-1555529669-2269763671c0?w=800&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    'https://images.unsplash.com/photo-1555529909-43194d2c1f3a?w=800&q=80',
    'https://images.unsplash.com/photo-1555529669-2269763671c0?w=800&q=80',
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
            Vinoura Boutique
          </h1>
          <div className="w-24 h-px bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-lg sm:text-xl text-charcoal-600 max-w-2xl mx-auto">
            Experience couture in person
          </p>
        </motion.div>

        {/* Boutique Intro Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                  alt="Vinoura Boutique Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="font-sans text-lg sm:text-xl text-charcoal-700 leading-relaxed">
                Step into a world where luxury meets artistry. Our boutiques are carefully curated
                sanctuaries designed to provide an intimate, personalized experience with our
                couture collections. Each location embodies the essence of VINOURA—timeless elegance,
                exceptional craftsmanship, and unparalleled attention to detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Store Locations Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
                Our Locations
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                    {location.city}
                  </h3>
                  <div className="space-y-4 font-sans text-charcoal-700">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-charcoal-500 mb-1">
                        Address
                      </p>
                      <p className="leading-relaxed">{location.address}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-charcoal-500 mb-1">
                        Hours
                      </p>
                      <p className="leading-relaxed whitespace-pre-line">{location.hours}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-charcoal-500 mb-1">
                        Contact
                      </p>
                      <p className="leading-relaxed">
                        <a
                          href={`tel:${location.phone}`}
                          className="hover:text-gold-600 transition-colors"
                        >
                          {location.phone}
                        </a>
                        <br />
                        <a
                          href={`mailto:${location.email}`}
                          className="hover:text-gold-600 transition-colors"
                        >
                          {location.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
                Book an Appointment
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto mb-6" />
              <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
                Schedule a private consultation to experience our couture collections in an
                intimate, personalized setting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 sm:p-12 rounded-sm shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                    >
                      Name
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
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                    >
                      Email
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
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block font-sans text-sm uppercase tracking-wider text-charcoal-700 mb-2"
                    >
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
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
                    rows="5"
                    className="w-full px-4 py-3 bg-ivory-50 border border-beige-300 text-charcoal-900 font-sans focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Tell us about your preferences or special requests..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-4 bg-charcoal-900 text-ivory-50 font-sans text-sm uppercase tracking-wider hover:bg-charcoal-800 transition-colors duration-300"
                >
                  Book Appointment
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Boutique Gallery Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
                Boutique Gallery
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square">
                    <img
                      src={image}
                      alt={`Boutique interior ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Couture Fitting Services Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
                Couture Fitting Services
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto mb-6" />
              <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
                Experience the art of couture with our exclusive fitting services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-sm shadow-md"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                  Private Fittings
                </h3>
                <p className="font-sans text-charcoal-700 leading-relaxed">
                  Enjoy an exclusive, one-on-one consultation in our private fitting rooms. Our
                  expert stylists will guide you through our collections, ensuring each piece
                  complements your unique style and silhouette. Experience the luxury of undivided
                  attention in an intimate, serene environment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white p-8 rounded-sm shadow-md"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                  Custom Couture Sessions
                </h3>
                <p className="font-sans text-charcoal-700 leading-relaxed">
                  Work directly with our master artisans to create a truly bespoke piece. From
                  initial consultation to final fitting, every detail is crafted to your
                  specifications. These exclusive sessions allow you to be part of the creative
                  process, resulting in a garment that is uniquely yours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-sm shadow-md"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                  Personalized Styling
                </h3>
                <p className="font-sans text-charcoal-700 leading-relaxed">
                  Our experienced stylists provide comprehensive wardrobe consultations tailored to
                  your lifestyle and preferences. Whether preparing for a special occasion or
                  curating a timeless collection, we offer expert guidance to help you build a
                  wardrobe that reflects your personal elegance and sophistication.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoutiquePage;

