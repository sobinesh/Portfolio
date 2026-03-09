"use client";

import Link from "next/link";
import { profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "1px solid #222",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "8rem 2.5rem 3rem",
          borderRight: "1px solid #222",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(200,240,60,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="anim-delay-1"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#c8f03c",
            marginBottom: "1.5rem",
          }}
        >
          // {profile.role}
        </div>

        <h1
          className="anim-delay-2"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          {profile.name.split(" ")[0]}
          <br />
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              color: "#6b6860",
            }}
          >
            {profile.name.split(" ")[1]}.
          </em>
        </h1>

        <p
          className="anim-delay-3"
          style={{
            fontSize: "0.85rem",
            color: "#6b6860",
            maxWidth: 380,
            lineHeight: 1.8,
          }}
        >
          Software Engineer with 2+ years of experience building
          enterprise-grade RESTful APIs with C# and .NET Core. I write about
          backend architecture, Azure, AI integration, and clean code practices.
        </p>

        <div
          className="anim-delay-4"
          style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}
        >
          <Link
            href={`mailto:${profile.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.25rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
              background: "#c8f03c",
              color: "#0d0d0d",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d4f54a";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#c8f03c";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get in Touch →
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.25rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
              border: "1px solid #222",
              color: "#6b6860",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6b6860";
              e.currentTarget.style.color = "#e8e3d9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#222";
              e.currentTarget.style.color = "#6b6860";
            }}
          >
            LinkedIn ↗
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8rem 2.5rem 3rem",
          gap: 0,
        }}
      >
        {/* Terminal */}
        <div
          className="anim-delay-5"
          style={{
            background: "#141414",
            border: "1px solid #222",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1rem" }}>
            {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
              <div
                key={c}
                style={{ width: 8, height: 8, borderRadius: "50%", background: c }}
              />
            ))}
          </div>
          {[
            { type: "cmd", text: "$ dotnet new webapi -n MyApi --use-controllers" },
            { type: "cmt", text: "# Created ASP.NET Core Web API project" },
            { type: "out", text: "dotnet add package Microsoft.EntityFrameworkCore.SqlServer" },
            { type: "cmt", text: "# Configuring Clean Architecture layers..." },
            { type: "out", text: "az webapp deploy --resource-group prod-rg --name my-api" },
            { type: "cmt", text: "# Deployment to Azure App Services complete ✓" },
          ].map((line, i) => (
            <div
              key={i}
              className={`terminal-${line.type}`}
              style={{ fontSize: "0.75rem", lineHeight: 2 }}
            >
              {line.text}
            </div>
          ))}
          <div style={{ fontSize: "0.75rem", lineHeight: 2, color: "#c8f03c" }}>
            ${" "}
            <span
              className="animate-blink"
              style={{
                display: "inline-block",
                width: 6,
                height: 13,
                background: "#c8f03c",
                verticalAlign: "middle",
                marginLeft: 2,
              }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="anim-delay-6"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            border: "1px solid #222",
            background: "#222",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#0d0d0d", padding: "1.25rem 1.5rem" }}>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#e8e3d9",
                  display: "block",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6b6860",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
