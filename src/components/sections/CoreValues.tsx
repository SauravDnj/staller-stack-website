import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { aboutPage } from "@/content/about";

export function CoreValues() {
  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What Drives Us"
            title={aboutPage.coreValuesHeading}
            description={aboutPage.coreValuesSubtext}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ss-border">
              <Image
                src={aboutPage.coreValuesImage.src}
                alt={aboutPage.coreValuesImage.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ss-base/70 via-transparent to-transparent"
              />
            </div>
          </Reveal>

          <RevealGroup className="flex flex-col gap-8">
            {aboutPage.coreValues.map((value, index) => (
              <RevealItem
                key={value.title}
                className="flex gap-5 border-b border-ss-border pb-8 last:border-b-0 last:pb-0"
              >
                <span className="shrink-0 font-display text-2xl font-semibold text-ss-teal/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ss-text">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-ss-muted sm:text-base">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
