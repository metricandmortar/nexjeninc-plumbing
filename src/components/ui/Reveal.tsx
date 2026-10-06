"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  readonly children: ReactNode;
  /** Seconds to stagger this element behind its neighbours. */
  readonly delay?: number;
  /** Which way the element travels in from. */
  readonly direction?: Direction;
  readonly className?: string;
}

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered reveal. Exists as its own client component so the sections
 * that use it can stay server components — only the animation wrapper ships
 * JavaScript.
 *
 * Fires once, and collapses to a plain fade for anyone who has asked their
 * system to reduce motion.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? OFFSET.none : OFFSET[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
