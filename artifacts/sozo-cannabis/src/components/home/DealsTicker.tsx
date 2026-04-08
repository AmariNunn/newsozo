import { Link } from "wouter";

const deals = [
  "10/$25 Drag & Draw Pre-Rolls",
  "8/$85 Melonado Pack",
  "3/$45 Vape Carts",
  "20% OFF Mary Jones Syrup",
  "2/$30 Dubs & Dimes Flower",
  "Batch 2G Vapes from $35",
  "Full Moon Chocolates 2/$20",
  "Pleasantea Drinks 3/$18",
];

export function DealsTicker() {
  const repeated = [...deals, ...deals];

  return (
    <div
      data-testid="deals-ticker"
      className="w-full relative z-10 -mb-3 md:mb-0"
      style={{ background: "var(--bg-moss)", borderTop: "1px solid var(--border-dark)", borderBottom: "1px solid var(--border-dark)" }}
    >
      {/* Mobile layout: two rows */}
      <div className="flex flex-col md:hidden">
        {/* Top row: label + View All */}
        <div
          className="flex items-center justify-between px-5 py-2"
          style={{ borderBottom: "1px solid var(--border-dark)" }}
        >
          <span
            className="text-xs tracking-[0.25em] uppercase whitespace-nowrap font-medium"
            style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
          >
            This Week ✦
          </span>
          <Link href="/products">
            <button
              data-testid="ticker-view-all-mobile"
              className="text-xs tracking-[0.15em] uppercase whitespace-nowrap transition-opacity hover:opacity-70"
              style={{
                color: "var(--gold)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              View All →
            </button>
          </Link>

        </div>

        {/* Bottom row: scrolling track */}
        <div className="overflow-hidden py-2">
          <div className="ticker-track flex items-center gap-0">
            {repeated.map((deal, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 px-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span
                  className="text-xs tracking-wide whitespace-nowrap px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(245,240,232,0.08)",
                    color: "var(--text-inverse)",
                  }}
                >
                  {deal.includes("/") ? (
                    <>
                      <span style={{ color: "var(--gold)", fontWeight: 600 }}>
                        {deal.split(" ")[0]}
                      </span>{" "}
                      {deal.split(" ").slice(1).join(" ")}
                    </>
                  ) : (
                    <span>
                      <span style={{ color: "var(--gold)", fontWeight: 600 }}>{deal.split(" ").slice(0, 2).join(" ")}</span>{" "}
                      {deal.split(" ").slice(2).join(" ")}
                    </span>
                  )}
                </span>
                <span style={{ color: "var(--border-gold)" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout: single row, unchanged */}
      <div className="hidden md:flex items-center" style={{ height: 52 }}>
        {/* Left label */}
        <div
          className="absolute left-0 z-10 flex items-center h-full px-5"
          style={{ background: "var(--bg-moss)", borderRight: "1px solid var(--border-dark)" }}
        >
          <span
            className="text-xs tracking-[0.25em] uppercase whitespace-nowrap font-medium"
            style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
          >
            This Week ✦
          </span>
        </div>

        {/* Scrolling track */}
        <div className="overflow-hidden ml-36 flex-1">
          <div className="ticker-track flex items-center gap-0">
            {repeated.map((deal, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 px-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span
                  className="text-xs tracking-wide whitespace-nowrap px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(245,240,232,0.08)",
                    color: "var(--text-inverse)",
                  }}
                >
                  {deal.includes("/") ? (
                    <>
                      <span style={{ color: "var(--gold)", fontWeight: 600 }}>
                        {deal.split(" ")[0]}
                      </span>{" "}
                      {deal.split(" ").slice(1).join(" ")}
                    </>
                  ) : (
                    <span>
                      <span style={{ color: "var(--gold)", fontWeight: 600 }}>{deal.split(" ").slice(0, 2).join(" ")}</span>{" "}
                      {deal.split(" ").slice(2).join(" ")}
                    </span>
                  )}
                </span>
                <span style={{ color: "var(--border-gold)" }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <Link href="/products">
          <button
            data-testid="ticker-view-all"
            className="absolute right-0 top-[7px] h-full px-6 text-xs tracking-[0.15em] uppercase whitespace-nowrap transition-opacity hover:opacity-70"
            style={{
              background: "var(--bg-moss)",
              borderLeft: "1px solid var(--border-dark)",
              color: "var(--gold)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            View All →
          </button>
        </Link>
      </div>
    </div>
  );
}
