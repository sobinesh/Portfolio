"use client";

import { useEffect, useRef } from "react";
import { projects, miniProjects, tagStyles, TagColor } from "@/data/content";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
    <div ref={ref} className="post-card"
      style={{ borderBottom:"1px solid #222", padding:"1.75rem 1.25rem", display:"flex", flexDirection:"column", gap:"1rem", opacity:0, transform:"translateY(20px)", transition:"opacity 0.5s ease, transform 0.5s ease, background 0.2s" }}>
      <span style={{ fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", padding:"0.2rem 0.5rem", border:"1px solid", alignSelf:"flex-start" }}
        className={tagStyles[project.tagColor as TagColor]}>
        {project.tag}
      </span>
      <div>
        <h3 style={{ fontFamily:"'Fraunces',serif", fontSize:"1.1rem", fontWeight:700, lineHeight:1.2, color:"#e8e3d9", marginBottom:"0.3rem" }}>{project.name}</h3>
        <p style={{ fontSize:"0.7rem", color:"#c8f03c", letterSpacing:"0.05em" }}>{project.description}</p>
      </div>
      <ul style={{ listStyle:"none", padding:0, flex:1 }}>
        {project.bullets.map((b,i) => (
          <li key={i} style={{ fontSize:"0.75rem", color:"#6b6860", lineHeight:1.7, paddingLeft:"1rem", position:"relative" }}>
            <span style={{ position:"absolute", left:0, color:"#c8f03c" }}>›</span>{b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ borderBottom:"1px solid #222" }}>
      <div className="section-hdr">
        <div style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", display:"flex", alignItems:"center", gap:"0.75rem" }}>
          <span style={{ display:"block", width:20, height:1, background:"#c8f03c" }} />
          Projects
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((p,i) => <ProjectCard key={p.name} project={p} index={i} />)}
      </div>

      {/* Mini projects */}
      <div style={{ borderTop:"1px solid #222", padding:"2rem 1.25rem 1.5rem" }} className="px-page">
        <div style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1.5rem" }}>
          <span style={{ display:"block", width:20, height:1, background:"#ff6b35" }} />
          Mini Projects
        </div>
        <div className="mini-projects-grid">
          {miniProjects.map(mp => (
            <div key={mp.name} style={{ background:"#0d0d0d", padding:"1.25rem 1.5rem", transition:"background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background="#141414")}
              onMouseLeave={e => (e.currentTarget.style.background="#0d0d0d")}>
              <div style={{ fontSize:"0.85rem", color:"#e8e3d9", fontWeight:500, marginBottom:"0.3rem", fontFamily:"'Fraunces',serif" }}>{mp.name}</div>
              <div style={{ fontSize:"0.62rem", color:"#ff6b35", letterSpacing:"0.08em", marginBottom:"0.5rem" }}>{mp.tech}</div>
              <div style={{ fontSize:"0.75rem", color:"#6b6860", lineHeight:1.6 }}>{mp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
