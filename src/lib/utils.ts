/**
 * Shared helpers.
 */

/**
 * Joins conditional class names, dropping anything falsy.
 *
 * Deliberately dependency-free: we author our own class strings, so there is
 * no conflicting-utility merging to resolve the way `tailwind-merge` would.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * True when a constants field actually holds client-supplied content.
 *
 * Fields the client has not returned yet are empty strings in `constants.ts`,
 * so gating on this keeps unfilled data off the page entirely rather than
 * rendering a blank row, a stray label, or a dead `tel:` link.
 */
export function isPresent(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
