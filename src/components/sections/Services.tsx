import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { StaggerItem, StaggerList } from "@/components/ui/Stagger";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Grid sizing contract, kept in one place so the `sizes` hints below stay
 * honest if the column counts change:
 *   < 640px  — one column, card fills the content width (~100vw)
 *   < 1024px — two columns (~50vw)
 *   >= 1024px — three columns inside a 7xl container (~28rem per card)
 */
const CARD_SIZES = "(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 100vw";

/** The before/after pair sits two-up inside one card, so each tile is half. */
const SPLIT_SIZES = "(min-width: 1024px) 14rem, (min-width: 640px) 25vw, 50vw";

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-ink-700 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-500">
            What We Do
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-display text-silver-100 sm:text-4xl">
            Licensed work, start to{" "}
            <span className="text-metal-gold">finish</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted">
            From the underground rough-in that disappears beneath the slab to
            the finish work your clients actually see.
          </p>
        </Reveal>

        {/* Cards cascade in one after another as the grid enters view. */}
        <StaggerList className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.slug} className="flex">
              <article
                className={cn(
                  "group flex w-full flex-col overflow-hidden rounded-panel",
                  "border border-ink-600 bg-surface transition-all duration-300",
                  "hover:border-gold-700/70 hover:shadow-gold",
                )}
              >
                {/* Media. The remodel card shows its before/after pair, every
                    other card its lead photo. The aspect lives on the
                    container in both cases, so a split card is exactly as
                    tall as a single-image one and the grid rows stay even. */}
                {service.beforeAfter ? (
                  <div className="grid aspect-4/3 grid-cols-2 gap-px bg-ink-600">
                    {(
                      [
                        ["Before", service.beforeAfter.before],
                        ["After", service.beforeAfter.after],
                      ] as const
                    ).map(([label, image]) => (
                      <div
                        key={label}
                        className="relative h-full overflow-hidden bg-ink-800"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes={SPLIT_SIZES}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent"
                        />
                        <span className="absolute bottom-2 left-2 rounded bg-ink-950/80 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-eyebrow text-gold-400 backdrop-blur-sm">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative aspect-4/3 overflow-hidden bg-ink-800">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes={CARD_SIZES}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-bold tracking-display text-silver-100">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {service.summary}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-silver-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className={cn(
                      "mt-auto inline-flex items-center gap-2 pt-7",
                      "text-sm font-semibold text-gold-400 transition-colors",
                      "hover:text-gold-300",
                    )}
                  >
                    Explore {service.shortTitle}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
