"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

const PARTICLE_COLOR = { dark: "#2dd4bf", light: "#0c7a7a" };

const PARTICLE_COUNT = 260;
const FIELD_RADIUS = 9;

// Computed once at module load (not per-render) — the exact seed doesn't
// need to track component lifecycle, so this stays out of render entirely.
function createFieldPositions() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const radius = FIELD_RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5;
    arr[i * 3 + 2] = radius * Math.cos(phi) * 0.6 - 3;
  }
  return arr;
}

const fieldPositions = createFieldPositions();

function ParticleField({ paused, color }: { paused: boolean; color: string }) {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (paused || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.035;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[fieldPositions, 3]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Subtle animated particle field behind the Hero content — purely decorative. */
export function HeroParticles({ paused = false }: { paused?: boolean }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const color = mounted && resolvedTheme === "light" ? PARTICLE_COLOR.light : PARTICLE_COLOR.dark;

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={1}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      className="!absolute !inset-0"
    >
      <ParticleField paused={paused} color={color} />
    </Canvas>
  );
}
