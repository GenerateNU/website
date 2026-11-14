import { queryOptions } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import { client } from '../client';

const valuesQuery = defineQuery(`*[_type == "value"]{
  "value": coalesce(value, ""),
  "index": coalesce(index, 0)
} | order(index asc)`);

export const valuesOptions = () =>
  queryOptions({
    queryKey: ['values'],
    queryFn: () => client.fetch(valuesQuery),
  });
