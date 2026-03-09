"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <section
      style={{
        padding: "4rem 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
        borderBottom: "1px solid #222",
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Stay in
          <br />
          the{" "}
          <em style={{ fontStyle: "italic", color: "#6b6860" }}>loop.</em>
        </h2>
        <p style={{ fontSize: "0.8rem", color: "#6b6860", marginTop: "0.75rem", lineHeight: 1.7 }}>
          Articles on .NET Core, Azure, clean architecture, AI integration, and
          software engineering — straight to your inbox. Practical, no fluff.
        </p>
      </div>

      <div>
        {submitted ? (
          <p style={{ fontSize: "0.85rem", color: "#c8f03c" }}>
            ✦ You&apos;re subscribed. Talk soon.
          </p>
        ) : (
          <>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="nl-input"
                style={{
                  flex: 1,
                  background: "#141414",
                  border: "1px solid #222",
                  borderRight: "none",
                  padding: "0.75rem 1rem",
                  color: "#e8e3d9",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  background: "#c8f03c",
                  color: "#0d0d0d",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#d4f54a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#c8f03c";
                }}
              >
                Subscribe →
              </button>
            </div>
            <div style={{ fontSize: "0.65rem", color: "#6b6860", marginTop: "0.75rem" }}>
              No spam. Unsubscribe any time. ~2 emails/month.
            </div>
          </>
        )}
      </div>
    </section>
  );
}
