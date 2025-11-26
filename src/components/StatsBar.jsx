import { motion } from 'framer-motion';
import { Award, Users, Sparkles, Heart } from 'lucide-react';

const StatsBar = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '15+', subtext: 'In Luxury Fashion' },
    { icon: Users, label: 'Global Clients', value: '50K+', subtext: 'Satisfied Customers' },
    { icon: Sparkles, label: 'Collections', value: '200+', subtext: 'Unique Designs' },
    { icon: Heart, label: 'Craftsmanship', value: '100%', subtext: 'Handcrafted Quality' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-matte-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-rose-gold/10 rounded-full group-hover:bg-rose-gold/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-rose-gold" />
                  </div>
                </div>
                <motion.div
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif text-off-white mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.div>
                <p className="font-sans text-xs uppercase tracking-wider text-rose-gold mb-1">
                  {stat.label}
                </p>
                <p className="font-sans text-xs text-off-white/60">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;

