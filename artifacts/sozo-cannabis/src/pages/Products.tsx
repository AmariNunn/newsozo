import { motion } from "framer-motion";
import { useInView } from "@/components/useInView";
import { useState } from "react";
import img1 from "@assets/pomelli_bdna_image_0408_(1)_1775664388286.png";
import img2 from "@assets/pomelli_bdna_image_0408_(2)_1775664388287.png";
import img3 from "@assets/pomelli_bdna_image_0408_(3)_1775664388287.png";
import img4 from "@assets/pomelli_bdna_image_0408_(4)_1775664388288.png";
import img5 from "@assets/pomelli_bdna_image_0408_(5)_1775664388288.png";
import img6 from "@assets/pomelli_bdna_image_0408_1775664388288.png";

const categories = ["All", "Flower", "Pre-Rolls", "Vapes", "Edibles", "Concentrates", "Drinks"];

const products = [
  { id: 1, name: "Full Moon Cannabis Chocolates", brand: "Midnight Roots", category: "Edibles", price: "2/$20", image: img1, badge: "Weekly Special", thc: "200mg THC" },
  { id: 2, name: "Cannabis-Infused Beverages Pack", brand: "Pleasantea / Highly Casual / Mary Jones", category: "Drinks", price: "3/$18", image: img2, badge: "Weekly Special", thc: "2–20mg THC" },
  { id: 3, name: "Made By A Farmer Concentrates", brand: "Made By A Farmer", category: "Concentrates", price: "3/$45", image: img3, badge: "Staff Pick", thc: "Varies" },
  { id: 4, name: "Premium Pre-Roll Selection", brand: "Multiple Brands", category: "Pre-Rolls", price: "10/$25", image: img4, badge: "Best Value", thc: "1g each" },
  { id: 5, name: "Dubs & Dimes Melonade + Honolulu Blue", brand: "Dubs & Dimes", category: "Flower", price: "8/$85", image: img5, badge: "Weekly Special", thc: "3.5g each" },
  { id: 6, name: "Batch Signature 2G Vapes", brand: "Batch", category: "Vapes", price: "From $35", image: img6, badge: "New", thc: "2G" },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView(0.05);

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: "var(--bg-parchment)", minHeight: "100vh" }} className="pt-20">
      {/* Header */}
      <div
        className="py-20 px-6 lg:px-10 text-center"
        style={{ background: "var(--bg-forest)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--green-accent)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Apr 6 – Apr 16
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            color: "var(--text-inverse)",
            fontWeight: 300,
          }}
        >
          The Weekly Rotation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm max-w-md mx-auto mt-4"
          style={{ color: "var(--text-inverse-dim)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Curated flower, edibles, and more. Shop our latest premium picks this week.
        </motion.p>
      </div>

      {/* Category filter */}
      <div
        className="sticky top-20 z-30 px-6 lg:px-10 py-4 flex gap-3 overflow-x-auto"
        style={{ background: "var(--bg-bone)", borderBottom: "1px solid var(--border-light)" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            data-testid={`filter-${cat.toLowerCase()}`}
            onClick={() => setActiveCategory(cat)}
            className="flex-shrink-0 px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: activeCategory === cat ? "var(--text-primary)" : "transparent",
              color: activeCategory === cat ? "var(--bg-parchment)" : "var(--text-muted)",
              border: `1px solid ${activeCategory === cat ? "var(--text-primary)" : "var(--border-light)"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden card-lift"
              style={{
                background: "var(--bg-white)",
                border: "1px solid var(--border-light)",
              }}
              data-testid={`product-card-${product.id}`}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden img-hover"
                style={{ height: 280, background: "var(--bg-bone)" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1"
                    style={{
                      background: "var(--bg-void)",
                      color: "var(--gold)",
                      fontFamily: "'DM Sans', sans-serif",
                      border: "1px solid var(--border-gold)",
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {product.category} · {product.thc}
                </p>
                <h3
                  className="text-base mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif", color: "var(--text-primary)", fontWeight: 400 }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {product.brand}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-primary)", fontWeight: 600 }}
                  >
                    {product.price}
                  </span>
                  <button
                    data-testid={`add-to-cart-${product.id}`}
                    className="px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-all hover:brightness-110"
                    style={{
                      background: "var(--bg-forest)",
                      color: "var(--text-inverse)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>
              No products in this category this week. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
