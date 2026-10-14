import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Our Kahului Plumbing Company",
  description: `${SITE.legalName} is a licensed (${SITE.license}), full-service plumbing contractor based at ${SITE.address.street} in ${SITE.address.city}, Maui — from everyday plumbing repairs to remodels and new construction plumbing in Hawaii.`,
  path: "/about",
  keywords: ["Kahului plumbing company", "licensed plumber Maui"],
});

const DETAILS = [
  { label: "License", value: SITE.licenseLabel },
  {
    label: "Office",
    value: `${SITE.address.street} ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`,
  },
  { label: "Office hours", value: SITE.hours },
  { label: "Phone", value: SITE.contact.phone },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Nexjen"
        title="Full-service plumbing contractors on Maui"
        lead={`Nexjen Inc. is a licensed plumbing contractor (${SITE.license}) based in ${SITE.address.city}, handling residential and commercial plumbing of every size across the island.`}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-base leading-relaxed text-silver-300">
              Nexjen is a full-service plumbing company. Whether it&rsquo;s a
              dripping faucet, a slow drain, a water heater that&rsquo;s
              stopped keeping up, or a complete bathroom remodel, we treat every
              call with the same care and the same licensed workmanship.
            </p>
            <p className="mt-6 text-base leading-relaxed text-silver-300">
              Our day-to-day work covers repairs, maintenance, and fixture
              upgrades for homes and businesses, along with water heater
              installation and service, backflow testing, and sewer camera
              inspection. On larger projects we handle custom remodels and the
              underground and rough-in plumbing for new construction, so one
              contractor can take care of a property from the first trench to
              the last service call.
            </p>
            <p className="mt-6 text-base leading-relaxed text-silver-300">
              Every job is done to code, with permits and inspections handled
              when the work calls for them. We show up when we say we will,
              explain what we find in plain terms, and leave the work area
              clean.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-panel border border-ink-600 bg-surface p-7">
              <h2 className="font-display text-lg font-bold tracking-display text-silver-100">
                Company details
              </h2>
              <dl className="mt-5 space-y-3 text-sm">
                {DETAILS.map((detail) => (
                  <div key={detail.label} className="flex gap-3">
                    <dt className="w-32 shrink-0 text-foreground-subtle">
                      {detail.label}
                    </dt>
                    <dd className="text-silver-300">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
