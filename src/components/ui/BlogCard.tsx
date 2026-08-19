import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { Tilt } from "@/components/ui/Tilt";
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
        strength={4}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-ss-border bg-ss-surface transition-colors duration-300 group-hover:border-ss-teal"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.caption}
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ss-surface via-ss-surface/0 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-40" />
          <span className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-ss-teal text-ss-base opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <FiArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ss-teal">
              {post.category}
            </span>
            <span className="shrink-0 rounded-full bg-ss-teal/15 px-3 py-1 font-mono text-xs text-ss-mint">
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-4 line-clamp-2 font-display text-lg font-semibold text-ss-text transition-colors group-hover:text-ss-mint">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm text-ss-muted">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-2 border-t border-ss-border pt-4 font-mono text-xs text-ss-muted">
            <FiCalendar className="h-3.5 w-3.5" aria-hidden />
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}

export { formatDate };
