"use client";

import { useEffect, useRef } from "react";
import { projects, miniProjects, tagStyles, TagColor } from "@/data/content";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLastInRow = (index + 1) % 3 === 0;

  return (
    <div
      ref={ref}
      className="post-card"
      style={{
        borderRight: isLastInRow ? "none" : "1px solid #222",
        borderBottom: "1px solid #222",
        padding: "2rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, background 0.2s",
      }}
    >
      <span
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "0.2rem 0.5rem",
          border: "1px solid",
          alignSelf: "flex-start",
        }}
        className={tagStyles[project.tagColor as TagColor]}
      >
        {project.tag}
      </span>

      <div>
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#e8e3d9",
            marginBottom: "0.25rem",
          }}
        >
          {project.name}
        </h3>
        <p style={{ fontSize: "0.72rem", color: "#6b6860" }}>
          {project.description}
        </p>
      </div>

      <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {project.bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontSize: "0.75rem",
              color: "#6b6860",
              lineHeight: 1.6,
              paddingLeft: "1rem",
              position: "relative",
              listStyle: "none",
            }}
          >
            <span style={{ position: "absolute", left: 0, color: "#c8f03c" }}>
              ›
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ borderBottom: "1px solid #222" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
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
          <span
            style={{ display: "block", width: 20, height: 1, background: "#c8f03c" }}
          />
          Projects — Zigjo Enterprise Suite
        </div>
      </div>

      {/* Project cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>

      {/* Mini Projects */}
      <div style={{ borderTop: "1px solid #222", padding: "2rem 2.5rem" }}>
        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6b6860",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{ display: "block", width: 20, height: 1, background: "#c8f03c" }}
          />
          Mini Projects
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1px",
            background: "#222",
          }}
        >
          {miniProjects.map((mp) => (
            <div
              key={mp.name}
              style={{
                background: "#0d0d0d",
                padding: "1.5rem 2rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#141414")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#0d0d0d")
              }
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#e8e3d9",
                  marginBottom: "0.3rem",
                }}
              >
                {mp.name}
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "#c8f03c",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {mp.tech}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6b6860", lineHeight: 1.6 }}>
                {mp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
