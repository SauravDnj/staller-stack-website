"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ACCENT_HEX } from "@/lib/accentTheme";
import { VISUAL_COMPONENTS } from "@/components/three";
import { DEFAULT_INDUSTRY_THEME, type Industry } from "@/content/industries";

/** Icon-led, centered hero for industry pages — deliberately different from
 * ServiceHero's split/diagonal layouts so Industries reads as its own
 * section of the site rather than a re-skin of Services. */
export function IndustryHero({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { accent, visual } = industry.theme ?? DEFAULT_INDUSTRY_THEME;
  const color = ACCENT_HEX[accent];
  const Visual = VISUAL_COMPONENTS[visual];
  const showCanvas = !reducedMotion && inView;

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(ellipse at top, color-mix(in srgb, ${color} 20%, transparent), transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 25%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 25%, black 15%, transparent 75%)",
        }}
      >
        <div className="bg-grid-animate absolute inset-0 opacity-30" />
      </div>
      {showCanvas && (
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Visual color={color} paused={!showCanvas} />
        </div>
      )}

      <Container className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex flex-col items-center">
            <Badge>Industries We Empower</Badge>
            <div
              className="relative mt-8 flex h-20 w-20 items-center justify-center rounded-2xl border bg-ss-surface/80 backdrop-blur-sm"
              style={{
                borderColor: `color-mix(in srgb, ${color} 45%, transparent)`,
                boxShadow: `0 0 60px -12px color-mix(in srgb, ${color} 55%, transparent)`,
              }}
            >
              <IndustryIcon icon={industry.icon} />
            </div>
            <h1 className="mt-6 font-display text-3xl font-semibold leading-tight text-ss-text sm:text-4xl lg:text-5xl">
              {industry.name}
            </h1>
            <p className="mt-6 text-lg text-ss-muted">
              {industry.overview ?? industry.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Talk to an Expert</Button>
              <Button href="/portfolio" variant="outline">
                See Our Work
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
