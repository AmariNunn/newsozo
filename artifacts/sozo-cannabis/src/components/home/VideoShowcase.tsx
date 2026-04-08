import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { useState, useRef, useEffect } from "react";

const videos = [
  {
    src: "/videos/sozo-video-1.mp4",
    label: "Flower",
    caption: "Premium Cultivars",
  },
  {
    src: "/videos/sozo-video-2.mp4",
    label: "Pre-Rolls",
    caption: "Hand-Crafted",
  },
  {
    src: "/videos/sozo-video-3.mp4",
    label: "Vapes",
    caption: "Batch Signature",
  },
  {
    src: "/videos/sozo-video-4.mp4",
    label: "Experience",
    caption: "Sozo Life",
  },
];

function VideoCard({ video }: { video: typeof videos[0] }) {
  return (
    <div
      className="relative overflow-hidden group"
      style={{
        width: "clamp(200px, 22vw, 300px)",
        aspectRatio: "9/16",
        borderRadius: 2,
      }}
    >
      <video
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Live indicator */}
      <div
        className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-80"
        style={{ background: "var(--green-accent)", animation: "pulse-green 2s infinite" }}
      />

      {/* Label overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 pt-10 pb-4"
        style={{ background: "linear-gradient(to top, rgba(8,15,11,0.85) 0%, transparent 100%)" }}
      >
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-0.5"
          style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {video.label}
        </p>
        <p
          className="text-xs"
          style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {video.caption}
        </p>
      </div>
    </div>
  );
}

export function VideoShowcase() {
  const { ref, inView } = useInView(0.1);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef(0);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loopedVideos = [...videos, ...videos];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setDragOffset(e.touches[0].clientX - touchStartX.current);
  };

  const handleTouchEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      resumeTimerRef.current = null;
      setDragOffset(0);
      setPaused(false);
    }, 1200);
  };

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  return (
    <section
      data-testid="video-showcase"
      className="py-20 overflow-hidden"
      style={{ background: "var(--bg-void)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
            >
              The Sozo Story
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "var(--text-inverse)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Grown in Michigan.
              <br />
              <em>Made for you.</em>
            </h2>
          </div>
          <p
            className="text-sm max-w-xs"
            style={{
              color: "var(--text-inverse-dim)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            From seed to sale, every product starts in our state-of-the-art Michigan grow facility — and ends in your hands.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed ticker — breaks out of the content container */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Drag layer */}
        <div
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: dragOffset === 0 ? "transform 0.4s ease" : "none",
          }}
        >
          {/* Animation layer — 8 cards × (card_width + 16px gap) — seamless at -50% */}
          <div
            className="flex py-2"
            style={{
              width: "max-content",
              animation: "ticker 28s linear infinite",
              animationPlayState: paused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            {loopedVideos.map((video, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ marginRight: 16 }}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <div className="h-px flex-1" style={{ background: "var(--border-dark)" }} />
          <p
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
          >
            In motion ✦ Touch to pause
          </p>
          <div className="h-px flex-1" style={{ background: "var(--border-dark)" }} />
        </motion.div>
      </div>
    </section>
  );
}
