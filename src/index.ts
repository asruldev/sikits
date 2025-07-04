export * from "./string/capitalize";
export * from "./string/kebabCase";
export * from "./string/snakeCase";
export * from "./string/camelCase";
export * from "./string/pascalCase";
export * from "./string/reverse";
export * from "./string/truncate";
export * from "./string/countVowels";
export * from "./string/countConsonants";
export * from "./string/removeWhitespace";
export * from "./string/replaceAll";
export * from "./string/titleCase";
export * from "./string/validate";
export * from "./string/transform";

// Export isPalindrome from string module only
export { isPalindrome as isStringPalindrome } from "./string/isPalindrome";

export * from "./number/format";
export * from "./number/check";
export * from "./number/convert";
export * from "./number/stats";

// Export math functions with different names to avoid conflicts
export { 
  factorial as mathFactorial,
  fibonacci as mathFibonacci,
  gcd as mathGcd,
  lcm as mathLcm,
  clamp,
  roundTo,
  randomInt,
  isPrime as mathIsPrime
} from "./number/math";

export * from "./number/advanced";

export {
  average,
  chunk,
  compact,
  difference,
  findDuplicates,
  flatten,
  groupBy,
  intersection,
  max,
  min,
  movingAverage,
  partition,
  remove,
  rotate,
  shuffle,
  sum,
  unique,
  uniqueBy,
  zip,
  unzip,
} from "./array/index";

// Export range functions with different names to avoid conflicts
export { 
  range as arrayRange,
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
} from "./array/advanced";

export {
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
} from "./object/index";

export * from "./object/advanced";

// String validation functions
export {
  isValidEmail,
  isValidUrl,
  isValidPhoneNumber,
  isStrongPassword,
  isValidIndonesianPhone,
  formatIndonesianPhone,
  isValidIndonesianKTP,
  parseIndonesianKTP,
  isValidIndonesianNPWP,
  formatIndonesianNPWP,
  isValidIndonesianPostalCode,
  isValidIndonesianBankAccount,
  isValidIndonesianCreditCard,
  isValidIndonesianVehiclePlate,
  isValidIndonesianPassport,
  isValidIndonesianDrivingLicense,
  isValidIndonesianFamilyCard,
  isValidIndonesianBirthCertificate,
  isValidIndonesianMarriageCertificate,
  isValidIndonesianDeathCertificate,
} from './string/validate';

// String transformation functions
export {
  parseIndonesianCurrency,
  formatIndonesianCurrency,
  parseIndonesianDate,
  formatIndonesianDate,
  parseIndonesianTime,
  formatIndonesianTime,
  formatIndonesianAddress,
  formatIndonesianName,
  toWhatsAppLink,
  toTelegramLink,
  maskIndonesianBankAccount,
  maskIndonesianCreditCard,
  maskIndonesianKTP,
  maskIndonesianNPWP,
  formatIndonesianPostalCode,
  formatIndonesianVehiclePlate,
} from './string/transform';
