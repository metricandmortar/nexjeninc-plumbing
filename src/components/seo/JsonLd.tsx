interface JsonLdProps {
  readonly data: Record<string, unknown>;
}

/**
 * Renders Schema.org structured data as a native script tag, per the Next.js
 * JSON-LD guide. `<` is escaped so no string in the payload can close the tag.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
