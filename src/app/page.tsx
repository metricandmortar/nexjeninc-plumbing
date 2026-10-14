import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TrustBanner from "@/components/sections/TrustBanner";
import { SEO, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const homeMetadata = pageMetadata({
  title: "Full-Service Maui Plumber",
  description: `Full-service Maui plumber based in ${SITE.address.city}. ${SITE.legalName} (${SITE.licenseLabel}) handles plumbing repairs, water heaters, bathroom remodels, and new construction plumbing across Hawaiʻi's Valley Isle. Call ${SITE.contact.phone}.`,
  path: "/",
});

export const metadata: Metadata = {
  ...homeMetadata,
  // The homepage carries the full brand title rather than the template.
  title: { absolute: SEO.defaultTitle },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <Services />
    </>
  );
}
