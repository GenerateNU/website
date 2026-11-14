import { queryOptions } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import { client } from '../client';
import { urlFor } from '../image';
import type { DirectorsQueryResult } from '../types.gen';

const directorsQuery = defineQuery(`*[_type == "director" && defined(image.asset)] | order(zIndex) {
  "team": coalesce(team, ""),
  "title": coalesce(title, ""),
  "name": coalesce(name, ""),
  "email": coalesce(email, ""),
  color{hex},
  image
}`);

export type Director = Omit<DirectorsQueryResult[number], 'color' | 'image'> & {
  color: string;
  image: string;
};

const selectDirectors = (directors: DirectorsQueryResult): Director[] =>
  directors.map(director => ({
    ...director,
    color: director.color?.hex ?? '',
    image: urlFor(director.image).width(650).url(),
  }));

export const directorsOptions = () =>
  queryOptions({
    queryKey: ['directors'],
    queryFn: () => client.fetch(directorsQuery),
    select: selectDirectors,
  });
