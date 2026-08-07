"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ACCENT_HEX } from "@/lib/accentTheme";
import { VISUAL_COMPONENTS } from "@/components/three";
import type { Service } from "@/content/services";

export function ServiceHero({ service }: { service: Service }) {
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

  const { accent, visual, heroVariant } = service.theme;
  const color = ACCENT_HEX[accent];
  const Visual = VISUAL_COMPONENTS[visual];
  const showCanvas = !reducedMotion && inView;
  const isSplit = heroVariant === "split";
  const isDiagonal = heroVariant === "diagonal";
  const isCentered = heroVariant === "centered";

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      {isDiagonal && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[65%] opacity-[0.16]"
          style={{
            background: `linear-gradient(135deg, ${color}, transparent 70%)`,
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(ellipse at top, color-mix(in srgb, ${color} 18%, transparent), transparent 60%)`,
        }}
      />
      {showCanvas && (
        <div
          className={
            isSplit
              ? "pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block"
              : "pointer-events-none absolute inset-0 opacity-60"
          }
        >
          <Visual color={color} paused={!showCanvas} />
        </div>
      )}

      <Container className="relative">
        <div
          className={
            isSplit
              ? "lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12"
              : isDiagonal
                ? "max-w-2xl"
                : "mx-auto max-w-3xl text-center"
          }
        >
          <div>
            <Reveal>
              <div className={isCentered ? "flex flex-col items-center" : ""}>
                <Badge>Our Solutions</Badge>
                <div
                  className={`mt-6 flex items-center gap-4 ${isCentered ? "flex-col text-center" : ""}`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ss-border bg-ss-surface">
                    <SpinningIcon>
                      <ServiceIcon icon={service.icon} />
                    </SpinningIcon>
                  </div>
                  <h1 className="font-display text-3xl font-semibold leading-tight text-ss-text sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h1>
                </div>
                <p className="mt-6 text-lg text-ss-muted">{service.intro}</p>
                <div
                  className={`mt-8 flex flex-wrap gap-4 ${isCentered ? "justify-center" : ""}`}
                >
                  <Button href="/contact">Talk to an Expert</Button>
                  <Button href="/portfolio" variant="outline">
                    See Our Work
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
          {isSplit && (
            <div className="relative mt-12 hidden aspect-square items-center justify-center lg:mt-0 lg:flex">
              <div
                className="h-full w-full rounded-3xl border bg-ss-surface/30 backdrop-blur-sm"
                style={{ borderColor: `color-mix(in srgb, ${color} 45%, transparent)` }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
