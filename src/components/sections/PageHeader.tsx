import Reveal from "@/components/ui/Reveal";

interface PageHeaderProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead?: string;
}

/**
 * Standard masthead for interior routes: brass eyebrow, display heading, and
 * an optional lead paragraph, sitting on the same forge ground as the footer.
 */
export default function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <section className="bg-forge relative border-b border-ink-600">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-700/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-500">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-display text-silver-100 sm:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              {lead}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
