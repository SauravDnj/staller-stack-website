"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AiOfferingIcon } from "@/components/ui/AiOfferingIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ACCENT_HEX } from "@/lib/accentTheme";
import { VISUAL_COMPONENTS } from "@/components/three";
import type { AiOffering } from "@/content/aiOfferings";

export function AiOfferingHero({ offering }: { offering: AiOffering }) {
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

  const { accent, visual, heroVariant } = offering.theme;
  const color = ACCENT_HEX[accent];
  const Visual = VISUAL_COMPONENTS[visual];
  const showCanvas = !reducedMotion && inView;
  const isSplit = heroVariant === "split";
  const isDiagonal = heroVariant === "diagonal";
  const isCentered = heroVariant === "centered";
  const badgeLabel = offering.category === "service" ? "AI Service" : "AI Solution";

  const photoPanel = (
    <div
      className="relative h-full w-full overflow-hidden rounded-3xl border bg-ss-surface/30"
      style={{ borderColor: `color-mix(in srgb, ${color} 45%, transparent)` }}
    >
      <Image
        src={offering.image}
        alt={offering.imageAlt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
        priority
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 40%, color-mix(in srgb, ${color} 35%, var(--ss-base) 65%) 100%)`,
        }}
      />
      {showCanvas && (
        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
          <Visual color={color} paused={!showCanvas} />
        </div>
      )}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      {isDiagonal && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block"
          style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <Image
            src={offering.image}
            alt={offering.imageAlt}
            fill
            sizes="55vw"
            className="object-cover opacity-40"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(115deg, var(--ss-base) 0%, transparent 35%, color-mix(in srgb, ${color} 30%, transparent) 100%)`,
            }}
          />
          {showCanvas && (
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <Visual color={color} paused={!showCanvas} />
            </div>
          )}
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(ellipse at top, color-mix(in srgb, ${color} 18%, transparent), transparent 60%)`,
        }}
      />
      {!isSplit && !isDiagonal && showCanvas && (
        <div className="pointer-events-none absolute inset-0 opacity-60">
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
                <Badge>{badgeLabel}</Badge>
                <div
                  className={`mt-6 flex items-center gap-4 ${isCentered ? "flex-col text-center" : ""}`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ss-border bg-ss-surface">
                    <SpinningIcon>
                      <AiOfferingIcon icon={offering.icon} className="h-6 w-6 text-ss-mint" />
                    </SpinningIcon>
                  </div>
                  <h1 className="font-display text-3xl font-semibold leading-tight text-ss-text sm:text-4xl lg:text-5xl">
                    {offering.name}
                  </h1>
                </div>
                <p className="mt-6 text-lg text-ss-muted">{offering.intro}</p>
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
            {isCentered && (
              <Reveal delay={0.15}>
                <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-xl">
                  {photoPanel}
                </div>
              </Reveal>
            )}
          </div>
          {isSplit && (
            <div className="relative mt-12 hidden aspect-square items-center justify-center lg:mt-0 lg:flex">
              {photoPanel}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
