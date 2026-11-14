import { createClient } from '@sanity/client';
import { createImageUrlBuilder, type ImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

import { SANITY_IMAGE_COMPRESSION_QUALITY } from './constants';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2022-03-07',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
  return builder.image(source).auto('format').fit('max').quality(SANITY_IMAGE_COMPRESSION_QUALITY);
};
