"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { ACCENT_CLASSES, ACCENT_HEX } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";

export function ProcessSteps({
  steps,
  accent,
  title = "How We Work",
}: {
  steps: { title: string; description: string }[];
  accent: AccentKey;
  title?: string;
}) {
  const accentClasses = ACCENT_CLASSES[accent];
  const color = ACCENT_HEX[accent];

  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ss-text">{title}</h2>
        </Reveal>
        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px lg:block"
            style={{ backgroundColor: "var(--ss-border)" }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px origin-left lg:block"
            style={{ backgroundColor: color }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealItem key={step.title} className="relative">
                <motion.p
                  className={`font-display text-3xl font-semibold ${accentClasses.text}`}
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: "backOut" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.p>
                <h3 className="mt-2 font-display text-base font-semibold text-ss-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ss-muted">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
