"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { posts, tagStyles, TagColor } from "@/data/content";

function PostCard({ post, index }: { post: (typeof posts)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLastInRow = (index + 1) % 3 === 0;

  return (
    <div
      ref={ref}
      className="post-card"
      onClick={() => router.push(`/blog/${post.slug}`)}
      style={{
        borderRight: isLastInRow ? "none" : "1px solid #222",
        borderBottom: "1px solid #222",
        padding: "2rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, background 0.2s",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.2rem 0.5rem",
            border: "1px solid",
          }}
          className={tagStyles[post.tagColor as TagColor]}
        >
          {post.tag}
        </span>
        <span style={{ fontSize: "0.65rem", color: "#6b6860" }}>{post.date}</span>
      </div>

      <h3
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          lineHeight: 1.3,
          color: "#e8e3d9",
        }}
      >
        {post.title}
      </h3>

      <p style={{ fontSize: "0.78rem", color: "#6b6860", lineHeight: 1.7, flex: 1 }}>
        {post.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "1rem",
          borderTop: "1px solid #222",
          fontSize: "0.65rem",
          color: "#6b6860",
        }}
      >
        <span>{post.readTime}</span>
        <span
          className="read-more"
          style={{
            color: "#c8f03c",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
          }}
        >
          Read<span className="read-more-arrow"> →</span>
        </span>
      </div>
    </div>
  );
}

export default function RecentPosts() {
  return (
    <section id="writing">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2.5rem 1.5rem",
          borderBottom: "1px solid #222",
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6b6860",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ display: "block", width: 20, height: 1, background: "#c8f03c" }} />
          Recent Writing
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {posts.map((post, i) => (
          <PostCard key={post.title} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
