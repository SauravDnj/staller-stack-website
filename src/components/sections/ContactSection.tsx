"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientVisual } from "@/components/ui/AmbientVisual";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/content/siteConfig";

const trustPoints = [
  "Response within 24 hours",
  "NDA available before we discuss details",
  "A custom plan with timeline & budget — free",
];

export function ContactSection() {
  return (
    <section className="relative overflow-hidden border-t border-ss-border py-24 sm:py-32">
      <AmbientVisual
        visual="pulse"
        color="var(--ss-teal)"
        className="-right-32 top-0 h-[420px] w-[420px] opacity-40"
      />

      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-5">
        <Reveal className="flex flex-col gap-8 lg:col-span-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
              Get Started
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ss-text sm:text-4xl">
              Do You Have a Project in Mind?
            </h2>
            <p className="mt-4 text-ss-muted">
              Whether it&apos;s a production web platform, a cloud migration,
              a security &amp; compliance overhaul, or an AI-driven workflow —
              we scope it, build it, and keep it running. Tell us what
              you&apos;re building and we&apos;ll tell you exactly how
              we&apos;d approach it.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
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
          </div>

          <div className="rounded-2xl border border-ss-border bg-ss-surface/60 p-8">
            <p className="font-display text-lg font-semibold text-ss-text">
              Not sure where to start?
            </p>
            <p className="mt-2 text-sm text-ss-muted">
              Let&apos;s simplify it. Talk to us directly — we&apos;re here to
              help.
            </p>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="outline"
              className="mt-6 w-full justify-center"
            >
              Talk to us <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-2xl border border-ss-border bg-ss-surface/60 p-8 backdrop-blur-sm">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
