import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/ui/Reveal";
import { aboutStats } from "@/content/home";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full opacity-[0.1] blur-[90px]"
        style={{
          background: "var(--ss-indigo)",
          animation: "drift 24s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full opacity-[0.1] blur-[100px]"
        style={{
          background: "var(--ss-cyan)",
          animation: "drift 30s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate-reverse",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ss-teal">
            {aboutStats.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ss-text sm:text-4xl">
            {aboutStats.heading}
          </h2>
          <p className="mt-6 text-ss-muted">{aboutStats.paragraph}</p>
          <Button href="/about" variant="outline" className="mt-8">
            Learn More <span aria-hidden>→</span>
          </Button>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ss-border pt-8">
            {aboutStats.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-semibold text-ss-mint sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-sm text-ss-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <Tilt strength={4} className="relative rounded-2xl">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-ss-teal/10 blur-2xl" />
            <Image
              src={aboutStats.image}
              alt="Staller Stack team collaborating"
              width={800}
              height={600}
              className="w-full rounded-2xl border border-ss-border object-cover"
            />
          </Tilt>
        </Reveal>
      </Container>
    </section>
  );
}
