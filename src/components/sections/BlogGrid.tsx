"use client";

import { useMemo, useState } from "react";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { BlogCard } from "@/components/ui/BlogCard";
import { BlogCategoryTile } from "@/components/ui/BlogCategoryTile";
import { BlogSidebar } from "@/components/sections/BlogSidebar";
import type { BlogPost } from "@/content/blog";

export function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const categoryThumbnails = useMemo(() => {
    const map = new Map<string, string>();
    for (const post of posts) {
      if (!map.has(post.category)) {
        map.set(post.category, post.coverImage.src);
      }
    }
    return map;
  }, [posts]);

  const groups = useMemo(() => {
    const list = active === "All" ? categories : [active];
    return list
      .map((category) => ({
        category,
        posts: posts.filter((post) => post.category === category),
      }))
      .filter((group) => group.posts.length > 0);
  }, [active, categories, posts]);

  return (
    <div>
      <div>
        <h2 className="font-display text-sm uppercase tracking-[0.2em] text-ss-muted">
          Browse by Topic
        </h2>
        <div className="relative mt-5">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <BlogCategoryTile
              label="All Posts"
              active={active === "All"}
              onClick={() => setActive("All")}
            />
            {categories.map((category) => (
              <BlogCategoryTile
                key={category}
                label={category}
                image={categoryThumbnails.get(category)}
                active={active === category}
                onClick={() => setActive(category)}
              />
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ss-base to-transparent"
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col gap-16 lg:col-span-2">
          {groups.map((group) => (
            <div key={group.category}>
              <h2 className="font-display text-xl font-semibold text-ss-text">
                {group.category}
              </h2>
              <RevealGroup className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {group.posts.map((post) => (
                  <RevealItem key={post.slug}>
                    <BlogCard post={post} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}

          {groups.length === 0 && (
            <p className="text-center text-ss-muted">No posts in this category yet.</p>
          )}
        </div>

        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
