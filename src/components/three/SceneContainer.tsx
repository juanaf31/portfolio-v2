"use client";

import { Suspense, ReactNode, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useInView } from "framer-motion";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SceneContainerProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  /** If true, mount canvas immediately (for above-fold scenes like Hero) */
  eager?: boolean;
}

export default function SceneContainer({
  children,
  className = "",
  fallback,
  eager = false,
}: SceneContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  const capability = useDeviceCapability();
  const reducedMotion = useReducedMotion();

  if (capability === "low" || reducedMotion) {
    return <>{fallback}</>;
  }

  const shouldMount = eager || isInView;

  return (
    <div ref={ref} className={className}>
      {shouldMount ? (
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
      ) : (
        fallback
      )}
    </div>
  );
}
