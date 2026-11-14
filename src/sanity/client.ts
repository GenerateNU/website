import { createClient } from '@sanity/client';
import { createImageUrlBuilder, type ImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2022-03-07',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

/** Image URL builder with defaults applied; chain `.width(n)` etc. before `.url()`. */
export const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
  return builder.image(source).auto('format').fit('max').quality(75);
};
