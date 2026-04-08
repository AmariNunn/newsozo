import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { X, Menu, Search, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import sozoLogoPath from "@assets/b39mHJlikfR8JFHpA-UOgc_1775664457835.png";

const navLinks = [
  { label: "Shop Now", href: "/products" },
  { label: "About Us", href: "/difference" },
  { label: "Locations", href: "/locations" },
  { label: "HighMiles", href: "/highmiles" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.dispatchEvent(new Event("sozo-scroll-top"));
  }

  return (
    <>
      <nav
        data-testid="navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(13,31,23,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-dark)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="nav-logo">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollTop}>
              <img
                src={sozoLogoPath}
                alt="Sozo Cannabis"
                className="h-9 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span
                  className="text-xs tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer"
                  style={{
                    color: location === link.href
                      ? "var(--gold)"
                      : link.href === "/products"
                        ? "var(--gold)"
                        : "var(--text-inverse)",
                    textShadow: "0 1px 2px rgba(0,0,0,0.45)",
                    opacity: location === link.href ? 1 : 0.9,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              data-testid="nav-search"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text-inverse)" }}
              onClick={scrollTop}
            >
              <Search size={18} />
            </button>
            <Link href="/locations">
              <button
                data-testid="nav-location"
                className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
                style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
                onClick={scrollTop}
              >
                <MapPin size={14} />
                Find Store
              </button>
            </Link>
            <Link href="/products">
              <button
                data-testid="nav-shop-cta"
                className="px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200 hover:brightness-110"
                style={{
                  background: "var(--gold)",
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onClick={scrollTop}
              >
                Shop Now
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden"
            style={{ color: "var(--text-inverse)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col px-10 py-32"
            style={{ background: "var(--bg-void)" }}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link href={link.href} onClick={() => setMobileOpen(false)}>
                    <span
                      className="block text-4xl cursor-pointer hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--text-inverse)",
                        textShadow: "0 2px 8px rgba(0,0,0,0.45)",
                        fontWeight: 300,
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--text-inverse-dim)" }}>
                Michigan's Premier Cannabis · Est. 2019
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
