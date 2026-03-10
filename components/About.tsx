"use client";

import Link from "next/link";
import { profile, experience, achievements, education, languages, frameworks } from "@/data/content";

export default function About() {
  return (
    <section id="about" style={{ borderBottom:"1px solid #222" }}>
      <div className="section-hdr">
        <div style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", display:"flex", alignItems:"center", gap:"0.75rem" }}>
          <span style={{ display:"block", width:20, height:1, background:"#c8f03c" }} />
          About
        </div>
      </div>

      <div className="about-outer">
        {/* Left */}
        <div className="about-left-col" style={{ borderRight:"1px solid #222", padding:"2.5rem 1.25rem" }}>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(2rem,5vw,2.5rem)", fontWeight:700, lineHeight:1, marginBottom:"1.25rem" }}>
            About<br /><em style={{ fontStyle:"italic", color:"#6b6860" }}>me</em>
          </h2>
          <p style={{ fontSize:"0.8rem", color:"#6b6860", lineHeight:1.8, marginBottom:"1rem" }}>{profile.bio}</p>
          <p style={{ fontSize:"0.8rem", color:"#6b6860", lineHeight:1.8, marginBottom:"1.5rem" }}>{profile.bio2}</p>

          <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
            {[
              { label:"LinkedIn", href: profile.linkedin },
              { label:"GitHub",   href: profile.github },
              { label:"LeetCode", href: profile.leetcode },
              { label:"HackerRank", href: profile.hackerrank },
            ].map(link => (
              <Link key={link.label} href={link.href} target="_blank"
                style={{ fontSize:"0.72rem", color:"#6b6860", textDecoration:"none", display:"flex", alignItems:"center", gap:"0.5rem", transition:"color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="#c8f03c")}
                onMouseLeave={e => (e.currentTarget.style.color="#6b6860")}>
                <span style={{ color:"#c8f03c", fontSize:"0.5rem" }}>✦</span>
                {link.label} ↗
              </Link>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ padding:"2.5rem 1.25rem" }}>
          <div className="about-inner">
            {/* Experience + Education */}
            <div>
              <h3 style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", marginBottom:"1.5rem" }}>// Experience</h3>
              {experience.map(exp => (
                <div key={exp.role} style={{ marginBottom:"1.75rem" }}>
                  <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#c8f03c", marginBottom:"0.2rem" }}>{exp.period}</div>
                  <div style={{ fontSize:"0.85rem", color:"#e8e3d9", fontWeight:500, marginBottom:"0.1rem" }}>{exp.role}</div>
                  <div style={{ fontSize:"0.72rem", color:"#6b6860", marginBottom:"0.6rem" }}>{exp.company}</div>
                  <ul style={{ listStyle:"none", padding:0 }}>
                    {exp.bullets.slice(0,3).map((b,i) => (
                      <li key={i} style={{ fontSize:"0.72rem", color:"#4a4843", lineHeight:1.7, paddingLeft:"1rem", position:"relative" }}>
                        <span style={{ position:"absolute", left:0, color:"#444" }}>›</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div style={{ marginTop:"0.5rem", paddingTop:"1.5rem", borderTop:"1px solid #222" }}>
                <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#c8f03c", marginBottom:"0.2rem" }}>{education.period}</div>
                <div style={{ fontSize:"0.85rem", color:"#e8e3d9", fontWeight:500 }}>{education.degree}</div>
                <div style={{ fontSize:"0.72rem", color:"#6b6860", marginBottom:"0.1rem" }}>{education.institution}</div>
                <div style={{ fontSize:"0.7rem", color:"#c8f03c" }}>CGPA: {education.cgpa}</div>
              </div>
            </div>

            {/* Skills + Certs */}
            <div>
              <h3 style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", marginBottom:"1.5rem" }}>// Skills</h3>
              <div style={{ marginBottom:"1.5rem" }}>
                <div style={{ fontSize:"0.6rem", color:"#ff6b35", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Languages</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                  {languages.map(l => <span key={l} style={{ fontSize:"0.65rem", padding:"0.15rem 0.5rem", border:"1px solid #333", color:"#6b6860" }}>{l}</span>)}
                </div>
              </div>
              <div style={{ marginBottom:"2rem" }}>
                <div style={{ fontSize:"0.6rem", color:"#ff6b35", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Frameworks</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                  {frameworks.map(f => <span key={f} style={{ fontSize:"0.65rem", padding:"0.15rem 0.5rem", border:"1px solid #333", color:"#6b6860" }}>{f}</span>)}
                </div>
              </div>
              <h3 style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", marginBottom:"1.25rem" }}>// Certifications</h3>
              {achievements.map(a => (
                <div key={a.title} style={{ marginBottom:"1.25rem" }}>
                  <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#ff6b35", marginBottom:"0.2rem" }}>{a.org}</div>
                  <div style={{ fontSize:"0.82rem", color:"#e8e3d9", fontWeight:500 }}>{a.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
