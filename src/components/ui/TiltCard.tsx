"use client";

import { ReactNode } from "react";
import { Tilt } from "@/components/ui/Tilt";

/** A Card with a subtle mouse-tracked 3D tilt. */
export function TiltCard({
  children,
  className = "",
  strength = 7,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  return (
    <Tilt
      strength={strength}
      className={`group relative overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-ss-teal ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ss-teal/0 blur-3xl transition-colors duration-500 group-hover:bg-ss-teal/20" />
      <div className="relative" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </Tilt>
  );
}
