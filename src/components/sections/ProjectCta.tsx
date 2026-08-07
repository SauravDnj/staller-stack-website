"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useAiGuide } from "@/components/ai-guide/AiGuideContext";

const trustPoints = [
  "Response within 24 hours",
  "NDA available before we discuss details",
  "A custom plan with timeline & budget — free",
];

export function ProjectCta() {
  const { open } = useAiGuide();

  return (
    <section className="relative overflow-hidden border-t border-ss-border py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-[-40px] h-64 w-64 rounded-full opacity-[0.11] blur-[100px]"
        style={{
          background: "var(--ss-blue)",
          animation: "drift 24s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
            Get Started
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ss-text sm:text-4xl">
            Do You Have a Project in Mind?
          </h2>
          <p className="mt-4 max-w-xl text-ss-muted">
            Whether it&apos;s a web platform, a mobile app, or an AI-driven
            workflow — we scope it, build it, and keep it running. Tell us
            what you&apos;re building and we&apos;ll tell you exactly how
            we&apos;d approach it.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-ss-text"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-2xl border border-ss-border bg-ss-surface/60 p-8"
        >
          <p className="font-display text-lg font-semibold text-ss-text">
            Not sure where to start?
          </p>
          <p className="mt-2 text-sm text-ss-muted">
            Answer a few quick questions and we&apos;ll point you to the right
            service.
          </p>
          <Button onClick={open} className="mt-6 w-full justify-center">
            Try Our AI Guide <span aria-hidden>→</span>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
