"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          title="What People Say"
          subtitle="Feedback from managers and founders I've worked with."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.company} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
