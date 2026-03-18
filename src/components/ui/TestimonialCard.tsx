"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -5, rotateY: 2, rotateX: -1 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      className="bg-bg-surface border rounded-2xl p-6 md:p-8 flex flex-col h-full
        hover:border-accent/30 transition-colors"
    >
      {/* Quote mark */}
      <span className="text-4xl text-accent/30 font-serif leading-none mb-4">&ldquo;</span>

      <blockquote className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
        {testimonial.quote}
      </blockquote>

      <div className="border-t pt-4">
        <p className="font-medium text-sm">{testimonial.author}</p>
        <p className="text-xs text-text-secondary">{testimonial.company}</p>
      </div>
    </motion.div>
  );
}
