"use client";

import { metrics } from "@/data/metrics";
import MetricCounter from "@/components/ui/MetricCounter";

export default function Metrics() {
  return (
    <section className="py-20 border-y">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <MetricCounter
              key={metric.label}
              value={metric.value}
              label={metric.label}
              context={metric.context}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
