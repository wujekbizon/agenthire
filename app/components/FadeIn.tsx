'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;       // ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;    // px — how far element travels in
  threshold?: number;   // 0-1 — how much of element must be visible to trigger
  once?: boolean;       // default true — animate once, stay visible
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 32,
  threshold = 0.15,
  once = true,
  style,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translateMap: Record<string, string> = {
      up:    `translateY(${distance}px)`,
      down:  `translateY(-${distance}px)`,
      left:  `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
      none:  'none',
    };

    // Initial hidden state
    el.style.opacity = '0';
    el.style.transform = translateMap[direction];
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) translateX(0)';
          if (once) observer.disconnect();
        } else if (!once) {
          el.style.opacity = '0';
          el.style.transform = translateMap[direction];
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, distance, threshold, once]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
