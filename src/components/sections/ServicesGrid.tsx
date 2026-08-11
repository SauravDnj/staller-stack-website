"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tilt } from "@/components/ui/Tilt";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { AmbientVisual } from "@/components/ui/AmbientVisual";
import { ACCENT_CLASSES, ACCENT_HEX } from "@/lib/accentTheme";
import { services } from "@/content/services";

const DRAG_CLICK_THRESHOLD = 6;

export function ServicesGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0, moved: 0 });

  function updateEdges() {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft < 8);
    setAtEnd(track.scrollLeft + track.clientWidth > track.scrollWidth - 8);

    const cardWidth = track.scrollWidth / services.length;
    const index = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(Math.min(services.length - 1, Math.max(0, index)));

    const maxScroll = track.scrollWidth - track.clientWidth;
    setScrollProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  function scrollByCards(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  }

  function handlePointerDown(event: ReactMouseEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { isDown: true, startX: event.pageX, startScroll: track.scrollLeft, moved: 0 };
  }

  function handlePointerMove(event: ReactMouseEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !dragState.current.isDown) return;
    const delta = event.pageX - dragState.current.startX;
    dragState.current.moved = Math.abs(delta);
    track.scrollLeft = dragState.current.startScroll - delta;
  }

  function endDrag() {
    dragState.current.isDown = false;
  }

  function handleCardClick(event: ReactMouseEvent) {
    if (dragState.current.moved > DRAG_CLICK_THRESHOLD) {
      event.preventDefault();
    }
  }

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--ss-teal)_12%,transparent),_transparent_60%)]" />
      <AmbientVisual
        visual="orbit"
        color="var(--ss-teal)"
        className="left-[-70px] top-1/2 hidden h-72 w-72 -translate-y-1/2 opacity-[0.25] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 lg:block"
      >
        <div
          className="bg-grid-animate absolute inset-0 opacity-20"
          style={{
            maskImage: "radial-gradient(circle, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 75%)",
          }}
        />
      </div>
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Our Solutions"
              title="Tailored Technology Solutions for Modern Businesses."
            />
          </Reveal>
          <div className="flex items-center gap-4">
            <Link
              href="/services"
              className="font-display text-sm text-ss-teal hover:text-ss-mint"
            >
              More Services →
            </Link>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Scroll left"
                disabled={atStart}
                onClick={() => scrollByCards(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ss-border bg-ss-surface text-ss-text transition-colors hover:border-ss-teal hover:text-ss-mint disabled:opacity-30 disabled:hover:border-ss-border disabled:hover:text-ss-text"
              >
                <FiChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                disabled={atEnd}
                onClick={() => scrollByCards(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ss-border bg-ss-surface text-ss-text transition-colors hover:border-ss-teal hover:text-ss-mint disabled:opacity-30 disabled:hover:border-ss-border disabled:hover:text-ss-text"
              >
                <FiChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ss-base to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ss-base to-transparent sm:w-20" />

          <div
            ref={trackRef}
            onScroll={updateEdges}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            className="-mx-6 cursor-grab select-none overflow-x-auto px-6 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] active:cursor-grabbing snap-x snap-mandatory scroll-smooth lg:-mx-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
          >
            <RevealGroup className="flex gap-6">
              {services.map((service, index) => {
                const accentClasses = ACCENT_CLASSES[service.theme.accent];
                const accentHex = ACCENT_HEX[service.theme.accent];
                return (
                  <RevealItem
                    key={service.slug}
                    className="w-[78vw] max-w-[300px] shrink-0 snap-start sm:w-[320px] lg:w-[340px]"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={handleCardClick}
                      onDragStart={(e) => e.preventDefault()}
                      className={`block h-full transition-all duration-500 ${
                        index === activeIndex ? "scale-100 opacity-100" : "scale-[0.96] opacity-70"
                      }`}
                    >
                      <Tilt
                        strength={8}
                        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60 backdrop-blur-sm transition-colors duration-300 ${accentClasses.hoverBorder}`}
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-x-0 top-0 h-1"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${accentHex}, transparent)`,
                          }}
                        />
                        <div
                          className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${accentClasses.glowHover}`}
                        />
                        <div
                          className="relative flex h-full flex-col p-8"
                          style={{ transform: "translateZ(24px)" }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                              <SpinningIcon>
                                <ServiceIcon icon={service.icon} />
                              </SpinningIcon>
                            </div>
                            <span className="font-mono text-xs text-ss-muted">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="mt-6 font-display text-xl font-semibold text-ss-text">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-sm text-ss-muted">{service.description}</p>
                          <ul className="mt-6 flex flex-col gap-2">
                            {service.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-center gap-2 text-sm text-ss-muted"
                              >
                                <span className={`h-1 w-1 rounded-full ${accentClasses.dot}`} />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 flex flex-wrap gap-2 border-t border-ss-border pt-5">
                            {service.techStack
                              .flatMap((group) => group.items)
                              .slice(0, 6)
                              .map((tech) => (
                                <span
                                  key={tech}
                                  className="flex items-center gap-1.5 rounded-full border border-ss-border bg-ss-base px-3 py-1.5 font-mono text-xs text-ss-text"
                                >
                                  <TechIcon name={tech} className="h-3.5 w-3.5 text-ss-teal" />
                                  {tech}
                                </span>
                              ))}
                          </div>
                          <span
                            className={`mt-6 inline-flex items-center gap-1.5 font-display text-sm ${accentClasses.text}`}
                          >
                            Explore Service
                            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </Tilt>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          <div className="mx-auto mt-8 h-1 w-full max-w-[240px] overflow-hidden rounded-full bg-ss-border">
            <div
              className="h-full rounded-full bg-ss-teal transition-[width] duration-150 ease-out"
              style={{ width: `${Math.max(8, scrollProgress * 100)}%` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
