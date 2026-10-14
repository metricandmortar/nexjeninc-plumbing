"use client";

import type { PointerEvent, ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/** Heavy, well-damped spring: settles without bounce. */
const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.9 } as const;

/** Furthest the button drifts toward the cursor, in pixels. */
const MAX_PULL = 6;

const MotionLink = motion.create(Link);

interface MagneticCtaProps {
  /** Internal paths render a Next `Link`; anything else (tel:, mailto:) an `<a>`. */
  readonly href: string;
  readonly children: ReactNode;
  /**
   * Visual classes. Use `transition-colors` (or similar) rather than
   * `transition-all`: Framer Motion owns `transform` here, and a CSS
   * transition on it would fight the spring.
   */
  readonly className?: string;
  readonly onClick?: () => void;
}

/**
 * Primary call-to-action with a magnetic pull toward the cursor and a spring
 * scale on hover and press. Pointer tracking only runs for mouse input, and
 * all of it is switched off when the visitor prefers reduced motion.
 */
export default function MagneticCta({
  href,
  children,
  className,
  onClick,
}: MagneticCtaProps) {
  const reduceMotion = useReducedMotion();

  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);
  const x = useSpring(pullX, SPRING);
  const y = useSpring(pullY, SPRING);

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    pullX.set(offsetX * MAX_PULL);
    pullY.set(offsetY * MAX_PULL);
  }

  function handlePointerLeave() {
    pullX.set(0);
    pullY.set(0);
  }

  const motionProps = {
    className,
    onClick,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    style: reduceMotion ? undefined : { x, y },
    whileHover: reduceMotion ? undefined : { scale: 1.02 },
    whileTap: reduceMotion ? undefined : { scale: 0.98 },
    transition: SPRING,
  };

  if (href.startsWith("/")) {
    return (
      <MotionLink href={href} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.a href={href} {...motionProps}>
      {children}
    </motion.a>
  );
}
