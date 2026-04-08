import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { Link } from "wouter";

const values = [
  {
    title: "Science-Led Cultivation",
    body: "Our growing team combines deep botanical knowledge with modern environmental controls to maximize terpene expression and cannabinoid profiles in every cultivar.",
    icon: "🧬",
  },
  {
    title: "Michigan Proud",
    body: "We're a Michigan-born, Michigan-grown company. Everything from seed selection to final sale happens within our state. Local roots, global standards.",
    icon: "🏔",
  },
  {
    title: "Community Rooted",
    body: "We give back to the communities that support us. Local hiring, local sourcing, local events. Sozo is more than a dispensary — it's a neighborhood anchor.",
    icon: "🌿",
  },
  {
    title: "Elevated Lifestyle",
    body: "We believe cannabis belongs alongside other elevated lifestyle choices — fine food, craft coffee, thoughtful fashion. We're raising the bar for what a dispensary can be.",
    icon: "✨",
  },
];

const team = [
  { name: "Dr. Amara Osei", title: "Head of Cultivation", bio: "PhD in Plant Biology, 12 years of cannabis cultivation research. Expert in maximizing terpene expression through environmental optimization." },
  { name: "Marcus Delray", title: "Director of Retail", bio: "15 years building premium retail experiences. Former luxury brand director who brought editorial sensibility to cannabis retail." },
  { name: "Sofia Chen", title: "Head of Product", bio: "Connects Sozo's cultivation team with vendors to curate the most compelling product lineup in Michigan cannabis." },
];

export default function About() {
  const { ref, inView } = useInView(0.1);

  return (
    <div style={{ background: "var(--bg-void)", minHeight: "100vh" }} className="pt-20">
      {/* Hero */}
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-6 lg:px-10 text-center relative overflow-hidden"
        style={{ background: "var(--grad-hero)" }}
      >
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.3em] uppercase mb-4 relative z-10"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Est. 2019 · Michigan
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 max-w-3xl relative z-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(44px, 7vw, 80px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
            lineHeight: 1.1,
          }}
        >
          Science-led cultivation.
          <br />
          <em>Elevated lifestyle.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-base max-w-2xl mx-auto relative z-10"
          style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, lineHeight: 1.7 }}
        >
          Sozo Cannabis is Michigan's premier vertically integrated cannabis company. We grow our own flower, run our own stores, and maintain a direct relationship with every cultivar we sell. Three premium locations. 40+ unique strains. One standard of excellence.
        </motion.p>
      </div>

      {/* Values */}
      <div className="py-20 px-6 lg:px-10" style={{ background: "var(--bg-forest)" }}>
        <div className="max-w-[1400px] mx-auto" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--text-inverse)",
              fontWeight: 400,
            }}
          >
            What We Stand For
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-5 p-6"
                style={{ border: "1px solid var(--border-dark)", background: "rgba(245,240,232,0.02)" }}
              >
                <span className="text-3xl flex-shrink-0">{value.icon}</span>
                <div>
                  <h3
                    className="text-sm tracking-[0.15em] uppercase font-semibold mb-2"
                    style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {value.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 px-6 lg:px-10" style={{ background: "var(--bg-void)" }}>
        <div className="max-w-[1000px] mx-auto">
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--text-inverse)",
              fontWeight: 400,
            }}
          >
            The Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 text-center"
                style={{ border: "1px solid var(--border-dark)", background: "var(--bg-forest)" }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "var(--bg-moss)", border: "1px solid var(--border-gold)" }}
                >
                  <span style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300 }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3
                  className="text-base mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif", color: "var(--text-inverse)", fontWeight: 400 }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {member.title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-16 px-6 lg:px-10 text-center"
        style={{ background: "var(--bg-forest)", borderTop: "1px solid var(--border-dark)" }}
      >
        <h2
          className="mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
          }}
        >
          Come experience it yourself.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/locations">
            <button
              data-testid="about-find-store"
              className="px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all hover:brightness-110"
              style={{
                background: "var(--gold)",
                color: "var(--text-primary)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Find a Store →
            </button>
          </Link>
          <Link href="/highmiles">
            <button
              data-testid="about-join-loyalty"
              className="px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all hover:bg-white/10"
              style={{
                border: "1px solid var(--border-dark)",
                color: "var(--text-inverse)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Join HighMiles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
