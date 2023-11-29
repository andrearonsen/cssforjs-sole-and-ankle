/**
 * Several little utilities for this project.
 *
 * NOTE: These are NOT generic, and should not be copied
 * to other projects. They're quick imperfect implementations
 * for the known, fixed data we work with here.
 */
import differenceInDays from "date-fns/differenceInDays";

export function formatPrice(price: number) {
  return `$${price / 100}`;
}

export function pluralize(s: string, num: number) {
  return num === 1 ? `1 ${s}` : `${num} ${s}s`;
}

export function isNewShoe(releaseDate: Date) {
  return differenceInDays(new Date(), releaseDate) < 30;
}
