import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { blogPosts, blogCategories } from "@/content/blog";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Blog | Staller Stack",
  description:
    "Practical, no-fluff writing on AI agents, generative AI, machine learning, web development, and mobile development — from the team building these systems in production.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Staller Stack Blog",
    url: `${siteConfig.url}/blog`,
    blogPost: sorted.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: { "@type": "Person", name: post.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Blog"
        heading="Insights on AI, Web, and Mobile Development."
        subtext="Practical, no-fluff writing on agentic AI, generative AI, machine learning, web development, and mobile development — from the team building these systems in production."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <BlogGrid posts={sorted} categories={blogCategories} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
