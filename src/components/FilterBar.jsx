import { motion } from 'framer-motion';
import { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState({
    season: null,
    color: null,
    style: null,
    silhouette: null,
  });

  const filters = {
    season: ['Spring/Summer', 'Autumn/Winter', 'Resort', 'Pre-Fall'],
    color: ['Neutral', 'Gold', 'Charcoal', 'Ivory', 'Beige'],
    style: ['Couture', 'Ready-to-Wear', 'Bridal', 'Accessories'],
    silhouette: ['A-Line', 'Sheath', 'Ball Gown', 'Mermaid', 'Column'],
  };

  const handleFilterClick = (category, value) => {
    const newFilters = {
      ...activeFilters,
      [category]: activeFilters[category] === value ? null : value,
    };
    setActiveFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 pb-10 border-b border-charcoal-soft/20"
    >
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {Object.entries(filters).map(([category, options]) => (
          <div key={category} className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal-dark mr-2 font-medium">
              {category}:
            </span>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleFilterClick(category, option)}
                className={`font-sans text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 ${
                  activeFilters[category] === option
                    ? 'bg-matte-black text-off-white border border-matte-black'
                    : 'bg-off-white text-charcoal-dark border border-charcoal-soft/30 hover:border-rose-gold/50 hover:text-rose-gold'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FilterBar;

