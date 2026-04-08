import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--bg-void)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-[120px] leading-none font-thin mb-0"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)", opacity: 0.3, fontWeight: 300 }}
        >
          404
        </p>
        <h1
          className="text-3xl mb-4 -mt-4"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-inverse)", fontWeight: 300 }}
        >
          Page not found.
        </h1>
        <p
          className="text-sm mb-8"
          style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button
            data-testid="not-found-home"
            className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-all hover:brightness-110"
            style={{
              background: "var(--gold)",
              color: "var(--text-primary)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Back to Home →
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
