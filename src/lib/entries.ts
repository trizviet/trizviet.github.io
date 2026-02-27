import type { CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"posts"> | CollectionEntry<"welcome">;

export const getEntryHref = (entry: ArticleEntry): string => {
  if (entry.collection === "welcome" && entry.slug === "index") {
    return "/welcome/";
  }

  return `/${entry.collection}/${entry.slug}/`;
};
