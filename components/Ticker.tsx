import { tickerItems } from "@/data/content";

export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div
      style={{
        borderBottom: "1px solid #222",
        overflow: "hidden",
        padding: "0.65rem 0",
        background: "#141414",
      }}
    >
      <div className="animate-ticker" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6b6860",
              padding: "0 2rem",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#c8f03c", marginRight: "0.5rem" }}>✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
