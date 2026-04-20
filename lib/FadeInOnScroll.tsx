'use client'
import { useRef, useEffect } from "react";

export function FadeInOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.add("fade-in");

    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add("fade-in-visible");
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}
