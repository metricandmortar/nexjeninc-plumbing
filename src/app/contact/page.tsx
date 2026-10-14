import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import ContactForm from "@/components/sections/ContactForm";
import PageHeader from "@/components/sections/PageHeader";
import MagneticCta from "@/components/ui/MagneticCta";
import Reveal from "@/components/ui/Reveal";
import { CTA, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { cn, isPresent } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contact a Kahului Plumber — Request a Quote",
  description: `Request a quote from ${SITE.legalName}, a full-service Maui plumber. Call ${SITE.contact.phone}, email ${SITE.contact.email}, or visit ${SITE.address.street} ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}. Open ${SITE.hours}.`,
  path: "/contact",
  keywords: ["Kahului plumber phone", "plumbing quote Maui"],
});

const CARD = cn(
  "flex items-center gap-4 rounded-panel border border-ink-600",
  "bg-surface p-6",
);

const LINK_CARD = cn(
  CARD,
  "transition-all duration-300 hover:border-gold-700/70 hover:shadow-gold",
);

const LABEL =
  "text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-foreground-subtle";

const VALUE =
  "mt-1 font-display text-lg font-semibold tracking-display text-silver-100";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Request a quote"
        lead="Call during office hours or send us the details on a repair, maintenance visit, remodel, or new construction project and we will get back to you."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <ul className="space-y-5">
              {isPresent(SITE.contact.phone) && (
                <li>
                  <a href={SITE.contact.phoneHref} className={LINK_CARD}>
                    <Phone
                      className="h-5 w-5 shrink-0 text-gold-500"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col">
                      <span className={LABEL}>Phone</span>
                      <span className={VALUE}>{SITE.contact.phone}</span>
                    </span>
                  </a>
                </li>
              )}

              {isPresent(SITE.contact.email) && (
                <li>
                  <a href={SITE.contact.emailHref} className={LINK_CARD}>
                    <Mail
                      className="h-5 w-5 shrink-0 text-gold-500"
                      aria-hidden="true"
                    />
                    <span className="flex min-w-0 flex-col">
                      <span className={LABEL}>Email</span>
                      <span className={cn(VALUE, "break-all")}>
                        {SITE.contact.email}
                      </span>
                    </span>
                  </a>
                </li>
              )}

              {isPresent(SITE.address.street) && (
                <li className={CARD}>
                  <MapPin
                    className="h-5 w-5 shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="flex flex-col">
                    <span className={LABEL}>Office</span>
                    <address className={cn(VALUE, "not-italic")}>
                      {SITE.address.street}
                      <br />
                      {`${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`}
                    </address>
                  </span>
                </li>
              )}

              {isPresent(SITE.hours) && (
                <li className={CARD}>
                  <Clock
                    className="h-5 w-5 shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="flex flex-col">
                    <span className={LABEL}>Office hours</span>
                    <span className={VALUE}>{SITE.hours}</span>
                  </span>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <MagneticCta
              href={CTA.phone.href}
              className={cn(
                "mt-10 flex w-full items-center justify-center gap-2.5 rounded-card",
                "bg-accent px-7 py-4 text-base font-semibold text-on-accent",
                "shadow-gold transition-[background-color,box-shadow] duration-200",
                "hover:bg-accent-hover hover:shadow-gold-lg",
              )}
            >
              <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              {CTA.phone.label}
            </MagneticCta>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12">
              <ContactForm />
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-foreground-subtle">
              <ShieldCheck
                className="h-3.5 w-3.5 text-gold-500"
                aria-hidden="true"
              />
              {SITE.licenseLabel}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
