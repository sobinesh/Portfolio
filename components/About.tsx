"use client";

import Link from "next/link";
import {
  profile,
  experience,
  education,
  certifications,
  languages,
  frameworks,
  softSkills,
  achievements,
} from "@/data/content";

export default function About() {
  return (
    <section id="about" style={{ borderBottom: "1px solid #222" }}>
      {/* Top strip: bio + experience */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          borderBottom: "1px solid #222",
        }}
      >
        {/* Left: Bio */}
        <div style={{ borderRight: "1px solid #222", padding: "3rem 2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            About
            <br />
            <em style={{ fontStyle: "italic", color: "#6b6860" }}>me</em>
          </h2>
          <p style={{ fontSize: "0.8rem", color: "#6b6860", lineHeight: 1.8, marginBottom: "1rem" }}>
            {profile.bio}
          </p>
          <p style={{ fontSize: "0.8rem", color: "#6b6860", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            {profile.bio2}
          </p>

          {/* Social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { label: "LinkedIn", href: profile.linkedin },
              { label: "GitHub", href: profile.github },
              { label: "LeetCode", href: profile.leetcode },
              { label: "HackerRank", href: profile.hackerrank },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                style={{
                  fontSize: "0.72rem",
                  color: "#6b6860",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8f03c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6860")}
              >
                <span style={{ color: "#c8f03c" }}>↗</span> {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Experience + Education */}
        <div
          style={{
            padding: "3rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {/* Experience */}
          <div>
            <h3
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6860",
                marginBottom: "1.5rem",
              }}
            >
              // Experience
            </h3>
            {experience.map((exp) => (
              <div key={exp.role} style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c8f03c",
                    marginBottom: "0.2rem",
                  }}
                >
                  {exp.period}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#e8e3d9",
                    fontWeight: 500,
                    marginBottom: "0.1rem",
                  }}
                >
                  {exp.role}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#6b6860", marginBottom: "0.5rem" }}>
                  {exp.company}
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.7rem",
                        color: "#555",
                        lineHeight: 1.5,
                        paddingLeft: "0.9rem",
                        position: "relative",
                        listStyle: "none",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#444" }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Education */}
            <h3
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6860",
                marginBottom: "1rem",
                marginTop: "0.5rem",
              }}
            >
              // Education
            </h3>
            {education.map((edu) => (
              <div key={edu.degree} style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c8f03c",
                    marginBottom: "0.2rem",
                  }}
                >
                  {edu.period}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#e8e3d9", fontWeight: 500 }}>
                  {edu.degree}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#6b6860" }}>{edu.school}</div>
                <div style={{ fontSize: "0.7rem", color: "#555", marginTop: "0.15rem" }}>
                  {edu.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications + Skills */}
          <div>
            <h3
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6860",
                marginBottom: "1.5rem",
              }}
            >
              // Certifications
            </h3>
            {achievements.map((a) => (
              <div key={a.title} style={{ marginBottom: "1.25rem" }}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#ff6b35",
                    marginBottom: "0.15rem",
                  }}
                >
                  {a.org}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#e8e3d9", fontWeight: 500 }}>
                  {a.title}
                </div>
              </div>
            ))}

            {/* Languages */}
            <h3
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6860",
                marginBottom: "0.75rem",
                marginTop: "1.5rem",
              }}
            >
              // Languages
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
              {languages.map((lang) => (
                <span
                  key={lang}
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.06em",
                    padding: "0.2rem 0.6rem",
                    border: "1px solid #333",
                    color: "#6b6860",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Frameworks */}
            <h3
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6860",
                marginBottom: "0.75rem",
              }}
            >
              // Frameworks
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
              {frameworks.map((fw) => (
                <span
                  key={fw}
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.06em",
                    padding: "0.2rem 0.6rem",
                    border: "1px solid #333",
                    color: "#6b6860",
                  }}
                >
                  {fw}
                </span>
              ))}
            </div>

            {/* Soft Skills */}
            <h3
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6860",
                marginBottom: "0.75rem",
              }}
            >
              // Soft Skills
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {softSkills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.06em",
                    padding: "0.2rem 0.6rem",
                    border: "1px solid #2a2a2a",
                    color: "#555",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
