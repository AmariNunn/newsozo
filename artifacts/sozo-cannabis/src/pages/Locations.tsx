import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { useInView } from "@/components/useInView";
import muskegonImg from "@assets/Screenshot_2026-04-08_at_1.47.54_PM_1775674078986.png";
import flintImg from "@assets/Screenshot_2026-04-08_at_1.48.39_PM_1775674126145.png";
import saginawImg from "@assets/Screenshot_2026-04-08_at_1.49.07_PM_1775674153291.png";

const locations = [
  {
    id: 1,
    name: "Muskegon",
    fullName: "Sozo Muskegon",
    tagline: "At the corner of Seaway Drive and Hackley Avenue, Sozo Muskegon is the first cannabis store on your way into town, and yes, there's plenty of parking.",
    address: "580 W Hackley Ave, Muskegon, MI 49444",
    phone: "(231) 600-7696",
    email: "muskegon@sozocompanies.com",
    image: muskegonImg,
    hours: [
      { days: "Monday – Saturday", time: "10am – 8pm" },
      { days: "Sunday", time: "Closed" },
    ],
    mapUrl: "https://www.google.com/maps/dir//Sozo+Muskegon,+580+W+Hackley+Ave,+Muskegon,+MI+49444/@42.7029734,-86.8750475,7z/",
    shopUrl: "https://sozolife.com/locations/muskegon/muskegon-recreational/",
    openDays: [1, 2, 3, 4, 5, 6],
    openHour: 10,
    closeHour: 20,
  },
  {
    id: 2,
    name: "Flint",
    fullName: "Sozo Flint",
    tagline: "Located in a restored, classic mid-century bank, Sozo Flint offers customers a modern cannabis shopping experience facilitated by community-driven staff. Yes, we're using the vault.",
    address: "1101 Robert T Longway Blvd, Flint, MI 48503",
    phone: "(810) 500-7696",
    email: "flint@sozocompanies.com",
    image: flintImg,
    hours: [
      { days: "Monday – Saturday", time: "10am – 9pm" },
      { days: "Sunday", time: "12pm – 6pm" },
    ],
    mapUrl: "https://www.google.com/maps/dir//Sozo+Flint,+1101+Robert+T+Longway+Blvd,+Flint,+MI+48503/",
    shopUrl: "https://sozolife.com/locations/flint/flint-recreational/",
    openDays: [0, 1, 2, 3, 4, 5, 6],
    openHour: 10,
    closeHour: 21,
  },
  {
    id: 3,
    name: "Saginaw",
    fullName: "Sozo Saginaw",
    tagline: "Sozo Saginaw brings Michigan's premium vertically integrated cannabis experience to the heart of the Great Lakes Bay Region — quality you can trust, from our grow to your door.",
    address: "Saginaw, MI",
    phone: "(989) 600-7696",
    email: "saginaw@sozocompanies.com",
    image: saginawImg,
    hours: [
      { days: "Monday – Saturday", time: "10am – 8pm" },
      { days: "Sunday", time: "12pm – 6pm" },
    ],
    mapUrl: "https://www.google.com/maps/search/Sozo+Cannabis+Saginaw+MI/",
    shopUrl: "https://sozolife.com/locations/saginaw/",
    openDays: [0, 1, 2, 3, 4, 5, 6],
    openHour: 10,
    closeHour: 20,
  },
];

function isLocationOpen(loc: typeof locations[0]): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  if (!loc.openDays.includes(day)) return false;
  if (day === 0) return hour >= 12 && hour < 18;
  return hour >= loc.openHour && hour < loc.closeHour;
}

function LocationCard({ loc, index, inView }: { loc: typeof locations[0]; index: number; inView: boolean }) {
  const open = isLocationOpen(loc);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="card-lift flex flex-col overflow-hidden"
      style={{ background: "var(--bg-forest)", border: "1px solid var(--border-dark)" }}
      data-testid={`location-page-card-${loc.id}`}
    >
      {/* Photo */}
      <div className="relative h-60 overflow-hidden img-hover" style={{ background: "var(--bg-void)" }}>
        <img
          src={loc.image}
          alt={loc.fullName}
          className="w-full h-full object-contain object-center transition-transform duration-700"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(8,15,11,0.7) 100%)" }} />

        {/* Open/Closed badge */}
        <div className="absolute top-4 right-4">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-widest"
            style={{
              background: open ? "rgba(82,183,136,0.18)" : "rgba(255,255,255,0.08)",
              border: `1px solid ${open ? "rgba(82,183,136,0.4)" : "rgba(255,255,255,0.1)"}`,
              color: open ? "var(--green-accent)" : "var(--text-muted)",
              fontFamily: "'DM Sans', sans-serif",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: open ? "var(--green-accent)" : "var(--text-muted)" }} />
            {open ? "Open Now" : "Closed"}
          </div>
        </div>

        {/* Location name on photo */}
        <div className="absolute bottom-4 left-5">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-0.5"
            style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Michigan ✦
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px, 3vw, 32px)",
              color: "var(--text-inverse)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            {loc.fullName}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tagline */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          {loc.tagline}
        </p>

        {/* Contact info */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-start gap-2.5">
            <MapPin size={13} style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }} />
            <span className="text-xs leading-relaxed" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>
              {loc.address}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
            <a href={`tel:${loc.phone}`} className="text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>
              {loc.phone}
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
            <a href={`mailto:${loc.email}`} className="text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>
              {loc.email}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div
          className="p-4 mb-5"
          style={{ background: "rgba(245,240,232,0.03)", border: "1px solid var(--border-dark)" }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <Clock size={11} style={{ color: "var(--gold)" }} />
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}>
              Store Hours
            </span>
          </div>
          <div className="space-y-1.5">
            {loc.hours.map((h) => (
              <div key={h.days} className="flex justify-between text-xs">
                <span style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>{h.days}</span>
                <span style={{ color: h.time === "Closed" ? "var(--text-muted)" : "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif" }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 mt-auto">
          <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="flex-1">
            <button
              data-testid={`directions-btn-${loc.id}`}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all hover:brightness-110"
              style={{ background: "var(--gold)", color: "var(--text-primary)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <ExternalLink size={12} />
              Get Directions
            </button>
          </a>
          <a href={loc.shopUrl} target="_blank" rel="noreferrer" className="flex-1">
            <button
              className="w-full flex items-center justify-center gap-2 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all hover:bg-white/10"
              style={{ border: "1px solid var(--border-dark)", color: "var(--text-inverse)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Shop Online →
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Locations() {
  const { ref, inView } = useInView(0.05);

  return (
    <div style={{ background: "var(--bg-void)", minHeight: "100vh" }} className="pt-20">
      {/* Header */}
      <div
        className="py-20 px-6 lg:px-10 text-center relative overflow-hidden"
        style={{ background: "var(--grad-hero)", borderBottom: "1px solid var(--border-dark)" }}
      >
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
          className="text-xs tracking-[0.3em] uppercase mb-3 relative z-10"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Three Michigan Locations ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
          }}
        >
          Find Your Store
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm max-w-md mx-auto relative z-10"
          style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Premium cannabis, knowledgeable staff, and a welcoming experience across Michigan.
        </motion.p>
      </div>

      {/* Location cards */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" ref={ref}>
          {locations.map((loc, i) => (
            <LocationCard key={loc.id} loc={loc} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}
