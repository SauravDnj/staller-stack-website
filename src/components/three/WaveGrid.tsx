"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Wave({ color, paused }: { color: string; paused: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    if (paused || !geomRef.current) return;
    elapsed.current += delta;
    const position = geomRef.current.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z =
        Math.sin(x * 0.6 + elapsed.current * 0.6) * 0.35 +
        Math.cos(y * 0.5 + elapsed.current * 0.4) * 0.25;
      position.setZ(i, z);
    }
    position.needsUpdate = true;
    if (meshRef.current) meshRef.current.rotation.z += delta * 0.015;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.6, 0, 0]} position={[0, -1.4, -2]}>
      <planeGeometry ref={geomRef} args={[12, 8, 24, 16]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
    </mesh>
  );
}

/** Animated wireframe wave plane — decorative service-hero visual. */
export function WaveGrid({ color = "#2dd4bf", paused = false }: { color?: string; paused?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={1}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      className="!absolute !inset-0"
    >
      <Wave color={color} paused={paused} />
    </Canvas>
  );
}
