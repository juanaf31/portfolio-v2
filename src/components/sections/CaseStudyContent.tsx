"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types";
import TechBadge from "@/components/ui/TechBadge";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

interface Props {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function CaseStudyContent({
  project,
  prevProject,
  nextProject,
}: Props) {
  const { caseStudy } = project;

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <motion.div {...fadeUp} transition={{ duration: 0.4 }}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-12"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-medium text-accent">
              {project.role}
            </span>
            <span className="text-text-secondary/40">·</span>
            <span className="text-sm text-text-secondary font-mono">
              {project.period}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </motion.header>

        {/* Context */}
        <Section title="The Context" delay={0.2}>
          <p className="text-text-secondary leading-relaxed">
            {caseStudy.context}
          </p>
        </Section>

        {/* My Role */}
        <Section title="My Role" delay={0.25}>
          <p className="text-text-secondary leading-relaxed">
            {caseStudy.role}
          </p>
        </Section>

        {/* Challenges */}
        <Section title="Technical Challenges" delay={0.3}>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {caseStudy.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="border-l-2 border-accent/30 pl-5"
              >
                <h4 className="font-semibold mb-2">{challenge.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Key Decisions */}
        <Section title="Key Decisions" delay={0.35}>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {caseStudy.decisions.map((decision, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="bg-bg-surface rounded-xl border p-5"
              >
                <h4 className="font-semibold text-accent mb-2">
                  {decision.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {decision.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Results */}
        <Section title="Results" delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-bg-surface rounded-xl border p-4 text-center"
              >
                <div className="text-xl font-bold text-accent mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-text-secondary">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="Tech Stack" delay={0.45}>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-lg bg-bg-surface border text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 pt-8 border-t flex justify-between items-center"
        >
          {prevProject ? (
            <Link
              href={`/project/${prevProject.slug}`}
              className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div className="text-left">
                <div className="text-xs text-text-secondary">Previous</div>
                <div className="text-sm font-medium">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/project/${nextProject.slug}`}
              className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-text-secondary">Next</div>
                <div className="text-sm font-medium">{nextProject.title}</div>
              </div>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </motion.nav>
      </div>
    </article>
  );
}

function Section({
  title,
  delay = 0,
  children,
}: {
  title: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className="mb-14"
    >
      <h3 className="text-xl font-bold mb-5">{title}</h3>
      {children}
    </motion.section>
  );
}
