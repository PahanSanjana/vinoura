import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const NewArrivals = () => {
  const items = [
    {
      id: 1,
      name: 'Ethereal Evening',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80',
      price: '$2,890',
      tag: 'Silk Gown',
      span: 'lg', // large hero look
    },
    {
      id: 2,
      name: 'Midnight Elegance',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&q=80',
      price: '$3,200',
      tag: 'Tailored Coat',
      span: 'sm',
    },
    {
      id: 3,
      name: 'Golden Hour',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200&q=80',
      price: '$2,650',
      tag: 'Draped Dress',
      span: 'sm',
    },
    {
      id: 4,
      name: 'Ivory Dreams',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80',
      price: '$2,950',
      tag: 'Bridal Set',
      span: 'sm',
    },
    {
      id: 5,
      name: 'Charcoal Symphony',
      image: 'https://images.unsplash.com/photo-1566479179817-4d448f9b5037?w=1200&q=80',
      price: '$3,100',
      tag: 'Structured Blazer',
      span: 'lg',
    },
    {
      id: 6,
      name: 'Beige Serenity',
      image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=1200&q=80',
      price: '$2,750',
      tag: 'Knit Ensemble',
      span: 'sm',
    },
  ];

  const marqueeWords = ['New Arrivals', 'Fall / Winter', 'Limited Run', 'New Arrivals', 'Fall / Winter', 'Limited Run'];

  return (
    <section className="relative overflow-hidden bg-off-white py-28 px-4 sm:px-8 lg:px-12">
      {/* faint grain texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 border-b border-matte-black/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-sans text-[11px] tracking-[0.25em] text-charcoal-dark">
              Collection 004 — Present
            </p>
            <h2 className="font-serif text-[13vw] leading-[0.9] text-matte-black sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              New Arrivals
            </h2>
          </div>
          <p className="max-w-[280px] font-sans text-sm leading-relaxed text-charcoal-dark sm:text-right">
            Six looks, cut for the season ahead. Available in limited quantities, in-store and online.
          </p>
        </div>

        {/* Marquee ticker */}
        <div className="relative mb-16 flex overflow-hidden border-y border-matte-black/10 py-4">
          <motion.div
            className="flex shrink-0 items-center gap-10 pr-10 font-sans text-xs uppercase tracking-[0.3em] text-charcoal-dark"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          >
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                {word}
                <span className="h-1 w-1 rounded-full bg-rose-gold" />
              </span>
            ))}
          </motion.div>
        </div>

        {/* Lookbook grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <LookCard
              key={item.id}
              item={item}
              index={index}
              className={item.span === 'lg' ? 'sm:col-span-2 lg:col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const LookCard = ({ item, index, className }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const glowX = useSpring(mx, { stiffness: 150, damping: 20 });
  const glowY = useSpring(my, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.article
      className={`group relative ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative aspect-[4/5] cursor-pointer overflow-hidden bg-charcoal-soft"
      >
        {/* reveal wipe */}
        <motion.div
          className="absolute inset-0 z-20 origin-top bg-off-white"
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: [0.76, 0, 0.24, 1] }}
        />

        <motion.img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* cursor glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-soft-light group-hover:opacity-100"
          style={{
            background: 'radial-gradient(220px circle at var(--gx) var(--gy), rgba(230,196,175,0.55), transparent 70%)',
          }}
          animate={{
            '--gx': glowX.get() * 100 + '%',
            '--gy': glowY.get() * 100 + '%',
          }}
        />

        {/* index number */}
        <span className="absolute left-5 top-5 z-20 font-serif text-sm text-off-white/80">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* corner CTA, appears on hover */}
        <motion.div
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-off-white/90 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArrowUpRight className="h-4 w-4 text-matte-black" />
        </motion.div>

        {/* baseline accent */}
        <motion.div
          className="absolute bottom-0 left-0 z-20 h-[2px] bg-rose-gold"
          initial={{ width: '0%' }}
          animate={{ width: hovered ? '100%' : '0%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* caption */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-matte-black">{item.name}</h3>
          <p className="mt-1 font-sans text-xs tracking-[0.15em] text-charcoal-dark">{item.tag}</p>
        </div>
        <p className="whitespace-nowrap pt-1 font-sans text-sm text-charcoal-dark">{item.price}</p>
      </div>
    </motion.article>
  );
};

export default NewArrivals;