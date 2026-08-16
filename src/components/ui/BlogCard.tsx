import Image from "next/image";
import Link from "next/link";
import { Tilt } from "@/components/ui/Tilt";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/content/blog";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Tilt
        strength={6}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-ss-border bg-ss-surface transition-colors duration-300 group-hover:border-ss-teal"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.caption}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge>{post.category}</Badge>
            <span className="shrink-0 font-mono text-xs text-ss-muted">{post.readTime}</span>
          </div>
          <h3 className="mt-4 line-clamp-2 font-display text-lg font-semibold text-ss-text transition-colors group-hover:text-ss-mint">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm text-ss-muted">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-2 border-t border-ss-border pt-4 font-mono text-xs text-ss-muted">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}

export { formatDate };
