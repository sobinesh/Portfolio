"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 2.5rem",
        borderBottom: "1px solid #222",
        background: "rgba(13,13,13,0.85)",
        backdropFilter: "blur(16px)",
        zIndex: 100,
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1rem",
          letterSpacing: "-0.02em",
          color: "#e8e3d9",
          textDecoration: "none",
        }}
      >
        sobinesh<span style={{ color: "#c8f03c" }}>.</span>dev
      </Link>

      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
        }}
      >
        {["Projects", "Writing", "Stack", "About"].map((item) => (
          <li key={item}>
            <Link
              href={item === "Portfolio" ? "https://sobinesh.netlify.app/" : `#${item.toLowerCase()}`}
            target={item === "Portfolio" ? "_blank" : undefined}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6b6860",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#c8f03c")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6b6860")
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.7rem",
          color: "#6b6860",
        }}
      >
        <div
          className="animate-pulse-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#c8f03c",
          }}
        />
        Open to opportunities
      </div>
    </nav>
  );
}
