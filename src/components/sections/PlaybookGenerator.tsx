"use client";

import { useState } from "react";
import { FiCloud, FiCode, FiCpu, FiShield } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconTile, type IconTileColor } from "@/components/ui/IconTile";
import { playbookGenerator } from "@/content/home";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "ai-ml": FiCpu,
  security: FiShield,
  "cloud-devops": FiCloud,
  "web-app": FiCode,
};

export function PlaybookGenerator() {
  const [activeCategory, setActiveCategory] = useState(playbookGenerator.categories[0]);
  const [value, setValue] = useState("");

  return (
    <section id="playbook-generator" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={playbookGenerator.eyebrow}
            title={
              <>
                {playbookGenerator.headingPrefix}{" "}
                <span className="text-gradient">{playbookGenerator.headingHighlight}</span>
              </>
            }
            description={playbookGenerator.subtext}
          />
        </Reveal>

        <Reveal delay={0.1} className="relative mt-14">
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--ss-teal) 18%, transparent), transparent 70%)",
            }}
          />

          <div className="rounded-3xl border border-ss-border bg-ss-surface/60 p-6 backdrop-blur sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-ss-teal/30" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-ss-teal" />
                <span className="absolute -bottom-0.5 -left-0.5 h-2 w-2 rounded-full bg-ss-cyan" />
                <IconTile color="teal" size="lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
                  </svg>
                </IconTile>
              </div>

              <div>
                <span className="inline-flex items-center rounded-full border border-ss-teal/30 bg-ss-teal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ss-teal">
                  {playbookGenerator.badge}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ss-text sm:text-2xl">
                  {playbookGenerator.cardTitle}
                </h3>
              </div>
            </div>

            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={activeCategory.examples[0]}
              rows={4}
              maxLength={600}
              className="mt-6 w-full resize-none rounded-2xl border border-ss-border bg-ss-base p-5 text-sm text-ss-text placeholder:text-ss-muted focus:border-ss-teal focus:outline-none focus:ring-1 focus:ring-ss-teal sm:text-base"
            />

            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3">
                <Button
                  href={`/contact?brief=${encodeURIComponent(value)}`}
                  variant="primary"
                  className={value.trim() === "" ? "pointer-events-none opacity-50" : ""}
                >
                  {playbookGenerator.submitLabel}
                  <span aria-hidden>→</span>
                </Button>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-ss-border bg-ss-surface p-1.5">
                {playbookGenerator.categories.map((category) => {
                  const Icon = categoryIcons[category.key];
                  const isActive = category.key === activeCategory.key;
                  return (
                    <button
                      key={category.key}
                      type="button"
                      aria-label={category.label}
                      aria-pressed={isActive}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full p-1 transition-transform duration-300 ${isActive ? "scale-110" : "opacity-60 hover:opacity-100"}`}
                    >
                      <IconTile color={category.color as IconTileColor} size="sm">
                        <Icon className="h-4 w-4" />
                      </IconTile>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-4 text-xs text-ss-muted">{playbookGenerator.ctaHelper}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
