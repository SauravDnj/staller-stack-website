"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RING_COUNT = 3;

function Pulse({ color, paused }: { color: string; paused: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    if (paused) return;
    const t = state.clock.elapsedTime;
    ringRefs.current.forEach((ring, i) => {
      if (!ring) return;
      const phase = (t * 0.3 + i / RING_COUNT) % 1;
      const scale = 0.6 + phase * 2.4;
      ring.scale.setScalar(scale);
      const material = ring.material as THREE.MeshBasicMaterial;
      material.opacity = Math.max(0, 0.55 * (1 - phase));
    });
    if (groupRef.current) groupRef.current.rotation.z += 0.0012;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: RING_COUNT }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            ringRefs.current[i] = el;
          }}
        >
          <ringGeometry args={[1, 1.05, 48]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

/** Concentric expanding-ring "radar ping" pulse — decorative service-hero visual. */
export function PulseField({ color = "#5eead4", paused = false }: { color?: string; paused?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={1}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      className="!absolute !inset-0"
    >
      <Pulse color={color} paused={paused} />
    </Canvas>
  );
}
