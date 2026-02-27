import type { ArticleEntry } from "./entries";

export interface CategoryItem {
  name: string;
  slug: string;
  count: number;
}

const stripDiacritics = (value: string): string =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const toCategorySlug = (value: string): string =>
  stripDiacritics(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const collectCategories = (entries: ArticleEntry[]): CategoryItem[] => {
  const categories = new Map<string, CategoryItem>();

  for (const entry of entries) {
    for (const rawCategory of entry.data.categories) {
      const name = rawCategory.trim();
      const slug = toCategorySlug(name);

      if (!slug) {
        continue;
      }

      const existing = categories.get(slug);

      if (existing) {
        existing.count += 1;
        continue;
      }

      categories.set(slug, {
        name,
        slug,
        count: 1
      });
    }
  }

  return [...categories.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name, "en")
  );
};
