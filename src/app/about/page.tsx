import type { Metadata } from "next";

import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.legalName} — licensed ${SITE.license}, serving ${SITE.serviceRegion} with residential and commercial plumbing.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Nexjen"
        title="Licensed plumbing contractors on Maui"
        lead={`Nexjen Inc. is a licensed plumbing contractor (${SITE.license}) working across ${SITE.serviceRegion} on residential and commercial projects.`}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-base leading-relaxed text-silver-300">
              We work across the whole life of a building&rsquo;s plumbing: the
              underground and underslab rough-in that goes in before a pour, the
              water heater and backflow systems that keep a property running,
              and the remodel work that people actually live with day to day.
            </p>
            <p className="mt-6 text-base leading-relaxed text-silver-300">
              Our crews are licensed, permitted, and inspection-ready, and we
              answer emergency calls around the clock anywhere on the island.
            </p>
          </Reveal>

          {/* TODO(client): replace with the real company story — founding year,
              ownership, crew size, certifications, and any affiliations. */}
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-panel border border-ink-600 bg-surface p-7">
              <h2 className="font-display text-lg font-bold tracking-display text-silver-100">
                Company details
              </h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-32 shrink-0 text-foreground-subtle">
                    License
                  </dt>
                  <dd className="text-silver-300">{SITE.licenseLabel}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-32 shrink-0 text-foreground-subtle">
                    Service area
                  </dt>
                  <dd className="text-silver-300">{SITE.serviceRegion}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-32 shrink-0 text-foreground-subtle">
                    Availability
                  </dt>
                  <dd className="text-silver-300">{SITE.emergencyHours}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
