import { queryOptions } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import { client } from '../client';

const generateLinksQuery = defineQuery(`*[_type == "generateLink" && defined(slug.current) && defined(url)]{
  "slug": coalesce(slug.current, ""),
  "url": coalesce(url, "")
}`);

export const generateLinksOptions = () =>
  queryOptions({
    queryKey: ['generateLinks'],
    queryFn: () => client.fetch(generateLinksQuery),
  });
