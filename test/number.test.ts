import { toFixedNumber, formatCurrency, parseNumber, clamp, roundTo, randomInt, gcd, lcm, factorial, fibonacci, isEven, isOdd, isInteger, isFloat, isBetween, toRadians, toDegrees, toPercentage, fromPercentage, sum, average, median, mode, range } from "../src/index";

test("toFixedNumber should format correctly", () => {
    expect(toFixedNumber(12.3456, 2)).toBe(12.35);
});

test("formatCurrency should return correct format for USD", () => {
    expect(formatCurrency(1000, "en-US", "USD")).toBe("$1,000.00");
    expect(formatCurrency(1234.56, "en-US", "USD")).toBe("$1,234.56");
});

test("formatCurrency should return correct format for EUR", () => {
    expect(formatCurrency(1000, "de-DE", "EUR")).toBe("1.000,00 €");
    expect(formatCurrency(1234.56, "de-DE", "EUR")).toBe("1.234,56 €");
});

test("parseNumber should parse correctly", () => {
    expect(parseNumber("123.45")).toBe(123.45);
    expect(parseNumber("abc", 10)).toBe(10);
});

test("clamp should work correctly", () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(0, 1, 10)).toBe(1);
    expect(clamp(15, 1, 10)).toBe(10);
});

test("roundTo should work correctly", () => {
    expect(roundTo(1.23456, 2)).toBe(1.23);
});

test("randomInt should return value in range", () => {
    const result = randomInt(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
});

test("gcd should return correct greatest common divisor", () => {
    expect(gcd(12, 8)).toBe(4);
});

test("lcm should return correct least common multiple", () => {
    expect(lcm(4, 5)).toBe(20);
});

test("factorial should return correct value", () => {
    expect(factorial(5)).toBe(120);
});

test("factorial should return correct value", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
});

test("fibonacci should return correct sequence value", () => {
    expect(fibonacci(6)).toBe(8);
});

test("isEven should work correctly", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
});

test("isOdd should work correctly", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
});

test("isInteger should work correctly", () => {
    expect(isInteger(10)).toBe(true);
    expect(isInteger(10.5)).toBe(false);
});

test("isFloat should work correctly", () => {
    expect(isFloat(10)).toBe(false);
    expect(isFloat(10.5)).toBe(true);
});

test("isBetween should check range correctly", () => {
    expect(isBetween(5, 1, 10)).toBe(true);
    expect(isBetween(0, 1, 10)).toBe(false);
    expect(isBetween(10, 1, 10, false)).toBe(false);
});

test("toRadians should convert degrees to radians", () => {
    expect(toRadians(180)).toBeCloseTo(Math.PI);
});

test("toDegrees should convert radians to degrees", () => {
    expect(toDegrees(Math.PI)).toBeCloseTo(180);
});

test("toPercentage should convert to correct percentage", () => {
    expect(toPercentage(50, 200)).toBe("25.00%");
});

test("fromPercentage should parse percentage correctly", () => {
    expect(fromPercentage("25%")) .toBe(0.25);
});

test("sum should return correct sum", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
});

test("average should return correct mean", () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
});

test("median should return correct median value", () => {
    expect(median([1, 3, 3, 6, 7, 8, 9])).toBe(6);
    expect(median([1, 2, 3, 4, 5, 6, 8, 9])).toBe(4.5);
});

test("mode should return correct mode value", () => {
    expect(mode([1, 2, 2, 3, 3, 3, 4])).toEqual([3]);
});

test("range should return correct range value", () => {
    expect(range([1, 2, 3, 4, 5])).toBe(4);
});
