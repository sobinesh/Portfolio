"use client";

import { useEffect, useRef } from "react";
import { stackItems } from "@/data/content";

function StackItem({ icon, name, index }: { icon: string; name: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity="1"; el.style.transform="translateY(0)"; obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="stack-item"
      style={{ padding:"1.75rem 1rem", borderRight: index < stackItems.length - 1 ? "1px solid #222" : "none", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.75rem", transition:"background 0.2s", opacity:0, transform:"translateY(20px)" }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="#141414"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background="transparent"; }}>
      <div style={{ fontSize:"1.75rem", lineHeight:1 }}>{icon}</div>
      <div className="stack-name" style={{ fontSize:"0.62rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"#6b6860", textAlign:"center", transition:"color 0.2s" }}>{name}</div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" style={{ borderBottom:"1px solid #222" }}>
      <div className="section-hdr">
        <div style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", display:"flex", alignItems:"center", gap:"0.75rem" }}>
          <span style={{ display:"block", width:20, height:1, background:"#c8f03c" }} />
          My Stack
        </div>
      </div>
      <div className="stack-grid">
        {stackItems.map((item, i) => <StackItem key={item.name} icon={item.icon} name={item.name} index={i} />)}
      </div>
    </section>
  );
}
