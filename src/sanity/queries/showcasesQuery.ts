import { queryOptions } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import { client } from '../client';
import { urlFor } from '../image';
import type { ShowcasesQueryResult } from '../types.gen';

const showcasesQuery = defineQuery(`*[_type == "showcase" && defined(image.asset)]{
  "year": coalesce(year, ""),
  "semester": coalesce(semester, ""),
  image
}`);

export type Showcase = Omit<ShowcasesQueryResult[number], 'image'> & {
  image: string;
};

const semesterRank = (showcase: Showcase): number => (showcase.semester === 'SPRING' ? 0 : 1);

// Oldest first; within a year, spring before fall.
const compareShowcases = (a: Showcase, b: Showcase): number =>
  Number(a.year) - Number(b.year) || semesterRank(a) - semesterRank(b);

const selectShowcases = (showcases: ShowcasesQueryResult): Showcase[] => {
  const sorted = showcases.map(showcase => ({
    ...showcase,
    semester: showcase.semester.toUpperCase(),
    // Carousel renders at ~50vw; 1440px covers 2x density on screens up to 1440px wide.
    image: urlFor(showcase.image).width(1440).url(),
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
