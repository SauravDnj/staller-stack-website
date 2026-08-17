import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const platforms = [
  { name: "Clutch", href: "https://clutch.co", src: "/images/client/clutch.png", width: 860, height: 283 },
  { name: "Upwork", href: "https://www.upwork.com", src: "/images/client/upwork.png", width: 2400, height: 717 },
  { name: "Fiverr", href: "https://www.fiverr.com", src: "/images/client/fiverr.png", width: 3840, height: 2160 },
];

export function TrustedPlatforms() {
  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reviewed & Rated"
            title="Where Clients Rate Us"
            description="We keep our reviews public on the platforms where it's hardest to fake them — real ratings from real engagements, not testimonials we handpicked ourselves."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-white px-6 py-4 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={platform.src}
                alt={platform.name}
                width={platform.width}
                height={platform.height}
                className="h-7 w-auto sm:h-8"
              />
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
