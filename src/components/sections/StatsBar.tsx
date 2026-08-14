import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { aboutStats } from "@/content/home";

export function StatsBar() {
  return (
    <section className="border-y border-ss-border bg-ss-surface-2/40 py-16">
      <Container className="grid grid-cols-3 gap-6 text-center">
        {aboutStats.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-semibold text-ss-mint sm:text-4xl lg:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-ss-muted">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
