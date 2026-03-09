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
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid #222",
        marginTop: "1.25rem",
        marginBottom: "1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {language && (
        <div
          style={{
            padding: "0.4rem 1rem",
            borderBottom: "1px solid #222",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#444",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {language}
        </div>
      )}
      <pre
        style={{
          padding: "1.25rem 1.5rem",
          overflowX: "auto",
          margin: 0,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.78rem",
          lineHeight: 1.8,
          color: "#c8f03c",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function ArticleClient({ post, prevPost, nextPost }: Props) {
  const totalSections = post.content.length;
  const wordCount = post.content.reduce(
    (acc, s) => acc + s.body.split(" ").length,
    0
  );

  return (
    <>
      <Cursor />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2.5rem",
          borderBottom: "1px solid #222",
          background: "rgba(13,13,13,0.92)",
          backdropFilter: "blur(16px)",
          zIndex: 100,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
            color: "#e8e3d9",
            textDecoration: "none",
          }}
        >
          sobinesh<span style={{ color: "#c8f03c" }}>.</span>dev
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="/#writing"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6b6860",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8f03c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6860")}
          >
            ← All Articles
          </Link>
        </div>
      </nav>

      <main style={{ paddingTop: "72px" }}>
        {/* HERO HEADER */}
        <header
          style={{
            borderBottom: "1px solid #222",
            padding: "5rem 2.5rem 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: -80,
              right: 0,
              width: 500,
              height: 400,
              background:
                "radial-gradient(circle, rgba(200,240,60,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div>
            {/* Tag */}
            <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.25rem 0.65rem",
                  border: "1px solid",
                }}
                className={tagStyles[post.tagColor as TagColor]}
              >
                {post.tag}
              </span>
              <span style={{ fontSize: "0.65rem", color: "#6b6860" }}>
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#e8e3d9",
                marginBottom: "1.5rem",
                maxWidth: "800px",
              }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p
              style={{
                fontSize: "1rem",
                color: "#6b6860",
                lineHeight: 1.75,
                maxWidth: "620px",
              }}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Meta sidebar */}
          <div
            style={{
              borderLeft: "1px solid #222",
              paddingLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignSelf: "start",
              marginTop: "3rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "0.3rem",
                }}
              >
                Author
              </div>
              <div style={{ fontSize: "0.82rem", color: "#e8e3d9" }}>
                Sobinesh S
              </div>
              <div style={{ fontSize: "0.72rem", color: "#6b6860" }}>
                Software Developer
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "0.3rem",
                }}
              >
                Read Time
              </div>
              <div style={{ fontSize: "0.82rem", color: "#e8e3d9" }}>
                {post.readTime}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "0.3rem",
                }}
              >
                Sections
              </div>
              <div style={{ fontSize: "0.82rem", color: "#e8e3d9" }}>
                {totalSections}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "0.3rem",
                }}
              >
                Words
              </div>
              <div style={{ fontSize: "0.82rem", color: "#e8e3d9" }}>
                ~{wordCount}
              </div>
            </div>

            {/* Table of contents */}
            <div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "0.75rem",
                }}
              >
                Contents
              </div>
              {post.content.map((section, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "0.72rem",
                    color: "#6b6860",
                    lineHeight: 1.9,
                    paddingLeft: "0.75rem",
                    borderLeft: "2px solid #222",
                    marginBottom: "0.2rem",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.color = "#c8f03c";
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#c8f03c";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.color = "#6b6860";
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#222";
                  }}
                >
                  {section.heading}
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ARTICLE BODY */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 0,
            borderBottom: "1px solid #222",
          }}
        >
          {/* Main content */}
          <div
            style={{
              borderRight: "1px solid #222",
              padding: "4rem 3rem 4rem 2.5rem",
            }}
          >
            {post.content.map((section, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "3.5rem",
                  paddingBottom: "3.5rem",
                  borderBottom:
                    i < post.content.length - 1
                      ? "1px solid #1a1a1a"
                      : "none",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#e8e3d9",
                    marginBottom: "1rem",
                    lineHeight: 1.2,
                  }}
                >
                  <span
                    style={{
                      color: "#c8f03c",
                      fontSize: "0.8rem",
                      fontFamily: "'DM Mono', monospace",
                      fontWeight: 400,
                      marginRight: "0.75rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {section.heading}
                </h2>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#a09890",
                    lineHeight: 1.9,
                  }}
                >
                  {section.body}
                </p>
                {section.code && (
                  <CodeBlock
                    code={section.code}
                    language={section.language}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Sticky sidebar */}
          <div
            style={{
              padding: "4rem 2rem",
            }}
          >
            <div
              style={{
                position: "sticky",
                top: "100px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {/* Author card */}
              <div
                style={{
                  border: "1px solid #222",
                  padding: "1.5rem",
                  background: "#141414",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "#c8f03c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#0d0d0d",
                    marginBottom: "1rem",
                  }}
                >
                  S
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#e8e3d9",
                    fontWeight: 500,
                    marginBottom: "0.2rem",
                  }}
                >
                  Sobinesh S
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#6b6860",
                    marginBottom: "1rem",
                  }}
                >
                  Software Developer at Zigbill
                </div>
                <Link
                  href="https://www.linkedin.com/in/sobinesh-s/"
                  target="_blank"
                  style={{
                    fontSize: "0.7rem",
                    color: "#c8f03c",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                  }}
                >
                  LinkedIn ↗
                </Link>
              </div>

              {/* Share / back */}
              <div
                style={{
                  border: "1px solid #222",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#444",
                    marginBottom: "1rem",
                  }}
                >
                  Navigate
                </div>
                <Link
                  href="/#writing"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#6b6860",
                    textDecoration: "none",
                    marginBottom: "0.75rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8f03c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6b6860")
                  }
                >
                  ← All Articles
                </Link>
                <Link
                  href="/"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#6b6860",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8f03c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6b6860")
                  }
                >
                  ⌂ Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PREV / NEXT NAVIGATION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid #222",
          }}
        >
          <div
            style={{
              padding: "2.5rem",
              borderRight: "1px solid #222",
            }}
          >
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#444",
                    marginBottom: "0.6rem",
                  }}
                >
                  ← Previous
                </div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1rem",
                    color: "#e8e3d9",
                    lineHeight: 1.3,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8f03c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#e8e3d9")
                  }
                >
                  {prevPost.title}
                </div>
              </Link>
            )}
          </div>
          <div style={{ padding: "2.5rem", textAlign: "right" }}>
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#444",
                    marginBottom: "0.6rem",
                  }}
                >
                  Next →
                </div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1rem",
                    color: "#e8e3d9",
                    lineHeight: 1.3,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8f03c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#e8e3d9")
                  }
                >
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
