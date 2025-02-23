import {
  capitalize,
  kebabCase,
  snakeCase,
  camelCase,
  pascalCase,
  reverse,
  isPalindrome,
  truncate,
  countVowels,
  countConsonants,
  removeWhitespace,
  replaceAll,
  titleCase,
} from "../src/index";

test("capitalize should capitalize first letter", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("kebabCase should convert spaces to dashes", () => {
  expect(kebabCase("Hello World")).toBe("hello-world");
});

test("snakeCase should convert spaces to underscores", () => {
  expect(snakeCase("Hello World")).toBe("hello_world");
});

test("camelCase should convert to camel case", () => {
  expect(camelCase("hello world")).toBe("HelloWorld");
});

test("pascalCase should convert to PascalCase", () => {
  expect(pascalCase("hello world")).toBe("HelloWorld");
});

test("reverse should reverse a string", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("isPalindrome should check if string is palindrome", () => {
  expect(isPalindrome("madam")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
});

test("truncate should truncate string to given length", () => {
  expect(truncate("hello world", 5)).toBe("hello...");
});

test("countVowels should count vowels in string", () => {
  expect(countVowels("hello")).toBe(2);
});

test("countConsonants should count consonants in string", () => {
  expect(countConsonants("hello")).toBe(3);
});

test("removeWhitespace should remove all whitespace", () => {
  expect(removeWhitespace("hello world")).toBe("helloworld");
});

test("replaceAll should replace all occurrences of a string", () => {
  expect(replaceAll("hello world world", "world", "everyone")).toBe(
    "hello everyone everyone"
  );
});

test("titleCase should convert string to title case", () => {
  expect(titleCase("hello world")).toBe("Hello World");
});
