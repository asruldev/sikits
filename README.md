# 🚀 sikits (Si Utility Kits) - The Ultimate Utility Library

A powerful and lightweight utility library for JavaScript/TypeScript, providing essential functions for working with strings, numbers, arrays, and objects. 🛠️

## 📦 Installation

You can install `sikits` using npm:

```sh
npm install sikits
```

Or using yarn:

```sh
yarn add sikits
```

## 🎯 Usage

Import and use the utility functions in your project:

### 🔤 String Utilities

```ts
import { capitalize, kebabCase, snakeCase, camelCase, pascalCase, reverse, isPalindrome, truncate, countVowels, countConsonants, removeWhitespace, replaceAll, titleCase } from "sikits";

console.log(capitalize("hello world")); // "Hello world"
console.log(kebabCase("Hello World")); // "hello-world"
console.log(isPalindrome("madam")); // true
console.log(titleCase("hello world")); // "Hello World"
console.log(reverse("JavaScript")); // "tpircSavaJ"
```

### 🔢 Number Utilities

```ts
import { format, math, check, convert, stats } from "sikits";

console.log(format(1000)); // "1,000"
console.log(math.add(5, 10)); // 15
console.log(math.multiply(3, 4)); // 12
```

### 📋 Array Utilities

```ts
import { average, chunk, compact, difference, findDuplicates, flatten, groupBy, intersection, max, min, movingAverage, partition, remove, rotate, shuffle, sum, unique, uniqueBy, zip, unzip } from "sikits";

console.log(sum([1, 2, 3, 4])); // 10
console.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(shuffle([1, 2, 3, 4, 5])); // Random order
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
```

### 🏗️ Object Utilities

```ts
import { deepClone, mergeObjects, isEmptyObject, getNestedValue, setNestedValue, pick, omit, toQueryString, fromQueryString, deepFreeze, flattenObject, unflattenObject, findDeepKey, mapKeys, mapValues } from "sikits";

const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj); // { a: 1, b: { c: 2 } }

console.log(toQueryString({ name: "John", age: 30 })); // "name=John&age=30"
```

## 🌟 Features
- ✅ **String Manipulation**: Convert case formats, count characters, and modify text.
- 🔢 **Number Operations**: Formatting, conversions, and mathematical functions.
- 📋 **Array Methods**: Sorting, filtering, chunking, and more.
- 🏗️ **Object Utilities**: Deep cloning, merging, and key/value transformations.
- 🌀 **Functional Approach**: Designed with functional programming principles.

## 📜 License

This project is licensed under the MIT License. ✨

## 👨‍💻 Author
Developed by Asrul Harahap. Contributions and feedback are welcome! 😊