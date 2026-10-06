import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { CTA, SITE } from "@/lib/constants";
import { cn, isPresent } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.legalName} — licensed ${SITE.license}. ${SITE.emergencyHours} across ${SITE.serviceRegion}.`,
};

export default function ContactPage() {
  const locality = [SITE.address.city, SITE.address.region]
    .filter(isPresent)
    .join(", ");
  const locationLine = isPresent(SITE.address.city)
    ? locality
    : SITE.serviceRegion;

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Request an estimate"
        lead={`Call for emergency service any hour, or send details on a remodel, new construction, or service job and we will get back to you.`}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <ul className="space-y-5">
              {isPresent(SITE.contact.phone) && (
                <li>
                  <a
                    href={SITE.contact.phoneHref}
                    className={cn(
                      "flex items-center gap-4 rounded-panel border border-ink-600",
                      "bg-surface p-6 transition-all duration-300",
                      "hover:border-gold-700/70 hover:shadow-gold",
                    )}
                  >
                    <Phone
                      className="h-5 w-5 shrink-0 text-gold-500"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col">
                      <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-foreground-subtle">
                        Phone
                      </span>
                      <span className="mt-1 font-display text-lg font-semibold tracking-display text-silver-100">
                        {SITE.contact.phone}
                      </span>
                    </span>
                  </a>
                </li>
              )}

              {isPresent(SITE.contact.email) && (
                <li>
                  <a
                    href={SITE.contact.emailHref}
                    className={cn(
                      "flex items-center gap-4 rounded-panel border border-ink-600",
                      "bg-surface p-6 transition-all duration-300",
                      "hover:border-gold-700/70 hover:shadow-gold",
                    )}
                  >
                    <Mail
                      className="h-5 w-5 shrink-0 text-gold-500"
                      aria-hidden="true"
                    />
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-foreground-subtle">
                        Email
                      </span>
                      <span className="mt-1 break-all font-display text-lg font-semibold tracking-display text-silver-100">
                        {SITE.contact.email}
                      </span>
                    </span>
                  </a>
                </li>
              )}

              <li className="flex items-center gap-4 rounded-panel border border-ink-600 bg-surface p-6">
                <MapPin
                  className="h-5 w-5 shrink-0 text-gold-500"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-foreground-subtle">
                    Service area
                  </span>
                  <span className="mt-1 font-display text-lg font-semibold tracking-display text-silver-100">
                    {locationLine}
                  </span>
                </span>
              </li>

              <li className="flex items-center gap-4 rounded-panel border border-ink-600 bg-surface p-6">
                <Clock
                  className="h-5 w-5 shrink-0 text-gold-500"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-foreground-subtle">
                    Availability
                  </span>
                  <span className="mt-1 font-display text-lg font-semibold tracking-display text-silver-100">
                    {isPresent(SITE.hours)
                      ? `${SITE.hours} · ${SITE.emergencyHours}`
                      : SITE.emergencyHours}
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={CTA.emergencyCall.href}
              className={cn(
                "mt-10 flex w-full items-center justify-center gap-2.5 rounded-card",
                "bg-accent px-7 py-4 text-base font-semibold text-on-accent",
                "shadow-gold transition-all duration-200",
                "hover:bg-accent-hover hover:shadow-gold-lg",
              )}
            >
              <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              {CTA.emergencyCall.label}
            </a>

            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-foreground-subtle">
              <ShieldCheck
                className="h-3.5 w-3.5 text-gold-500"
                aria-hidden="true"
              />
              {SITE.licenseLabel}
            </p>
          </Reveal>

          {/* TODO(client): add an estimate request form once a form handler or
              inbox destination is chosen. Until then every path is phone/email,
              which is what a contractor converts on anyway. */}
        </div>
      </section>
    </>
  );
}
