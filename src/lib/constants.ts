/**
 * Single source of truth for Nexjen Inc. Plumbing Contractors.
 *
 * Every piece of site copy, navigation, and service architecture originates
 * here. Components read from these exports — they never hard-code copy, URLs,
 * phone numbers, or image paths.
 *
 * ---------------------------------------------------------------------------
 * COPY STATUS
 * ---------------------------------------------------------------------------
 * Contact details, address, and business hours are client-supplied. Service
 * copy is agency-drafted from the project photos; nothing here invents
 * credentials, years in business, warranty terms, counts of jobs, or pricing.
 *
 * Positioning: Nexjen is a full-service plumbing company — everyday repairs
 * and maintenance through remodels and new construction. The site makes no
 * after-hours or emergency-response claims; contact is during office hours.
 *
 * The owner asked that the site carry no service-area list, and no social
 * profiles were supplied, so neither exists in this file. `isPresent()` in
 * `@/lib/utils` still gates optional strings so a field cleared later simply
 * stops rendering rather than printing a placeholder to a live page.
 * ---------------------------------------------------------------------------
 */

/* ========================================================================== */
/*  Types                                                                      */
/* ========================================================================== */

export interface SiteImage {
  /** Path under `public/`. */
  readonly src: string;
  /** Required. Describes what is actually in the frame. */
  readonly alt: string;
  /** Intrinsic pixel width of the source file. */
  readonly width: number;
  /** Intrinsic pixel height of the source file. */
  readonly height: number;
}

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface NavGroup {
  readonly title: string;
  readonly links: readonly NavLink[];
}

export interface Service {
  /** URL segment: `/services/[slug]`. */
  readonly slug: string;
  /** Full H1 / card title. */
  readonly title: string;
  /** Compact label for nav and chips. */
  readonly shortTitle: string;
  /** One-line hook for cards and meta descriptions. */
  readonly summary: string;
  /** Body copy for the service detail page. */
  readonly description: string;
  /** lucide-react export name. */
  readonly icon: string;
  /** Lead card image. */
  readonly image: SiteImage;
  /** Supporting photos for the detail page. */
  readonly gallery: readonly SiteImage[];
  /** Optional before/after pair. */
  readonly beforeAfter?: {
    readonly before: SiteImage;
    readonly after: SiteImage;
  };
  /** Scannable proof points. */
  readonly bullets: readonly string[];
  /** Surfaces on the homepage services grid. */
  readonly featured: boolean;
}

/* ========================================================================== */
/*  Site                                                                       */
/* ========================================================================== */

export const SITE = {
  name: "Nexjen Inc.",
  legalName: "Nexjen Inc. Plumbing Contractors",
  shortName: "Nexjen",
  license: "CT34304",
  licenseLabel: "License #CT34304",
  url: "https://nexjeninc.com",
  domain: "nexjeninc.com",

  tagline: "Plumbing Contractors",
  headline: "Licensed plumbing built to last.",
  description:
    "Nexjen Inc. Plumbing Contractors — licensed CT34304. Full-service residential and commercial plumbing on Maui: repairs and maintenance, water heaters, custom bathroom remodels, and new construction.",

  contact: {
    phone: "(808) 757-5755",
    phoneHref: "tel:+18087575755",
    /** E.164 form for structured data. */
    phoneE164: "+18087575755",
    email: "Nexjeninc@yahoo.com",
    emailHref: "mailto:Nexjeninc@yahoo.com",
  },

  address: {
    street: "140 Alamaha St.",
    city: "Kahului",
    region: "HI",
    postalCode: "96732",
    country: "US",
  },

  /** Home island, used in prose and metadata. Not a service-area list. */
  serviceRegion: "Maui, Hawaiʻi",

  hours: "Monday – Friday, 8:00 AM – 4:00 PM",
  /** Compact form for tight spaces: banner pillars and the mobile menu. */
  hoursShort: "Mon – Fri, 8 AM – 4 PM",
  /** Machine-readable twin of `hours`, for Schema.org structured data. */
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },

  logo: {
    src: "/images/logo.png",
    alt: "Nexjen Inc. Plumbing Contractors logo — chrome skull over crossed pipe wrenches, license CT34304",
    width: 1024,
    height: 1024,
  },

  trustSignals: [
    "Licensed CT34304",
    "Residential & commercial",
    "Repairs & maintenance",
    "Remodels & new construction",
  ],
} as const;

