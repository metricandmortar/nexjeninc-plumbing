import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: `Plumbing services from ${SITE.legalName} across ${SITE.serviceRegion}: bathroom remodels, water heaters, new construction underground, backflow testing, and sewer camera inspection.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Plumbing services across Maui"
        lead={`Licensed under ${SITE.license}, Nexjen covers the full span of residential and commercial plumbing — from the underground that disappears beneath a slab to the finish work a client sees every day.`}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service, index) => (
              <li key={service.slug} className="flex">
                <Reveal delay={index * 0.06} className="flex w-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className={cn(
                      "group flex w-full flex-col rounded-panel border border-ink-600",
                      "bg-surface p-7 transition-all duration-300",
                      "hover:border-gold-700/70 hover:shadow-gold",
                    )}
                  >
                    <h2 className="font-display text-xl font-bold tracking-display text-silver-100">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                      {service.summary}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold-400">
                      View details
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
