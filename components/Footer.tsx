"use client";

import Link from "next/link";
import { profile } from "@/data/content";

export default function Footer() {
  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "LeetCode", href: profile.leetcode },
    { label: "HackerRank", href: profile.hackerrank },
    { label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid #222",
        padding: "1.5rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div style={{ fontSize: "0.7rem", color: "#6b6860" }}>
        © 2026 Sobinesh S · {profile.email} · {profile.phone}
      </div>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            style={{
              fontSize: "0.7rem",
              color: "#6b6860",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8f03c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6860")}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
