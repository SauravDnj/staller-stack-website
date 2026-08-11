"use client";

import { motion } from "framer-motion";
import { FiCode, FiCompass, FiTrendingUp } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { IconTile, type IconTileColor } from "@/components/ui/IconTile";
import { AmbientVisual } from "@/components/ui/AmbientVisual";
import { process } from "@/content/home";

const stepIcons = [FiCompass, FiCode, FiTrendingUp];
const stepColors: IconTileColor[] = ["teal", "cyan", "amber"];
const stepBorderHover = ["hover:border-ss-teal", "hover:border-ss-cyan", "hover:border-ss-amber"];
const stepNumberColors = ["text-ss-teal", "text-ss-cyan", "text-ss-amber"];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-ss-border bg-ss-surface-2/40 py-24 sm:py-32"
    >
      <AmbientVisual
        visual="wave"
        color="var(--ss-amber)"
        className="right-[-80px] top-1/2 hidden h-72 w-72 -translate-y-1/2 opacity-[0.28] lg:block"
      />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={process.eyebrow}
              title={process.heading}
              description={process.subtext}
            />
          </Reveal>
          <Button href="/contact" variant="outline">
            Request a Call <span aria-hidden>→</span>
          </Button>
        </div>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 hidden h-px md:block"
            style={{ backgroundColor: "var(--ss-border)", top: "54px" }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 right-0 hidden h-px origin-left md:block"
            style={{ backgroundColor: "var(--ss-amber)", top: "54px" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {process.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <RevealItem key={step.step}>
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${stepBorderHover[index]}`}
                  >
                    <div className="flex items-start justify-between">
                      <IconTile color={stepColors[index]} size="md" className="relative">
                        <Icon />
                      </IconTile>
                      <span
                        aria-hidden
                        className={`font-display text-4xl font-bold leading-none sm:text-5xl ${stepNumberColors[index]}`}
                      >
                        {step.step}
                      </span>
                    </div>
                    <h3 className="relative mt-6 font-display text-xl font-semibold text-ss-text">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 text-sm text-ss-muted">{step.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
