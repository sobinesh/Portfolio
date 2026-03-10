"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="newsletter-grid">
      <div>
        <h2 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.75rem,4vw,2.5rem)", fontWeight:700, lineHeight:1.1 }}>
          Stay in<br />the <em style={{ fontStyle:"italic", color:"#6b6860" }}>loop.</em>
        </h2>
        <p style={{ fontSize:"0.8rem", color:"#6b6860", marginTop:"0.75rem", lineHeight:1.7 }}>
          Articles on .NET, Azure, clean architecture, AI integration — straight to your inbox. Practical, no fluff.
        </p>
      </div>
      <div>
        {submitted ? (
          <p style={{ fontSize:"0.85rem", color:"#c8f03c" }}>✦ You&apos;re subscribed. Talk soon.</p>
        ) : (
          <>
            <div style={{ display:"flex" }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" className="nl-input"
                style={{ flex:1, background:"#141414", border:"1px solid #222", borderRight:"none", padding:"0.75rem 1rem", color:"#e8e3d9", fontFamily:"'DM Mono',monospace", fontSize:"0.8rem", minWidth:0 }} />
              <button onClick={() => { if(email) setSubmitted(true); }}
                style={{ background:"#c8f03c", color:"#0d0d0d", border:"none", padding:"0.75rem 1.25rem", fontFamily:"'DM Mono',monospace", fontSize:"0.75rem", fontWeight:500, letterSpacing:"0.05em", transition:"background 0.2s", whiteSpace:"nowrap" }}
                onMouseEnter={e => (e.currentTarget.style.background="#d4f54a")}
                onMouseLeave={e => (e.currentTarget.style.background="#c8f03c")}>
                Subscribe →
              </button>
            </div>
            <div style={{ fontSize:"0.65rem", color:"#6b6860", marginTop:"0.75rem" }}>No spam. Unsubscribe any time.</div>
          </>
        )}
      </div>
    </section>
  );
}
