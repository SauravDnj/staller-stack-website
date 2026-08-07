import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ACCENT_CLASSES } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";

const NUMERIC_STAT = /^(\d+(?:\.\d+)?)([+%]?)$/;

export function StatsStrip({
  stats,
  accent,
}: {
  stats: { label: string; value: string }[];
  accent: AccentKey;
}) {
  const accentClasses = ACCENT_CLASSES[accent];

  return (
    <section className="border-t border-ss-border py-16 sm:py-20">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => {
            const match = stat.value.match(NUMERIC_STAT);
            return (
              <RevealItem key={stat.label} className="text-center sm:text-left">
                <p className={`font-display text-3xl font-semibold sm:text-4xl ${accentClasses.text}`}>
                  {match ? (
                    <AnimatedCounter
                      value={Number(match[1])}
                      suffix={match[2]}
                      decimals={match[1].includes(".") ? 1 : 0}
                    />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ss-muted">
                  {stat.label}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
