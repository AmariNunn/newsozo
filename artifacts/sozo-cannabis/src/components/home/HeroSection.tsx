import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import * as THREE from "three";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create floating particles
    const count = 200;
    const positions = new Float32Array(count * 3);
    const velocities: number[] = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      velocities.push(
        (Math.random() - 0.5) * 0.003,
        Math.random() * 0.004 + 0.001,
        (Math.random() - 0.5) * 0.002
      );
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x52b788,
      size: 0.06,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    let mouse = { x: 0, y: 0 };
    function onMouseMove(e: MouseEvent) {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.02;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.02;
    }
    window.addEventListener("mousemove", onMouseMove);

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      const pos = geo.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        pos[i * 3] += velocities[i * 3] + mouse.x;
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around
        if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5;
        if (pos[i * 3] > 8) pos[i * 3] = -8;
        if (pos[i * 3] < -8) pos[i * 3] = 8;
      }
      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }

    setTimeout(() => animate(), 600);

    function onResize() {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
};

export function HeroSection() {
  function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }

  return (
    <section
      data-testid="hero-section"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--grad-hero)" }}
    >
      <ParticleCanvas />

      {/* Radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(26,61,43,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-[900px] px-6"
      >
        {/* Eyebrow */}
        <motion.p
          variants={stagger.item}
          className="text-xs tracking-[0.35em] uppercase mb-8"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          data-testid="hero-eyebrow"
        >
          Michigan's Premier Cannabis &nbsp;·&nbsp; Est. 2019
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={stagger.item}
          className="mb-6 leading-[1.05]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 8vw, 88px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
          }}
          data-testid="hero-headline"
        >
          Grown with science.
          <br />
          Crafted with care.
          <br />
          <em>Made to bloom.</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={stagger.item}
          className="text-lg mb-10 max-w-xl mx-auto"
          style={{
            color: "var(--text-inverse-dim)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
          }}
          data-testid="hero-subheadline"
        >
          40+ unique cultivars grown by us, for you.
          <br />
          Three premium Michigan locations.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={stagger.item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <button
              data-testid="hero-cta-shop"
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:brightness-110"
              style={{
                background: "var(--gold)",
                color: "var(--text-primary)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Shop This Week's Deals →
            </button>
          </Link>
          <Link href="/locations">
            <button
              data-testid="hero-cta-locations"
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1px solid var(--border-dark)",
                color: "var(--text-inverse)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Find a Location
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        data-testid="hero-scroll"
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
        style={{ color: "var(--text-inverse)" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </button>
    </section>
  );
}
