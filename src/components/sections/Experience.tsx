"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

const typeColors: Record<string, string> = {
  fulltime: "bg-accent",
  freelance: "bg-accent-secondary",
  dedicated: "bg-accent-glow",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="5+ years building production frontend applications."
        />

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  // On mobile: always right of line. On desktop: alternate.
                  "pl-12 md:pl-0"
                } ${isLeft ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"}`}
              >
                {/* Node */}
                <div
                  className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full border-2 border-bg-primary ${
                    typeColors[exp.type] || "bg-accent"
                  }`}
                />

                {/* Content */}
                <div className="bg-bg-surface border rounded-xl p-5 w-full hover:border-accent/30 transition-colors">
                  <div className={`flex flex-col ${isLeft ? "md:items-end" : ""}`}>
                    <span className="text-xs text-text-secondary font-mono mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-base font-bold">{exp.role}</h3>
                    <p className="text-sm text-accent mb-3">{exp.company}</p>
                  </div>
                  <ul className={`space-y-1 ${isLeft ? "md:text-right" : ""}`}>
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-text-secondary">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
