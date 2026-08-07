import dynamic from "next/dynamic";
import type { VisualKey } from "@/content/services";

/** Lazy, SSR-disabled per the same pattern as HeroParticles — maps each
 * per-service `theme.visual` key to its Three.js component. */
export const VISUAL_COMPONENTS: Record<
  VisualKey,
  React.ComponentType<{ color?: string; paused?: boolean }>
> = {
  orbit: dynamic(() => import("./OrbitRings").then((mod) => mod.OrbitRings), { ssr: false }),
  mesh: dynamic(() => import("./DataMesh").then((mod) => mod.DataMesh), { ssr: false }),
  wave: dynamic(() => import("./WaveGrid").then((mod) => mod.WaveGrid), { ssr: false }),
  pulse: dynamic(() => import("./PulseField").then((mod) => mod.PulseField), { ssr: false }),
};
