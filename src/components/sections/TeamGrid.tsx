import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { teamMembers } from "@/content/team";

export function TeamGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Meet Our Team"
            title="The People Behind Staller Stack."
            align="center"
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <RevealItem key={member.name}>
              <Tilt strength={6} className="rounded-2xl">
                <div className="overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display text-base font-semibold text-ss-text">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm text-ss-muted">
                      {member.role}
                    </p>
                  </div>
                </div>
              </Tilt>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
