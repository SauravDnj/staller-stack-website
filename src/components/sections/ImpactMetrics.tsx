import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { impactMetrics } from "@/content/metrics";

const colorClass: Record<string, string> = {
  teal: "text-ss-teal",
  mint: "text-ss-mint",
  cyan: "text-ss-cyan",
  indigo: "text-ss-indigo",
  amber: "text-ss-amber",
};

export function ImpactMetrics() {
  return (
    <section className="py-16">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-6 rounded-2xl border border-ss-border bg-ss-surface/60 p-8 sm:p-10 lg:grid-cols-5">
          {impactMetrics.map((metric) => (
            <RevealItem key={metric.label} className="text-center">
              <p
                className={`font-display text-4xl font-semibold tracking-tight ${colorClass[metric.color]}`}
              >
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </p>
              <p className="mt-2 text-sm text-ss-muted">{metric.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
