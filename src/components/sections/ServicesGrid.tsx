"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { services } from "@/content/services";

export function ServicesGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft < 8);
    setAtEnd(track.scrollLeft + track.clientWidth > track.scrollWidth - 8);
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

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
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

        <div
          ref={trackRef}
          onScroll={updateEdges}
          className="mt-14 -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory scroll-smooth lg:-mx-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
        >
          <RevealGroup className="flex gap-6">
            {services.map((service) => (
              <RevealItem
                key={service.slug}
                className="w-[78vw] max-w-[300px] shrink-0 snap-start sm:w-[320px] lg:w-[340px]"
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <TiltCard className="h-full" accent={service.theme.accent}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                      <SpinningIcon>
                        <ServiceIcon icon={service.icon} />
                      </SpinningIcon>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-ss-text">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-ss-muted">
                      {service.description}
                    </p>
                    <ul className="mt-6 flex flex-col gap-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-2 text-sm text-ss-muted"
                        >
                          <span className="h-1 w-1 rounded-full bg-ss-teal" />
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
                  </TiltCard>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
