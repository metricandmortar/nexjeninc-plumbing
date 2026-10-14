"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Site-wide motion policy. `reducedMotion="user"` makes every Framer Motion
 * animation honor the visitor's prefers-reduced-motion setting: transform
 * animations are skipped and only opacity and color still transition.
 * Components that drive transforms from scroll or pointer position check
 * `useReducedMotion()` themselves as well, since those bypass animations.
 */
export default function MotionProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
