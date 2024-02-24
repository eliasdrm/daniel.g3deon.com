import { z, defineCollection } from 'astro:content';
import type { Post } from '@/types.d';
const post: Post = {}
const blogCollection = defineCollection({
    type: "content",
    schema: z.object(typeof post),
  });
  

export const collections = {
  blog: blogCollection,
};