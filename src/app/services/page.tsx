import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHeader from "@/components/sections/PageHeader";
import { StaggerItem, StaggerList } from "@/components/ui/Stagger";
import { SERVICES, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Maui Plumbing Services — Repairs to New Construction",
  description: `Full-service plumbing from ${SITE.legalName} in ${SITE.address.city}, Maui: plumbing repairs and maintenance, water heater installation, bathroom remodels, new construction plumbing in Hawaii, backflow testing, and sewer camera inspection.`,
  path: "/services",
  keywords: ["Maui plumbing services", "Kahului plumbing repairs"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Plumbing services across Maui"
        lead={`Licensed under ${SITE.license}, Nexjen covers the full span of residential and commercial plumbing — from everyday repairs and maintenance to remodels and the underground work beneath a new slab.`}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerList className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug} className="flex">
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
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>
    </>
  );
}
