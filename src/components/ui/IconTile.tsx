import { ReactNode } from "react";

export type IconTileColor = "teal" | "mint" | "cyan" | "indigo" | "amber";
export type IconTileSize = "sm" | "md" | "lg" | "xl";

const gradients: Record<IconTileColor, string> = {
  teal: "linear-gradient(145deg, #5eead4, var(--ss-teal))",
  mint: "linear-gradient(145deg, var(--ss-mint), var(--ss-teal-deep))",
  cyan: "linear-gradient(145deg, #67e8f9, var(--ss-cyan))",
  indigo: "linear-gradient(145deg, #8b8df7, var(--ss-indigo))",
  amber: "linear-gradient(145deg, #fbbf24, var(--ss-amber))",
};

const glows: Record<IconTileColor, string> = {
  teal: "color-mix(in srgb, var(--ss-teal) 55%, transparent)",
  mint: "color-mix(in srgb, var(--ss-mint) 45%, transparent)",
  cyan: "color-mix(in srgb, var(--ss-cyan) 50%, transparent)",
  indigo: "color-mix(in srgb, var(--ss-indigo) 50%, transparent)",
  amber: "color-mix(in srgb, var(--ss-amber) 50%, transparent)",
};

const sizes: Record<IconTileSize, string> = {
  sm: "h-9 w-9 rounded-lg [&>svg]:h-4 [&>svg]:w-4",
  md: "h-11 w-11 rounded-xl [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-14 w-14 rounded-2xl [&>svg]:h-7 [&>svg]:w-7",
  xl: "h-20 w-20 rounded-3xl [&>svg]:h-9 [&>svg]:w-9",
};

/** Gradient-filled icon container, color-coded per category, matching glow. */
export function IconTile({
  children,
  color = "teal",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  color?: IconTileColor;
  size?: IconTileSize;
  className?: string;
}) {
  return (
    <div
      style={{
        background: gradients[color],
        boxShadow: `0 8px 22px -8px ${glows[color]}`,
      }}
      className={`flex shrink-0 items-center justify-center text-white ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
