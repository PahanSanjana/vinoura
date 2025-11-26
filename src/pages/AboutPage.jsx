import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const timelineEvents = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'VINOURA was founded with a vision to redefine luxury fashion, combining timeless elegance with contemporary innovation.',
    },
    {
      year: '2017',
      title: 'First Collection',
      description: 'Our debut collection "Ethereal Elegance" premiered at Paris Fashion Week, establishing our signature aesthetic.',
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Opened flagship boutiques in Paris, New York, and London, bringing VINOURA to fashion capitals worldwide.',
    },
    {
      year: '2022',
      title: 'Runway Excellence',
      description: 'Received international acclaim for our couture collections, featured in Vogue, Harper\'s Bazaar, and Elle.',
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Launched our sustainable luxury initiative, committing to ethical craftsmanship and environmental responsibility.',
    },
  ];

  const values = [
    {
      title: 'Elegance',
      description: 'We believe true elegance is timeless, effortless, and deeply personal. Every piece we create embodies refined sophistication that transcends fleeting trends.',
    },
    {
      title: 'Innovation',
      description: 'While honoring traditional craftsmanship, we embrace innovative techniques and contemporary design, creating garments that speak to the modern luxury consumer.',
    },
    {
      title: 'Sustainability',
      description: 'Luxury and responsibility go hand in hand. We are committed to ethical sourcing, sustainable practices, and creating pieces meant to last generations.',
    },
    {
      title: 'Global Vision',
      description: 'VINOURA celebrates diversity and global perspectives, drawing inspiration from cultures worldwide to create a truly international luxury brand.',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=800&q=80',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
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
            The House of Vinoura
          </h1>
          <div className="w-24 h-px bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-lg sm:text-xl text-charcoal-600 max-w-2xl mx-auto">
            Where elegance becomes identity
          </p>
        </motion.div>

        {/* Brand Introduction Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-sm shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80"
                  alt="VINOURA Brand"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 mb-4">
                  A Legacy of Luxury
                </h2>
                <div className="w-16 h-px bg-gold-500 mb-6" />
                <div className="space-y-4 font-sans text-lg text-charcoal-700 leading-relaxed">
                  <p>
                    VINOURA stands for more than fashion—it represents a philosophy of refined
                    elegance, exceptional craftsmanship, and timeless beauty. We believe that true
                    luxury lies in the details: the hand-sewn seams, the carefully selected fabrics,
                    the perfect drape of a garment that moves with grace.
                  </p>
                  <p>
                    Our identity is built on the foundation of modern couture, where traditional
                    artisanal techniques meet contemporary design sensibilities. Each collection
                    tells a story, each piece is a work of art, and every garment is created with
                    the intention of becoming a cherished part of your wardrobe.
                  </p>
                  <p>
                    Our vision extends beyond creating beautiful clothing. We aim to inspire
                    confidence, celebrate individuality, and honor the art of dressing well. In a
                    world of fast fashion, VINOURA stands as a testament to slow, thoughtful
                    creation—where every stitch matters, and every design decision is intentional.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Story Timeline */}
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
                Our Journey
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto" />
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-beige-300" />

              <div className="space-y-12 md:space-y-16">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8`}
                  >
                    {/* Year Badge */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                      <div
                        className={`text-center md:text-right ${
                          index % 2 === 0 ? 'md:text-right' : 'md:text-left md:order-2'
                        }`}
                      >
                        <div className="inline-block relative">
                          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-ivory-50 z-10 left-1/2 -translate-x-1/2" />
                          <h3 className="font-serif text-5xl sm:text-6xl text-gold-600 mb-2">
                            {event.year}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-1/2 ${
                        index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1'
                      }`}
                    >
                      <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h4 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-3">
                          {event.title}
                        </h4>
                        <p className="font-sans text-charcoal-700 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship & Philosophy Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-sm shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                  alt="Couture Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 mb-4">
                  Craftsmanship & Philosophy
                </h2>
                <div className="w-16 h-px bg-gold-500 mb-6" />
                <div className="space-y-4 font-sans text-lg text-charcoal-700 leading-relaxed">
                  <p>
                    At the heart of VINOURA lies an unwavering commitment to exceptional
                    craftsmanship. Each garment is meticulously created by skilled artisans who have
                    dedicated their lives to perfecting their craft. We work exclusively with the
                    finest materials—luxurious silks from Italy, delicate laces from France, and
                    premium fabrics sourced from around the world.
                  </p>
                  <p>
                    Our philosophy is rooted in the belief that true luxury is found in the
                    invisible details: the hand-finished seams, the perfectly placed darts, the
                    careful attention to fit and drape. Every piece undergoes multiple fittings
                    and refinements, ensuring that it not only looks exquisite but feels
                    extraordinary to wear.
                  </p>
                  <p>
                    We honor traditional couture techniques while embracing innovation, creating
                    garments that are both timeless and contemporary. This balance between heritage
                    and modernity defines our approach to design, resulting in pieces that will
                    remain relevant and cherished for years to come.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Values
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto mb-6" />
              <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
                The principles that guide everything we create
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                    {value.title}
                  </h3>
                  <div className="w-12 h-px bg-gold-500 mb-4" />
                  <p className="font-sans text-charcoal-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Designer's Note Section */}
        <section className="mb-24 sm:mb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 mb-4">
                A Note from the Designer
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 sm:p-12 rounded-sm shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-48 shrink-0">
                  <div className="relative aspect-square overflow-hidden rounded-sm shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                      alt="Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                    Creative Director
                  </h3>
                  <div className="w-12 h-px bg-gold-500 mb-6" />
                  <div className="space-y-4 font-sans text-lg text-charcoal-700 leading-relaxed">
                    <p>
                      "Fashion, to me, is about creating moments of transformation. When a woman
                      puts on a VINOURA piece, I want her to feel not just beautiful, but powerful,
                      confident, and authentically herself. Every collection we create is a love
                      letter to the art of dressing—an invitation to express your unique elegance."
                    </p>
                    <p>
                      "We live in a time where everything moves quickly, but at VINOURA, we choose
                      to slow down. We choose to honor the process, to celebrate the craft, and to
                      create pieces that will become part of your story. This is not just fashion;
                      this is wearable art, designed to last."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Aesthetic Image Gallery */}
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
                The VINOURA Aesthetic
              </h2>
              <div className="w-20 h-px bg-gold-500 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/5]">
                    <img
                      src={image}
                      alt={`VINOURA aesthetic ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

