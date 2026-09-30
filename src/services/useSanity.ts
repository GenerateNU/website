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
    const fetchData = async (): Promise<void> => {
      const fetchedData = await client.fetch<Raw[]>(query, params);
      const modifiedData = modifier(fetchedData);
      setData(modifiedData);
    };

    fetchData();
  }, [] /*, [modifier, params, query]*/);

  return data;
}
