"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, ShieldCheck } from "lucide-react";

import MobileMenu from "@/components/layout/MobileMenu";
import MagneticCta from "@/components/ui/MagneticCta";
import { CTA, MAIN_NAV, SERVICE_NAV, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const closeOverlays = useCallback(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, []);

  // The glass deepens once the page leaves the top, so the bar stays legible
  // over photography without being heavy over the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Link clicks close the overlays themselves; this covers the one path they
  // can't — the browser's own back/forward buttons.
  useEffect(() => {
    window.addEventListener("popstate", closeOverlays);
    return () => window.removeEventListener("popstate", closeOverlays);
  }, [closeOverlays]);

  // Close the services dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-colors duration-300",
          "backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/60",
          scrolled
            ? "border-ink-600 bg-ink-950/85 shadow-panel"
            : "border-transparent bg-ink-950/40",
        )}
      >
        {/* Hairline of brass along the bottom edge. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-700/60 to-transparent"
        />

        <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label={`${SITE.legalName} — home`}
          >
            {/* Above the fold, so it loads eagerly at high priority. No `sizes`
                prop: the mark renders at a fixed 48px, and omitting it keeps
                next/image on a tight 1x/2x srcset rather than the full
                responsive ladder up to 3840w. */}
            <Image
              src={SITE.logo.src}
              alt={SITE.logo.alt}
              width={48}
              height={48}
              loading="eager"
              fetchPriority="high"
              className="h-12 w-12 rounded-md object-cover"
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg font-bold tracking-display text-metal-silver">
                {SITE.name}
              </span>
              <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-eyebrow text-gold-500">
                {SITE.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="ml-auto hidden items-center gap-1 lg:flex"
            aria-label="Main"
          >
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((previous) => !previous)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/services")
                    ? "text-gold-400"
                    : "text-silver-300 hover:text-silver-100",
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    servicesOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen && (
                <div
                  className={cn(
                    "absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-panel",
                    "border border-ink-600 bg-ink-900/95 p-2 shadow-panel backdrop-blur-xl",
                  )}
                >
                  {SERVICE_NAV.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeOverlays}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-sm transition-colors",
                        pathname === link.href
                          ? "bg-ink-700 text-gold-400"
                          : "text-silver-300 hover:bg-ink-800 hover:text-silver-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {MAIN_NAV.filter((link) => link.href !== "/services").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeOverlays}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-gold-400"
                    : "text-silver-300 hover:text-silver-100",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* License badge + call CTA */}
          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <span className="hidden items-center gap-1.5 rounded-full border border-ink-600 px-3 py-1.5 text-xs font-medium text-silver-400 xl:flex">
              <ShieldCheck
                className="h-3.5 w-3.5 text-gold-500"
                aria-hidden="true"
              />
              {SITE.licenseLabel}
            </span>

            <MagneticCta
              href={CTA.phone.href}
              className={cn(
                "group flex items-center gap-2 rounded-card bg-accent px-4 py-2.5",
                "text-sm font-semibold text-on-accent shadow-gold",
                "transition-[background-color,box-shadow] duration-200",
                "hover:bg-accent-hover hover:shadow-gold-lg sm:px-5",
              )}
            >
              <Phone
                className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-12"
                aria-hidden="true"
              />
              <span className="hidden sm:inline">{CTA.phone.label}</span>
              <span className="sm:hidden">Call</span>
            </MagneticCta>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={cn(
                "-mr-1 rounded-md p-2 text-silver-300 transition-colors",
                "hover:bg-ink-800 hover:text-silver-100 lg:hidden",
              )}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
