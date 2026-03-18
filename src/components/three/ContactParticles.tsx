"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { COLORS } from "@/lib/constants";

import particlesVert from "./shaders/particles.vert";
import particlesFrag from "./shaders/particles.frag";

const PARTICLE_COUNT = 200;

export default function ContactParticles() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = isDark ? COLORS.dark : COLORS.light;

  const { positions, targets, randoms } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const targets = new Float32Array(PARTICLE_COUNT * 3);
    const randoms = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Scattered positions
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      // Target: icosahedron-like shape
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const r = 1.5;
      targets[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      targets[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      targets[i * 3 + 2] = r * Math.cos(phi);

      randoms[i] = Math.random();
    }

    return { positions, targets, randoms };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uConverge: { value: 0 },
      uColor: { value: new THREE.Color(colors.accent) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    // Pulse convergence
    const t = Math.sin(state.clock.elapsedTime * 0.3) * 0.5 + 0.5;
    materialRef.current.uniforms.uConverge.value = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uConverge.value,
      t,
      0.02
    );

    const c = isDark ? COLORS.dark : COLORS.light;
    materialRef.current.uniforms.uColor.value.set(c.accent);
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aTarget"
          count={PARTICLE_COUNT}
          array={targets}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={PARTICLE_COUNT}
          array={randoms}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particlesVert}
        fragmentShader={particlesFrag}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
