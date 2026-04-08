import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import muskegonImg from "@assets/Screenshot_2026-04-08_at_1.47.54_PM_1775674078986.png";
import flintImg from "@assets/Screenshot_2026-04-08_at_1.48.39_PM_1775674126145.png";
import saginawImg from "@assets/Screenshot_2026-04-08_at_1.49.07_PM_1775674153291.png";

type LocationHours = { days: string; time: string }[];

const locations = [
  {
    id: 1,
    name: "Muskegon",
    address: "580 W Hackley Ave, Muskegon, MI 49444",
    phone: "(231) 600-7696",
    image: muskegonImg,
    hours: [
      { days: "Monday – Saturday", time: "10am – 8pm" },
      { days: "Sunday", time: "Closed" },
    ] as LocationHours,
    openCheck: (day: number, h: number) =>
      day >= 1 && day <= 6 && h >= 10 && h < 20,
  },
  {
    id: 2,
    name: "Flint",
    address: "1101 Robert T Longway Blvd, Flint, MI 48503",
    phone: "(810) 500-7696",
    image: flintImg,
    hours: [
      { days: "Monday – Saturday", time: "10am – 9pm" },
      { days: "Sunday", time: "12pm – 6pm" },
    ] as LocationHours,
    openCheck: (day: number, h: number) =>
      (day >= 1 && day <= 6 && h >= 10 && h < 21) ||
      (day === 0 && h >= 12 && h < 18),
  },
  {
    id: 3,
    name: "Saginaw",
    address: "Saginaw, MI",
    phone: "(989) 600-7696",
    image: saginawImg,
    hours: [
      { days: "Monday – Saturday", time: "10am – 8pm" },
      { days: "Sunday", time: "12pm – 6pm" },
    ] as LocationHours,
    openCheck: (day: number, h: number) =>
      (day >= 1 && day <= 6 && h >= 10 && h < 20) ||
      (day === 0 && h >= 12 && h < 18),
  },
];

export function LocationsPreview() {
  const { ref, inView } = useInView(0.1);
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

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
            const open = loc.openCheck(day, hour);
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
                {/* Location image */}
                <div className="h-48 relative overflow-hidden img-hover bg-[var(--bg-forest)]">
                  <img
                    src={loc.image}
                    alt={`Sozo Cannabis ${loc.name}`}
                    className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* Open/closed badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase"
                      style={{
                        background: open ? "rgba(82,183,136,0.15)" : "rgba(0,0,0,0.5)",
                        border: `1px solid ${open ? "rgba(82,183,136,0.4)" : "rgba(255,255,255,0.1)"}`,
                        color: open ? "var(--green-accent)" : "var(--text-muted)",
                        fontFamily: "'DM Sans', sans-serif",
                        backdropFilter: "blur(6px)",
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
                    Sozo Cannabis — {loc.name}
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
                    {loc.hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-xs py-0.5">
                        <span style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>{h.days}</span>
                        <span style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>{h.time}</span>
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
