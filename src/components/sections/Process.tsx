import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { process } from "@/content/home";

export function Process() {
  return (
    <section id="process" className="border-y border-ss-border bg-ss-surface-2/40 py-24 sm:py-32">
      <Container>
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

        <RevealGroup className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {process.steps.map((step) => (
            <RevealItem key={step.step} className="relative pl-4">
              <span className="font-display text-5xl font-semibold text-ss-teal/30">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ss-text">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ss-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
