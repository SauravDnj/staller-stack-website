"use client";

import { ReactNode } from "react";
import { Tilt } from "@/components/ui/Tilt";
import { ACCENT_CLASSES } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";

/** A Card with a subtle mouse-tracked 3D tilt. */
export function TiltCard({
  children,
  className = "",
  strength = 7,
  accent = "teal",
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  accent?: AccentKey;
}) {
  const accentClasses = ACCENT_CLASSES[accent];

  return (
    <Tilt
      strength={strength}
      className={`group relative overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60 p-8 backdrop-blur-sm transition-colors duration-300 ${accentClasses.hoverBorder} ${className}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-colors duration-500 ${accentClasses.glowHover}`}
      />
      <div className="relative" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </Tilt>
  );
}
