import Image from "next/image";

import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Plumbing Projects on Maui",
  description: `Completed plumbing work by ${SITE.legalName} on Maui — bathroom remodels, water heater systems, backflow assemblies, and new construction plumbing in Hawaii, from ${SITE.address.city} job sites and beyond.`,
  path: "/projects",
  keywords: ["Maui plumbing projects", "new construction plumbing Maui"],
});

/** Every project photo currently on file, flattened out of the service data. */
const PROJECT_PHOTOS = SERVICES.flatMap((service) =>
  service.gallery.map((image) => ({ ...image, service: service.shortTitle })),
);

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Projects across Maui"
        lead="A working record of recent jobs — underground rough-in, bathroom conversions, water heater systems, and service work. Case studies with scope and timelines are on the way."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECT_PHOTOS.map((photo, index) => (
              <li key={`${photo.src}-${index}`}>
                <Reveal delay={(index % 3) * 0.06}>
                  <figure className="group relative aspect-4/3 overflow-hidden rounded-card border border-ink-600">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded bg-ink-950/80 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-eyebrow text-gold-400 backdrop-blur-sm">
                      {photo.service}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
