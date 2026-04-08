import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";

const tiers = [
  {
    name: "Bronze",
    points: "0 – 499 pts",
    color: "#cd7f32",
    perks: ["1 pt per $1 spent", "Birthday bonus", "Early access to weekly deals"],
  },
  {
    name: "Silver",
    points: "500 – 1,499 pts",
    color: "#c0c0c0",
    perks: ["Everything in Bronze", "5% bonus on purchases", "Exclusive member deals", "Free pre-roll monthly"],
  },
  {
    name: "Gold",
    points: "1,500 – 4,999 pts",
    color: "#c9a84c",
    perks: ["Everything in Silver", "10% bonus on purchases", "Penny products access", "Priority customer support"],
  },
  {
    name: "Platinum",
    points: "5,000+ pts",
    color: "#9b8bcc",
    perks: ["Everything in Gold", "15% bonus on purchases", "Exclusive drops first access", "Personal budtender", "VIP events"],
  },
];

const faqs = [
  { q: "How do I earn HighMiles points?", a: "Earn 1 point for every dollar you spend at any Sozo Cannabis location or online. Points are automatically added to your account after each purchase." },
  { q: "How do I redeem points?", a: "Points can be redeemed at checkout for discounts on future purchases. Penny products are available once you reach Gold tier." },
  { q: "Do my points expire?", a: "Points expire after 12 months of inactivity. Stay active to keep your points and tier status." },
  { q: "Can I use HighMiles online?", a: "Yes! HighMiles points work both in-store and online across all three Michigan locations." },
];

export default function HighMiles() {
  const { ref, inView } = useInView(0.1);

  return (
    <div style={{ background: "var(--bg-void)", minHeight: "100vh" }} className="pt-20">
      {/* Hero */}
      <div
        className="py-24 px-6 lg:px-10 text-center"
        style={{ background: "var(--grad-hero)", borderBottom: "1px solid var(--border-dark)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          HighMiles Loyalty Program ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(42px, 7vw, 80px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
          }}
        >
          The dopest loyalty
          <br />
          <em>program in cannabis.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-sm max-w-lg mx-auto mb-10"
          style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Earn points with every purchase. Unlock exclusive rewards, penny products, and member-only drops as you level up.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          data-testid="highmiles-enroll"
          className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all hover:brightness-110"
          style={{
            background: "var(--gold)",
            color: "var(--text-primary)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Join HighMiles Free →
        </motion.button>
      </div>

      {/* Stats bar */}
      <div
        className="py-8 px-6 lg:px-10"
        style={{ background: "var(--bg-moss)", borderBottom: "1px solid var(--border-dark)" }}
      >
        <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center gap-10">
          {[
            { label: "Points per $1", value: "1" },
            { label: "Loyalty Tiers", value: "4" },
            { label: "Members & Growing", value: "10K+" },
            { label: "Avg Member Savings", value: "$200/yr" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl mb-0.5"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)", fontWeight: 600 }}
              >
                {stat.value}
              </p>
              <p
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tiers */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20" ref={ref}>
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
          Choose Your Level
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="foil-card p-6 flex flex-col"
              style={{ border: `1px solid rgba(201,168,76,0.2)` }}
              data-testid={`tier-${tier.name.toLowerCase()}`}
            >
              <div
                className="inline-block px-3 py-1.5 text-xs font-bold tracking-wider mb-4 self-start"
                style={{ background: tier.color, color: i < 2 ? "#1a1a17" : "#1a1a17", borderRadius: 2 }}
              >
                {tier.name}
              </div>
              <p
                className="text-xs mb-5"
                style={{ color: "rgba(245,240,232,0.4)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {tier.points}
              </p>
              <ul className="space-y-2.5 flex-1">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span style={{ color: tier.color, marginTop: 2, fontSize: 10 }}>✦</span>
                    <span
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div
        className="py-16 px-6 lg:px-10"
        style={{ background: "var(--bg-forest)", borderTop: "1px solid var(--border-dark)" }}
      >
        <div className="max-w-[800px] mx-auto">
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              color: "var(--text-inverse)",
              fontWeight: 400,
            }}
          >
            Frequently Asked
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-6"
                style={{ borderBottom: "1px solid var(--border-dark)" }}
                data-testid={`faq-${i + 1}`}
              >
                <h3
                  className="text-base mb-2"
                  style={{ fontFamily: "'DM Serif Display', serif", color: "var(--text-inverse)", fontWeight: 400 }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