/* ========================================================================== */
/*  Search                                                                     */
/* ========================================================================== */

export const SEO = {
  /** Default <title> when a route does not set its own. */
  defaultTitle: "Full-Service Maui Plumber | Nexjen Inc. Plumbing Contractors",
  keywords: [
    "Full-Service Maui Plumber",
    "Kahului Plumbing Repairs",
    "New Construction Plumbing Hawaii",
    "Maui plumbing contractor",
    "Kahului plumber",
    "water heater installation Maui",
    "bathroom remodel plumbing Maui",
    "backflow testing Maui",
    "sewer camera inspection Maui",
    "underground plumbing Hawaii",
  ],
  /** Share card used by every route unless it supplies its own photo. */
  ogImage: {
    src: "/images/trenching-2.jpg",
    alt: "Nexjen plumbing crew's trenched underground lines on a hillside job site overlooking the ocean on Maui",
    width: 2560,
    height: 1920,
  },
} as const;

/* ========================================================================== */
/*  Services                                                                   */
/* ========================================================================== */

export const SERVICES: readonly Service[] = [
  {
    slug: "bathroom-remodels",
    title: "Custom Bathroom Remodels",
    shortTitle: "Bathroom Remodels",
    summary:
      "Full-gut bathroom conversions, from dated tub surrounds to tiled walk-in showers.",
    description:
      "Nexjen builds custom bathroom remodels across Maui, from full gut renovations to targeted tub-to-shower conversions. We carry the entire scope ourselves — demo, drain and supply relocation, custom shower pans, waterproofing, tile, and final fixture setting — so one licensed contractor owns the result from rough-in through finish. Accessible curbless entries and in-wall grab bar blocking are planned into the framing rather than screwed to tile afterward.",
    icon: "Bath",
    image: {
      src: "/images/remodel-after.jpg",
      alt: "Finished walk-in shower with large-format tile, mosaic floor, grab bars, and a tiled bench",
      width: 2560,
      height: 1920,
    },
    gallery: [
      {
        src: "/images/remodel-before.jpg",
        alt: "Original bathroom before remodel — alcove tub, dated tile surround, and a portable shower chair",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/remodel-after.jpg",
        alt: "Completed walk-in shower replacing the original tub alcove",
        width: 2560,
        height: 1920,
      },
    ],
    beforeAfter: {
      before: {
        src: "/images/remodel-before.jpg",
        alt: "Bathroom before remodel — alcove tub with grab bars and a portable shower chair",
        width: 2560,
        height: 1920,
      },
      after: {
        src: "/images/remodel-after.jpg",
        alt: "Bathroom after remodel — tiled walk-in shower with permanent grab bars and a bench",
        width: 2560,
        height: 1920,
      },
    },
    bullets: [
      "Full gut remodels and tub-to-shower conversions",
      "Custom shower pans, waterproofing, and tile setting",
      "Drain, vent, and supply line relocation",
      "Fixture, valve, and trim upgrades",
      "Permits pulled and inspections scheduled",
    ],
    featured: true,
  },

  {
    slug: "water-heaters",
    title: "Water Heater Installation & Servicing",
    shortTitle: "Water Heaters",
    summary:
      "Heat pump, electric, gas, tankless, and solar thermal — sized, installed, and serviced.",
    description:
      "Nexjen installs and services every type of residential and commercial water heater on Maui: high-efficiency heat pump units, conventional electric and gas tanks, tankless systems, and roof-mounted solar thermal collectors. Each system is sized to real household demand and brought to current code with the required drain pan, thermal expansion control, seismic strapping, and accessible shutoffs. We also handle the annual maintenance that protects the manufacturer warranty and keeps a tank from failing early.",
    icon: "Flame",
    image: {
      src: "/images/water-heater-heatpump.jpg",
      alt: "Newly installed hybrid heat pump water heater in a finished utility closet",
      width: 2560,
      height: 1920,
    },
    gallery: [
      {
        src: "/images/water-heater-heatpump.jpg",
        alt: "Hybrid heat pump water heater installed with new supply lines and a condensate drain",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/water-heater-solar.jpg",
        alt: "Roof-mounted solar thermal collector panels for domestic hot water",
        width: 2560,
        height: 1920,
      },
    ],
    bullets: [
      "Heat pump and high-efficiency tank replacement",
      "Tankless, gas, and electric installation",
      "Solar thermal collectors and storage systems",
      "Code-required pan, expansion, and seismic strapping",
      "Annual service: anode, T&P valve, and flush",
    ],
    featured: true,
  },

  {
    slug: "new-construction-underground",
    title: "New Construction & Underground Plumbing",
    shortTitle: "New Construction",
    summary:
      "Trenching, underslab rough-in, and site utilities for residential and commercial builds.",
    description:
      "Nexjen handles underground and new construction plumbing for residential and commercial builds across Maui — trenching, bedding, underslab DWV, water service, and site utilities. We run the excavation and heavy equipment ourselves and set stub-ups directly off the foundation forms, so the rough-in is located correctly before a yard of concrete is placed. Every system is pressure-tested and carried through county inspection ahead of the pour, because this is the one part of the job nobody can reach again afterward.",
    icon: "Shovel",
    image: {
      src: "/images/trenching-1.jpg",
      alt: "Open trench with underground drain lines run to a block-foundation building",
      width: 2560,
      height: 1920,
    },
    gallery: [
      {
        src: "/images/trenching-1.jpg",
        alt: "Trenched underground drain lines running to a block foundation",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/trenching-2.jpg",
        alt: "Trenched underground plumbing on a hillside lot overlooking the ocean",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/underground-slab-1.jpg",
        alt: "Sand-bedded underslab rough-in with capped stub-ups and conduit inside the forms",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/underground-slab-2.jpg",
        alt: "Underslab DWV rough-in staged on compacted fill with mountains behind the site",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/underground-slab-3.jpg",
        alt: "Wide view of underslab plumbing rough-in across a prepared residential pad",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/underground-commercial-1.jpg",
        alt: "Commercial pad rough-in with capped stub-ups inside formed footings",
        width: 2560,
        height: 1920,
      },
      {
        src: "/images/underground-newconstruction-1.jpg",
        alt: "Underground rough-in and stub-ups in front of a house under framing",
        width: 2560,
        height: 1920,
      },
    ],
    bullets: [
      "Trenching, heavy equipment, and compacted backfill",
      "Underslab DWV, water service, and stub-ups",
      "Slab prep coordinated with the foundation crew",
      "Residential tract, custom home, and commercial pads",
      "Code-compliant, pressure-tested, inspection-ready",
    ],
    featured: true,
  },

  {
    slug: "backflow-prevention",
    title: "Backflow Prevention & Testing",
    shortTitle: "Backflow",
    summary:
      "Assembly installation, annual certification testing, repair, and rebuild.",
    description:
      "Nexjen installs, tests, repairs, and rebuilds backflow prevention assemblies protecting potable water on residential, agricultural, and commercial services throughout Maui. Annual certification is a requirement of your water purveyor, and we handle the test and the paperwork so the deadline never becomes your problem. When an assembly fails, we diagnose and rebuild it rather than defaulting to a full replacement.",
    icon: "ShieldCheck",
    image: {
      src: "/images/backflow-1.jpg",
      alt: "Brass reduced-pressure backflow prevention assembly installed on an exterior water service",
      width: 2560,
      height: 1920,
    },
    gallery: [
      {
        src: "/images/backflow-1.jpg",
        alt: "Reduced-pressure backflow preventer with isolation valves on a landscaped service line",
        width: 2560,
        height: 1920,
      },
    ],
    bullets: [
      "RP and double-check assembly installation",
      "Annual certification testing and filing",
      "Repair, rebuild, and failed-test turnaround",
      "Irrigation, agricultural, and commercial services",
    ],
    featured: false,
  },

  {
    slug: "camera-inspection",
    title: "Sewer Camera Inspection & Locating",
    shortTitle: "Camera Inspection",
    summary:
      "Push-camera survey of the line with footage marks and a recorded diagnosis.",
    description:
      "Nexjen runs push-camera inspections of drain lines and sewer laterals across Maui to find the actual fault instead of guessing at it. The survey identifies root intrusion, bellies, separated joints, offsets, and collapses, with depth and footage marked on the surface so any excavation is dug once, in the right place. Recorded footage gives you something concrete to hand a buyer, an insurer, or another contractor.",
    icon: "ScanSearch",
    image: {
      src: "/images/camera-inspection-1.jpg",
      alt: "RIDGID SeeSnake camera monitor showing a live sewer line survey at eighteen feet five inches",
      width: 2560,
      height: 1920,
    },
    gallery: [
      {
        src: "/images/camera-inspection-1.jpg",
        alt: "Sewer camera monitor displaying pipe interior with on-screen depth and footage readout",
        width: 2560,
        height: 1920,
      },
    ],
    bullets: [
      "Pre-purchase sewer and lateral surveys",
      "Root intrusion, belly, and collapse diagnosis",
      "On-surface depth and footage locating",
      "Recorded footage for claims and disclosures",
    ],
    featured: false,
  },
];

