import {
    unique,
    flatten,
    chunk,
    compact,
    intersection,
    difference,
    remove,
    groupBy,
    shuffle,
    sum,
    average,
    min,
    max,
    findDuplicates,
    uniqueBy,
    zip,
    unzip,
    rotate,
    movingAverage,
    partition,
  } from "../src/index";
  
  describe("Array Utilities", () => {
    test("unique", () => {
      expect(unique([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
    });
  
    test("flatten", () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });
  
    test("chunk", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
  
    test("compact", () => {
      expect(compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([1, 2, 3]);
    });
  
    test("intersection", () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });
  
    test("difference", () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    });
  
    test("remove", () => {
      expect(remove([1, 2, 3, 2], 2)).toEqual([1, 3]);
    });
  
    test("groupBy", () => {
      expect(groupBy([{ id: 1 }, { id: 2 }, { id: 1 }], (item: any) => item.id)).toEqual({
        1: [{ id: 1 }, { id: 1 }],
        2: [{ id: 2 }],
      });
    });
  
    test("sum", () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });
  
    test("average", () => {
      expect(average([1, 2, 3, 4])).toBe(2.5);
    });
  
    test("min", () => {
      expect(min([1, 2, 3, -1, 4])).toBe(-1);
    });
  
    test("max", () => {
      expect(max([1, 2, 3, -1, 4])).toBe(4);
    });
  
    test("findDuplicates", () => {
      expect(findDuplicates([1, 2, 3, 2, 4, 3])).toEqual([2, 3]);
    });
  
    test("uniqueBy", () => {
      expect(uniqueBy([{ id: 1 }, { id: 2 }, { id: 1 }], (item: any) => item.id)).toEqual([
        { id: 1 },
        { id: 2 },
      ]);
    });
  
    test("zip", () => {
      expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([
        [1, "a"],
        [2, "b"],
        [3, "c"],
      ]);
    });
  
    test("unzip", () => {
      expect(unzip([
        [1, "a"],
        [2, "b"],
        [3, "c"],
      ])).toEqual([
        [1, 2, 3],
        ["a", "b", "c"],
      ]);
    });
  
    test("rotate", () => {
      expect(rotate([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
    });
  
    test("movingAverage", () => {
      expect(movingAverage([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
    });
  
    test("partition", () => {
      expect(partition([1, 2, 3, 4, 5], (x: number) => x % 2 === 0)).toEqual([
        [2, 4],
        [1, 3, 5],
      ]);
    });
  });
  