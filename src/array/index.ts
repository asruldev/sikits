export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export function flatten<T>(arrays: T[][]): T[] {
  return arrays.reduce<T[]>((acc, val) => acc.concat(val), []);
}

export function chunk<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
}

export function compact<T>(
  array: (T | null | undefined | false | 0 | "")[]
): T[] {
  return array.filter((item): item is T => Boolean(item));
}

export function intersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => array2.includes(item));
}

export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => !array2.includes(item));
}

export function remove<T>(array: T[], value: T): T[] {
  return array.filter((item) => item !== value);
}

export function groupBy<T, K extends PropertyKey>(
  array: T[],
  keyGetter: (item: T) => K
): Record<K, T[]> {
  return array.reduce((acc, item) => {
    const key = keyGetter(item);
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

export function shuffle<T>(array: T[]): T[] {
  return array.slice().sort(() => Math.random() - 0.5);
}

export function sum(array: number[]): number {
  return array.reduce((acc, val) => acc + val, 0);
}

export function average(array: number[]): number {
  return array.length > 0 ? sum(array) / array.length : 0;
}

export function min(array: number[]): number {
  return array.length > 0 ? Math.min(...array) : Infinity;
}

export function max(array: number[]): number {
  return array.length > 0 ? Math.max(...array) : -Infinity;
}

export function findDuplicates<T>(array: T[]): T[] {
  const seen = new Set<T>();
  const duplicates = new Set<T>();
  for (const item of array) {
    if (seen.has(item)) {
      duplicates.add(item);
    }
    seen.add(item);
  }
  return Array.from(duplicates);
}

export function uniqueBy<T, K>(array: T[], keyGetter: (item: T) => K): T[] {
  const seen = new Set<K>();
  return array.filter((item) => {
    const key = keyGetter(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export function zip<T, U>(array1: T[], array2: U[]): [T, U][] {
  const length = Math.min(array1.length, array2.length);
  return Array.from({ length }, (_, i) => [array1[i], array2[i]]);
}

export function unzip<T, U>(pairs: [T, U][]): [T[], U[]] {
  return [pairs.map(([a]) => a), pairs.map(([, b]) => b)];
}

export function rotate<T>(array: T[], steps: number): T[] {
  const len = array.length;
  if (len === 0) return [];
  const shift = ((steps % len) + len) % len;
  return [...array.slice(-shift), ...array.slice(0, -shift)];
}

export function movingAverage(array: number[], windowSize: number): number[] {
  if (windowSize <= 0 || array.length < windowSize) return [];
  return array
    .map((_, i, arr) =>
      i >= windowSize - 1
        ? sum(arr.slice(i - windowSize + 1, i + 1)) / windowSize
        : undefined
    )
    .filter((n): n is number => n !== undefined);
}

export function partition<T>(
  array: T[],
  predicate: (item: T) => boolean
): [T[], T[]] {
  return array.reduce<[T[], T[]]>(
    (acc, item) => {
      acc[predicate(item) ? 0 : 1].push(item);
      return acc;
    },
    [[], []]
  );
}
