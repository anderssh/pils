import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tester = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/tester" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    place: z.string().optional(),
    intro: z.array(z.string()).default([]),
    activities: z.array(z.string()).default([]),
    participants: z.array(z.string()).default([]),
    hero: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    galleryTitle: z.string().default("Ølene"),
    galleryNote: z.string().optional(),
    results: z.array(z.object({
      name: z.string(), brewery: z.string().default(""), alcohol: z.string().default(""),
      type: z.string().default(""), color: z.string().default(""), volume: z.string().default(""),
      score: z.number(), comment: z.string().default(""), image: z.string().optional(),
    })),
  }),
});

export const collections = { tester };
