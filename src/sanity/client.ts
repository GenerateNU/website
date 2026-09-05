import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from '@sanity/types';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2026-05-15',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source: Image) => builder.image(source);
