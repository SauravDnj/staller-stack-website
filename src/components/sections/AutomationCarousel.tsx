"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiChevronLeft,
  FiChevronRight,
  FiCloud,
  FiGitBranch,
  FiInbox,
  FiKey,
  FiSearch,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile } from "@/components/ui/IconTile";
import { AmbientVisual } from "@/components/ui/AmbientVisual";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { automationUseCases } from "@/content/home";

const AUTO_INTERVAL = 4200;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  key: FiKey,
  activity: FiActivity,
  cloud: FiCloud,
  shield: FiShield,
  search: FiSearch,
  zap: FiZap,
  "git-branch": FiGitBranch,
  inbox: FiInbox,
};

function circularDistance(index: number, active: number, total: number) {
  let d = index - active;
  d = ((d % total) + total) % total;
  if (d > total / 2) d -= total;
  return d;
}

export function AutomationCarousel() {
  const reducedMotion = useReducedMotion();
  const cases = automationUseCases.cases;
  const total = cases.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setActive((a) => (a + 1) % total), AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [reducedMotion, total]);

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + total) % total),
    [total]
  );

  return (
    <section id="automation" className="relative overflow-hidden py-24 sm:py-32">
      <AmbientVisual
        visual="pulse"
        color="var(--ss-cyan)"
        className="right-[-70px] bottom-0 hidden h-72 w-72 opacity-[0.28] lg:block"
      />
      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <Badge>{automationUseCases.badge}</Badge>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            <span className="text-gradient">{automationUseCases.headingPrefix}</span>{" "}
            <span className="text-ss-text">{automationUseCases.headingSuffix}</span>
          </h2>
          <p className="mt-4 max-w-xl text-ss-muted">{automationUseCases.subtext}</p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-16">
          <button
            type="button"
            aria-label="Previous use case"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ss-border bg-ss-surface text-ss-text transition-colors hover:border-ss-teal hover:text-ss-mint sm:flex"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next use case"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ss-border bg-ss-surface text-ss-text transition-colors hover:border-ss-teal hover:text-ss-mint sm:flex"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>

          <div className="relative h-[420px] overflow-x-hidden sm:h-[440px]">
            {cases.map((useCase, i) => {
              const d = circularDistance(i, active, total);
              const abs = Math.abs(d);
              if (abs > 2) return null;

              const Icon = iconMap[useCase.icon];
              const isCenter = d === 0;
              const scale = isCenter ? 1 : abs === 1 ? 0.8 : 0.62;
              const opacity = isCenter ? 1 : abs === 1 ? 0.55 : 0.22;
              const xOffset = d * 230;

              return (
                <div
                  key={useCase.title}
                  style={{ zIndex: 10 - abs }}
                  className="absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:w-[300px]"
                >
                  <motion.div
                    animate={{ x: xOffset, scale, opacity }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onClick={() => !isCenter && setActive(i)}
                    className={`rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-300 sm:p-8 ${
                      isCenter
                        ? "border-ss-teal bg-ss-surface shadow-[0_0_60px_-14px_var(--ss-teal)]"
                        : "cursor-pointer border-ss-border bg-ss-surface/40"
                    }`}
                  >
                    <IconTile color={useCase.color} size={isCenter ? "lg" : "md"} className="mx-auto">
                      <Icon className="h-6 w-6" />
                    </IconTile>

                    <h3
                      className={`mt-5 text-center font-display font-semibold ${
                        isCenter ? "text-lg text-ss-text" : "text-sm text-ss-muted"
                      }`}
                    >
                      {useCase.title}
                    </h3>

                    {isCenter && (
                      <>
                        <p className="mt-4 text-center text-sm text-ss-muted">
                          {useCase.description}
                        </p>
                        <ul className="mt-5 flex flex-col gap-2">
                          {useCase.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2 text-sm text-ss-text"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-1">
          {cases.map((useCase, i) => (
            <button
              key={useCase.title}
              type="button"
              aria-label={`Go to ${useCase.title}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-ss-teal" : "w-1.5 bg-ss-border"
                }`}
              />
            </button>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button href={automationUseCases.cta.href} variant="outline">
            {automationUseCases.cta.label} <span aria-hidden>→</span>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
