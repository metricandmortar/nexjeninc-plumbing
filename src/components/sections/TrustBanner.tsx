import { MapPin, Clock, ShieldCheck } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

const PILLARS = [
  {
    icon: ShieldCheck,
    label: "Licensed Contractor",
    value: SITE.licenseLabel,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: SITE.serviceRegion,
  },
  {
    icon: Clock,
    label: "Availability",
    value: SITE.emergencyHours,
  },
] as const;

export default function TrustBanner() {
  return (
    <section
      aria-label="Licensing and service area"
      className="relative border-y border-ink-600 bg-surface-raised"
    >
      {/* Brass hairlines top and bottom, so the band reads as machined trim. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-700/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-700/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Reveal>
          <dl className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {PILLARS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 sm:justify-center"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-700/50 bg-ink-900">
                  <Icon className="h-5 w-5 text-gold-500" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-foreground-subtle">
                    {label}
                  </dt>
                  <dd className="mt-1 font-display text-base font-semibold tracking-display text-silver-100">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="mt-10 flex flex-wrap justify-center gap-2.5 border-t border-ink-700 pt-8">
            {SITE.trustSignals.map((signal) => (
              <li
                key={signal}
                className="rounded-full border border-ink-600 bg-ink-900 px-4 py-1.5 text-xs font-medium text-silver-400"
              >
                {signal}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
