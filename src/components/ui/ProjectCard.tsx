"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  }

  function handleMouseLeave() {
    setRotateX(0);
    setRotateY(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="group relative bg-bg-surface rounded-2xl border p-6 md:p-8
          hover:border-accent/40 transition-colors duration-300 h-full"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 to-accent-secondary/5 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-accent font-medium">{project.role}</p>
            </div>
            <span className="text-xs text-text-secondary font-mono whitespace-nowrap ml-4">
              {project.period}
            </span>
          </div>

          <p className="text-text-secondary text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4 mb-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-lg font-bold text-accent">{m.value}</div>
                <div className="text-xs text-text-secondary">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
