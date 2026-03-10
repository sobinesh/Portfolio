"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav-wrapper">
      <Link href="/" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", letterSpacing:"-0.02em", color:"#e8e3d9", textDecoration:"none", flexShrink:0 }}>
        sobinesh<span style={{ color:"#c8f03c" }}>.</span>dev
      </Link>

      <ul className="nav-links-list">
        {["Writing","Projects","Stack","About"].map(item => (
          <li key={item}>
            <Link href={`#${item.toLowerCase()}`}
              style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b6860", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color="#c8f03c")}
              onMouseLeave={e => (e.currentTarget.style.color="#6b6860")}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <div className="animate-pulse-dot" style={{ width:6, height:6, borderRadius:"50%", background:"#c8f03c", flexShrink:0 }} />
        Open to opportunities
      </div>
    </nav>
  );
}
