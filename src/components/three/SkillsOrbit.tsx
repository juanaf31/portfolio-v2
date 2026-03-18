"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html, Line } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { COLORS } from "@/lib/constants";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

function SkillNode({
  skill,
  position,
  onClick,
  isSelected,
}: {
  skill: Skill;
  position: [number, number, number];
  onClick: () => void;
  isSelected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = isDark ? COLORS.dark : COLORS.light;
  const isInner = skill.orbit === "inner";

  useFrame((state) => {
    if (!meshRef.current) return;
    const scale = isSelected ? 1.4 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);

    // Subtle bobbing
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.05;
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} onClick={onClick}>
        <sphereGeometry args={[isInner ? 0.2 : 0.14, 16, 16]} />
        <meshStandardMaterial
          color={isSelected ? colors.accentSecondary : colors.accent}
          emissive={isSelected ? colors.accentSecondary : colors.accent}
          emissiveIntensity={isSelected ? 0.8 : 0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      <Text
        position={[0, isInner ? 0.35 : 0.28, 0]}
        fontSize={isInner ? 0.14 : 0.1}
        color={isDark ? "#f0f0f3" : "#1a1a2e"}
        anchorX="center"
        anchorY="bottom"
      >
        {skill.name}
      </Text>
      {isSelected && (
        <Html position={[0, -0.4, 0]} center distanceFactor={8}>
          <div className="bg-bg-surface/95 backdrop-blur-sm border rounded-lg px-3 py-2 text-center min-w-[120px] pointer-events-none">
            <p className="text-xs font-bold text-text-primary">{skill.name}</p>
            {skill.years && (
              <p className="text-xs text-accent">{skill.years}</p>
            )}
            {skill.projects && (
              <p className="text-xs text-text-secondary mt-1">
                {skill.projects.join(", ")}
              </p>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

function OrbitRing({ radius, isDark }: { radius: number; isDark: boolean }) {
  const points: [number, number, number][] = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
  }

  return (
    <Line
      points={points}
      color={isDark ? "#1e1e3a" : "#e5e5e0"}
      transparent
      opacity={0.4}
      lineWidth={1}
    />
  );
}

export default function SkillsOrbit() {
  const groupRef = useRef<THREE.Group>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });

  const innerSkills = skills.filter((s) => s.orbit === "inner");
  const outerSkills = skills.filter((s) => s.orbit === "outer");

  useFrame(() => {
    if (!groupRef.current || isDragging.current) return;
    groupRef.current.rotation.y += 0.002;
  });

  function getPosition(index: number, total: number, radius: number): [number, number, number] {
    const angle = (index / total) * Math.PI * 2;
    return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
  }

  return (
    <group
      ref={groupRef}
      rotation={[0.3, 0, 0]}
      onPointerDown={(e) => {
        isDragging.current = true;
        previousMouse.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={() => {
        isDragging.current = false;
      }}
      onPointerMove={(e) => {
        if (!isDragging.current || !groupRef.current) return;
        const dx = e.clientX - previousMouse.current.x;
        groupRef.current.rotation.y += dx * 0.005;
        previousMouse.current = { x: e.clientX, y: e.clientY };
      }}
    >
      <OrbitRing radius={1.5} isDark={isDark} />
      <OrbitRing radius={2.8} isDark={isDark} />

      {innerSkills.map((skill, i) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          position={getPosition(i, innerSkills.length, 1.5)}
          onClick={() => setSelected(selected === skill.name ? null : skill.name)}
          isSelected={selected === skill.name}
        />
      ))}

      {outerSkills.map((skill, i) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          position={getPosition(i, outerSkills.length, 2.8)}
          onClick={() => setSelected(selected === skill.name ? null : skill.name)}
          isSelected={selected === skill.name}
        />
      ))}

      <ambientLight intensity={isDark ? 0.4 : 0.6} />
      <pointLight position={[0, 5, 5]} intensity={isDark ? 1 : 0.8} />
    </group>
  );
}
