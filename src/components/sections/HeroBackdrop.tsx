"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import type { SiteImage } from "@/lib/constants";

interface HeroBackdropProps {
  readonly image: SiteImage;
}

/**
 * Hero photograph with a scroll parallax: as the hero scrolls away the image
 * drifts down at a fraction of the scroll speed, so the page appears to slide
 * over it. The image layer is oversized (120% tall, starting 10% above the
 * frame) so the drift never exposes an edge. Static for reduced motion.
 *
 * It is the LCP element, so it loads eagerly at high priority.
 */
export default function HeroBackdrop({ image }: HeroBackdropProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={frameRef} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform"
        style={reduceMotion ? undefined : { y }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
