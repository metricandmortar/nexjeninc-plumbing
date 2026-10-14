import { Scale } from "lucide-react";

import PageHeader from "@/components/sections/PageHeader";
import {
  LEGAL_DISCLAIMER,
  LEGAL_UPDATED,
  type LegalDocument,
} from "@/lib/legal";

interface LegalPageProps {
  readonly document: LegalDocument;
}

/**
 * Shared layout for the privacy, terms, and cookie routes: the standard
 * masthead, a counsel-review disclaimer, then numbered sections in a narrow
 * prose column. Deliberately static — no reveal motion on long-form text.
 */
export default function LegalPage({ document }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={document.title} lead={document.lead} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <aside
            role="note"
            className="flex gap-3 rounded-panel border border-gold-800 bg-surface p-5"
          >
            <Scale
              className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-silver-300">
              <span className="font-semibold text-silver-100">Disclaimer: </span>
              {LEGAL_DISCLAIMER}
            </p>
          </aside>

          <p className="mt-8 text-xs font-semibold uppercase tracking-eyebrow text-foreground-subtle">
            Last updated {LEGAL_UPDATED}
          </p>

          <div className="mt-4 divide-y divide-ink-700">
            {document.sections.map((section) => (
              <section key={section.heading} className="py-8">
                <h2 className="font-display text-xl font-bold tracking-display text-silver-100">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-relaxed text-silver-300"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-4 space-y-2 pl-5 text-base leading-relaxed text-silver-300 marker:text-gold-600 list-disc">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.closing && (
                  <p className="mt-4 text-base leading-relaxed text-silver-300">
                    {section.closing}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
