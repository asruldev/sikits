# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-01-XX

### Added
- **String Utilities (30+ functions)**:
  - Text validation: `isValidEmail`, `isValidUrl`, `isValidPhoneNumber`, `isAlphanumeric`, `isAlphabetic`, `isNumeric`, `isValidCreditCard`, `isStrongPassword`
  - Advanced transformations: `toSlug`, `toInitials`, `toColorHex`, `toColorRGB`, `toColorHSL`, `toRandomEmoji`, `toAvatarURL`, `toQRCodeURL`, `toBase64`, `fromBase64`
  - Text analysis: `toWordCloud`, `toFrequencyAnalysis`

- **Number Utilities (25+ functions)**:
  - Conversions: `toRoman`, `fromRoman`, `toWords`, `toIndonesianWords`, `toBinary`, `toHex`, `toOctal`, `fromBinary`, `fromHex`, `fromOctal`
  - Mathematical operations: `factorial`, `fibonacci`, `gcd`, `lcm`, `isPerfectSquare`, `isPerfectCube`, `isPowerOf2`, `isPowerOf10`
  - Digit operations: `sumOfDigits`, `productOfDigits`, `reverseDigits`, `isPalindrome`, `digitCount`, `firstDigit`, `lastDigit`

- **Array Utilities (20+ functions)**:
  - Array generation: `arrayRange`, `rangeReverse`, `rangeLength`, `rangeChars`, `rangeDates`, `rangeMonths`, `rangeYears`, `rangeWeekdays`, `rangeWeekends`, `rangeBusinessDays`, `rangeFibonacci`, `rangePrimes`, `rangeRandom`, `rangeRandomStrings`, `rangeRandomColors`, `rangeRandomHexColors`, `rangeRandomEmojis`

- **Object Utilities (25+ functions)**:
  - Advanced cloning: `deepCloneStructured`, `deepCloneCircular`
  - Object manipulation: `deepMerge`, `deepEqual`, `objectDiff`, `transformKeys`, `transformValues`, `fromEntries`, `toEntries`, `invert`, `createWithDefaults`
  - Array to object transformations: `groupByKey`, `indexBy`, `countBy`, `sumBy`, `averageBy`, `maxBy`, `minBy`
  - Proxy utilities: `createLoggingProxy`, `createValidationProxy`, `createCachingProxy`

- **Playground**: Interactive web application for testing all functions
- **GitHub Pages**: Live playground deployment
- **Comprehensive documentation**: Detailed README with examples
- **TypeScript support**: Full type definitions and IntelliSense
- **Testing infrastructure**: Jest configuration with coverage
- **Code quality tools**: ESLint, Prettier, and TypeDoc
- **CI/CD**: GitHub Actions for automated testing and deployment

### Changed
- Updated TypeScript configuration to support ES2017+ features
- Improved package.json with better scripts and metadata
- Enhanced test coverage and configuration
- Better error handling and type safety

### Fixed
- Resolved TypeScript compilation issues
- Fixed function naming conflicts
- Improved code organization and structure

## [1.0.0] - 2024-01-XX

### Added
- Basic string utilities: `capitalize`, `camelCase`, `kebabCase`, `snakeCase`, `pascalCase`, `titleCase`, `reverse`, `isPalindrome`, `truncate`, `countVowels`, `countConsonants`, `removeWhitespace`, `replaceAll`
- Basic number utilities: `format`, `math`, `check`, `convert`, `stats`
- Basic array utilities: `average`, `chunk`, `compact`, `difference`, `findDuplicates`, `flatten`, `groupBy`, `intersection`, `max`, `min`, `movingAverage`, `partition`, `remove`, `rotate`, `shuffle`, `sum`, `unique`, `uniqueBy`, `zip`, `unzip`
- Basic object utilities: `deepClone`, `mergeObjects`, `isEmptyObject`, `getNestedValue`, `setNestedValue`, `pick`, `omit`, `toQueryString`, `fromQueryString`, `deepFreeze`, `flattenObject`, `unflattenObject`, `findDeepKey`, `mapKeys`, `mapValues`

---

## Types of changes

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities 