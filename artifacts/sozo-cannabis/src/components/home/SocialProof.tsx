import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { Star } from "lucide-react";
import { Link } from "wouter";

const reviews = [
  {
    id: 1,
    name: "Alex M.",
    location: "Ann Arbor, MI",
    rating: 5,
    text: "Sozo has completely changed how I think about cannabis. The staff is incredibly knowledgeable — they helped me find the perfect cultivar for my needs. The store itself is gorgeous.",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Jordan K.",
    location: "Grand Rapids, MI",
    rating: 5,
    text: "Best dispensary in Michigan, no contest. Their own-grown flower is miles above anything else I've tried. The HighMiles program is fantastic — I've earned so many rewards.",
    date: "February 2025",
  },
  {
    id: 3,
    name: "Sam R.",
    location: "Kalamazoo, MI",
    rating: 5,
    text: "The weekly specials are always incredible. I love that they grow everything themselves — you can tell the quality is different. The concentrates section is unbeatable.",
    date: "April 2025",
  },
  {
    id: 4,
    name: "Taylor W.",
    location: "Ann Arbor, MI",
    rating: 5,
    text: "I've been coming to Sozo since they opened. The consistency of their product is what keeps me coming back. Science-led cultivation is more than a slogan — it shows in every batch.",
    date: "March 2025",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#c9a84c" stroke="none" />
      ))}
    </div>
  );
}

export function SocialProof() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      data-testid="social-proof"
      className="py-20 px-6 lg:px-10"
      style={{ background: "var(--bg-parchment)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Reviews
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "var(--text-primary)",
              fontWeight: 400,
            }}
          >
            What Michigan is saying.
          </h2>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col p-6"
              style={{
                background: "var(--bg-white)",
                border: "1px solid var(--border-light)",
                marginTop: i % 2 === 1 ? 16 : 0,
              }}
              data-testid={`review-${review.id}`}
            >
              <div className="mb-3">
                <StarRating count={review.rating} />
              </div>
              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "var(--text-secondary)", fontFamily: "'DM Sans', sans-serif" }}
              >
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "var(--text-primary)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {review.location}
                  </p>
                </div>
                <span
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p
            className="text-4xl md:text-5xl mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--text-primary)",
              fontWeight: 300,
            }}
          >
            4.9 stars across 3 locations
          </p>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
          >
            1,200+ verified Google reviews
          </p>
          <a
            href="https://g.page/sozolife"
            target="_blank"
            rel="noreferrer"
            data-testid="leave-review-cta"
          >
            <button
              className="text-xs tracking-[0.2em] uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "var(--text-secondary)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Leave a Review →
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
