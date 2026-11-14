import { queryOptions } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import { client } from '../client';
import { imageUrl, SHOWCASE_IMAGE_WIDTH } from '../image';
import type { ShowcasesQueryResult } from '../types.gen';

const showcasesQuery = defineQuery(`*[_type == "showcase" && defined(image.asset)]{
  "year": coalesce(year, ""),
  "semester": coalesce(semester, ""),
  image
} | order(year asc)`);

export type Showcase = Omit<ShowcasesQueryResult[number], 'image'> & {
  image: string;
};

const compareShowcases = (a: Showcase, b: Showcase) => {
  if (a.year === b.year) {
    return a.semester === 'SPRING' ? -1 : 1;
  }

  return Number(a.year) - Number(b.year);
};

const selectShowcases = (showcases: ShowcasesQueryResult): Showcase[] => {
  const sorted = showcases.map(showcase => ({
    ...showcase,
    semester: showcase.semester.toUpperCase(),
    image: imageUrl(showcase.image, SHOWCASE_IMAGE_WIDTH),
  }));

  sorted.sort(compareShowcases);

  return sorted;
};

export const showcasesOptions = () =>
  queryOptions({
    queryKey: ['showcases'],
    queryFn: () => client.fetch(showcasesQuery),
    select: selectShowcases,
  });
