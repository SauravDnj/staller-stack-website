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
        <Reveal className="lg:col-span-2">
          <Badge>Leadership</Badge>
          <h2 className="mt-5 font-display text-xl font-semibold text-ss-text sm:text-2xl">
            Built and Led by Someone Who Answers For It.
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            {founder.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-sm text-ss-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <Tilt strength={5} className="rounded-3xl">
            <div className="overflow-hidden rounded-3xl border border-ss-border bg-ss-surface">
              <Image
                src={founder.photo}
                alt={founder.name}
                width={1170}
                height={1134}
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </Tilt>
          <div className="mt-6 text-center">
            <p className="font-display text-xl font-semibold text-ss-text">{founder.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ss-teal">
              {founder.role}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
