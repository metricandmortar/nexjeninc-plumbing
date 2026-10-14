import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

import HeroBackdrop from "@/components/sections/HeroBackdrop";
import MagneticCta from "@/components/ui/MagneticCta";
import Reveal from "@/components/ui/Reveal";
import { CTA, HERO, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Parallax photograph. Client-side only for the scroll binding; the
          image itself still server-renders as the LCP element. */}
      <HeroBackdrop image={HERO.background} />

      {/* Darkening stack, tuned so the job site still reads through it: a flat
          scrim for text contrast, a vertical ramp that goes solid at the floor
          so the section blends into the band below, and a brass wash. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950/50" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/70 via-ink-950/30 to-ink-950"
      />
      <div aria-hidden="true" className="wash-brass absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-700/50 bg-ink-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-eyebrow text-gold-400 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {HERO.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.08] tracking-display text-silver-100 [text-shadow:0_2px_24px_var(--color-ink-950)] sm:text-5xl lg:text-6xl">
              <span className="text-metal-gold">{HERO.headline.accent}</span>{" "}
              {HERO.headline.rest}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-silver-200 [text-shadow:0_1px_12px_var(--color-ink-950)] sm:text-lg">
              {HERO.subhead}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticCta
                href={CTA.phone.href}
                className={cn(
                  "group inline-flex items-center justify-center gap-2.5 rounded-card",
                  "bg-accent px-7 py-4 text-base font-semibold text-on-accent",
                  "shadow-gold transition-[background-color,box-shadow] duration-200",
                  "hover:bg-accent-hover hover:shadow-gold-lg",
                )}
              >
                <Phone
                  className="h-4.5 w-4.5 transition-transform duration-200 group-hover:-rotate-12"
                  aria-hidden="true"
                />
                {CTA.phone.label}
              </MagneticCta>

              <MagneticCta
                href={CTA.quote.href}
                className={cn(
                  "group inline-flex items-center justify-center gap-2.5 rounded-card",
                  "border border-ink-400 bg-ink-950/60 px-7 py-4 text-base font-semibold",
                  "text-silver-100 backdrop-blur-sm transition-colors duration-200",
                  "hover:border-silver-500 hover:bg-ink-800/80",
                )}
              >
                {CTA.quote.label}
                <ArrowRight
                  className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </MagneticCta>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
              {SITE.trustSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center gap-2 text-sm text-silver-300 [text-shadow:0_1px_10px_var(--color-ink-950)]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-gold-500"
                  />
                  {signal}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
