import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trustBar } from "@/content/home";

export function TrustBar() {
  return (
    <section className="border-y border-ss-border bg-ss-surface-2/60 py-10">
      <Container>
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-ss-muted">
            {trustBar.heading}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustBar.logos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg tracking-wide text-ss-muted/70 transition-colors hover:text-ss-teal"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
