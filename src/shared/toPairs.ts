export default function toPairs<T>(items: T[]): [T, T | undefined][] {
  return items.flatMap((item, index): [T, T | undefined][] => (index % 2 === 0 ? [[item, items[index + 1]]] : []));
}
