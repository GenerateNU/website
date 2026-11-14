import { createImageUrlBuilder, type ImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

import { client } from './client';

export const SANITY_IMAGE_COMPRESSION_QUALITY = 75;

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
  return builder.image(source).auto('format').fit('max').quality(SANITY_IMAGE_COMPRESSION_QUALITY);
};
