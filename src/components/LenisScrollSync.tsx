"use client";

import { useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Keeps GSAP's ScrollTrigger in sync with Lenis' virtualized scroll position.
 * Without this, ScrollTrigger measures the native (unsmoothed) scrollY and
 * every scroll-linked animation (the hero network, future scroll reveals)
 * drifts out of sync with what the user actually sees.
 */
export function LenisScrollSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}
