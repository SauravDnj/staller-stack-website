import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BlogCard, formatDate } from "@/components/ui/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/content/blog";
import { siteConfig } from "@/content/siteConfig";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Staller Stack Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pb-12 pt-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--ss-teal)_20%,transparent),_transparent_60%)]" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Badge>{post.category}</Badge>
            <h1 className="mt-6 font-display text-3xl font-semibold leading-tight text-ss-text sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-ss-muted">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider text-ss-muted">
              <span className="text-ss-text">{post.author}</span>
              <span aria-hidden>·</span>
              <span>{post.role}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-ss-border bg-ss-surface">
              <Image
                src={post.coverImage.src}
                alt={post.coverImage.caption}
                width={post.coverImage.width}
                height={post.coverImage.height}
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-14">
            {post.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-display text-2xl font-semibold text-ss-text sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.split("\n\n").map((paragraph) => (
                    <p key={paragraph} className="text-ss-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.image && (
                  <figure className="mt-8">
                    <div className="overflow-hidden rounded-2xl border border-ss-border bg-ss-surface">
                      <Image
                        src={section.image.src}
                        alt={section.image.caption}
                        width={section.image.width}
                        height={section.image.height}
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-sm text-ss-muted">
                      {section.image.caption}
                    </figcaption>
                  </figure>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-wrap gap-2 border-t border-ss-border pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ss-border bg-ss-surface/60 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ss-muted"
              >
                {tag}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                More From the Blog
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost) => (
                <RevealItem key={relatedPost.slug}>
                  <BlogCard post={relatedPost} />
                </RevealItem>
              ))}
            </RevealGroup>
            <div className="mt-10">
              <Link
                href="/blog"
                className="font-display text-sm text-ss-teal transition-colors hover:text-ss-mint"
              >
                View All Posts <span aria-hidden>→</span>
              </Link>
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
