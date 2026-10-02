import type { QueryParams } from '@sanity/client';
import { useState, useEffect } from 'react';

import { client } from '../client';

export function useSanity<T>(query: string): T[];
export function useSanity<Raw, T>(query: string, params: QueryParams, modifier: (data: Raw[]) => T[]): T[];
export function useSanity<Raw, T>(
  query: string,
  params: QueryParams = {},
  modifier: (data: Raw[]) => (Raw | T)[] = data => data
): (Raw | T)[] {
  const [data, setData] = useState<(Raw | T)[]>([]);

  useEffect(() => {
    void client.fetch<Raw[]>(query, params).then(fetchedData => {
      setData(modifier(fetchedData));
    });
  }, [] /*, [modifier, params, query]*/);

  return data;
}
