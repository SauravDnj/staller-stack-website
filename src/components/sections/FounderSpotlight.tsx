import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/ui/Reveal";
import { founder } from "@/content/team";

export function FounderSpotlight() {
  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Badge>Leadership</Badge>
          <h2 className="mt-6 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
            Built and Led by Someone Who Answers For It.
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {founder.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-ss-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Tilt strength={5} className="rounded-3xl">
            <div className="overflow-hidden rounded-3xl border border-ss-border bg-ss-surface">
              <div className="relative aspect-[4/5]">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
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
