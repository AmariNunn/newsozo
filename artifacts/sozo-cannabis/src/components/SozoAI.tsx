import { useState, useRef, useEffect } from "react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const GREETING: Message = {
  role: "assistant",
  text: "Hi! I'm Sozo AI — your personal cannabis concierge. Ask me about flower, edibles, vapes, or anything else in our current rotation. How can I help you today?",
};

function getResponse(input: string): string {
  const msg = input.toLowerCase();

  if (/flower|bud|weed|herb|melonade|honolulu|dubs|dimes/.test(msg)) {
    return "For premium flower this week, I love the Dubs & Dimes Melonade + Honolulu Blue — two 3.5g jars for $85. Smooth terpene profile with a citrus-forward nose. A top-shelf pick!";
  }
  if (/edible|chocolate|gummy|midnight|roots|thc mg/.test(msg)) {
    return "Try the Full Moon Cannabis Chocolates by Midnight Roots — 2 for $20 at 200mg THC each. Perfect for a relaxed evening. Rich dark chocolate with a clean, even high.";
  }
  if (/vape|cartridge|cart|batch|signature|2g/.test(msg)) {
    return "The Batch Signature 2G Vapes are our newest arrivals — starting at $35. Big capacity, clean oil, and a satisfying draw. Great for on-the-go use.";
  }
  if (/drink|beverage|tea|soda|mary jones|pleasantea|casual/.test(msg)) {
    return "We have a Cannabis-Infused Beverages Pack (Pleasantea / Highly Casual / Mary Jones) — 3 for $18 with 2–20mg THC options. A fun way to sip and relax.";
  }
  if (/concentrate|dab|wax|shatter|farmer|made by/.test(msg)) {
    return "Made By A Farmer Concentrates are a staff pick this week — 3 for $45. Craft-quality extraction from a Michigan-grown legacy brand. Highly recommended.";
  }
  if (/pre.?roll|joint|pre roll/.test(msg)) {
    return "Our Premium Pre-Roll Selection is the best value on the menu — 10 for $25 at 1g each. Multiple brands included. Great for sharing or stocking up.";
  }
  if (/price|cheap|deal|special|sale|discount|weekly|rotation/.test(msg)) {
    return "This week's specials: Dubs & Dimes Flower 8/$85, Midnight Roots Chocolates 2/$20, Beverages Pack 3/$18, and Premium Pre-Rolls 10/$25. All available in-store now!";
  }
  if (/sativa|indica|hybrid|strain/.test(msg)) {
    return "We carry a curated mix of sativa, indica, and hybrid strains depending on the week's rotation. Right now, the Dubs & Dimes lineup includes both energizing and relaxing options. Visit our Products page to see full details!";
  }
  if (/location|store|address|hours|open/.test(msg)) {
    return "We have two locations — check the Locations page for addresses and hours. Both are open seven days a week!";
  }
  if (/reward|loyalty|point|high miles/.test(msg)) {
    return "Yes! Join our High Miles loyalty program to earn points on every purchase. Members get early access to specials and exclusive rewards. Sign up at any location.";
  }
  if (/thank|thanks|appreciate|great|awesome|perfect/.test(msg)) {
    return "Happy to help! Feel free to ask if you have more questions — enjoy your visit to Sozo Cannabis.";
  }
  if (/hello|hi|hey|sup|yo/.test(msg)) {
    return "Hey there! What can I help you find today? I know all about our current weekly specials and product lineup.";
  }
  return "Great question! I'm best at recommending products from our weekly rotation — flower, edibles, vapes, concentrates, pre-rolls, and drinks. What sounds interesting to you?";
}

export function SozoAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || typing) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply: Message = { role: "assistant", text: getResponse(trimmed) };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            width: "340px",
            maxHeight: "520px",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998,
            background: "rgba(13,31,23,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(82,183,136,0.06)",
            borderRadius: "4px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "var(--bg-moss)",
                  border: "1.5px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                🌿
              </div>
              <div>
                <p
                  style={{
                    color: "var(--gold)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                  }}
                >
                  Sozo AI
                </p>
                <p
                  style={{
                    color: "var(--green-accent)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--green-accent)",
                      animation: "sozo-pulse 2s ease-in-out infinite",
                    }}
                  />
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-inverse-dim)",
                cursor: "pointer",
                fontSize: "18px",
                lineHeight: 1,
                padding: "4px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-inverse)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-inverse-dim)")}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              scrollbarWidth: "thin",
              scrollbarColor: "var(--gold) transparent",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "9px 13px",
                    borderRadius: "3px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.5,
                    ...(msg.role === "assistant"
                      ? {
                          background: "rgba(45,106,79,0.35)",
                          color: "var(--text-inverse)",
                          borderLeft: "2px solid var(--green-accent)",
                        }
                      : {
                          background: "rgba(201,168,76,0.18)",
                          color: "var(--text-inverse)",
                          border: "1px solid rgba(201,168,76,0.25)",
                        }),
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "9px 16px",
                    background: "rgba(45,106,79,0.35)",
                    borderLeft: "2px solid var(--green-accent)",
                    borderRadius: "3px",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      style={{
                        display: "inline-block",
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--green-accent)",
                        animation: `sozo-dot 1.2s ease-in-out ${dot * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 14px",
              borderTop: "1px solid rgba(201,168,76,0.15)",
              display: "flex",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about flower, edibles, vapes..."
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "2px",
                padding: "9px 12px",
                color: "var(--text-inverse)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || typing}
              style={{
                background: input.trim() && !typing ? "var(--gold)" : "rgba(201,168,76,0.25)",
                color: input.trim() && !typing ? "var(--bg-forest)" : "rgba(201,168,76,0.5)",
                border: "none",
                borderRadius: "2px",
                padding: "9px 14px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: input.trim() && !typing ? "pointer" : "not-allowed",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold)",
            opacity: 0.85,
            userSelect: "none",
          }}
        >
          Sozo AI
        </span>
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "rgba(82,183,136,0.35)",
              animation: "sozo-ring-pulse 2.5s ease-out infinite",
              pointerEvents: "none",
            }}
          />
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close Sozo AI" : "Open Sozo AI"}
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              background: open ? "var(--bg-moss)" : "var(--bg-forest)",
              border: `2px solid ${open ? "var(--green-accent)" : "var(--gold)"}`,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
              transition: "border-color 0.2s, background 0.2s, transform 0.15s",
              transform: open ? "scale(0.95)" : "scale(1)",
              position: "relative",
            }}
            onMouseEnter={(e) => { if (!open) (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = open ? "scale(0.95)" : "scale(1)"; }}
          >
            {open ? "✕" : "🌿"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes sozo-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes sozo-ring-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        @keyframes sozo-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
