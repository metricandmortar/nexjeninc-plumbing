"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";

import { CTA, MAIN_NAV, SERVICE_NAV, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  readonly open: boolean;
  readonly onClose: () => void;
  /** Current pathname, so the active link can be marked. */
  readonly pathname: string;
}

export default function MobileMenu({
  open,
  onClose,
  pathname,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape, and lock body scroll while the panel is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the panel so the next Tab stays in context.
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Scrim */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-ink-950/80 backdrop-blur-sm"
            variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
            transition={{ duration: 0.2 }}
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={`${SITE.name} navigation`}
            className={cn(
              "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col",
              "border-l border-ink-600 bg-ink-900/95 backdrop-blur-xl",
              "shadow-panel outline-none",
            )}
            variants={{
              closed: { x: "100%" },
              open: { x: 0 },
            }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink-600 px-5 py-4">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-3"
              >
                {/* Fixed-size mark: no `sizes` prop, so next/image emits a
                    tight 1x/2x srcset instead of the full responsive ladder. */}
                <Image
                  src={SITE.logo.src}
                  alt={SITE.logo.alt}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-md object-cover"
                />
                <span className="font-display text-sm font-semibold tracking-display text-silver-100">
                  {SITE.name}
                </span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className={cn(
                  "-mr-1 rounded-md p-2 text-silver-400",
                  "transition-colors hover:bg-ink-700 hover:text-silver-100",
                )}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto px-5 py-6"
              aria-label="Mobile"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-eyebrow text-gold-500">
                Services
              </p>
              <ul className="mb-8 space-y-1">
                {SERVICE_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base transition-colors",
                        pathname === link.href
                          ? "bg-ink-700 text-gold-400"
                          : "text-silver-300 hover:bg-ink-800 hover:text-silver-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mb-3 text-xs font-semibold uppercase tracking-eyebrow text-gold-500">
                Company
              </p>
              <ul className="space-y-1">
                {MAIN_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base transition-colors",
                        pathname === link.href
                          ? "bg-ink-700 text-gold-400"
                          : "text-silver-300 hover:bg-ink-800 hover:text-silver-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-ink-600 px-5 py-5">
              <a
                href={CTA.emergency.href}
                onClick={onClose}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-card",
                  "bg-accent px-5 py-3.5 font-semibold text-on-accent",
                  "shadow-gold transition-colors hover:bg-accent-hover",
                )}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {CTA.emergency.label}
              </a>
              <p className="mt-3 text-center text-xs text-foreground-subtle">
                {SITE.licenseLabel} · {SITE.emergencyHours}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
