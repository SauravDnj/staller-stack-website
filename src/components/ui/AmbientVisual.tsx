"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { VISUAL_COMPONENTS } from "@/components/three";
import type { VisualKey } from "@/content/services";

/** Small, viewport-gated 3D section decoration — reuses the per-service
 * Three.js visuals. Unmounts off-screen and under reduced-motion, mirroring
 * the gating pattern already used by ServiceHero/Hero. */
export function AmbientVisual({
  visual,
  color,
  className = "",
}: {
  visual: VisualKey;
  color: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Visual = VISUAL_COMPONENTS[visual];
  const showVisual = !reducedMotion && inView;

  return (
    <div ref={ref} className={`pointer-events-none absolute ${className}`}>
      {showVisual && <Visual color={color} />}
    </div>
  );
}
