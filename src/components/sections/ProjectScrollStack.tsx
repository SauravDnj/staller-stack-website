"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/content/portfolio";

function ProjectStackCard({ project, index, total }: { project: Project; index: number; total: number }) {
  // Even cards: content left / image right. Odd cards: image left / content right.
  const imageOnRight = index % 2 === 0;
  const stats = project.results?.slice(0, 2) ?? [];
  const features = project.keyFeatures?.slice(0, 3) ?? [];

  return (
    <div className="grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[1.75rem] border border-ss-border bg-ss-surface p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:gap-8 sm:rounded-3xl sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12 xl:gap-14 xl:p-12">
      <div className={`min-w-0 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ss-border bg-ss-surface-2 font-display text-sm font-semibold text-ss-teal">
              {project.title.charAt(0)}
            </div>
            <span className="font-mono text-xs text-ss-muted">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <Badge>{project.category}</Badge>
        </div>

        <Link href={`/portfolio/${project.slug}`}>
          <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-ss-text transition-colors hover:text-ss-mint sm:mt-6 sm:text-2xl lg:text-[2.25rem]">
            {project.title}
          </h3>
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ss-muted"
            >
              <span aria-hidden className="h-1 w-1 rounded-full bg-ss-teal" />
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ss-muted sm:mt-5 sm:text-base">
          {project.description}
        </p>

        {stats.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-6 sm:mt-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex items-center gap-1.5 font-display text-xl font-semibold text-ss-mint sm:text-2xl">
                  <ArrowUp className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden />
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-ss-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {features.length > 0 && (
          <ul className="mt-5 flex flex-col gap-2 sm:mt-6">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ss-muted">
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal"
                />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        )}

        <Button href={`/portfolio/${project.slug}`} className="mt-6 w-fit sm:mt-7">
          View Case Study <span aria-hidden>→</span>
        </Button>
      </div>

      <Link
        href={`/portfolio/${project.slug}`}
        className={`group relative order-first block overflow-hidden rounded-2xl border border-ss-border bg-ss-surface-2/40 ${
          imageOnRight ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(min-width: 1280px) 48vw, (min-width: 1024px) 45vw, 94vw"
          className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          priority={index === 0}
        />
      </Link>
    </div>
  );
}

function StickyProjectCard({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = total > 1 ? index / (total - 1) : 0;
  const floor = 0.5;
  const step = total > 1 ? (1 - floor) / (total - 1) : 0;
  const targetScale = Math.max(floor, 1 - (total - 1 - index) * step);
  const scale = useTransform(scrollYProgress, [start, 1], [1, targetScale]);

  return (
    <div className="relative flex items-center justify-center py-3 sm:py-4 lg:sticky lg:top-20 lg:py-6">
      <motion.div style={{ scale }} className="w-full origin-top">
        <Container>
          <ProjectStackCard project={project} index={index} total={total} />
        </Container>
      </motion.div>
    </div>
  );
}

export function ProjectScrollStack({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative mt-12 flex flex-col gap-8 pb-8 sm:mt-16 sm:gap-10 sm:pb-10 lg:mt-20 lg:gap-36 lg:pb-44"
    >
      {projects.map((project, index) => (
        <StickyProjectCard
          key={project.slug}
          project={project}
          index={index}
          total={projects.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
