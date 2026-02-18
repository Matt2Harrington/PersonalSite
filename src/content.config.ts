import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const photography = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/photography' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    order: z.number(),
    backgroundVideo: z.string(),
    coverImage: z.string(),
    images: z.array(z.object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
      orientation: z.string(),
    })),
  }),
});

export const collections = { photography };
