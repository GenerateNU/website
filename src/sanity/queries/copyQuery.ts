import { queryOptions, useQuery } from '@tanstack/react-query';
import { defineQuery } from 'groq';
import { useCallback } from 'react';

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

export function useCopy(key: string): Copy {
  const selectCopy = useCallback(
    (copies: AllCopyQueryResult) => copies.find(copy => copy.key === key) ?? EMPTY_COPY,
    [key]
  );

  const { data } = useQuery({ ...allCopyOptions(), select: selectCopy });

  return data ?? EMPTY_COPY;
}
