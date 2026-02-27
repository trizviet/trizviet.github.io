import { defineCollection, z } from "astro:content";

const articleSchema = z.object({
  title: z.string(),
  author: z.string().optional(),
  date: z.coerce.date(),
  categories: z.array(z.string()).default([]),
  description: z.string().optional()
});

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: articleSchema
  }),
  welcome: defineCollection({
    type: "content",
    schema: articleSchema
  })
};
