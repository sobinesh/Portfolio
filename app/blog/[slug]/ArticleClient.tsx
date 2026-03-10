"use client";

import Link from "next/link";
import { Post, tagStyles, TagColor } from "@/data/content";
import Cursor from "@/components/Cursor";

interface Props {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
}

function CodeBlock({ code, language }: { code: string; language?: string }) {
  return (
    <div style={{ background:"#0a0a0a", border:"1px solid #222", margin:"1.25rem 0", overflow:"hidden" }}>
      {language && (
        <div style={{ padding:"0.4rem 1rem", borderBottom:"1px solid #222", fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#444", fontFamily:"'DM Mono',monospace" }}>
          {language}
        </div>
      )}
      <pre style={{ padding:"1.25rem 1.5rem", overflowX:"auto", margin:0, fontFamily:"'DM Mono',monospace", fontSize:"0.76rem", lineHeight:1.8, color:"#c8f03c" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function ArticleClient({ post, prevPost, nextPost }: Props) {
  const wordCount = post.content.reduce((acc,s) => acc + s.body.split(" ").length, 0);

  return (
    <>
      <Cursor />

      {/* NAV */}
      <nav className="nav-wrapper">
        <Link href="/" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", letterSpacing:"-0.02em", color:"#e8e3d9", textDecoration:"none", flexShrink:0 }}>
          sobinesh<span style={{ color:"#c8f03c" }}>.</span>dev
        </Link>
        <Link href="/#writing"
          style={{ fontSize:"0.72rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"#6b6860", textDecoration:"none", transition:"color 0.2s", whiteSpace:"nowrap" }}
          onMouseEnter={e => (e.currentTarget.style.color="#c8f03c")}
          onMouseLeave={e => (e.currentTarget.style.color="#6b6860")}>
          ← Articles
        </Link>
      </nav>

      <main style={{ paddingTop:"72px" }}>
        {/* HEADER */}
        <header className="article-header-grid" style={{ position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:-80, right:0, width:"min(400px, 100%)", height:400, background:"radial-gradient(circle, rgba(200,240,60,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />
          <div>
            <div style={{ marginBottom:"1.5rem", display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
              <span style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", padding:"0.25rem 0.65rem", border:"1px solid" }}
                className={tagStyles[post.tagColor as TagColor]}>
                {post.tag}
              </span>
              <span style={{ fontSize:"0.65rem", color:"#6b6860" }}>{post.date}</span>
              <span style={{ fontSize:"0.65rem", color:"#6b6860" }}>{post.readTime}</span>
            </div>
            <h1 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.75rem,4vw,3.25rem)", fontWeight:700, lineHeight:1.05, letterSpacing:"-0.02em", color:"#e8e3d9", marginBottom:"1.25rem" }}>
              {post.title}
            </h1>
            <p style={{ fontSize:"0.95rem", color:"#6b6860", lineHeight:1.75, maxWidth:"600px" }}>{post.excerpt}</p>
          </div>

          {/* Sidebar meta — hidden on mobile via CSS */}
          <div className="article-sidebar" style={{ borderLeft:"1px solid #222", paddingLeft:"2rem", display:"flex", flexDirection:"column", gap:"1.5rem", alignSelf:"start", marginTop:"1rem" }}>
            <div>
              <div style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#444", marginBottom:"0.3rem" }}>Author</div>
              <div style={{ fontSize:"0.82rem", color:"#e8e3d9" }}>Sobinesh S</div>
              <div style={{ fontSize:"0.72rem", color:"#6b6860" }}>Software Developer</div>
            </div>
            <div>
              <div style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#444", marginBottom:"0.3rem" }}>Words</div>
              <div style={{ fontSize:"0.82rem", color:"#e8e3d9" }}>~{wordCount}</div>
            </div>
            <div>
              <div style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#444", marginBottom:"0.75rem" }}>Contents</div>
              {post.content.map((s,i) => (
                <div key={i} style={{ fontSize:"0.72rem", color:"#6b6860", lineHeight:1.9, paddingLeft:"0.75rem", borderLeft:"2px solid #222", marginBottom:"0.2rem", transition:"color 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.color="#c8f03c"; (e.currentTarget as HTMLDivElement).style.borderLeftColor="#c8f03c"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.color="#6b6860"; (e.currentTarget as HTMLDivElement).style.borderLeftColor="#222"; }}>
                  {s.heading}
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* BODY */}
        <div className="article-body-grid">
          <div style={{ borderRight:"1px solid #222", padding:"3rem 1.25rem" }} className="px-page">
            {post.content.map((section, i) => (
              <div key={i} style={{ marginBottom:"3rem", paddingBottom:"3rem", borderBottom: i < post.content.length-1 ? "1px solid #1a1a1a" : "none" }}>
                <h2 style={{ fontFamily:"'Fraunces',serif", fontSize:"clamp(1.2rem,2.5vw,1.5rem)", fontWeight:700, color:"#e8e3d9", marginBottom:"1rem", lineHeight:1.2 }}>
                  <span style={{ color:"#c8f03c", fontSize:"0.75rem", fontFamily:"'DM Mono',monospace", fontWeight:400, marginRight:"0.75rem" }}>
                    {String(i+1).padStart(2,"0")}.
                  </span>
                  {section.heading}
                </h2>
                <p style={{ fontSize:"0.9rem", color:"#a09890", lineHeight:1.9 }}>{section.body}</p>
                {section.code && <CodeBlock code={section.code} language={section.language} />}
              </div>
            ))}
          </div>

          {/* Sticky sidebar — hidden on mobile */}
          <div className="article-sidebar" style={{ padding:"3rem 2rem" }}>
            <div style={{ position:"sticky", top:"100px", display:"flex", flexDirection:"column", gap:"1.5rem" }}>
              <div style={{ border:"1px solid #222", padding:"1.5rem", background:"#141414" }}>
                <div style={{ width:48, height:48, background:"#c8f03c", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.1rem", color:"#0d0d0d", marginBottom:"1rem" }}>S</div>
                <div style={{ fontSize:"0.85rem", color:"#e8e3d9", fontWeight:500, marginBottom:"0.2rem" }}>Sobinesh S</div>
                <div style={{ fontSize:"0.72rem", color:"#6b6860", marginBottom:"1rem" }}>Software Developer at Zigbill</div>
                <Link href="https://www.linkedin.com/in/sobinesh-s/" target="_blank" style={{ fontSize:"0.7rem", color:"#c8f03c", textDecoration:"none" }}>LinkedIn ↗</Link>
              </div>
              <div style={{ border:"1px solid #222", padding:"1.5rem" }}>
                <div style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#444", marginBottom:"1rem" }}>Navigate</div>
                {[{ label:"← All Articles", href:"/#writing" }, { label:"⌂ Home", href:"/" }].map(l => (
                  <Link key={l.label} href={l.href} style={{ display:"block", fontSize:"0.75rem", color:"#6b6860", textDecoration:"none", marginBottom:"0.75rem", transition:"color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color="#c8f03c")}
                    onMouseLeave={e => (e.currentTarget.style.color="#6b6860")}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PREV / NEXT */}
        <div className="article-prev-next">
          <div style={{ padding:"2rem 1.25rem", borderRight:"1px solid #222" }} className="px-page">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} style={{ textDecoration:"none", display:"block" }}>
                <div style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#444", marginBottom:"0.6rem" }}>← Previous</div>
                <div style={{ fontFamily:"'Fraunces',serif", fontSize:"1rem", color:"#e8e3d9", lineHeight:1.3, transition:"color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color="#c8f03c")}
                  onMouseLeave={e => (e.currentTarget.style.color="#e8e3d9")}>
                  {prevPost.title}
                </div>
              </Link>
            )}
          </div>
          <div style={{ padding:"2rem 1.25rem", textAlign:"right" }}>
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} style={{ textDecoration:"none", display:"block" }}>
                <div style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#444", marginBottom:"0.6rem" }}>Next →</div>
                <div style={{ fontFamily:"'Fraunces',serif", fontSize:"1rem", color:"#e8e3d9", lineHeight:1.3, transition:"color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color="#c8f03c")}
                  onMouseLeave={e => (e.currentTarget.style.color="#e8e3d9")}>
                  {nextPost.title}
                </div>
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
