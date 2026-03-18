"use client";

import { useEffect, useState, RefObject } from "react";

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;
            const p = Math.min(
              1,
              Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
            );
            setProgress(p);
          }
        });
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 19) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return progress;
}
