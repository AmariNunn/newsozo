import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { useState, useRef, useEffect } from "react";
import img1 from "@assets/pomelli_bdna_image_0408_(1)_1775664388286.png";
import img2 from "@assets/pomelli_bdna_image_0408_(2)_1775664388287.png";
import img3 from "@assets/pomelli_bdna_image_0408_(3)_1775664388287.png";
import img4 from "@assets/pomelli_bdna_image_0408_(4)_1775664388288.png";
import img5 from "@assets/pomelli_bdna_image_0408_(5)_1775664388288.png";
import img6 from "@assets/pomelli_bdna_image_0408_1775664388288.png";

const deals = [
  {
    id: 1,
    category: "Edibles",
    name: "Full Moon Cannabis-Infused Chocolates",
    price: "2/$20",
    image: img1,
    size: "large",
    endDate: "Apr 16",
  },
  {
    id: 2,
    category: "Drinks",
    name: "Cannabis-Infused Beverages Pack",
    price: "3/$18",
    image: img2,
    size: "tall",
    endDate: "Apr 16",
  },
  {
    id: 3,
    category: "Concentrates",
    name: "Made By A Farmer Concentrates",
    price: "3/$45",
    image: img3,
    size: "wide",
    endDate: "Apr 16",
  },
  {
    id: 4,
    category: "Pre-Rolls",
    name: "Premium Pre-Roll Selection",
    price: "10/$25",
    image: img4,
    size: "small",
    endDate: "Apr 16",
  },
  {
    id: 5,
    category: "Flower",
    name: "Dubs & Dimes Melonade Pack",
    price: "8/$85",
    image: img5,
    size: "small",
    endDate: "Apr 16",
  },
  {
    id: 6,
    category: "Vapes",
    name: "Batch Signature 2G Vapes",
    price: "From $35",
    image: img6,
    size: "small",
    endDate: "Apr 16",
  },
];

function DealCard({ deal, className = "" }: { deal: typeof deals[0]; className?: string }) {
  return (
    <div
      data-testid={`deal-card-${deal.id}`}
      className={`group relative overflow-hidden cursor-pointer ${className}`}
      style={{ background: "var(--bg-forest)" }}
    >
      {/* Image */}
      <div className="absolute inset-0 img-hover overflow-hidden">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ mixBlendMode: "normal" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--grad-card)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5">
        {/* Top badge */}
        <div>
          <span
            className="inline-block text-[10px] tracking-[0.25em] uppercase px-2.5 py-1"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid var(--border-gold)",
              color: "var(--gold)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {deal.category}
          </span>
        </div>

        {/* Bottom content */}
        <div>
          {/* Price */}
          <div
            className="mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "var(--gold)",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            {deal.price}
          </div>

          {/* Name */}
          <p
            className="text-xs mb-1"
            style={{ color: "rgba(245,240,232,0.7)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {deal.name}
          </p>

          {/* End date */}
          <p
            className="text-[10px] tracking-wide"
            style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Weekly Special · Ends {deal.endDate}
          </p>

          {/* Shop now - slides up on hover */}
          <div className="overflow-hidden mt-3">
            <div className="slide-up-overlay">
              <button
                className="w-full py-2.5 text-xs tracking-[0.2em] uppercase font-medium"
                style={{
                  background: "var(--gold)",
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileCarousel() {
  const [paused, setPaused] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loopedDeals = [...deals, ...deals];

  const handleTouchStart = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setPaused(true);
  };

  const handleTouchEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      resumeTimerRef.current = null;
      setPaused(false);
    }, 1200);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <div
      className="md:hidden overflow-hidden -mx-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <div
        className="flex gap-3 py-4 pl-6"
        style={{
          width: "max-content",
          animation: "ticker 25s linear infinite",
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {loopedDeals.map((deal, i) => (
          <div
            key={`${deal.id}-${i}`}
            className="flex-shrink-0"
            style={{ width: "68vw", height: 360 }}
          >
            <DealCard deal={deal} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedSpecials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      data-testid="featured-specials"
      className="py-20 px-6 lg:px-10"
      style={{ background: "var(--bg-parchment)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-2"
              style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Week of Apr 6–16
            </p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              This Week's Specials
            </h2>
          </div>
          <a
            href="/products"
            className="block text-xs tracking-[0.2em] uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
            style={{ color: "var(--text-secondary)", fontFamily: "'DM Sans', sans-serif" }}
          >
            View All Deals →
          </a>
        </motion.div>

        {/* Desktop: asymmetric editorial grid */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "auto",
          }}
        >
          {/* Large card - 3 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ gridColumn: "1 / 4", gridRow: "1 / 3", minHeight: 480 }}
            className="card-lift"
          >
            <DealCard deal={deals[0]} className="h-full" />
          </motion.div>

          {/* Tall card - 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ gridColumn: "4 / 6", gridRow: "1 / 3", minHeight: 480 }}
            className="card-lift"
          >
            <DealCard deal={deals[1]} className="h-full" />
          </motion.div>

          {/* Smaller card - 1 col, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ gridColumn: "6 / 7", gridRow: "1 / 3", minHeight: 480 }}
            className="card-lift"
          >
            <DealCard deal={deals[2]} className="h-full" />
          </motion.div>

          {/* Bottom row - 3 cards each 2 cols */}
          {[deals[3], deals[4], deals[5]].map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.07 }}
              style={{ gridColumn: `${i * 2 + 1} / ${i * 2 + 3}`, gridRow: "3 / 4", minHeight: 280 }}
              className="card-lift"
            >
              <DealCard deal={deal} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: auto-scrolling carousel */}
        <MobileCarousel />
      </div>
    </section>
  );
}
