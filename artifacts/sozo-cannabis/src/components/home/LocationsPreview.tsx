import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const locations = [
  {
    id: 1,
    name: "Sozo Cannabis — Ann Arbor",
    address: "123 Main St, Ann Arbor, MI 48104",
    phone: "(734) 555-0101",
    hours: {
      "Mon–Thu": "9am – 9pm",
      "Fri–Sat": "9am – 10pm",
      Sun: "10am – 8pm",
    },
    openNow: true,
    gradient: "linear-gradient(135deg, #0d1f17 0%, #1a3d2b 100%)",
  },
  {
    id: 2,
    name: "Sozo Cannabis — Grand Rapids",
    address: "456 Division Ave, Grand Rapids, MI 49503",
    phone: "(616) 555-0202",
    hours: {
      "Mon–Thu": "9am – 9pm",
      "Fri–Sat": "9am – 10pm",
      Sun: "10am – 8pm",
    },
    openNow: true,
    gradient: "linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 100%)",
  },
  {
    id: 3,
    name: "Sozo Cannabis — Kalamazoo",
    address: "789 Portage St, Kalamazoo, MI 49007",
    phone: "(269) 555-0303",
    hours: {
      "Mon–Thu": "9am – 9pm",
      "Fri–Sat": "9am – 10pm",
      Sun: "10am – 8pm",
    },
    openNow: false,
    gradient: "linear-gradient(135deg, #080f0b 0%, #0d1f17 100%)",
  },
];

function isStoreOpen(hours: Record<string, string>): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  if (day === 0) { // Sunday
    return hour >= 10 && hour < 20;
  } else if (day === 5 || day === 6) { // Fri-Sat
    return hour >= 9 && hour < 22;
  } else {
    return hour >= 9 && hour < 21;
  }
}

export function LocationsPreview() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      data-testid="locations-preview"
      className="py-20 px-6 lg:px-10"
      style={{ background: "var(--bg-forest)" }}
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
            Michigan Locations
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "var(--text-inverse)",
              fontWeight: 400,
            }}
          >
            Visit Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => {
            const open = isStoreOpen(loc.hours);
            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group overflow-hidden card-lift"
                style={{
                  background: "var(--bg-void)",
                  border: "1px solid var(--border-dark)",
                }}
                data-testid={`location-card-${loc.id}`}
              >
                {/* Image placeholder with gradient */}
                <div
                  className="h-48 relative overflow-hidden img-hover"
                  style={{ background: loc.gradient }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-4xl tracking-[0.3em] uppercase opacity-30"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--gold)",
                        fontWeight: 300,
                      }}
                    >
                      Sozo
                    </span>
                  </div>
                  {/* Open/closed badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase"
                      style={{
                        background: open ? "rgba(82,183,136,0.15)" : "rgba(255,255,255,0.08)",
                        border: `1px solid ${open ? "rgba(82,183,136,0.4)" : "rgba(255,255,255,0.1)"}`,
                        color: open ? "var(--green-accent)" : "var(--text-muted)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: open ? "var(--green-accent)" : "var(--text-muted)",
                          ...(open ? { animation: "pulse-green 2s infinite" } : {}),
                        }}
                      />
                      {open ? "Open Now" : "Closed"}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--text-inverse)",
                      fontWeight: 500,
                    }}
                  >
                    {loc.name}
                  </h3>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPin size={13} style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }} />
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {loc.address}
                    </p>
                  </div>

                  {/* Hours */}
                  <div
                    className="mb-5 p-3"
                    style={{ background: "rgba(245,240,232,0.03)", border: "1px solid var(--border-dark)" }}
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <Clock size={11} style={{ color: "var(--gold)" }} />
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase font-medium"
                        style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Hours
                      </span>
                    </div>
                    {Object.entries(loc.hours).map(([day, time]) => (
                      <div key={day} className="flex justify-between text-xs py-0.5">
                        <span style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>{day}</span>
                        <span style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>{time}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <Link href="/products">
                      <button
                        data-testid={`location-shop-${loc.id}`}
                        className="flex-1 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-all hover:brightness-110"
                        style={{
                          background: "var(--gold)",
                          color: "var(--text-primary)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        Shop Online
                      </button>
                    </Link>
                    <a
                      href={`https://maps.google.com?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`location-directions-${loc.id}`}
                    >
                      <button
                        className="flex items-center gap-1.5 px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-all hover:bg-white/10"
                        style={{
                          border: "1px solid var(--border-dark)",
                          color: "var(--text-inverse-dim)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        <ExternalLink size={11} />
                        Directions
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
