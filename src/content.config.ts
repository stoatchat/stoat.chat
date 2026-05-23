import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    showDescriptionOnPage: z.boolean(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    coverImage: z.string().optional(),
    date: z.string(),
    giscus: z.boolean().default(false),
    hidden: z.boolean().default(false),
  }),
});

const changelogCollection = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/changelog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    product: z.union([
      z.literal("web"),
      z.literal("android"),
      z.literal("ios"),
      z.literal("api"),
      z.literal("all"),
    ]),
    date: z.string(),
    relevance: z.object({
      minVersionCode: z.number().optional(),
      maxVersionCode: z.number().optional(),
    }),
  }),
});

export const collections = {
  legal: legalCollection,
  blog: blogCollection,
  changelog: changelogCollection,
};
