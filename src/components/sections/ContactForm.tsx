"use client";

import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";

import { SERVICES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FIELD = cn(
  "mt-2 block w-full rounded-card border border-ink-600 bg-ink-900 px-4 py-3",
  "text-sm text-silver-100 placeholder:text-foreground-subtle",
  "transition-colors focus:border-gold-600 focus:outline-none",
);

const LABEL =
  "text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-foreground-subtle";

/** Same heavy, well-damped spring as the site's other primary CTAs. */
const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.9 } as const;

/** Everyday work that has no dedicated service page but is most of the calls. */
const GENERAL_SERVICE = "Repair / Maintenance";

/**
 * Quote request form with no backend: on submit it composes a `mailto:` link
 * addressed to the company inbox and hands it to the visitor's mail app.
 * Building the URL here (rather than `action="mailto:"` with a text/plain
 * POST) gives a clean subject line and body in every browser.
 */
export default function ContactForm() {
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();

    const name = field("name");
    const service = field("service");

    const subject = `Quote request — ${service || "General inquiry"}${name ? ` (${name})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${field("phone")}`,
      `Email: ${field("email")}`,
      `Service: ${service || "Not specified"}`,
      "",
      field("message"),
    ].join("\n");

    window.open(
      `${SITE.contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-panel border border-ink-600 bg-surface p-7"
    >
      <h2 className="font-display text-lg font-bold tracking-display text-silver-100">
        Send project details
      </h2>
      <p className="mt-2 text-sm text-foreground-muted">
        {`Submitting opens your email app with a message to ${SITE.contact.email}, ready to send.`}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className={LABEL}>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className={FIELD}
          />
        </label>

        <label className="block">
          <span className={LABEL}>Phone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={FIELD}
          />
        </label>

        <label className="block">
          <span className={LABEL}>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            className={FIELD}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className={LABEL}>Service</span>
          <select name="service" defaultValue="" className={FIELD}>
            <option value="">Select a service</option>
            <option value={GENERAL_SERVICE}>{GENERAL_SERVICE}</option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={LABEL}>Project details</span>
          <textarea
            name="message"
            rows={5}
            required
            className={cn(FIELD, "resize-y")}
          />
        </label>
      </div>

      <motion.button
        type="submit"
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={SPRING}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-card",
          "border border-gold-700/70 px-7 py-4 text-base font-semibold text-silver-100",
          "transition-[border-color,box-shadow] duration-200 hover:border-gold-500 hover:shadow-gold",
        )}
      >
        <Send className="h-4.5 w-4.5" aria-hidden="true" />
        Email Your Request
      </motion.button>
    </form>
  );
}
