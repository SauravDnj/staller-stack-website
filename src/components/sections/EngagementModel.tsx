import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { ACCENT_CLASSES } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";

export function EngagementModel({
  items,
  accent,
}: {
  items: { title: string; description: string }[];
  accent: AccentKey;
}) {
  const accentClasses = ACCENT_CLASSES[accent];

  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ss-text">
            How Engagements Typically Work
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ss-muted">
            Every project starts with scoping — here&apos;s the shape most engagements for
            this service take.
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, index) => (
            <RevealItem
              key={item.title}
              className={`rounded-2xl border border-ss-border bg-ss-surface/60 p-6 transition-colors duration-300 ${accentClasses.hoverBorder}`}
            >
              <span className={`font-mono text-xs uppercase tracking-[0.25em] ${accentClasses.text}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-ss-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ss-muted">{item.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
