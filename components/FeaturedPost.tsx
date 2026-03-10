"use client";

import Link from "next/link";
import { featuredPost } from "@/data/content";

export default function FeaturedPost() {
  return (
    <section style={{ borderBottom:"1px solid #222" }}>
      <div className="section-hdr">
        <div style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b6860", display:"flex", alignItems:"center", gap:"0.75rem" }}>
          <span style={{ display:"block", width:20, height:1, background:"#c8f03c" }} />
          Featured Post
        </div>
        <Link href="#" style={{ fontSize:"0.7rem", color:"#6b6860", textDecoration:"none" }}>View all →</Link>
      </div>

      <div className="featured-grid">
        {/* Content */}
        <div style={{ padding:"2.5rem 1.5rem", borderRight:"1px solid #222" }} className="px-page">
          <span style={{ display:"inline-block", fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#0d0d0d", background:"#c8f03c", padding:"0.2rem 0.6rem", marginBottom:"1.25rem" }}>
            {featuredPost.label}
          </span>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:700, lineHeight:1.1, marginBottom:"1rem" }}>
            {featuredPost.title}
          </h2>
          <p style={{ fontSize:"0.82rem", color:"#6b6860", lineHeight:1.8, marginBottom:"2rem", maxWidth:480 }}>
            {featuredPost.excerpt}
          </p>
          <Link href={featuredPost.href}
            style={{ display:"inline-flex", alignItems:"center", padding:"0.65rem 1.25rem", fontFamily:"'DM Mono',monospace", fontSize:"0.75rem", letterSpacing:"0.05em", textDecoration:"none", background:"#c8f03c", color:"#0d0d0d", fontWeight:500 }}>
            Read Article →
          </Link>
        </div>

        {/* Diagram — hidden on mobile */}
        <div className="featured-diagram" style={{ padding:"3rem", display:"flex", alignItems:"center", justifyContent:"center", background:"#141414" }}>
          <div style={{ width:"100%", maxWidth:320, fontSize:"0.65rem", color:"#6b6860" }}>
            {[
              { nodes:["Azure App Service"], highlight:[0] },
              { arrow:"↓" },
              { nodes:["ASP.NET Core API","AngularJS Frontend"], highlight:[0] },
              { arrow:"↓                    ↓" },
              { nodes:["Clean Architecture","EF Core"], highlight:[] as number[] },
              { arrow:"↓" },
              { nodes:["SQL Server"], highlight:[] as number[] },
            ].map((row,i) => {
              if ("arrow" in row) return (
                <div key={i} style={{ textAlign:"center", color:"#222", margin:"0.2rem 0" }}>{row.arrow}</div>
              );
              return (
                <div key={i} style={{ display:"flex", gap:"0.5rem", margin:"0.4rem 0", justifyContent:"center" }}>
                  {row.nodes.map((n,j) => (
                    <div key={n} className="arch-node" style={row.highlight?.includes(j) ? { borderColor:"#c8f03c", color:"#c8f03c" } : {}}>{n}</div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
