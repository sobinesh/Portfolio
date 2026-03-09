"use client";

import { useEffect, useRef } from "react";
import { stackItems } from "@/data/content";

function StackItem({ icon, name, index }: { icon: string; name: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="stack-item"
      style={{
        padding: "2rem 1.5rem",
        borderRight: index < stackItems.length - 1 ? "1px solid #222" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        transition: "background 0.2s",
        opacity: 0,
        transform: "translateY(20px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#141414";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "transparent";
      }}
    >
      <div style={{ fontSize: "2rem", lineHeight: 1 }}>{icon}</div>
      <div
        className="stack-name"
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#6b6860",
          transition: "color 0.2s",
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" style={{ borderBottom: "1px solid #222" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2.5rem 1.5rem",
          borderBottom: "1px solid #222",
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6b6860",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ display: "block", width: 20, height: 1, background: "#c8f03c" }} />
          My Stack
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        {stackItems.map((item, i) => (
          <StackItem key={item.name} icon={item.icon} name={item.name} index={i} />
        ))}
      </div>
    </section>
  );
}
