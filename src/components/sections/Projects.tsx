"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Complex SaaS platforms built for real users at scale."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
