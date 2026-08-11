import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiGraphql,
  SiPostgresql,
  SiTerraform,
  SiFlutter,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandAzure } from "react-icons/tb";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { technologies } from "@/content/technologies";

const ICONS: Record<string, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  nodedotjs: SiNodedotjs,
  typescript: SiTypescript,
  python: SiPython,
  amazonaws: FaAws,
  microsoftazure: TbBrandAzure,
  googlecloud: SiGooglecloud,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  tensorflow: SiTensorflow,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  terraform: SiTerraform,
  flutter: SiFlutter,
};

function TechRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {[...technologies, ...technologies].map((tech, i) => {
        const Icon = ICONS[tech.icon];
        return (
          <span
            key={`${tech.name}-${i}`}
            className="group flex items-center gap-2.5 whitespace-nowrap rounded-full border border-ss-border bg-ss-base px-5 py-2.5 font-display text-sm text-ss-text transition-colors duration-300 hover:border-ss-teal hover:text-ss-mint"
          >
            {Icon && (
              <Icon
                className="h-4 w-4 text-ss-teal transition-transform duration-300 group-hover:scale-110 group-hover:text-ss-mint"
                aria-hidden
              />
            )}
            {tech.name}
          </span>
        );
      })}
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-ss-border bg-ss-surface-2 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_color-mix(in_srgb,var(--ss-teal)_10%,transparent),_transparent_65%)]" />
      <Container className="relative">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
            Our Technology Stack
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-8 space-y-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ss-surface-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ss-surface-2 to-transparent" />
        <TechRow />
        <TechRow reverse />
      </div>
    </section>
  );
}