/* ========================================================================== */
/*  Derived                                                                    */
/* ========================================================================== */

export const FEATURED_SERVICES: readonly Service[] = SERVICES.filter(
  (service) => service.featured,
);

export const SERVICE_SLUGS: readonly string[] = SERVICES.map(
  (service) => service.slug,
);

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

/* ========================================================================== */
/*  Navigation                                                                 */
/* ========================================================================== */

export const MAIN_NAV: readonly NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_NAV: readonly NavLink[] = SERVICES.map((service) => ({
  label: service.shortTitle,
  href: `/services/${service.slug}`,
}));

export const FOOTER_NAV: readonly NavGroup[] = [
  { title: "Services", links: SERVICE_NAV },
  { title: "Company", links: MAIN_NAV },
];

/* ========================================================================== */
/*  Calls to action                                                            */
/* ========================================================================== */

export const CTA = {
  phone: { label: "Call Now", href: SITE.contact.phoneHref },
  quote: { label: "Request a Quote", href: "/contact" },
  schedule: { label: "Schedule Service", href: "/contact" },
  work: { label: "See Our Work", href: "/projects" },
} as const;

/* ========================================================================== */
/*  Homepage                                                                   */
/* ========================================================================== */

export const HERO = {
  eyebrow: SITE.licenseLabel,
  /** Rendered as `accent` (gold) followed by `rest`. */
  headline: {
    accent: "Full-Service Plumbing",
    rest: "for Maui Homes & Businesses",
  },
  subhead:
    "From leaky faucets, clogged drains, and water heater repairs to custom bathroom remodels and new construction, Nexjen handles every kind of plumbing job. One licensed team for routine maintenance and major projects alike — permitted, inspected, and done right the first time.",
  /** Swap this one line to change the hero backdrop. */
  background: {
    src: "/images/trenching-2.jpg",
    alt: "Nexjen underground plumbing job site — trenched lines on a hillside lot overlooking the ocean on Maui",
    width: 2560,
    height: 1920,
  },
} as const;
