"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { COLORS } from "@/lib/constants";

import morphingVert from "./shaders/morphing.vert";
import morphingFrag from "./shaders/morphing.frag";

function MorphingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { theme } = useTheme();
  const { pointer } = useThree();

  const isDark = theme === "dark";
  const colors = isDark ? COLORS.dark : COLORS.light;

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorphStrength: { value: 0.15 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color(colors.accent) },
      uGlowColor: { value: new THREE.Color(colors.accentGlow) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state) => {
    if (!materialRef.current || !meshRef.current) return;

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value.set(
      pointer.x * 3,
      pointer.y * 3
    );

    // Update colors on theme change
    const c = isDark ? COLORS.dark : COLORS.light;
    materialRef.current.uniforms.uColor.value.set(c.accent);
    materialRef.current.uniforms.uGlowColor.value.set(c.accentGlow);

    // Slow rotation
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 5]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={morphingVert}
        fragmentShader={morphingFrag}
        uniforms={uniforms}
        transparent
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function HeroScene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <pointLight
        position={[5, 5, 5]}
        intensity={isDark ? 1.5 : 1}
        color={isDark ? COLORS.dark.accentGlow : COLORS.light.accentGlow}
      />
      <pointLight
        position={[-5, -5, 5]}
        intensity={isDark ? 0.8 : 0.5}
        color={isDark ? COLORS.dark.accentSecondary : COLORS.light.accentSecondary}
      />
      <MorphingIcosahedron />
    </>
  );
}
