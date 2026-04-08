import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { Link } from "wouter";

const tiers = [
  { name: "Bronze", points: "0–499 pts", color: "#cd7f32", textColor: "#fff" },
  { name: "Silver", points: "500–1,499 pts", color: "#c0c0c0", textColor: "#1a1a17" },
  { name: "Gold", points: "1,500–4,999 pts", color: "#c9a84c", textColor: "#1a1a17" },
  { name: "Platinum", points: "5,000+ pts", color: "#e8e0f0", textColor: "#1a1a17" },
];

function TierCard({ tier, index }: { tier: typeof tiers[0]; index: number }) {
  const offsets = ["-60px", "-30px", "0px", "30px"];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -3 : 3 }}
      whileHover={{ y: -10, rotate: 0, zIndex: 10, scale: 1.04 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      className="foil-card absolute w-40 rounded-lg p-5 flex flex-col justify-between shadow-xl cursor-pointer"
      style={{
        height: 220,
        left: offsets[index],
        top: `${index * 18}px`,
        zIndex: index + 1,
        border: `1px solid rgba(201,168,76,0.25)`,
      }}
      data-testid={`tier-card-${tier.name.toLowerCase()}`}
    >
      <div>
        <span
          className="text-[10px] tracking-[0.2em] uppercase block mb-1"
          style={{ color: "rgba(201,168,76,0.5)", fontFamily: "'DM Sans', sans-serif" }}
        >
          HighMiles
        </span>
        <div
          className="inline-block px-2.5 py-1 text-xs font-semibold mb-3"
          style={{ background: tier.color, color: tier.textColor, borderRadius: 2 }}
        >
          {tier.name}
        </div>
      </div>

      <div>
        <p
          className="text-[10px] leading-relaxed"
          style={{ color: "rgba(245,240,232,0.5)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {tier.points}
        </p>
        <div
          className="mt-3 h-px"
          style={{ background: `linear-gradient(90deg, ${tier.color}40, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export function HighMilesFeature() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      data-testid="highmiles-feature"
      className="py-24 px-6 lg:px-10 overflow-hidden"
      style={{ background: "var(--bg-void)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-16 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
            >
              HighMiles Loyalty ✦
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 52px)",
                color: "var(--text-inverse)",
                fontWeight: 300,
              }}
            >
              The dopest loyalty
              <br />
              <em>program in cannabis.</em>
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                color: "var(--text-inverse-dim)",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 480,
              }}
            >
              Earn points with every purchase. Unlock exclusive drops, penny products, and member-only deals as you climb through Bronze, Silver, Gold, and Platinum tiers. The more you explore, the more you earn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/highmiles">
                <button
                  data-testid="highmiles-join"
                  className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-all hover:brightness-110"
                  style={{
                    background: "var(--gold)",
                    color: "var(--text-primary)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Join Free
                </button>
              </Link>
              <Link href="/highmiles">
                <button
                  data-testid="highmiles-learn"
                  className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-all hover:bg-white/10"
                  style={{
                    border: "1px solid var(--border-dark)",
                    color: "var(--text-inverse)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Learn More
                </button>
              </Link>
            </div>

            {/* Micro stats */}
            <div
              className="flex flex-wrap gap-6 pt-6"
              style={{ borderTop: "1px solid var(--border-dark)" }}
            >
              {["1 pt per $1", "4 Tiers", "Penny Products"].map((stat) => (
                <div key={stat} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--green-accent)" }}
                  />
                  <span
                    className="text-xs tracking-wide"
                    style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right tier cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
            style={{ height: 320 }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.12) 0%, transparent 70%)",
              }}
            />

            {/* Stacked cards */}
            <div className="relative" style={{ width: 200, height: 300 }}>
              {tiers.map((tier, i) => (
                <TierCard key={tier.name} tier={tier} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
