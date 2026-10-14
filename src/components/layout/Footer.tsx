import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import MagneticCta from "@/components/ui/MagneticCta";
import { CTA, FOOTER_NAV, SITE } from "@/lib/constants";
import { cn, isPresent } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  const locationLine = isPresent(SITE.address.street)
    ? `${SITE.address.street} ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`
    : "";

  return (
    <footer className="bg-forge border-t border-ink-600">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={`${SITE.legalName} — home`}
            >
              {/* Below the fold and fixed at 64px: lazy by default, and no
                  `sizes` prop so the srcset stays at 1x/2x. */}
              <Image
                src={SITE.logo.src}
                alt={SITE.logo.alt}
                width={64}
                height={64}
                className="h-16 w-16 rounded-md object-cover"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-display text-metal-silver">
                  {SITE.name}
                </span>
                <span className="mt-1.5 text-xs font-medium uppercase tracking-eyebrow text-gold-500">
                  {SITE.tagline}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground-muted">
              {SITE.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {SITE.trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-ink-600 px-3 py-1 text-xs text-silver-400"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_NAV.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="lg:col-span-2"
            >
              <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-gold-500">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-silver-400 transition-colors hover:text-silver-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-gold-500">
              Contact
            </h2>

            <ul className="mt-5 space-y-4 text-sm">
              {isPresent(SITE.contact.phone) && (
                <li>
                  <a
                    href={SITE.contact.phoneHref}
                    className="flex items-center gap-3 text-silver-300 transition-colors hover:text-gold-400"
                  >
                    <Phone
                      className="h-4 w-4 shrink-0 text-gold-600"
                      aria-hidden="true"
                    />
                    {SITE.contact.phone}
                  </a>
                </li>
              )}

              {isPresent(SITE.contact.email) && (
                <li>
                  <a
                    href={SITE.contact.emailHref}
                    className="flex items-center gap-3 break-all text-silver-300 transition-colors hover:text-gold-400"
                  >
                    <Mail
                      className="h-4 w-4 shrink-0 text-gold-600"
                      aria-hidden="true"
                    />
                    {SITE.contact.email}
                  </a>
                </li>
              )}

              {isPresent(locationLine) && (
                <li className="flex items-center gap-3 text-silver-300">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-gold-600"
                    aria-hidden="true"
                  />
                  {locationLine}
                </li>
              )}

              {isPresent(SITE.hours) && (
                <li className="flex items-center gap-3 text-silver-300">
                  <Clock
                    className="h-4 w-4 shrink-0 text-gold-600"
                    aria-hidden="true"
                  />
                  {SITE.hours}
                </li>
              )}
            </ul>

            <MagneticCta
              href={CTA.quote.href}
              className={cn(
                "group mt-7 inline-flex items-center gap-2 rounded-card bg-accent",
                "px-5 py-3 text-sm font-semibold text-on-accent shadow-gold",
                "transition-colors hover:bg-accent-hover",
              )}
            >
              {CTA.quote.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </MagneticCta>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-14 flex flex-col gap-4 border-t border-ink-700 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-subtle">
            © {year} {SITE.legalName}. All rights reserved.
          </p>

          <span className="flex items-center gap-1.5 text-xs text-silver-400">
            <ShieldCheck
              className="h-3.5 w-3.5 text-gold-500"
              aria-hidden="true"
            />
            {SITE.licenseLabel}
          </span>
        </div>
      </div>
    </footer>
  );
}
