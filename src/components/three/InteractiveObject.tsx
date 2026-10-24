"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import type { Group, Mesh } from "three";
import * as THREE from "three";

interface InteractiveObjectProps {
  reducedMotion?: boolean;
}

function Node({
  position,
  size = 0.12,
}: {
  position: [number, number, number];
  size?: number;
}) {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#0ea5e9"
        emissiveIntensity={0.35}
        metalness={0.4}
        roughness={0.35}
        wireframe={false}
      />
    </mesh>
  );
}

export function InteractiveObject({ reducedMotion = false }: InteractiveObjectProps) {
  const group = useRef<Group>(null);

  const nodes = useMemo(
    () =>
      [
        [0, 0.15, 0],
        [1.1, 0.55, 0.2],
        [-1.05, 0.4, -0.25],
        [0.35, -0.85, 0.7],
        [-0.55, -0.7, -0.85],
        [0.9, -0.15, -0.95],
        [-0.95, 0.05, 0.85],
      ] as [number, number, number][],
    [],
  );

  const connections = useMemo(
    () => [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 5],
      [4, 6],
      [1, 3],
      [2, 4],
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current || reducedMotion) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.18;
    group.current.rotation.x = Math.sin(t * 0.25) * 0.08;
    const mx = state.pointer.x * 0.25;
    const my = state.pointer.y * 0.18;
    group.current.rotation.y += mx * 0.15;
    group.current.rotation.x += my * 0.12;
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.2}
      rotationIntensity={reducedMotion ? 0 : 0.35}
      floatIntensity={reducedMotion ? 0 : 0.45}
    >
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color="#0b1220"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        <mesh>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#0891b2"
            emissiveIntensity={0.25}
            metalness={0.55}
            roughness={0.25}
            transparent
            opacity={0.85}
          />
        </mesh>

        {nodes.map((position, index) => (
          <Node key={index} position={position} size={index === 0 ? 0.16 : 0.1} />
        ))}

        {connections.map(([a, b], index) => (
          <Line
            key={index}
            points={[
              new THREE.Vector3(...nodes[a]),
              new THREE.Vector3(...nodes[b]),
            ]}
            color="#38bdf8"
            lineWidth={1}
            transparent
            opacity={0.45}
          />
        ))}
      </group>
    </Float>
  );
}
