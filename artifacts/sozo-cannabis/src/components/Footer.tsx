import { Link } from "wouter";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import sozoLogoPath from "@assets/b39mHJlikfR8JFHpA-UOgc_1775664457835.png";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      data-testid="footer"
      style={{ background: "var(--bg-forest)", borderTop: "1px solid var(--gold)" }}
      className="text-sm"
    >
      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src={sozoLogoPath}
            alt="Sozo Cannabis"
            className="h-10 w-auto mb-5"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
          <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>
            Science-led cultivation. Elevated lifestyle. Michigan proud. Community rooted.
          </p>
          <div className="flex gap-4">
            <a
              data-testid="footer-instagram"
              href="https://instagram.com/sozolife"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--gold)" }}
            >
              <Instagram size={18} />
            </a>
            <a
              data-testid="footer-facebook"
              href="https://facebook.com/sozolife"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--gold)" }}
            >
              <Facebook size={18} />
            </a>
            <a
              data-testid="footer-twitter"
              href="https://twitter.com/sozolife"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--gold)" }}
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase mb-5 font-medium" style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}>
            Shop
          </h4>
          <ul className="space-y-3">
            {["Flower", "Pre-Rolls", "Vapes", "Edibles", "Concentrates", "Drinks"].map((item) => (
              <li key={item}>
                <Link href="/products">
                  <span className="cursor-pointer transition-colors hover:text-white" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase mb-5 font-medium" style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}>
            Company
          </h4>
          <ul className="space-y-3">
            {[
              { label: "About Sozo", href: "/about" },
              { label: "Locations", href: "/locations" },
              { label: "HighMiles Loyalty", href: "/highmiles" },
              { label: "Careers", href: "/about" },
              { label: "Press", href: "/about" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className="cursor-pointer transition-colors hover:text-white" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase mb-5 font-medium" style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}>
            Get Early Access
          </h4>
          <p className="text-xs mb-4" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
            Early access to drops, weekly deals, and exclusive HighMiles offers.
          </p>
          <div className="flex">
            <input
              data-testid="footer-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-xs outline-none"
              style={{
                background: "rgba(245,240,232,0.07)",
                border: "1px solid var(--border-dark)",
                borderRight: "none",
                color: "var(--text-inverse)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
            <button
              data-testid="footer-subscribe"
              className="px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all hover:brightness-110 whitespace-nowrap"
              style={{
                background: "var(--gold)",
                color: "var(--text-primary)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 lg:px-10 py-5"
        style={{ borderColor: "var(--border-dark)" }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 Sozo Cannabis. All rights reserved. Michigan Recreational/Medical License Holder.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {item}
              </a>
            ))}
            <span
              className="text-xs px-2 py-1 border"
              style={{ borderColor: "var(--border-gold)", color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Must Be 21+
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
