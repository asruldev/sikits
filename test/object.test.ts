import {
  deepClone,
  mergeObjects,
  isEmptyObject,
  getNestedValue,
  setNestedValue,
  pick,
  omit,
  toQueryString,
  fromQueryString,
  deepFreeze,
  flattenObject,
  unflattenObject,
  findDeepKey,
  mapKeys,
  mapValues,
} from "../src/index";

describe("Object Utils", () => {
  test("deepClone should create a deep copy of an object", () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test("mergeObjects should merge two objects", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2 });
  });

  test("isEmptyObject should correctly identify empty objects", () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test("getNestedValue should return the correct value", () => {
    const obj = { a: { b: 2 } };
    expect(getNestedValue(obj, "a")).toEqual({ b: 2 });
  });

  test("setNestedValue should set the value at a given path", () => {
    const obj: Record<string, any> = {};
    setNestedValue(obj, "a.b.c", 5);
    expect(obj).toEqual({ a: { b: { c: 5 } } });
  });

  test("pick should return only the selected keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  test("toQueryString should convert an object to a query string", () => {
    expect(toQueryString({ a: 1, b: 2 })).toBe("a=1&b=2");
  });

  test("fromQueryString should parse a query string into an object", () => {
    expect(fromQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
  });

  test("deepFreeze should make an object immutable", () => {
    const obj = { a: { b: 2 } };
    deepFreeze(obj);
    expect(() => (obj.a.b = 3)).toThrow();
  });

  test("flattenObject should flatten nested objects", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(flattenObject(obj)).toEqual({ "a.b.c": 1 });
  });

  test("unflattenObject should reconstruct a flattened object", () => {
    const obj = { "a.b.c": 1 };
    expect(unflattenObject(obj)).toEqual({ a: { b: { c: 1 } } });
  });

  test("findDeepKey should find a value in a nested object", () => {
    const obj = { a: { b: { c: 3 } } };
    expect(findDeepKey(obj, "c")).toBe(3);
  });

  test("mapKeys should apply a function to object keys", () => {
    const obj = { a: 1, b: 2 };
    expect(mapKeys(obj, (key) => key.toUpperCase())).toEqual({ A: 1, B: 2 });
  });

  test("mapValues should apply a function to object values", () => {
    const obj = { a: 1, b: 2 };
    expect(mapValues(obj, (value) => value * 2)).toEqual({ a: 2, b: 4 });
  });
});
