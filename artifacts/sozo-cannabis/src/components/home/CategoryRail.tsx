import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { Link } from "wouter";

const categories = [
  { name: "Flower", icon: "🌸", desc: "40+ cultivars" },
  { name: "Pre-Rolls", icon: "🌿", desc: "Hand-rolled" },
  { name: "Vapes", icon: "💨", desc: "Batch signature" },
  { name: "Edibles", icon: "🍫", desc: "Infused delights" },
  { name: "Concentrates", icon: "✨", desc: "Full-spectrum" },
  { name: "Drinks", icon: "🥤", desc: "THC beverages" },
];

export function CategoryRail() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      data-testid="category-rail"
      className="py-20 px-6 lg:px-10"
      style={{ background: "var(--bg-parchment)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
          >
            The Collection
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "var(--text-primary)",
              fontWeight: 400,
            }}
          >
            Same flower. Different forms.
          </h2>
        </motion.div>

        {/* Horizontal scrollable rail */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex-shrink-0 snap-start"
            >
              <Link href="/products">
                <div
                  data-testid={`category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-300"
                  style={{
                    width: 180,
                    height: 200,
                    background: "var(--bg-forest)",
                    border: "1px solid var(--border-dark)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Gold border on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ border: "1px solid var(--gold)" }}
                  />

                  <span className="text-4xl mb-4">{cat.icon}</span>
                  <h3
                    className="text-sm font-medium tracking-wide mb-1.5"
                    style={{ color: "var(--text-inverse)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {cat.desc}
                  </p>

                  <p
                    className="absolute bottom-4 text-[10px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Shop →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
