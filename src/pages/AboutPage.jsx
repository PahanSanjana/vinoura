import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import founderImage from '../assets/Vinuli.jpg';

const AboutPage = () => {
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
            Our Story
          </motion.span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-matte-black mb-6 tracking-tight">
            The House of Vinoura
          </h1>
          <div className="w-20 h-px bg-rose-gold mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg md:text-xl text-charcoal-dark/80 max-w-2xl mx-auto leading-relaxed">
            Where elegance becomes identity
          </p>
        </motion.div>

        {/* Founder Section */}
        <section className="mb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-off-white" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-charcoal-soft rounded-sm group"
              >
                <motion.img
                  src={founderImage}
                  alt="Vinuli Kalubowila - Founder & Fashion Designer"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Founder Content */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
                  >
                    Founder & Creative Vision
                  </motion.span>
                  <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-6">
                    Vinuli Kalubowila
                  </h2>
                  <div className="w-20 h-px bg-rose-gold mb-10" />
                </div>

                <div className="space-y-6 text-charcoal-dark/80 font-sans text-base sm:text-lg leading-relaxed">
                  <p>
                    As the creative force behind VINOURA, I am passionate about crafting modern, luxurious designs that celebrate individuality, art, and culture. Each piece I create blends creativity with confidence, telling a story that resonates with those who wear it. My collections embrace diversity, self-expression, and timeless elegance, inviting everyone to define their own style and narrative.
                  </p>
                  <p>
                    Fashion, for me, is more than clothing—it's a way to communicate, inspire, and transform imagination into wearable art. Using tools like Adobe Illustrator, fashion illustration, and portfolio design, I turn ideas into visual stories and stylish concepts. I'm constantly exploring, learning, and evolving as a designer, driven by creativity, innovation, and a love for modern aesthetics.
                  </p>
                  <p className="text-charcoal-dark font-medium">
                    Join me on this journey where fashion meets artistry, and let your wardrobe speak volumes about who you are.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Introduction Section */}
        <section className="mb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-off-white" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-charcoal-soft rounded-sm group"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80"
                  alt="VINOURA Brand"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
                  >
                    Our Philosophy
                  </motion.span>
                  <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-6">
                    A Legacy of Luxury
                  </h2>
                  <div className="w-20 h-px bg-rose-gold mb-10" />
                </div>
                <div className="space-y-6 text-charcoal-dark/80 font-sans text-base sm:text-lg leading-relaxed">
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
                  <p className="text-charcoal-dark font-medium">
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

        {/* Craftsmanship & Philosophy Section */}
        <section className="mb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-off-white" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-charcoal-soft rounded-sm group"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                  alt="Couture Craftsmanship"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
                  >
                    Our Commitment
                  </motion.span>
                  <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-6">
                    Craftsmanship & Philosophy
                  </h2>
                  <div className="w-20 h-px bg-rose-gold mb-10" />
                </div>
                <div className="space-y-6 text-charcoal-dark/80 font-sans text-base sm:text-lg leading-relaxed">
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
                Our Foundation
              </motion.span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-matte-black mb-4">
                Our Values
              </h2>
              <p className="font-sans text-base text-charcoal-dark/80 max-w-2xl mx-auto mb-6">
                The principles that guide everything we create
              </p>
              <div className="w-20 h-px bg-rose-gold mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-off-white p-8 rounded-sm border border-charcoal-soft/20 hover:border-rose-gold/30 transition-all duration-300"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-matte-black mb-4">
                    {value.title}
                  </h3>
                  <div className="w-12 h-px bg-rose-gold mb-4" />
                  <p className="font-sans text-charcoal-dark/80 leading-relaxed">
                    {value.description}
                  </p>
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

