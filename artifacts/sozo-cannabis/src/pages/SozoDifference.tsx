import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { Link } from "wouter";
import growImg from "@assets/Screenshot_2026-04-08_at_12.21.52_PM_1775669015082.png";
import labImg from "@assets/Screenshot_2026-04-08_at_12.21.45_PM_1775669015083.png";
import storeImg from "@assets/Screenshot_2026-04-08_at_12.22.00_PM_1775669015082.png";

const pillars = [
  {
    label: "Cultivation",
    tagline: "Grown with intention.",
    body: "Our master growers cultivate every plant under tightly controlled conditions — dialing in light spectra, humidity, nutrition, and harvest timing to extract peak potency and terpene profiles from each cultivar.",
    bullets: [
      "A world-class operational facility",
      "Deep commercial cannabis cultivation experience since beginning of legalization",
      "Technology, methods, and tools that inspire innovation and maximize sustainability",
      "40+ cultivars, leading genetics, and consistently high total cannabinoids and terpenoids",
      "Efficient operations",
    ],
    image: growImg,
    imageAlt: "Sozo Cannabis indoor grow facility",
  },
  {
    label: "The Sozo Lab",
    tagline: "Science in every product.",
    body: "The Sozo Lab is our in-house R&D and extraction operation. We formulate concentrates, edibles, and topicals from our own flower — giving us complete control over quality from seed to shelf.",
    bullets: [
      "A licensed, owned lab onsite with cultivation facility producing quality oils, waxes, cartridges",
      "A staff of experts, technicians, and lab support",
      "Onsite solventless processing, a method reserved for the flower of the highest caliber",
      "Flavorful processed products that employ cold storage to preserve maximum freshness and potency, and fresh frozen products to maximize trichome heads, resin, and terpene profile",
      "Proactive cannabinoid research and development",
    ],
    image: labImg,
    imageAlt: "Sozo Cannabis lab technician",
  },
  {
    label: "Sozo Stores",
    tagline: "Retail redefined.",
    body: "Our dispensaries were designed as destinations — warm, editorial, and knowledgeable. Each location reflects our belief that buying cannabis should feel like visiting a fine apothecary, not a gas station.",
    bullets: [
      "A welcoming, growing retail footprint in Michigan",
      "A vision to grow and increase access to quality cannabis products",
      "A record of regulatory compliance and professional retail management",
      "Utilization of cross-industry retail excellence training",
      "Custom-designed experience, from the beautiful lines of display cases to the way the product feels when you take it home",
    ],
    image: storeImg,
    imageAlt: "Sozo Cannabis store interior",
  },
];

function PillarSection({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const { ref, inView } = useInView(0.08);
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden`}
      style={{ border: "1px solid var(--border-dark)" }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${isReversed ? "lg:order-2" : ""}`}
        style={{ minHeight: 420 }}
      >
        <img
          src={pillar.image}
          alt={pillar.imageAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
        {/* Number overlay */}
        <div className="absolute top-6 left-6">
          <span
            className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5"
            style={{
              background: "rgba(8,15,11,0.7)",
              border: "1px solid var(--border-gold)",
              color: "var(--gold)",
              fontFamily: "'DM Sans', sans-serif",
              backdropFilter: "blur(8px)",
            }}
          >
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center p-10 lg:p-14 ${isReversed ? "lg:order-1" : ""}`}
        style={{ background: "rgba(245,240,232,0.02)" }}
      >
        <p
          className="text-[10px] tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {pillar.label}
        </p>
        <h2
          className="mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 3.5vw, 48px)",
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
          }}
        >
          {pillar.body}
        </p>

        <ul className="space-y-3">
          {pillar.bullets.map((bullet, bi) => (
            <motion.li
              key={bi}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + bi * 0.07 }}
              className="flex items-start gap-3"
            >
              <span
                className="flex-shrink-0 mt-[3px]"
                style={{ color: "var(--gold)", fontSize: 9 }}
              >
                ✦
              </span>
              <span
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(245,240,232,0.65)",
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
  );
}

export default function SozoDifference() {
  const { ref: introRef, inView: introInView } = useInView(0.1);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.2);

  return (
    <div style={{ background: "var(--bg-void)", minHeight: "100vh" }} className="pt-20">

      {/* Hero */}
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center py-28 px-6 lg:px-10 text-center relative overflow-hidden"
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
          The Sozo Difference ✦
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-3 justify-center mt-3 relative z-10"
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
        className="py-12 px-6 lg:px-10"
        style={{ background: "var(--bg-moss)", borderBottom: "1px solid var(--border-dark)" }}
        ref={introRef}
      >
        <div className="max-w-[860px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-base leading-relaxed"
            style={{
              color: "var(--text-inverse-dim)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            We cultivate, process (concentrate), and sell products in stores we feel good about,
            so we can offer quality products to our friends, family and you. No shortcuts. Plants
            grown with care produce better outcomes. Whether it's trichome-encrusted flower or
            top-quality concentrates, the better the input, the better the output, and the happier
            our customers will be. We hope you agree.
          </motion.p>
        </div>
      </div>

      {/* Three pillars — photo + text */}
      <div className="py-16 px-6 lg:px-10" style={{ background: "var(--bg-void)" }}>
        <div className="max-w-[1200px] mx-auto space-y-8">
          {pillars.map((pillar, i) => (
            <PillarSection key={pillar.label} pillar={pillar} index={i} />
          ))}
        </div>
      </div>

      {/* Divider quote */}
      <div
        className="py-16 px-6 lg:px-10 text-center"
        style={{
          background: "var(--bg-forest)",
          borderTop: "1px solid var(--border-dark)",
          borderBottom: "1px solid var(--border-dark)",
        }}
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
          className="mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 3vw, 36px)",
            color: "var(--green-accent)",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          Order ahead and save time.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
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
          transition={{ delay: 0.2 }}
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
