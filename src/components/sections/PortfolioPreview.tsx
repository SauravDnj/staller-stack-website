"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/portfolio";

const DRAG_CLICK_THRESHOLD = 6;

export function PortfolioPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0, moved: 0 });

  function getIndexFromScroll() {
    const track = trackRef.current;
    if (!track) return 0;
    const cardWidth = track.scrollWidth / projects.length;
    const index = Math.round(track.scrollLeft / cardWidth);
    return Math.min(projects.length - 1, Math.max(0, index));
  }

  function updateActiveIndex() {
    setActiveIndex(getIndexFromScroll());
  }

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / projects.length;
    track.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  }

  function handlePointerDown(event: ReactMouseEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      isDown: true,
      startX: event.pageX,
      startScroll: track.scrollLeft,
      moved: 0,
    };
  }

  function handlePointerMove(event: ReactMouseEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !dragState.current.isDown) return;
    const delta = event.pageX - dragState.current.startX;
    dragState.current.moved = Math.abs(delta);
    track.scrollLeft = dragState.current.startScroll - delta;
  }

  function endDrag() {
    if (!dragState.current.isDown) return;
    dragState.current.isDown = false;
    if (dragState.current.moved > DRAG_CLICK_THRESHOLD) {
      scrollToIndex(getIndexFromScroll());
    }
  }

  function handleCardClick(event: ReactMouseEvent) {
    if (dragState.current.moved > DRAG_CLICK_THRESHOLD) {
      event.preventDefault();
    }
  }

  return (
    <section id="portfolio" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full opacity-[0.1] blur-[95px]"
        style={{
          background: "var(--ss-amber)",
          animation: "drift 22s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-24 h-52 w-52 rounded-full opacity-[0.1] blur-[90px]"
        style={{
          background: "var(--ss-blue)",
          animation: "drift 28s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate-reverse",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Proud Projects"
              title="Breaking Boundaries, Building Solutions."
            />
          </Reveal>
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              className="font-display text-sm text-ss-teal hover:text-ss-mint"
            >
              More Projects →
            </Link>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ss-border text-ss-text transition-colors hover:border-ss-teal hover:text-ss-mint"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() =>
                  scrollToIndex(Math.min(projects.length - 1, activeIndex + 1))
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ss-border text-ss-text transition-colors hover:border-ss-teal hover:text-ss-mint"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div
        ref={trackRef}
        onScroll={updateActiveIndex}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className="mt-14 flex cursor-grab select-none gap-6 overflow-x-auto px-6 pb-4 [scroll-snap-type:x_mandatory] [scrollbar-width:none] active:cursor-grabbing lg:px-[calc((100vw-80rem)/2+1.5rem)] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            onClick={handleCardClick}
            onDragStart={(e) => e.preventDefault()}
            className={`w-[80vw] shrink-0 [scroll-snap-align:start] sm:w-[50vw] lg:w-[36vw] transition-all duration-500 ${
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-[0.94] opacity-50"
            }`}
          >
            <TiltCard className="h-full !p-0 overflow-hidden">
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 55vw, 85vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ss-base/90 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ss-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-ss-muted line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          </Link>
        ))}
      </div>

      <Container>
        <div className="mt-2 flex justify-center gap-1">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Go to ${project.title}`}
              onClick={() => scrollToIndex(index)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-ss-teal" : "w-1.5 bg-ss-border"
                }`}
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
