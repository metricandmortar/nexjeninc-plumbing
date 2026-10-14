import type { MetadataRoute } from "next";

import { SERVICES, SITE } from "@/lib/constants";
import { LEGAL_DOCUMENTS } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/projects", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: new URL(path, SITE.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: new URL(`/services/${service.slug}`, SITE.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const legalRoutes: MetadataRoute.Sitemap = LEGAL_DOCUMENTS.map((document) => ({
    url: new URL(document.path, SITE.url).toString(),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.2,
  }));

  return [...staticRoutes, ...serviceRoutes, ...legalRoutes];
}
