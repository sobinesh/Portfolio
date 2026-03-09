import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/content";
import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} — Sobinesh S`,
    description: post.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const postIndex = posts.findIndex((p) => p.slug === params.slug);
  const prevPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : null;

  return <ArticleClient post={post} prevPost={prevPost} nextPost={nextPost} />;
}
