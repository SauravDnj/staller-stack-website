import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { ACCENT_CLASSES } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";

export function DeliverablesShowcase({
  deliverables,
  accent,
}: {
  deliverables: string[];
  accent: AccentKey;
}) {
  const accentClasses = ACCENT_CLASSES[accent];

  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ss-text">
            What You&apos;ll Receive
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ss-muted">
            Concrete outputs you walk away with when the engagement wraps — not just a
            status update.
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {deliverables.map((deliverable, index) => (
            <RevealItem key={deliverable}>
              <TiltCard accent={accent} className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accentClasses.bgSoft}`}
                  >
                    <AnimatedCheck className={`h-5 w-5 ${accentClasses.text}`} />
                  </span>
                  <span className={`font-mono text-xs ${accentClasses.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 font-display text-sm font-medium leading-relaxed text-ss-text">
                  {deliverable}
                </p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
