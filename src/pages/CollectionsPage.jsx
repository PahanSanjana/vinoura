import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import CollectionCard from '../components/CollectionCard';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';

const CollectionsPage = () => {
  const [filteredCollections, setFilteredCollections] = useState(null);

  const collections = [
    {
      id: 1,
      name: 'Ethereal Elegance',
      description: 'A timeless collection celebrating the beauty of minimalist luxury with flowing silhouettes and delicate craftsmanship.',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
      season: 'Spring/Summer',
      color: 'Ivory',
      style: 'Couture',
      silhouette: 'A-Line',
    },
    {
      id: 2,
      name: 'Midnight Opulence',
      description: 'Dramatic evening wear that captures the essence of sophistication through rich textures and bold silhouettes.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
      season: 'Autumn/Winter',
      color: 'Charcoal',
      style: 'Couture',
      silhouette: 'Mermaid',
    },
    {
      id: 3,
      name: 'Golden Hour',
      description: 'Luminous pieces inspired by the warm glow of sunset, featuring metallic accents and flowing fabrics.',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      season: 'Resort',
      color: 'Gold',
      style: 'Ready-to-Wear',
      silhouette: 'Sheath',
    },
    {
      id: 4,
      name: 'Ivory Dreams',
      description: 'Pure, refined elegance in the softest ivory tones, perfect for the modern bride seeking timeless sophistication.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      season: 'Pre-Fall',
      color: 'Ivory',
      style: 'Bridal',
      silhouette: 'Ball Gown',
    },
    {
      id: 5,
      name: 'Charcoal Symphony',
      description: 'A sophisticated collection in deep charcoal tones, showcasing architectural lines and modern tailoring.',
      image: 'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=800&q=80',
      season: 'Autumn/Winter',
      color: 'Charcoal',
      style: 'Ready-to-Wear',
      silhouette: 'Column',
    },
    {
      id: 6,
      name: 'Beige Serenity',
      description: 'Soft, neutral tones that evoke tranquility and understated luxury in every carefully crafted piece.',
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
      season: 'Spring/Summer',
      color: 'Beige',
      style: 'Couture',
      silhouette: 'A-Line',
    },
    {
      id: 7,
      name: 'Resort Collection',
      description: 'Effortless elegance for the modern traveler, blending comfort with sophisticated design.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
      season: 'Resort',
      color: 'Neutral',
      style: 'Ready-to-Wear',
      silhouette: 'Sheath',
    },
    {
      id: 8,
      name: 'Couture Heritage',
      description: 'A celebration of traditional craftsmanship and artisanal techniques passed down through generations.',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      season: 'Pre-Fall',
      color: 'Gold',
      style: 'Couture',
      silhouette: 'Mermaid',
    },
    {
      id: 9,
      name: 'Minimalist Luxe',
      description: 'The art of less is more, featuring clean lines and exceptional fabrics in a refined palette.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      season: 'Spring/Summer',
      color: 'Neutral',
      style: 'Ready-to-Wear',
      silhouette: 'Column',
    },
  ];

  const handleFilterChange = (filters) => {
    if (!filters.season && !filters.color && !filters.style && !filters.silhouette) {
      setFilteredCollections(null);
      return;
    }

    const filtered = collections.filter((collection) => {
      const matchesSeason = !filters.season || collection.season === filters.season;
      const matchesColor = !filters.color || collection.color === filters.color;
      const matchesStyle = !filters.style || collection.style === filters.style;
      const matchesSilhouette = !filters.silhouette || collection.silhouette === filters.silhouette;

      return matchesSeason && matchesColor && matchesStyle && matchesSilhouette;
    });

    setFilteredCollections(filtered);
  };

  const displayCollections = filteredCollections || collections;

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      {/* Main Content */}
      <main className="pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark mb-4 block"
            >
              Haute Couture
            </motion.span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-matte-black mb-6 tracking-tight">
              Our Collections
            </h1>
            <div className="w-20 h-px bg-rose-gold mx-auto mb-6" />
            <p className="font-sans text-base sm:text-lg md:text-xl text-charcoal-dark/80 max-w-2xl mx-auto leading-relaxed">
              Explore the essence of haute couture
            </p>
          </motion.div>

          {/* Filter Bar */}
          <FilterBar onFilterChange={handleFilterChange} />

          {/* Collections Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {displayCollections.length > 0 ? (
              displayCollections.map((collection, index) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="font-sans text-charcoal-dark/80 text-lg">
                  No collections match the selected filters.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionsPage;

