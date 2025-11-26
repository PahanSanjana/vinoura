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
      transition={{ duration: 0.6 }}
      className="mb-12 pb-8 border-b border-beige-200"
    >
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {Object.entries(filters).map(([category, options]) => (
          <div key={category} className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-widest text-charcoal-600 mr-2">
              {category}:
            </span>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleFilterClick(category, option)}
                className={`font-sans text-xs uppercase tracking-wider px-4 py-2 transition-all duration-300 ${
                  activeFilters[category] === option
                    ? 'bg-charcoal-900 text-ivory-50'
                    : 'bg-beige-100 text-charcoal-700 hover:bg-beige-200'
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

