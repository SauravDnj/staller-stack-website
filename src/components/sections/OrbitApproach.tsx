"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiTypescript,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiKubernetes,
  SiGooglecloud,
  SiRedis,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile, type IconTileColor } from "@/components/ui/IconTile";
import { approachTabs, orbitNodesByTab, type ApproachTab } from "@/content/approach";

const NODE_ICONS: Record<string, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  nodedotjs: SiNodedotjs,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  typescript: SiTypescript,
  python: SiPython,
  tensorflow: SiTensorflow,
  docker: SiDocker,
  githubactions: SiGithubactions,
  jenkins: SiJenkins,
  terraform: SiTerraform,
  kubernetes: SiKubernetes,
  amazonaws: FaAws,
  googlecloud: SiGooglecloud,
  redis: SiRedis,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
};

const tabColor: Record<ApproachTab["key"], IconTileColor> = {
  unify: "teal",
  automate: "cyan",
  scale: "amber",
};

const tabAccent: Record<ApproachTab["key"], string> = {
  unify: "border-ss-teal shadow-[0_0_50px_-12px_var(--ss-teal)]",
  automate: "border-ss-cyan shadow-[0_0_50px_-12px_var(--ss-cyan)]",
  scale: "border-ss-amber shadow-[0_0_50px_-12px_var(--ss-amber)]",
};

const tabAccentVar: Record<ApproachTab["key"], string> = {
  unify: "var(--ss-teal)",
  automate: "var(--ss-cyan)",
  scale: "var(--ss-amber)",
};

const statColor: Record<ApproachTab["key"], string> = {
  unify: "text-ss-teal",
  automate: "text-ss-cyan",
  scale: "text-ss-amber",
};

const tileIcons: Record<ApproachTab["key"], ReactNode> = {
  unify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  ),
  automate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4ZM9 12l2 2 4-4" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
};

const NODE_RADIUS = 42;

function nodePosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: 50 + NODE_RADIUS * Math.cos(angle),
    y: 50 + NODE_RADIUS * Math.sin(angle),
  };
}

function OrbitalDiagram({ activeKey }: { activeKey: ApproachTab["key"] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [prevActiveKey, setPrevActiveKey] = useState(activeKey);
  const accent = tabAccentVar[activeKey];
  const nodes = orbitNodesByTab[activeKey];

  if (prevActiveKey !== activeKey) {
    setPrevActiveKey(activeKey);
    setHovered(null);
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Connecting lines from the hub to every node */}
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle
          cx={50}
          cy={50}
          r={NODE_RADIUS}
          fill="none"
          stroke="var(--ss-border)"
          strokeWidth={0.3}
          strokeDasharray="1 2.4"
          className="animate-spin-slow origin-center"
        />
        <AnimatePresence>
          {nodes.map((node, i) => {
            const { x, y } = nodePosition(i, nodes.length);
            const isHovered = hovered === i;
            return (
              <motion.line
                key={`${activeKey}-${node.name}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                x1={50}
                y1={50}
                x2={x}
                y2={y}
                stroke={isHovered ? accent : "var(--ss-border)"}
                strokeWidth={isHovered ? 0.7 : 0.35}
                strokeDasharray="2 2"
                strokeLinecap="round"
                className="animate-dash-flow transition-[stroke,stroke-width] duration-300"
              />
            );
          })}
        </AnimatePresence>
      </svg>

      {/* Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex h-28 w-28 items-center justify-center rounded-full border-2 bg-ss-surface transition-all duration-500 ${tabAccent[activeKey]}`}
        >
          <span className="text-center font-display text-sm font-bold leading-tight text-ss-text">
            Staller
            <br />
            Stack
          </span>
        </div>
      </div>

      <AnimatePresence>
        {nodes.map((node, i) => {
          const { x, y } = nodePosition(i, nodes.length);
          const isHovered = hovered === i;
          const Icon = NODE_ICONS[node.icon];
          return (
            <motion.div
              key={`${activeKey}-${node.name}`}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                animate={{ scale: isHovered ? 1.15 : 1 }}
                transition={{ duration: 0.25 }}
                style={{ borderColor: isHovered ? accent : undefined, color: isHovered ? accent : undefined }}
                className="flex h-14 w-14 cursor-default items-center justify-center rounded-full border border-ss-border bg-ss-base text-ss-muted transition-colors"
              >
                {Icon && <Icon className="h-6 w-6" aria-hidden />}
              </motion.div>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.92 }}
                  transition={{ duration: 0.18 }}
                  style={{ borderColor: accent }}
                  className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-max -translate-x-1/2 rounded-lg border bg-ss-surface px-3 py-2 text-center shadow-xl"
                >
                  <p className="font-display text-xs font-semibold text-ss-text">
                    {node.name}
                  </p>
                    <p className="mt-0.5 font-mono text-[10px] text-ss-muted">
                      {node.role}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export function OrbitApproach() {
  const [activeKey, setActiveKey] = useState<ApproachTab["key"]>("unify");
  const active = approachTabs.find((t) => t.key === activeKey) ?? approachTabs[0];

  return (
    <section id="approach" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Approach"
            title={
              <>
                One Platform. <span className="text-gradient">Total Impact.</span>
              </>
            }
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <OrbitalDiagram activeKey={activeKey} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-2">
              {approachTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveKey(tab.key)}
                  className={`flex flex-col items-center gap-2.5 rounded-xl border px-3 py-4 transition-colors ${
                    activeKey === tab.key
                      ? tabAccent[tab.key]
                      : "border-ss-border hover:border-ss-teal/50"
                  }`}
                >
                  <IconTile
                    color={tabColor[tab.key]}
                    size="sm"
                    className={activeKey === tab.key ? "opacity-100" : "opacity-45"}
                  >
                    {tileIcons[tab.key]}
                  </IconTile>
                  <span
                    className={`font-display text-xs font-semibold uppercase tracking-wide ${
                      activeKey === tab.key ? "text-ss-text" : "text-ss-muted"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative mt-6 min-h-[280px] overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeKey}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="font-display text-xl font-semibold text-ss-text">
                    {active.heading}
                  </h3>
                  <p className="mt-3 text-sm text-ss-muted">{active.description}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className={`font-display text-3xl font-semibold ${statColor[activeKey]}`}
                    >
                      {active.stat.value}
                    </span>
                    <span className="text-sm text-ss-muted">{active.stat.label}</span>
                  </div>

                  <ul className="mt-6 flex flex-col gap-3 border-t border-ss-border pt-6">
                    {active.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-ss-text"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
