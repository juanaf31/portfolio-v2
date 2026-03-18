"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface MetricCounterProps {
  value: string;
  label: string;
  context: string;
  index: number;
}

function parseNumeric(val: string): { num: number; prefix: string; suffix: string } {
  const match = val.match(/^([~]?)([0-9,]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1],
    num: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  };
}

export default function MetricCounter({ value, label, context, index }: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const { num, prefix, suffix } = parseNumeric(value);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = num / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, num]);

  const formatted = count.toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {prefix}
        {isInView ? formatted : "0"}
        {suffix}
      </div>
      <div className="text-lg font-medium mb-1">{label}</div>
      <div className="text-sm text-text-secondary">{context}</div>
    </motion.div>
  );
}
