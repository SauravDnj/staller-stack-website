import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-ss-border bg-ss-surface-2/40 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-[36rem] -translate-x-1/2 opacity-[0.12] blur-[80px]"
        style={{
          background: "var(--ss-mint)",
          animation: "pulse-soft 7s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite",
        }}
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="4.9 ★★★★★ · 80+ Client Reviews"
            title="Hear from Our Customers."
            align="center"
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <RevealItem key={testimonial.name}>
              <TiltCard strength={5}>
                <p className="text-sm text-ss-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <div className="flex items-center gap-2">
                    <span className="text-lg leading-none" aria-hidden>
                      {testimonial.flag}
                    </span>
                    <p className="font-display text-sm font-semibold text-ss-text">
                      {testimonial.name}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-ss-muted">
                    {testimonial.title}
                  </p>
                  <span className="mt-3 inline-flex items-center rounded-full border border-ss-border bg-ss-surface/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ss-teal">
                    {testimonial.country}
                  </span>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
