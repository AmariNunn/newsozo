import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sozoLogoPath from "@assets/b39mHJlikfR8JFHpA-UOgc_1775664457835.png";

interface AgeGateProps {
  onVerify: () => void;
}

export function AgeGate({ onVerify }: AgeGateProps) {
  const [exiting, setExiting] = useState(false);

  function handleEnter() {
    window.dispatchEvent(new Event("sozo-scroll-top"));
    setExiting(true);
    setTimeout(onVerify, 600);
  }

  function handleExit() {
    window.dispatchEvent(new Event("sozo-scroll-top"));
    window.location.href = "https://google.com";
  }

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="age-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--bg-void)" }}
          data-testid="age-gate"
        >
          {/* Botanical vine decorations */}
          <svg className="age-gate-vine left-0" width="220" height="400" viewBox="0 0 220 400" fill="none" style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.12 }}>
            <path d="M20 400 C20 350 60 300 40 250 C20 200 80 160 60 110 C40 60 90 30 100 0" stroke="#52b788" strokeWidth="2" fill="none" />
            <path d="M40 300 C70 280 90 260 80 240" stroke="#52b788" strokeWidth="1.5" fill="none" />
            <path d="M50 220 C80 200 100 185 90 165" stroke="#52b788" strokeWidth="1.5" fill="none" />
            <path d="M35 160 C65 145 80 130 70 115" stroke="#52b788" strokeWidth="1.5" fill="none" />
            <circle cx="80" cy="240" r="12" stroke="#52b788" strokeWidth="1" fill="none" />
            <circle cx="90" cy="165" r="8" stroke="#52b788" strokeWidth="1" fill="none" />
            <circle cx="70" cy="115" r="10" stroke="#52b788" strokeWidth="1" fill="none" />
          </svg>
          <svg className="age-gate-vine right-0" width="220" height="400" viewBox="0 0 220 400" fill="none" style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0.12, transform: 'scaleX(-1)' }}>
            <path d="M20 400 C20 350 60 300 40 250 C20 200 80 160 60 110 C40 60 90 30 100 0" stroke="#52b788" strokeWidth="2" fill="none" />
            <path d="M40 300 C70 280 90 260 80 240" stroke="#52b788" strokeWidth="1.5" fill="none" />
            <path d="M50 220 C80 200 100 185 90 165" stroke="#52b788" strokeWidth="1.5" fill="none" />
            <path d="M35 160 C65 145 80 130 70 115" stroke="#52b788" strokeWidth="1.5" fill="none" />
            <circle cx="80" cy="240" r="12" stroke="#52b788" strokeWidth="1" fill="none" />
            <circle cx="90" cy="165" r="8" stroke="#52b788" strokeWidth="1" fill="none" />
            <circle cx="70" cy="115" r="10" stroke="#52b788" strokeWidth="1" fill="none" />
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col items-center text-center px-6 max-w-md"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-8"
            >
              <img src={sozoLogoPath} alt="Sozo Cannabis" className="h-16 w-auto brightness-0 invert opacity-90" />
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--green-accent)" }}
            >
              Michigan's Premier Cannabis · Est. 2019
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-display text-5xl md:text-6xl leading-tight mb-6"
              style={{ color: "var(--text-inverse)", fontFamily: "'Cormorant Garamond', serif" }}
            >
              Are you 21 or older?
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="text-sm mb-10"
              style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              You must be 21 or older to enter this site. By clicking "Yes, Enter" you confirm that you are of legal age.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7 }}
              className="w-24 h-px mb-10"
              style={{ background: "var(--border-gold)" }}
            />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <button
                data-testid="age-gate-enter"
                onClick={handleEnter}
                className="flex-1 py-4 px-8 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:brightness-110"
                style={{
                  background: "var(--gold)",
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Yes, Enter
              </button>
              <button
                data-testid="age-gate-exit"
                onClick={handleExit}
                className="flex-1 py-4 px-8 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-white/5"
                style={{
                  border: "1px solid var(--border-dark)",
                  color: "var(--text-inverse)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                No, Exit
              </button>
            </motion.div>

            {/* Legal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs mt-8"
              style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Must be 21+. For use by adults only. Keep out of reach of children.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
