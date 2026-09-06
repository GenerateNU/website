import { createClient } from '@sanity/client';
import { createImageUrlBuilder, ImageUrlBuilder } from '@sanity/image-url';
import type { Image } from '@sanity/types';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2026-09-05',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source: Image): ImageUrlBuilder => builder.image(source);
