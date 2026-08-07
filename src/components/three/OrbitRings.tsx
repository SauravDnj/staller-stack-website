"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RINGS = [
  { radius: 2.2, tilt: 0.3, speed: 0.16 },
  { radius: 3.0, tilt: -0.5, speed: -0.11 },
  { radius: 3.7, tilt: 0.85, speed: 0.08 },
];

function Rings({ color, paused }: { color: string; paused: boolean }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((_, delta) => {
    if (paused) return;
    RINGS.forEach((ring, i) => {
      const mesh = refs.current[i];
      if (mesh) mesh.rotation.z += delta * ring.speed;
    });
  });

  return (
    <group rotation={[0.4, 0.1, 0]}>
      {RINGS.map((ring, i) => (
        <mesh
          key={ring.radius}
          ref={(el) => {
            refs.current[i] = el;
          }}
          rotation={[ring.tilt, 0, 0]}
        >
          <torusGeometry args={[ring.radius, 0.012, 8, 96]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/** Tilted orbiting rings — decorative service-hero visual, gated by caller via `paused`. */
export function OrbitRings({ color = "#2dd4bf", paused = false }: { color?: string; paused?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={1}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      className="!absolute !inset-0"
    >
      <Rings color={color} paused={paused} />
    </Canvas>
  );
}
