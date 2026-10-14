/**
 * Search and answer-engine helpers.
 *
 * `pageMetadata()` gives every route the same complete metadata shape. Next
 * replaces nested objects like `openGraph` wholesale when a child segment sets
 * them, so each route builds the full object here rather than relying on the
 * root layout's copy to merge in.
 *
 * The JSON-LD builders describe the business with Schema.org vocabulary. The
 * business node is typed `Plumber` — Schema.org's LocalBusiness subtype for
 * plumbing companies (there is no `PlumbingService` type) — and is given a
 * stable `@id` so per-page `Service` nodes can point back to it as provider.
 */

import type { Metadata } from "next";

import { SEO, SERVICES, SITE, type Service, type SiteImage } from "@/lib/constants";

/** Stable identifier for the business entity across every JSON-LD block. */
export const BUSINESS_ID = `${SITE.url}/#business`;

const absoluteUrl = (path: string) => new URL(path, SITE.url).toString();

interface PageMetadataInput {
  /** Short title; the root layout's template appends the brand. */
  readonly title: string;
  readonly description: string;
  /** Route path, used for the canonical URL and `og:url`. */
  readonly path: string;
  /** Share image. Defaults to the site-wide card. */
  readonly image?: SiteImage;
  /** Extra keywords layered on top of the site-wide set. */
  readonly keywords?: readonly string[];
}

export function pageMetadata({
  title,
  description,
  path,
  image = SEO.ogImage,
  keywords = [],
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title,
    description,
    keywords: [...keywords, ...SEO.keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE.legalName,
      url: path,
      title: fullTitle,
      description,
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.src],
    },
  };
}

/** Root business entity: name, contact, address, hours, and services. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": BUSINESS_ID,
        name: SITE.legalName,
        alternateName: SITE.name,
        description: SITE.description,
        url: SITE.url,
        telephone: SITE.contact.phoneE164,
        email: SITE.contact.email,
        logo: absoluteUrl(SITE.logo.src),
        image: [absoluteUrl(SEO.ogImage.src), absoluteUrl(SITE.logo.src)],
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: SITE.openingHours.days.map(
              (day) => `https://schema.org/${day}`,
            ),
            opens: SITE.openingHours.opens,
            closes: SITE.openingHours.closes,
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: SITE.contact.phoneE164,
          email: SITE.contact.email,
          availableLanguage: "English",
        },
        identifier: {
          "@type": "PropertyValue",
          name: "Contractor License",
          value: SITE.license,
        },
        knowsAbout: SEO.keywords,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Plumbing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plumbing Repairs & Maintenance",
                serviceType: "Plumbing repair",
                description:
                  "Everyday residential and commercial plumbing repairs, maintenance, and fixture upgrades.",
                provider: { "@id": BUSINESS_ID },
              },
            },
            ...SERVICES.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                serviceType: service.shortTitle,
                description: service.summary,
                url: absoluteUrl(`/services/${service.slug}`),
                provider: { "@id": BUSINESS_ID },
              },
            })),
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.legalName,
        publisher: { "@id": BUSINESS_ID },
        inLanguage: "en-US",
      },
    ],
  };
}

/** Per-page node for a single service, linked to the business entity. */
export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image.src),
    provider: { "@id": BUSINESS_ID },
  };
}
