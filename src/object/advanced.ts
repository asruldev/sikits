/**
 * Creates a deep clone of an object using structured clone (if available) or JSON
 */
export const deepCloneStructured = <T>(obj: T): T => {
  if (typeof structuredClone !== 'undefined') {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Creates a deep clone of an object with circular reference support
 */
export const deepCloneCircular = <T>(obj: T, hash = new WeakMap()): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepCloneCircular(item, hash)) as T;
  }
  
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  
  const cloned = {} as T;
  hash.set(obj, cloned);
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      (cloned as any)[key] = deepCloneCircular((obj as any)[key], hash);
    }
  }
  
  return cloned;
};

/**
 * Merges multiple objects deeply
 */
export const deepMerge = (...objects: any[]): any => {
  return objects.reduce((result, obj) => {
    if (!obj || typeof obj !== 'object') return result;
    
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        result[key] = deepMerge(result[key] || {}, obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
    
    return result;
  }, {});
};

/**
 * Compares two objects deeply
 */
export const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || obj2 == null) return obj1 === obj2;
  
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;
  
  if (obj1.constructor !== obj2.constructor) return false;
  
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
};

/**
 * Gets the difference between two objects
 */
export const objectDiff = (obj1: any, obj2: any): { added: string[]; removed: string[]; changed: string[] } => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  const added = keys2.filter(key => !keys1.includes(key));
  const removed = keys1.filter(key => !keys2.includes(key));
  const changed = keys1.filter(key => 
    keys2.includes(key) && !deepEqual(obj1[key], obj2[key])
  );
  
  return { added, removed, changed };
};

/**
 * Transforms object keys using a function
 */
export const transformKeys = <T extends Record<string, any>>(
  obj: T,
  transformer: (key: string) => string
): Record<string, any> => {
  return Object.keys(obj).reduce((result, key) => {
    result[transformer(key)] = obj[key];
    return result;
  }, {} as Record<string, any>);
};

/**
 * Transforms object values using a function
 */
export const transformValues = <T extends Record<string, any>, U>(
  obj: T,
  transformer: (value: any, key: string) => U
): Record<string, U> => {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = transformer(obj[key], key);
    return result;
  }, {} as Record<string, U>);
};

/**
 * Creates an object from an array of key-value pairs
 */
export const fromEntries = <T = any>(entries: [string, T][]): Record<string, T> => {
  return entries.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {} as Record<string, T>);
};

/**
 * Creates an array of key-value pairs from an object
 */
export const toEntries = <T = any>(obj: Record<string, T>): [string, T][] => {
  return Object.keys(obj).map(key => [key, obj[key]]);
};

/**
 * Inverts an object (swaps keys and values)
 */
export const invert = <T extends Record<string, string | number>>(obj: T): Record<string, string> => {
  return Object.keys(obj).reduce((result, key) => {
    result[String(obj[key])] = key;
    return result;
  }, {} as Record<string, string>);
};

/**
 * Creates an object with default values
 */
export const createWithDefaults = <T extends Record<string, any>>(
  keys: string[],
  defaultValue: any
): T => {
  return keys.reduce((obj, key) => {
    (obj as Record<string, any>)[key] = defaultValue;
    return obj;
  }, {} as T);
};

/**
 * Creates an object from an array using a key function
 */
export const groupByKey = <T>(
  array: T[],
  keyFn: (item: T) => string
): Record<string, T[]> => {
  return array.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
};

/**
 * Creates an object from an array using a value function
 */
export const indexBy = <T>(
  array: T[],
  keyFn: (item: T) => string
): Record<string, T> => {
  return array.reduce((index, item) => {
    index[keyFn(item)] = item;
    return index;
  }, {} as Record<string, T>);
};

/**
 * Counts occurrences of values in an array
 */
export const countBy = <T>(
  array: T[],
  keyFn: (item: T) => string
): Record<string, number> => {
  return array.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
};

/**
 * Sums values in an array grouped by key
 */
export const sumBy = <T>(
  array: T[],
  keyFn: (item: T) => string,
  valueFn: (item: T) => number
): Record<string, number> => {
  return array.reduce((sums, item) => {
    const key = keyFn(item);
    sums[key] = (sums[key] || 0) + valueFn(item);
    return sums;
  }, {} as Record<string, number>);
};

/**
 * Averages values in an array grouped by key
 */
export const averageBy = <T>(
  array: T[],
  keyFn: (item: T) => string,
  valueFn: (item: T) => number
): Record<string, number> => {
  const groups = groupByKey(array, keyFn);
  const sums = sumBy(array, keyFn, valueFn);
  
  return Object.keys(sums).reduce((averages, key) => {
    averages[key] = sums[key] / groups[key].length;
    return averages;
  }, {} as Record<string, number>);
};

/**
 * Finds the maximum value in an array grouped by key
 */
export const maxBy = <T>(
  array: T[],
  keyFn: (item: T) => string,
  valueFn: (item: T) => number
): Record<string, number> => {
  return array.reduce((maxs, item) => {
    const key = keyFn(item);
    const value = valueFn(item);
    if (!(key in maxs) || value > maxs[key]) {
      maxs[key] = value;
    }
    return maxs;
  }, {} as Record<string, number>);
};

/**
 * Finds the minimum value in an array grouped by key
 */
export const minBy = <T>(
  array: T[],
  keyFn: (item: T) => string,
  valueFn: (item: T) => number
): Record<string, number> => {
  return array.reduce((mins, item) => {
    const key = keyFn(item);
    const value = valueFn(item);
    if (!(key in mins) || value < mins[key]) {
      mins[key] = value;
    }
    return mins;
  }, {} as Record<string, number>);
};

/**
 * Creates a proxy object that logs all property access
 */
export const createLoggingProxy = <T extends Record<string, any>>(
  obj: T,
  logger: (action: string, key: string, value?: any) => void = console.log
): T => {
  return new Proxy(obj, {
    get(target, key) {
      if (typeof key === 'string') {
        logger('GET', key, (target as Record<string, any>)[key]);
        return (target as Record<string, any>)[key];
      }
      return undefined;
    },
    set(target, key, value) {
      if (typeof key === 'string') {
        logger('SET', key, value);
        (target as Record<string, any>)[key] = value;
        return true;
      }
      return false;
    },
    deleteProperty(target, key) {
      if (typeof key === 'string') {
        logger('DELETE', key);
        delete (target as Record<string, any>)[key];
        return true;
      }
      return false;
    }
  });
};

/**
 * Creates a proxy object that validates property values
 */
export const createValidationProxy = <T extends Record<string, any>>(
  obj: T,
  validators: Record<string, (value: any) => boolean>
): T => {
  return new Proxy(obj, {
    set(target, key, value) {
      if (typeof key === 'string') {
        const validator = validators[key];
        if (validator && !validator(value)) {
          throw new Error(`Invalid value for property ${key}`);
        }
        (target as Record<string, any>)[key] = value;
        return true;
      }
      return false;
    }
  });
};

/**
 * Creates a proxy object that caches computed properties
 */
export const createCachingProxy = <T extends Record<string, any>>(
  obj: T,
  computedProps: Record<string, () => any>
): T => {
  const cache = new Map<string, any>();
  
  return new Proxy(obj, {
    get(target, key) {
      if (typeof key === 'string') {
        if (computedProps[key]) {
          if (!cache.has(key)) {
            cache.set(key, computedProps[key]());
          }
          return cache.get(key);
        }
        return (target as Record<string, any>)[key];
      }
      return undefined;
    },
    set(target, key) {
      cache.clear();
      return true;
    }
  });
}; 