"use client";

import { Suspense, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SceneContainerProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
}

export default function SceneContainer({
  children,
  className = "",
  fallback,
}: SceneContainerProps) {
  const capability = useDeviceCapability();
  const reducedMotion = useReducedMotion();

  if (capability === "low" || reducedMotion) {
    return <>{fallback}</>;
  }

  return (
    <div className={className}>
      <Canvas
        dpr={capability === "high" ? [1, 2] : [1, 1.5]}
        gl={{
          antialias: capability === "high",
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
