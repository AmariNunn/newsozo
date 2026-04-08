import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { useInView } from "@/components/useInView";

const locations = [
  {
    id: 1,
    name: "Ann Arbor",
    fullName: "Sozo Cannabis Ann Arbor",
    address: "123 Main St, Ann Arbor, MI 48104",
    phone: "(734) 555-0101",
    hours: {
      Monday: "9am – 9pm",
      Tuesday: "9am – 9pm",
      Wednesday: "9am – 9pm",
      Thursday: "9am – 9pm",
      Friday: "9am – 10pm",
      Saturday: "9am – 10pm",
      Sunday: "10am – 8pm",
    },
    gradient: "linear-gradient(135deg, #0d1f17 0%, #1a3d2b 100%)",
    mapUrl: "https://maps.google.com?q=Ann+Arbor+MI",
  },
  {
    id: 2,
    name: "Grand Rapids",
    fullName: "Sozo Cannabis Grand Rapids",
    address: "456 Division Ave, Grand Rapids, MI 49503",
    phone: "(616) 555-0202",
    hours: {
      Monday: "9am – 9pm",
      Tuesday: "9am – 9pm",
      Wednesday: "9am – 9pm",
      Thursday: "9am – 9pm",
      Friday: "9am – 10pm",
      Saturday: "9am – 10pm",
      Sunday: "10am – 8pm",
    },
    gradient: "linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 100%)",
    mapUrl: "https://maps.google.com?q=Grand+Rapids+MI",
  },
  {
    id: 3,
    name: "Kalamazoo",
    fullName: "Sozo Cannabis Kalamazoo",
    address: "789 Portage St, Kalamazoo, MI 49007",
    phone: "(269) 555-0303",
    hours: {
      Monday: "9am – 9pm",
      Tuesday: "9am – 9pm",
      Wednesday: "9am – 9pm",
      Thursday: "9am – 9pm",
      Friday: "9am – 10pm",
      Saturday: "9am – 10pm",
      Sunday: "10am – 8pm",
    },
    gradient: "linear-gradient(135deg, #080f0b 0%, #0d1f17 100%)",
    mapUrl: "https://maps.google.com?q=Kalamazoo+MI",
  },
];

function isOpen(): boolean {
  const now = new Date();
  const h = now.getHours();
  const d = now.getDay();
  if (d === 0) return h >= 10 && h < 20;
  if (d === 5 || d === 6) return h >= 9 && h < 22;
  return h >= 9 && h < 21;
}

export default function Locations() {
  const { ref, inView } = useInView(0.1);
  const open = isOpen();

  return (
    <div style={{ background: "var(--bg-void)", minHeight: "100vh" }} className="pt-20">
      {/* Header */}
      <div
        className="py-20 px-6 lg:px-10 text-center"
        style={{ borderBottom: "1px solid var(--border-dark)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Three Michigan Locations
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
          }}
        >
          Find Your Store
        </motion.h1>
      </div>

      {/* Location cards */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" ref={ref}>
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-lift"
              style={{ background: "var(--bg-forest)", border: "1px solid var(--border-dark)" }}
              data-testid={`location-page-card-${loc.id}`}
            >
              {/* Image area */}
              <div
                className="h-56 relative flex items-center justify-center"
                style={{ background: loc.gradient }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 48,
                    color: "var(--gold)",
                    opacity: 0.25,
                    fontWeight: 300,
                  }}
                >
                  {loc.name}
                </span>

                <div className="absolute top-4 right-4">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-widest"
                    style={{
                      background: open ? "rgba(82,183,136,0.15)" : "rgba(255,255,255,0.08)",
                      border: `1px solid ${open ? "rgba(82,183,136,0.4)" : "rgba(255,255,255,0.1)"}`,
                      color: open ? "var(--green-accent)" : "var(--text-muted)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: open ? "var(--green-accent)" : "var(--text-muted)" }}
                    />
                    {open ? "Open Now" : "Closed"}
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h2
                  className="text-2xl mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-inverse)", fontWeight: 500 }}
                >
                  {loc.fullName}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} style={{ color: "var(--gold)" }} />
                    <span className="text-sm" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>{loc.phone}</span>
                  </div>
                </div>

                {/* Hours */}
                <div
                  className="p-4 mb-6"
                  style={{ background: "rgba(245,240,232,0.03)", border: "1px solid var(--border-dark)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={12} style={{ color: "var(--gold)" }} />
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase font-medium"
                      style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Store Hours
                    </span>
                  </div>
                  <div className="space-y-1">
                    {Object.entries(loc.hours).map(([day, time]) => (
                      <div key={day} className="flex justify-between text-xs py-0.5">
                        <span style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>{day}</span>
                        <span style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="flex-1">
                    <button
                      data-testid={`directions-btn-${loc.id}`}
                      className="w-full flex items-center justify-center gap-2 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all hover:brightness-110"
                      style={{
                        background: "var(--gold)",
                        color: "var(--text-primary)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <ExternalLink size={12} />
                      Get Directions
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
