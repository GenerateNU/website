import { queryOptions, useQuery } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import { client } from '../client';
import type { AllCopyQueryResult } from '../types.gen';

const allCopyQuery = defineQuery(`*[_type == "copy"]{
  "key": coalesce(key, ""),
  "header": coalesce(header, ""),
  "content": coalesce(content, [])
}`);

export type Copy = AllCopyQueryResult[number];

const EMPTY_COPY: Copy = { key: '', header: '', content: [] };

const allCopyOptions = () =>
  queryOptions({
    queryKey: ['copy'],
    queryFn: () => client.fetch(allCopyQuery),
  });

/** Reads one copy doc out of the shared all-copy query. Empty copy while loading or if the key is missing. */
export function useCopy(key: string): Copy {
  const { data } = useQuery({
    ...allCopyOptions(),
    select: copies => copies.find(copy => copy.key === key) ?? EMPTY_COPY,
  });

  return data ?? EMPTY_COPY;
}
