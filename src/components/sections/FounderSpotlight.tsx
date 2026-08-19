import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/ui/Reveal";
import { founder } from "@/content/team";

export function FounderSpotlight() {
  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-3">
          <Badge>Leadership</Badge>
          <h2 className="mt-5 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
            Built and Led by Someone Who Answers For It.
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {founder.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-sm text-ss-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-ss-border pt-8">
            {founder.focus.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                <div>
                  <p className="font-display text-sm font-semibold text-ss-text">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-ss-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="relative mx-auto max-w-xs lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-30 blur-[60px]"
              style={{
                background:
                  "radial-gradient(circle, var(--ss-teal), transparent 70%)",
                animation: "pulse-soft 6s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite",
              }}
            />
            <Tilt strength={5} className="relative rounded-3xl">
              <div className="relative overflow-hidden rounded-3xl border border-ss-border bg-ss-surface">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  width={1170}
                  height={1134}
                  sizes="(min-width: 1024px) 24vw, 60vw"
                  className="h-auto w-full"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ss-base/80 to-transparent"
                />
              </div>
            </Tilt>

            <div className="animate-logo-float absolute -bottom-5 left-1/2 w-max -translate-x-1/2">
              <span className="inline-flex items-center gap-2 rounded-full border border-ss-teal/40 bg-ss-surface px-4 py-2 font-mono text-xs uppercase tracking-wider text-ss-mint shadow-[0_0_24px_-8px_var(--ss-teal)]">
                <span className="h-1.5 w-1.5 rounded-full bg-ss-mint" />
                Founder
              </span>
            </div>
          </div>

          <Reveal delay={0.25} className="mt-10 text-center">
            <p className="font-display text-xl font-semibold text-ss-text">{founder.name}</p>
            <span
              aria-hidden
              className="mx-auto mt-2 block h-px w-12 bg-gradient-to-r from-transparent via-ss-teal to-transparent"
            />
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ss-teal">
              {founder.role}
            </p>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
