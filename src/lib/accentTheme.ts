import type { AccentKey } from "@/content/services";

/** Hex values mirror the dark "Nebula" tokens in globals.css — used where a raw
 * color is needed (Three.js materials) instead of a Tailwind class. */
export const ACCENT_HEX: Record<AccentKey, string> = {
  teal: "#2dd4bf",
  mint: "#5eead4",
  cyan: "#22d3ee",
  indigo: "#6366f1",
  amber: "#f5a524",
  blue: "#5b8def",
};

type AccentClasses = {
  text: string;
  border: string;
  hoverBorder: string;
  bgSoft: string;
  dot: string;
  glowHover: string;
};

/** Literal Tailwind class strings per accent — kept as complete strings (not
 * template-built) so Tailwind's scanner can find every candidate at build time. */
export const ACCENT_CLASSES: Record<AccentKey, AccentClasses> = {
  teal: {
    text: "text-ss-teal",
    border: "border-ss-teal",
    hoverBorder: "hover:border-ss-teal",
    bgSoft: "bg-ss-teal/15",
    dot: "bg-ss-teal",
    glowHover: "group-hover:bg-ss-teal/20",
  },
  mint: {
    text: "text-ss-mint",
    border: "border-ss-mint",
    hoverBorder: "hover:border-ss-mint",
    bgSoft: "bg-ss-mint/15",
    dot: "bg-ss-mint",
    glowHover: "group-hover:bg-ss-mint/20",
  },
  cyan: {
    text: "text-ss-cyan",
    border: "border-ss-cyan",
    hoverBorder: "hover:border-ss-cyan",
    bgSoft: "bg-ss-cyan/15",
    dot: "bg-ss-cyan",
    glowHover: "group-hover:bg-ss-cyan/20",
  },
  indigo: {
    text: "text-ss-indigo",
    border: "border-ss-indigo",
    hoverBorder: "hover:border-ss-indigo",
    bgSoft: "bg-ss-indigo/15",
    dot: "bg-ss-indigo",
    glowHover: "group-hover:bg-ss-indigo/20",
  },
  amber: {
    text: "text-ss-amber",
    border: "border-ss-amber",
    hoverBorder: "hover:border-ss-amber",
    bgSoft: "bg-ss-amber/15",
    dot: "bg-ss-amber",
    glowHover: "group-hover:bg-ss-amber/20",
  },
  blue: {
    text: "text-ss-blue",
    border: "border-ss-blue",
    hoverBorder: "hover:border-ss-blue",
    bgSoft: "bg-ss-blue/15",
    dot: "bg-ss-blue",
    glowHover: "group-hover:bg-ss-blue/20",
  },
};
