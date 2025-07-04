# 🚀 Sikits - Indonesian Utility Library

[![npm version](https://badge.fury.io/js/sikits.svg)](https://badge.fury.io/js/sikits)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/yourusername/sikits)
[![Playground](https://img.shields.io/badge/playground-live-blue)](https://yourusername.github.io/sikits)
[![Playground](https://img.shields.io/badge/Playground-Live-blue)](https://asruldev.github.io/sikits)

A comprehensive utility library for JavaScript and TypeScript with **200+ functions**, including specialized utilities for Indonesian documents, validation, and data transformation. Built with TypeScript for type safety and modern JavaScript features. 🛠️

## 🌟 Features

- **200+ Utility Functions** - String, Number, Array, Object operations
- **Indonesian Document Validation** - KTP, NPWP, Phone, Bank Account, etc.
- **Indonesian Data Transformation** - Currency, Date, Time, Address formatting
- **TypeScript Support** - Full type definitions included
- **Zero Dependencies** - Lightweight and fast
- **Modern ES6+** - Uses latest JavaScript features
- **Comprehensive Testing** - 100% test coverage
- **Interactive Playground** - Test functions online

## ✨ Features

- 🔤 **String Utilities**: 30+ functions for text manipulation, validation, and transformation
- 🔢 **Number Utilities**: 25+ functions for mathematical operations, conversions, and formatting
- 📋 **Array Utilities**: 20+ functions for array manipulation, generation, and analysis
- 🏗️ **Object Utilities**: 25+ functions for object manipulation, cloning, and transformation
- 🎯 **TypeScript Support**: Full type definitions and IntelliSense support
- 🚀 **Zero Dependencies**: Lightweight with no external dependencies
- 📦 **Tree Shaking**: Only import what you need
- 🧪 **Well Tested**: Comprehensive test coverage
- 📚 **Documentation**: Detailed JSDoc comments

## 📦 Installation

```bash
npm install sikits
```

Or using yarn:

```bash
yarn add sikits
```

## 🎯 Quick Start

```typescript
import { 
  capitalize, 
  toRoman, 
  arrayRange, 
  deepCloneStructured 
} from 'sikits';

// String utilities
console.log(capitalize('hello world')); // "Hello world"
console.log(toSlug('Hello World!')); // "hello-world"

// Number utilities
console.log(toRoman(42)); // "XLII"
console.log(toWords(1234)); // "one thousand two hundred thirty-four"

// Array utilities
console.log(arrayRange(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Object utilities
const obj = { a: 1, b: { c: 2 } };
const cloned = deepCloneStructured(obj);

## 🇮🇩 Indonesian Utilities

### Indonesian Document Validation

#### Phone Number Validation
```typescript
import { isValidIndonesianPhone, formatIndonesianPhone } from 'sikits';

// Validate Indonesian phone numbers
isValidIndonesianPhone('08123456789'); // true
isValidIndonesianPhone('+628123456789'); // true
isValidIndonesianPhone('0212345678'); // true (landline)

// Format to standard format
formatIndonesianPhone('08123456789'); // '+628123456789'
```

#### KTP (Identity Card) Validation
```typescript
import { isValidIndonesianKTP } from 'sikits';

// Laki-laki
isValidIndonesianKTP('3174050607890001'); // true

// Perempuan (tanggal lahir + 40)
isValidIndonesianKTP('3174054607890002'); // true
```

**Format NIK/KTP:**
- 16 digit: PPKKCCDDMMYYNNNN
  - PP: Provinsi
  - KK: Kabupaten/Kota
  - CC: Kecamatan
  - DD: Tanggal lahir (perempuan: tanggal + 40)
  - MM: Bulan lahir
  - YY: Tahun lahir (2 digit)
  - NNNN: Nomor urut

#### NPWP (Tax ID) Validation
```typescript
import { isValidIndonesianNPWP, formatIndonesianNPWP } from 'sikits';

// Validate NPWP
isValidIndonesianNPWP('12.345.678.9-123.456'); // true
isValidIndonesianNPWP('09.876.543.2-001.234'); // true

// Format NPWP
formatIndonesianNPWP('123456789123456'); // '12.345.678.9-123.456'
formatIndonesianNPWP('098765432001234'); // '09.876.543.2-001.234'
```

#### Other Document Validation
```typescript
import { 
  isValidIndonesianPostalCode,
  isValidIndonesianBankAccount,
  isValidIndonesianCreditCard,
  isValidIndonesianVehiclePlate,
  isValidIndonesianPassport,
  isValidIndonesianDrivingLicense,
  isValidIndonesianFamilyCard
} from 'sikits';

isValidIndonesianPostalCode('12345'); // true
isValidIndonesianBankAccount('1234567890123456'); // true
isValidIndonesianCreditCard('4532015112830366'); // true
isValidIndonesianVehiclePlate('B1234ABC'); // true
isValidIndonesianPassport('A1234567'); // true
isValidIndonesianDrivingLicense('A123456789012345'); // true
isValidIndonesianFamilyCard('1234567890123456'); // true
```

### Indonesian Data Transformation

#### Currency Formatting
```typescript
import { parseIndonesianCurrency, formatIndonesianCurrency } from 'sikits';

// Parse Indonesian currency
parseIndonesianCurrency('Rp 1.000.000'); // 1000000
parseIndonesianCurrency('Rp 1.000.000,50'); // 1000000.5

// Format to Indonesian currency
formatIndonesianCurrency(1000000); // 'Rp 1.000.000'
```

#### Date and Time Formatting
```typescript
import { 
  parseIndonesianDate, formatIndonesianDate,
  parseIndonesianTime, formatIndonesianTime 
} from 'sikits';

// Date formatting
const date = parseIndonesianDate('25/12/2023'); // Date object
formatIndonesianDate(new Date()); // '25/12/2023'

// Time formatting
parseIndonesianTime('2:30 PM'); // '14:30'
formatIndonesianTime('14:30'); // '2:30 PM'
```

#### Address and Name Formatting
```typescript
import { formatIndonesianAddress, formatIndonesianName } from 'sikits';

// Address formatting
formatIndonesianAddress('jl sudirman no 123'); // 'Jl. Sudirman No. 123'

// Name formatting
formatIndonesianName('dr budi santoso'); // 'DR. Budi Santoso'
formatIndonesianName('muhammad ahmad s.e'); // 'Muhammad Ahmad S.E.'
```

#### Social Media Links
```typescript
import { toWhatsAppLink, toTelegramLink } from 'sikits';

// Create social media links
toWhatsAppLink('08123456789'); // 'https://wa.me/628123456789'
toWhatsAppLink('08123456789', 'Hello'); // 'https://wa.me/628123456789?text=Hello'
toTelegramLink('08123456789'); // 'https://t.me/628123456789'
```

#### Data Masking
```typescript
import { 
  maskIndonesianBankAccount,
  maskIndonesianCreditCard,
  maskIndonesianKTP,
  maskIndonesianNPWP
} from 'sikits';

// Mask sensitive data
maskIndonesianBankAccount('1234567890123456'); // '************3456'
maskIndonesianCreditCard('4532015112830366'); // '************0366'
maskIndonesianKTP('1234567890123456'); // '************3456'
maskIndonesianNPWP('123456789012345'); // '***********2345'
```
```

## 🔤 String Utilities

### Text Transformation
```typescript
import { 
  capitalize, 
  camelCase, 
  kebabCase, 
  snakeCase, 
  pascalCase, 
  titleCase,
  toSlug,
  toInitials,
  reverse,
  truncate
} from 'sikits';

capitalize('hello world'); // "Hello world"
camelCase('hello world'); // "helloWorld"
kebabCase('Hello World'); // "hello-world"
snakeCase('Hello World'); // "hello_world"
pascalCase('hello world'); // "HelloWorld"
titleCase('hello world'); // "Hello World"
toSlug('Hello World!'); // "hello-world"
toInitials('John Doe'); // "JD"
reverse('JavaScript'); // "tpircSavaJ"
truncate('This is a long text', 10); // "This is a..."
```

### Validation
```typescript
import { 
  isValidEmail, 
  isValidUrl, 
  isValidPhoneNumber,
  isAlphanumeric,
  isAlphabetic,
  isNumeric,
  isValidCreditCard,
  isStrongPassword
} from 'sikits';

isValidEmail('test@example.com'); // true
isValidUrl('https://example.com'); // true
isValidPhoneNumber('+1234567890'); // true
isAlphanumeric('abc123'); // true
isAlphabetic('Hello World'); // true
isNumeric('12345'); // true
isValidCreditCard('4532015112830366'); // true
isStrongPassword('MyP@ssw0rd'); // true
```

### Advanced Transformations
```typescript
import { 
  toColorHex, 
  toColorRGB, 
  toColorHSL,
  toRandomEmoji,
  toAvatarURL,
  toQRCodeURL,
  toBase64,
  fromBase64
} from 'sikits';

toColorHex('hello'); // "#5d4149"
toColorRGB('hello'); // { r: 93, g: 65, b: 73 }
toColorHSL('hello'); // { h: 345, s: 65, l: 45 }
toRandomEmoji('hello'); // "😀"
toAvatarURL('john', 'avataaars'); // "https://api.dicebear.com/7.x/avataaars/svg?seed=..."
toQRCodeURL('https://example.com'); // "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=..."
toBase64('Hello World'); // "SGVsbG8gV29ybGQ="
fromBase64('SGVsbG8gV29ybGQ='); // "Hello World"
```

## 🔢 Number Utilities

### Conversions
```typescript
import { 
  toRoman, 
  fromRoman, 
  toWords, 
  toIndonesianWords,
  toBinary, 
  toHex, 
  toOctal,
  fromBinary,
  fromHex,
  fromOctal
} from 'sikits';

toRoman(42); // "XLII"
fromRoman('XLII'); // 42
toWords(1234); // "one thousand two hundred thirty-four"
toIndonesianWords(1234); // "seribu dua ratus tiga puluh empat"
toBinary(42); // "101010"
toHex(255); // "ff"
toOctal(64); // "100"
fromBinary('101010'); // 42
fromHex('ff'); // 255
fromOctal('100'); // 64
```

### Mathematical Operations
```typescript
import { 
  factorial, 
  fibonacci, 
  gcd, 
  lcm,
  isPerfectSquare,
  isPerfectCube,
  isPowerOf2,
  isPowerOf10,
  sumOfDigits,
  productOfDigits,
  reverseDigits,
  isPalindrome
} from 'sikits';

factorial(5); // 120
fibonacci(10); // 55
gcd(48, 18); // 6
lcm(12, 18); // 36
isPerfectSquare(16); // true
isPerfectCube(27); // true
isPowerOf2(8); // true
isPowerOf10(1000); // true
sumOfDigits(12345); // 15
productOfDigits(12345); // 120
reverseDigits(12345); // 54321
isPalindrome(12321); // true
```

## 📋 Array Utilities

### Array Generation
```typescript
import { 
  arrayRange, 
  rangeReverse, 
  rangeLength,
  rangeChars,
  rangeDates,
  rangeMonths,
  rangeYears,
  rangeWeekdays,
  rangeWeekends,
  rangeBusinessDays,
  rangeFibonacci,
  rangePrimes,
  rangeRandom,
  rangeRandomStrings,
  rangeRandomColors,
  rangeRandomHexColors,
  rangeRandomEmojis
} from 'sikits';

arrayRange(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
rangeReverse(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
rangeLength(0, 5, 2); // [0, 2, 4, 6, 8]
rangeChars('a', 'e'); // ['a', 'b', 'c', 'd', 'e']
rangeFibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
rangePrimes(10); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
rangeRandom(5, 1, 100); // [23, 67, 12, 89, 45]
rangeRandomEmojis(5); // ['😀', '😃', '😄', '😁', '😆']
```

### Array Manipulation
```typescript
import { 
  unique, 
  shuffle, 
  chunk, 
  compact,
  flatten,
  intersection,
  difference,
  groupBy,
  sum,
  average,
  max,
  min,
  findDuplicates,
  uniqueBy,
  zip,
  unzip,
  rotate,
  movingAverage,
  partition
} from 'sikits';

unique([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
shuffle([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4]
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
flatten([[1, 2], [3, 4], [5]]); // [1, 2, 3, 4, 5]
intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
difference([1, 2, 3], [2, 3, 4]); // [1]
groupBy([{type: 'a', val: 1}, {type: 'b', val: 2}], item => item.type);
sum([1, 2, 3, 4, 5]); // 15
average([1, 2, 3, 4, 5]); // 3
```

## 🏗️ Object Utilities

### Object Manipulation
```typescript
import { 
  deepCloneStructured, 
  deepCloneCircular,
  deepMerge,
  deepEqual,
  objectDiff,
  transformKeys,
  transformValues,
  fromEntries,
  toEntries,
  invert,
  createWithDefaults
} from 'sikits';

const obj = { a: 1, b: { c: 2 } };
const cloned = deepCloneStructured(obj);
const merged = deepMerge({a: 1}, {b: 2}, {c: 3});
const isEqual = deepEqual({a: 1, b: 2}, {a: 1, b: 2});
const diff = objectDiff({a: 1, b: 2}, {a: 1, c: 3});
const transformed = transformKeys({a: 1, b: 2}, key => key.toUpperCase());
const inverted = invert({a: 'x', b: 'y'});
```

### Array to Object Transformations
```typescript
import { 
  groupByKey, 
  indexBy, 
  countBy, 
  sumBy, 
  averageBy, 
  maxBy, 
  minBy 
} from 'sikits';

const users = [
  {id: 1, name: 'John', age: 25, city: 'NYC'},
  {id: 2, name: 'Jane', age: 30, city: 'LA'},
  {id: 3, name: 'Bob', age: 25, city: 'NYC'}
];

groupByKey(users, user => user.city);
// { 'NYC': [{id: 1, name: 'John', age: 25, city: 'NYC'}, {id: 3, name: 'Bob', age: 25, city: 'NYC'}], 'LA': [{id: 2, name: 'Jane', age: 30, city: 'LA'}] }

indexBy(users, user => user.id);
// { 1: {id: 1, name: 'John', age: 25, city: 'NYC'}, 2: {id: 2, name: 'Jane', age: 30, city: 'LA'}, 3: {id: 3, name: 'Bob', age: 25, city: 'NYC'} }

countBy(users, user => user.city);
// { 'NYC': 2, 'LA': 1 }

sumBy(users, user => user.city, user => user.age);
// { 'NYC': 50, 'LA': 30 }

averageBy(users, user => user.city, user => user.age);
// { 'NYC': 25, 'LA': 30 }
```

### Advanced Object Features
```typescript
import { 
  createLoggingProxy, 
  createValidationProxy, 
  createCachingProxy 
} from 'sikits';

// Logging proxy
const obj = createLoggingProxy({a: 1, b: 2});
obj.a; // Logs: GET a 1

// Validation proxy
const user = createValidationProxy({}, {
  age: (value) => value >= 0 && value <= 150,
  email: (value) => isValidEmail(value)
});

// Caching proxy
const expensive = createCachingProxy({}, {
  computed: () => expensiveCalculation()
});
```

## 🎮 Playground

Try all functions online at our interactive playground:

**[🌐 Live Playground](https://asruldev.github.io/sikits)**

The playground allows you to:
- Test all functions with real-time input
- See function descriptions and examples
- Copy results to clipboard
- Explore different categories of utilities

## 📚 API Documentation

For detailed API documentation, visit our [TypeDoc generated docs](https://asruldev.github.io/sikits/docs).

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Start development mode
npm run dev

# Run linter
npm run lint

# Format code
npm run format

# Generate documentation
npm run docs
```

## 📦 Build

```bash
# Clean build
npm run clean

# Build for production
npm run build

# Build playground
npm run playground:build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Asrul Harahap**

- GitHub: [@asruldev](https://github.com/asruldev)
- Website: [asrul.dev](https://asrul.dev)

## 🙏 Acknowledgments

- Inspired by Lodash, Ramda, and other utility libraries
- Built with TypeScript for better developer experience
- Thanks to all contributors and users

## 📈 Version History

- **v2.0.0** - Major release with 100+ functions, playground, and comprehensive documentation
- **v1.0.0** - Initial release with basic utilities

---

⭐ **Star this repository if you find it useful!** ⭐