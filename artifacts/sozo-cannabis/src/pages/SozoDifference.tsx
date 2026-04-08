import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { Link } from "wouter";

const pillars = [
  {
    label: "Cultivation",
    tagline: "Grown with intention.",
    body: "Our master growers cultivate every plant under tightly controlled conditions — dialing in light spectra, humidity, nutrition, and harvest timing to extract peak potency and terpene profiles from each cultivar.",
    bullets: [
      "State-of-the-art indoor grow facility in Michigan",
      "Proprietary genetic library of 40+ unique strains",
      "No pesticides — integrated pest management only",
      "Hand-trimmed, slow-cured flower for maximum freshness",
      "Environmental data logged and analyzed every grow cycle",
      "Third-party lab-tested for potency, terpenes, and contaminants",
    ],
  },
  {
    label: "The Sozo Lab",
    tagline: "Science in every product.",
    body: "The Sozo Lab is our in-house R&D and extraction operation. We formulate concentrates, edibles, and topicals from our own flower — giving us complete control over quality from seed to shelf.",
    bullets: [
      "Full-spectrum and broad-spectrum extraction processes",
      "Live resin, rosin, and distillate lines produced on-site",
      "Precise dosing in every edible and tincture we make",
      "Formulation team led by licensed cannabis scientists",
      "Continuous R&D into new cannabinoid and terpene blends",
      "ISO-standard lab hygiene and safety protocols",
    ],
  },
  {
    label: "Sozo Stores",
    tagline: "Retail redefined.",
    body: "Our dispensaries were designed as destinations — warm, editorial, and knowledgeable. Each location reflects our belief that buying cannabis should feel like visiting a fine apothecary, not a gas station.",
    bullets: [
      "Three premium Michigan locations: Ann Arbor, Detroit, Grand Rapids",
      "Budtenders trained through the Sozo Cannabis Academy",
      "Curated selection of house and partner brands",
      "HighMiles loyalty program available in every store",
      "Private consultation rooms for medical patients",
      "Contactless pickup and same-day delivery available",
    ],
  },
];

export default function SozoDifference() {
  const { ref: introRef, inView: introInView } = useInView(0.1);
  const { ref: pillarsRef, inView: pillarsInView } = useInView(0.05);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.2);

  return (
    <div style={{ background: "var(--bg-void)", minHeight: "100vh" }} className="pt-20">
      {/* Hero */}
      <div
        className="min-h-[65vh] flex flex-col items-center justify-center py-28 px-6 lg:px-10 text-center relative overflow-hidden"
        style={{ background: "var(--grad-hero)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.3em] uppercase mb-4 relative z-10"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          About Us ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 max-w-3xl relative z-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(44px, 7vw, 84px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
            lineHeight: 1.1,
          }}
        >
          It's what's inside
          <br />
          <em>that counts.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-base max-w-2xl mx-auto relative z-10"
          style={{
            color: "var(--text-inverse-dim)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.75,
          }}
        >
          Sozo is the only Michigan cannabis brand that grows its own flower, makes its own products in
          its own lab, and sells them in its own stores. Total vertical integration means total quality control
          — from the seed in the ground to the product in your hand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 mt-3 relative z-10"
        >
          {pillars.map((p) => (
            <span
              key={p.label}
              className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5"
              style={{
                border: "1px solid var(--border-gold)",
                color: "var(--gold)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {p.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Intro strip */}
      <div
        className="py-10 px-6 lg:px-10 text-center"
        style={{ background: "var(--bg-moss)", borderBottom: "1px solid var(--border-dark)" }}
        ref={introRef}
      >
        <div className="max-w-[900px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-base leading-relaxed"
            style={{
              color: "var(--text-inverse-dim)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            Most cannabis brands are just re-sellers. We built Sozo from the ground up to own every
            step of the process — which means we can stand behind everything we sell with absolute
            confidence. That's the Sozo difference.
          </motion.p>
        </div>
      </div>

      {/* Three pillars */}
      <div className="py-24 px-6 lg:px-10" style={{ background: "var(--bg-void)" }} ref={pillarsRef}>
        <div className="max-w-[1200px] mx-auto space-y-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 32 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text column */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  0{i + 1} — {pillar.label}
                </p>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(32px, 4.5vw, 56px)",
                    color: "var(--text-inverse)",
                    fontWeight: 300,
                    lineHeight: 1.15,
                  }}
                >
                  {pillar.tagline}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{
                    color: "var(--text-inverse-dim)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    maxWidth: 480,
                  }}
                >
                  {pillar.body}
                </p>
              </div>

              {/* Bullets column */}
              <div
                className={`p-8 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                style={{
                  border: "1px solid var(--border-dark)",
                  background: "rgba(245,240,232,0.02)",
                }}
              >
                <ul className="space-y-4">
                  {pillar.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -10 }}
                      animate={pillarsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.12 + bi * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="flex-shrink-0 mt-1"
                        style={{ color: "var(--gold)", fontSize: 10 }}
                      >
                        ✦
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{
                          color: "rgba(245,240,232,0.7)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider quote */}
      <div
        className="py-16 px-6 lg:px-10 text-center"
        style={{ background: "var(--bg-forest)", borderTop: "1px solid var(--border-dark)", borderBottom: "1px solid var(--border-dark)" }}
      >
        <p
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 3vw, 36px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.4,
          }}
        >
          "We don't just sell cannabis — we grow it, craft it, and stand behind every gram."
        </p>
        <p
          className="mt-4 text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Sozo Cannabis · Est. 2019 · Michigan
        </p>
      </div>

      {/* CTA */}
      <div
        className="py-20 px-6 lg:px-10 text-center"
        style={{ background: "var(--bg-void)" }}
        ref={ctaRef}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(30px, 4vw, 52px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
          }}
        >
          Experience the difference.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-sm mb-10 max-w-md mx-auto"
          style={{
            color: "var(--text-inverse-dim)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          Ready to try products made with obsessive care? Browse our full lineup or find a store near you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/products">
            <button
              data-testid="difference-buy-now"
              className="px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all hover:brightness-110"
              style={{
                background: "var(--gold)",
                color: "var(--text-primary)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Buy Now →
            </button>
          </Link>
          <Link href="/locations">
            <button
              data-testid="difference-find-locations"
              className="px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all hover:bg-white/10"
              style={{
                border: "1px solid var(--border-dark)",
                color: "var(--text-inverse)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Find our products near you
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
