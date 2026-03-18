"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

const SceneContainer = dynamic(
  () => import("@/components/three/SceneContainer"),
  { ssr: false }
);
const SkillsOrbit = dynamic(
  () => import("@/components/three/SkillsOrbit"),
  { ssr: false }
);

function SkillsFallback() {
  const inner = skills.filter((s) => s.orbit === "inner");
  const outer = skills.filter((s) => s.orbit === "outer");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium text-text-secondary mb-3 text-center">Primary</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {inner.map((s) => (
            <div
              key={s.name}
              className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
            >
              {s.name}
              {s.years && <span className="text-text-secondary ml-1">· {s.years}</span>}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-text-secondary mb-3 text-center">Secondary</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {outer.map((s) => (
            <div
              key={s.name}
              className="px-3 py-1.5 rounded-full bg-bg-surface border text-text-secondary text-sm"
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Click any node to see details. Drag to rotate."
        />

        {/* 3D Orbital — desktop */}
        <div className="hidden md:block">
          <SceneContainer
            className="w-full h-[500px]"
            fallback={<SkillsFallback />}
          >
            <SkillsOrbit />
          </SceneContainer>
        </div>

        {/* 2D Fallback — mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          <SkillsFallback />
        </motion.div>
      </div>
    </section>
  );
}
