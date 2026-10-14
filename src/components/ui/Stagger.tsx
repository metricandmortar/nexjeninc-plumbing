"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const LIST: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18, mass: 1 },
  },
};

/** Reduced-motion variant: a quick fade, no travel. */
const ITEM_REDUCED: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
};

interface StaggerListProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/**
 * A `<ul>` whose `StaggerItem` children cascade in one after another the
 * first time the list scrolls into view. Lets server-rendered grids opt into
 * the motion without becoming client components themselves.
 */
export function StaggerList({ children, className }: StaggerListProps) {
  return (
    <motion.ul
      className={className}
      variants={LIST}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({ children, className }: StaggerListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      className={className}
      variants={reduceMotion ? ITEM_REDUCED : ITEM}
    >
      {children}
    </motion.li>
  );
}
