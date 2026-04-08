import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { useRef } from "react";

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

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex-shrink-0 relative overflow-hidden group"
      style={{
        width: "clamp(200px, 22vw, 300px)",
        aspectRatio: "9/16",
        borderRadius: 2,
      }}
    >
      <video
        ref={videoRef}
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,15,11,0.85) 0%, rgba(8,15,11,0.2) 50%, transparent 100%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-1"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {video.label}
        </p>
        <p
          className="text-sm"
          style={{
            color: "rgba(245,240,232,0.85)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "1.1rem",
          }}
        >
          {video.caption}
        </p>
      </div>

      <div
        className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-80"
        style={{ background: "var(--green-accent)", animation: "pulse-green 2s infinite" }}
      />
    </motion.div>
  );
}

export function VideoShowcase() {
  const { ref, inView } = useInView(0.1);

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

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {videos.map((video, i) => (
            <div key={i} className="snap-start">
              <VideoCard video={video} index={i} />
            </div>
          ))}
        </div>

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
            Swipe to explore
          </p>
          <div className="h-px flex-1" style={{ background: "var(--border-dark)" }} />
        </motion.div>
      </div>
    </section>
  );
}
