"use client";

import Link from "next/link";
import { profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero-grid">
      {/* LEFT */}
      <div style={{
        display:"flex", flexDirection:"column", justifyContent:"flex-end",
        padding:"calc(72px + 3rem) 1.25rem 2.5rem",
        borderRight:"1px solid #222", position:"relative", overflow:"hidden"
      }}>
        {/* glow — pointer-events none and overflow hidden on parent clips it */}
        <div style={{ position:"absolute", top:-100, left:-100, width:400, height:400,
          background:"radial-gradient(circle, rgba(200,240,60,0.06) 0%, transparent 70%)",
          pointerEvents:"none" }} />

        <div className="anim-delay-1" style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#c8f03c", marginBottom:"1.25rem" }}>
          // {profile.role}
        </div>

        <h1 className="anim-delay-2" style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(2.8rem,9vw,5.5rem)", fontWeight:700, lineHeight:0.95, letterSpacing:"-0.03em", marginBottom:"1.25rem" }}>
          {profile.name.split(" ")[0]}<br />
          <em style={{ fontStyle:"italic", fontWeight:300, color:"#6b6860" }}>{profile.name.split(" ")[1]}.</em>
        </h1>

        <p className="anim-delay-3" style={{ fontSize:"0.85rem", color:"#6b6860", maxWidth:"100%", lineHeight:1.8 }}>
          Software Developer with 2+ years building enterprise cross-platform apps with .NET MAUI, ASP.NET Core, and Azure. I write about what I learn.
        </p>

        <div className="anim-delay-4" style={{ display:"flex", gap:"0.75rem", marginTop:"2rem", flexWrap:"wrap" }}>
          <Link href={`mailto:${profile.email}`}
            style={{ display:"inline-flex", alignItems:"center", padding:"0.65rem 1.25rem", fontFamily:"'DM Mono',monospace", fontSize:"0.75rem", letterSpacing:"0.05em", textDecoration:"none", background:"#c8f03c", color:"#0d0d0d", fontWeight:500 }}>
            Get in Touch →
          </Link>
          <Link href={profile.linkedin} target="_blank"
            style={{ display:"inline-flex", alignItems:"center", padding:"0.65rem 1.25rem", fontFamily:"'DM Mono',monospace", fontSize:"0.75rem", letterSpacing:"0.05em", textDecoration:"none", border:"1px solid #222", color:"#6b6860" }}>
            LinkedIn ↗
          </Link>
        </div>
      </div>

      {/* RIGHT — hidden on mobile via CSS */}
      <div className="hero-right-col" style={{ display:"flex", flexDirection:"column", padding:"7rem 2.5rem 2.5rem" }}>
        <div className="anim-delay-5" style={{ background:"#141414", border:"1px solid #222", padding:"1.5rem", marginBottom:"1.5rem" }}>
          <div style={{ display:"flex", gap:"0.4rem", marginBottom:"1rem" }}>
            {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
              <div key={c} style={{ width:8, height:8, borderRadius:"50%", background:c, flexShrink:0 }} />
            ))}
          </div>
          {[
            { t:"cmd", v:"$ dotnet new webapi -n MyApi --use-controllers" },
            { t:"cmt", v:"# Created ASP.NET Core Web API project" },
            { t:"out", v:"dotnet add package Microsoft.EntityFrameworkCore.SqlServer" },
            { t:"cmt", v:"# Configuring Clean Architecture layers..." },
            { t:"out", v:"az webapp deploy --resource-group prod-rg --name my-api" },
            { t:"cmt", v:"# Deployment to Azure App Services complete ✓" },
          ].map((l,i) => (
            <div key={i} className={`terminal-${l.t}`} style={{ fontSize:"0.7rem", lineHeight:1.9, wordBreak:"break-all" }}>{l.v}</div>
          ))}
          <div style={{ fontSize:"0.7rem", lineHeight:1.9, color:"#c8f03c" }}>
            $ <span className="animate-blink" style={{ display:"inline-block", width:6, height:13, background:"#c8f03c", verticalAlign:"middle", marginLeft:2 }} />
          </div>
        </div>

        <div className="anim-delay-6 stats-grid">
          {stats.map(s => (
            <div key={s.label} style={{ background:"#0d0d0d", padding:"1.25rem 1.5rem" }}>
              <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"2rem", fontWeight:800, color:"#e8e3d9", display:"block" }}>{s.num}</span>
              <span style={{ fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#6b6860" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
