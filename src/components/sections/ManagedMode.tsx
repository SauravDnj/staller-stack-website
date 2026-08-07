"use client";

import {
  FiGrid,
  FiHome,
  FiSearch,
  FiSettings,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { Button } from "@/components/ui/Button";
import { IconTile, type IconTileColor } from "@/components/ui/IconTile";
import { managedMode } from "@/content/home";

const borderColors: Record<IconTileColor, string> = {
  teal: "border-l-ss-teal",
  mint: "border-l-ss-mint",
  cyan: "border-l-ss-cyan",
  indigo: "border-l-ss-indigo",
  amber: "border-l-ss-amber",
};

function HierarchyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="3" width="6" height="6" rx="1" />
      <rect x="3" y="15" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M12 9v3M6 15v-3h12v3" />
    </svg>
  );
}

function SwitchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h13M17 7l-3-3M17 7l-3 3M20 17H7M7 17l3 3M7 17l3-3" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.2 10.8 15.8 7.2M8.2 13.2l7.6 3.6" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.6 12.6 12.6 20.6a2 2 0 0 1-2.8 0l-6.4-6.4a2 2 0 0 1 0-2.8L11.4 3.4H19a1.6 1.6 0 0 1 1.6 1.6v7.6Z" />
      <circle cx="15.5" cy="8.5" r="1.2" />
    </svg>
  );
}

const featureIcons = [HierarchyIcon, SwitchIcon, ShareIcon, TagIcon];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M4 21h16M9 8h.01M13 8h.01M9 12h.01M13 12h.01M9 16h.01M13 16h.01M14 21v-4h4v4" />
    </svg>
  );
}

function TenantTree() {
  const { root, branches } = managedMode.console.tree;
  const branchX = branches.map((_, i) => 15 + (i * 70) / (branches.length - 1));

  const leaves: { x: number; y: number; name: string }[] = [];
  branches.forEach((branch, i) => {
    const bx = branchX[i];
    const spread = 11;
    branch.children.forEach((child, j) => {
      const offset = (j - (branch.children.length - 1) / 2) * spread;
      leaves.push({ x: bx + offset, y: 88, name: child });
    });
  });

  return (
    <div className="relative mt-5 aspect-[16/11] w-full">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {branches.map((branch, i) => (
          <line
            key={branch.name}
            x1={50}
            y1={14}
            x2={branchX[i]}
            y2={48}
            stroke="var(--ss-border)"
            strokeWidth={0.5}
            strokeDasharray="2 2"
            className="animate-dash-flow"
          />
        ))}
        {branches.map((branch, i) => {
          const bx = branchX[i];
          const spread = 11;
          return branch.children.map((child, j) => {
            const offset = (j - (branch.children.length - 1) / 2) * spread;
            return (
              <line
                key={`${branch.name}-${child}`}
                x1={bx}
                y1={52}
                x2={bx + offset}
                y2={84}
                stroke="var(--ss-border)"
                strokeWidth={0.5}
                strokeDasharray="2 2"
                className="animate-dash-flow"
              />
            );
          });
        })}
      </svg>

      <div
        style={{ left: "50%", top: "14%" }}
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-ss-teal bg-ss-surface px-2.5 py-1 font-mono text-[9px] font-semibold text-ss-teal shadow-[0_0_16px_-4px_var(--ss-teal)] sm:text-[10px]"
      >
        {root}
      </div>

      {branches.map((branch, i) => (
        <div
          key={branch.name}
          style={{ left: `${branchX[i]}%`, top: "48%" }}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-ss-border bg-ss-surface px-2 py-1 font-mono text-[8px] text-ss-text sm:text-[9px]"
        >
          {branch.name}
        </div>
      ))}

      {leaves.map((leaf) => (
        <div
          key={leaf.name}
          style={{ left: `${leaf.x}%`, top: `${leaf.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-ss-border bg-ss-base px-1.5 py-0.5 font-mono text-[7px] text-ss-muted sm:text-[8px]"
        >
          {leaf.name}
        </div>
      ))}
    </div>
  );
}

function ConsoleMockup() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--ss-indigo) 20%, transparent), transparent 70%)",
        }}
      />

      <div className="overflow-hidden rounded-2xl border border-ss-border bg-ss-surface-2/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-4 border-b border-ss-border bg-ss-surface px-4 py-3 sm:px-5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ss-text">
            {managedMode.console.title}
          </span>
          <span className="flex flex-1 items-center gap-2 rounded-full border border-ss-border bg-ss-base px-3 py-1.5 text-ss-muted">
            <FiSearch className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden font-mono text-[11px] sm:inline">Search tenants…</span>
          </span>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ss-border bg-ss-base text-ss-muted">
            <FiUser className="h-3 w-3" />
          </span>
        </div>

        <div className="flex">
          <div className="hidden w-12 shrink-0 flex-col items-center gap-4 border-r border-ss-border bg-ss-surface/60 py-5 sm:flex">
            {[FiHome, FiGrid, HierarchyIcon, FiShield, FiSettings].map((Icon, i) => (
              <span
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  i === 2 ? "bg-ss-teal/15 text-ss-teal" : "text-ss-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>

          <div className="flex-1 p-4 sm:p-6">
            <div className="flex flex-wrap gap-3">
              {managedMode.console.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-ss-border bg-ss-surface px-3 py-2"
                >
                  <p className="font-display text-base font-semibold text-ss-text sm:text-lg">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ss-muted sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <TenantTree />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-2 z-10 flex items-center gap-2 rounded-full border border-ss-border bg-ss-surface px-4 py-2 shadow-lg sm:-right-4">
        <IconTile color="indigo" size="sm">
          <BuildingIcon />
        </IconTile>
        <span className="font-mono text-xs text-ss-text">{managedMode.console.floatingBadge}</span>
      </div>
    </div>
  );
}

export function ManagedMode() {
  return (
    <section id="managed-mode" className="border-y border-ss-border bg-ss-surface-2/40 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={managedMode.badge}
            title={
              <>
                {managedMode.headingPrefix}{" "}
                <span className="text-gradient">{managedMode.headingHighlight}</span>{" "}
                {managedMode.headingSuffix}
              </>
            }
            description={managedMode.subtext}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {managedMode.features.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <RevealItem key={feature.title}>
                    <div
                      className={`h-full rounded-xl border border-ss-border border-l-2 bg-ss-surface/60 p-5 backdrop-blur-sm ${borderColors[feature.color]}`}
                    >
                      <IconTile color={feature.color} size="sm">
                        <Icon />
                      </IconTile>
                      <h3 className="mt-4 font-display text-sm font-semibold text-ss-text">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ss-muted">
                        {feature.description}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <Reveal delay={0.15} className="mt-8">
              <div className="flex items-center gap-2">
                <IconTile color="teal" size="sm">
                  <BuildingIcon />
                </IconTile>
                <span className="font-display text-sm font-semibold text-ss-text">
                  {managedMode.perfectFor.label}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {managedMode.perfectFor.groups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-xl border border-ss-border bg-ss-surface/60 p-5"
                  >
                    <div className="flex items-center gap-2">
                      <IconTile color={group.color} size="sm">
                        <BuildingIcon />
                      </IconTile>
                      <span className="font-display text-sm font-semibold text-ss-text">
                        {group.title}
                      </span>
                    </div>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {group.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-ss-muted">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-ss-teal" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ConsoleMockup />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <Button href={managedMode.cta.href} variant="outline">
            {managedMode.cta.label} <span aria-hidden>→</span>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
