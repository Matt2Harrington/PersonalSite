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

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/apps' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string(),
    coverImage: z.string(),
    backgroundVideo: z.string(),
    appStoreUrl: z.string().optional(),
    feedbackEmail: z.string(),
    order: z.number(),
    sections: z.array(z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      image: z.string().optional(),
      video: z.string().optional(),
    })),
  }),
});

export const collections = { photography, blog, apps };
