"use client";

import { useState } from "react";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { BlogCard } from "@/components/ui/BlogCard";
import type { BlogPost } from "@/content/blog";

export function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const visible = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
              active === category
                ? "border-ss-teal bg-ss-teal/15 text-ss-mint"
                : "border-ss-border text-ss-muted hover:border-ss-teal hover:text-ss-mint"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <RevealItem key={post.slug}>
            <BlogCard post={post} />
          </RevealItem>
        ))}
      </RevealGroup>

      {visible.length === 0 && (
        <p className="mt-16 text-center text-ss-muted">No posts in this category yet.</p>
      )}
    </div>
  );
}
