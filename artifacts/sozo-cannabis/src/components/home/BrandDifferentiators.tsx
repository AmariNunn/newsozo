import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";

const pillars = [
  {
    icon: "🧬",
    title: "Maximized Terpenes",
    body: "Full spectrum expression through controlled cultivation environments and optimized harvest timing.",
  },
  {
    icon: "🔬",
    title: "Lab Tested Every Batch",
    body: "Certificate of analysis per lot — potency, terpene profile, contaminants. Full transparency, every time.",
  },
  {
    icon: "🌱",
    title: "100% Michigan Grown",
    body: "Seed to sale, all 3 stores. Our cultivation team oversees every stage of growth in our Michigan facility.",
  },
];

export function BrandDifferentiators() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      data-testid="brand-differentiators"
      className="py-16"
      style={{
        background: "var(--bg-bone)",
        borderTop: "1px solid var(--border-gold)",
        borderBottom: "1px solid var(--border-gold)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: "var(--border-gold)" }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-10 py-10"
              data-testid={`pillar-${i + 1}`}
            >
              <span className="text-4xl mb-4">{pillar.icon}</span>
              <h3
                className="tracking-[0.15em] uppercase text-sm font-semibold mb-3"
                style={{ color: "var(--text-primary)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
