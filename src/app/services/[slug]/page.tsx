import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Phone } from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import PageHeader from "@/components/sections/PageHeader";
import MagneticCta from "@/components/ui/MagneticCta";
import Reveal from "@/components/ui/Reveal";
import { CTA, SERVICES, SITE, getServiceBySlug } from "@/lib/constants";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

/** Every service page is known at build time, so all of them prerender. */
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Service not found" };

  return pageMetadata({
    title: `${service.title} in Maui`,
    description: `${service.summary} Licensed ${service.shortTitle.toLowerCase()} work by ${SITE.legalName} in ${SITE.address.city}, Maui. Call ${SITE.contact.phone}.`,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: [`${service.shortTitle} Maui`, `${service.shortTitle} Kahului`],
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />

      <PageHeader
        eyebrow={service.shortTitle}
        title={service.title}
        lead={service.summary}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-base leading-relaxed text-silver-300">
                  {service.description}
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="mt-10 space-y-3.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-silver-300"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                  <MagneticCta
                    href={CTA.phone.href}
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5 rounded-card",
                      "bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent",
                      "shadow-gold transition-colors hover:bg-accent-hover",
                    )}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {CTA.phone.label}
                  </MagneticCta>
                  <MagneticCta
                    href={CTA.schedule.href}
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5 rounded-card",
                      "border border-ink-400 px-6 py-3.5 text-sm font-semibold",
                      "text-silver-100 transition-colors hover:border-silver-500 hover:bg-ink-800",
                    )}
                  >
                    {CTA.schedule.label}
                  </MagneticCta>
                </div>
              </Reveal>
            </div>

            {/* Lead photo */}
            <div className="lg:col-span-5">
              <Reveal direction="left">
                <div className="relative aspect-4/3 overflow-hidden rounded-panel border border-ink-600">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 34rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Gallery */}
          {service.gallery.length > 1 && (
            <div className="mt-20">
              <Reveal>
                <h2 className="font-display text-2xl font-bold tracking-display text-silver-100">
                  From the field
                </h2>
              </Reveal>

              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {service.gallery.map((image, index) => (
                  <li key={`${image.src}-${index}`}>
                    <Reveal delay={index * 0.05}>
                      <figure className="relative aspect-4/3 overflow-hidden rounded-card border border-ink-600">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </figure>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Reveal>
            <Link
              href="/services"
              className="mt-16 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All services
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
