"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 90;
const FIELD_RADIUS = 3.4;

function createNodePositions() {
  const arr = new Float32Array(NODE_COUNT * 3);
  for (let i = 0; i < NODE_COUNT; i++) {
    const radius = FIELD_RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = radius * Math.cos(phi);
  }
  return arr;
}

const nodePositions = createNodePositions();

function Mesh({ color, paused }: { color: string; paused: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (paused) return;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.x += delta * 0.015;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.035;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.6, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} count={NODE_COUNT} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color={color} transparent opacity={0.6} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}

/** Rotating wireframe mesh + scattered node points — decorative service-hero visual. */
export function DataMesh({ color = "#6366f1", paused = false }: { color?: string; paused?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={1}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      className="!absolute !inset-0"
    >
      <Mesh color={color} paused={paused} />
    </Canvas>
  );
}
