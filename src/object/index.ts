export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const mergeObjects = <T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U => ({ ...obj1, ...obj2 });

export const isEmptyObject = (obj: Record<string, unknown>): boolean =>
  Object.keys(obj).length === 0;

export const getNestedValue = <
  T extends Record<string, any>,
  K extends keyof T
>(
  obj: T,
  key: K
): T[K] => obj[key];

export const setNestedValue = (
  obj: Record<string, any>,
  path: string,
  value: any
): void => {
  const keys = path.split(".");
  let current: Record<string, any> = obj;
  while (keys.length > 1) {
    const key = keys.shift()!;
    current[key] = current[key] || {};
    current = current[key];
  }
  current[keys[0]] = value;
};

export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> =>
  keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {} as Pick<T, K>);

export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> =>
  Object.keys(obj).reduce(
    (acc, key) =>
      keys.includes(key as K) ? acc : { ...acc, [key]: obj[key as K] },
    {} as Omit<T, K>
  );

export const toQueryString = (obj: Record<string, any>): string =>
  Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");

export const fromQueryString = (query: string): Record<string, string> =>
  Object.fromEntries(new URLSearchParams(query));

export const deepFreeze = <T>(obj: T): Readonly<T> => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    const value = (obj as any)[prop];
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return obj as Readonly<T>;
};

export const flattenObject = (
  obj: Record<string, any>,
  prefix = ""
): Record<string, any> =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenObject(value, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {} as Record<string, any>);

export const unflattenObject = (
  obj: Record<string, any>
): Record<string, any> =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    setNestedValue(acc, key, value);
    return acc;
  }, {} as Record<string, any>);

export const findDeepKey = (obj: any, targetKey: string): any => {
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (key === targetKey) return obj[key];
      const found = findDeepKey(obj[key], targetKey);
      if (found !== undefined) return found;
    }
  }
  return undefined;
};

export const mapKeys = <T>(
  obj: Record<string, T>,
  fn: (key: string) => string
): Record<string, T> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [fn(key), value])
  );

export const mapValues = <T, U>(
  obj: Record<string, T>,
  fn: (value: T) => U
): Record<string, U> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)])
  );
