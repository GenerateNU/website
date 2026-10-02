import type { QueryParams } from '@sanity/client';
import { useState, useEffect, useEffectEvent } from 'react';

import { client } from '../client';

export function useSanity<T>(query: string, params: QueryParams = {}): T[] {
  const [data, setData] = useState<T[]>([]);

  const fetchData = useEffectEvent(() => client.fetch<T[]>(query, params).then(setData));

  useEffect(() => {
    void fetchData();
  }, []);

  return data;
}
