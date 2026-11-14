import { createImageUrlBuilder, type ImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

import { client } from './client';

// Rendered widths (2x the largest displayed size) for each image use.
// Arcade screen is ~321 svg units wide.
export const DIRECTOR_IMAGE_WIDTH = 650;

// Carousel image is 50vw.
export const SHOWCASE_IMAGE_WIDTH = 1200;

// Wheel icon is 15% of a <=600px wheel.
export const TEAM_ICON_WIDTH = 200;

const builder = createImageUrlBuilder(client);

const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
  return builder.image(source).auto('format').fit('max').quality(75);
};

export const imageUrl = (source: SanityImageSource, width: number): string => urlFor(source).width(width).url();
