/**
 * Converts a number to Roman numerals
 */
export const toRoman = (num: number): string => {
  if (num <= 0 || num > 3999) return '';
  
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  
  let result = '';
  let remaining = num;
  
  for (const { value, numeral } of romanNumerals) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }
  
  return result;
};

/**
 * Converts Roman numerals to a number
 */
export const fromRoman = (roman: string): number => {
  const romanValues: Record<string, number> = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };
  
  let result = 0;
  let prevValue = 0;
  
  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanValues[roman[i].toUpperCase()];
    if (!currentValue) return 0;
    
    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }
    prevValue = currentValue;
  }
  
  return result;
};

/**
 * Converts a number to words (English)
 */
export const toWords = (num: number): string => {
  if (num === 0) return 'zero';
  if (num < 0) return 'negative ' + toWords(Math.abs(num));
  
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const scales = ['', 'thousand', 'million', 'billion', 'trillion'];
  
  const convertLessThanOneThousand = (n: number): string => {
    if (n === 0) return '';
    
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? '-' + ones[n % 10] : '');
    if (n < 1000) return ones[Math.floor(n / 100)] + ' hundred' + (n % 100 !== 0 ? ' and ' + convertLessThanOneThousand(n % 100) : '');
    
    return '';
  };
  
  let result = '';
  let scaleIndex = 0;
  
  while (num > 0) {
    const chunk = num % 1000;
    if (chunk !== 0) {
      const chunkWords = convertLessThanOneThousand(chunk);
      result = chunkWords + (scales[scaleIndex] ? ' ' + scales[scaleIndex] : '') + (result ? ' ' + result : '');
    }
    num = Math.floor(num / 1000);
    scaleIndex++;
  }
  
  return result.trim();
};

/**
 * Converts a number to Indonesian words
 */
export const toIndonesianWords = (num: number): string => {
  if (num === 0) return 'nol';
  if (num < 0) return 'negatif ' + toIndonesianWords(Math.abs(num));
  
  const ones = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  const teens = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  const tens = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
  const scales = ['', 'ribu', 'juta', 'miliar', 'triliun'];
  
  const convertLessThanOneThousand = (n: number): string => {
    if (n === 0) return '';
    
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
    if (n < 1000) {
      if (Math.floor(n / 100) === 1) {
        return 'seratus' + (n % 100 !== 0 ? ' ' + convertLessThanOneThousand(n % 100) : '');
      }
      return ones[Math.floor(n / 100)] + ' ratus' + (n % 100 !== 0 ? ' ' + convertLessThanOneThousand(n % 100) : '');
    }
    
    return '';
  };
  
  let result = '';
  let scaleIndex = 0;
  
  while (num > 0) {
    const chunk = num % 1000;
    if (chunk !== 0) {
      const chunkWords = convertLessThanOneThousand(chunk);
      if (scaleIndex === 1 && chunk === 1) {
        result = 'seribu' + (result ? ' ' + result : '');
      } else {
        result = chunkWords + (scales[scaleIndex] ? ' ' + scales[scaleIndex] : '') + (result ? ' ' + result : '');
      }
    }
    num = Math.floor(num / 1000);
    scaleIndex++;
  }
  
  return result.trim();
};

/**
 * Converts a number to binary string
 */
export const toBinary = (num: number): string => {
  return num.toString(2);
};

/**
 * Converts a number to hexadecimal string
 */
export const toHex = (num: number): string => {
  return num.toString(16);
};

/**
 * Converts a number to octal string
 */
export const toOctal = (num: number): string => {
  return num.toString(8);
};

/**
 * Converts a binary string to number
 */
export const fromBinary = (binary: string): number => {
  return parseInt(binary, 2);
};

/**
 * Converts a hexadecimal string to number
 */
export const fromHex = (hex: string): number => {
  return parseInt(hex, 16);
};

/**
 * Converts an octal string to number
 */
export const fromOctal = (octal: string): number => {
  return parseInt(octal, 8);
};

/**
 * Checks if a number is a perfect square
 */
export const isPerfectSquare = (num: number): boolean => {
  if (num < 0) return false;
  const sqrt = Math.sqrt(num);
  return Math.floor(sqrt) === sqrt;
};

/**
 * Checks if a number is a perfect cube
 */
export const isPerfectCube = (num: number): boolean => {
  const cbrt = Math.cbrt(num);
  return Math.floor(cbrt) === cbrt;
};

/**
 * Checks if a number is a power of 2
 */
export const isPowerOf2 = (num: number): boolean => {
  return num > 0 && (num & (num - 1)) === 0;
};

/**
 * Checks if a number is a power of 10
 */
export const isPowerOf10 = (num: number): boolean => {
  if (num <= 0) return false;
  while (num % 10 === 0) {
    num /= 10;
  }
  return num === 1;
};

/**
 * Gets the factorial of a number
 */
export const factorial = (num: number): number => {
  if (num < 0) return NaN;
  if (num === 0 || num === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

/**
 * Gets the greatest common divisor of two numbers
 */
export const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
};

/**
 * Gets the least common multiple of two numbers
 */
export const lcm = (a: number, b: number): number => {
  return Math.abs(a * b) / gcd(a, b);
};

/**
 * Gets the Fibonacci number at a given index
 */
export const fibonacci = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

/**
 * Gets the nth prime number
 */
export const nthPrime = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 2;
  
  let count = 1;
  let num = 3;
  
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num += 2;
  }
  
  return num - 2;
};

/**
 * Helper function to check if a number is prime
 */
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;
};

/**
 * Gets the sum of digits of a number
 */
export const sumOfDigits = (num: number): number => {
  return Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
};

/**
 * Gets the product of digits of a number
 */
export const productOfDigits = (num: number): number => {
  return Math.abs(num).toString().split('').reduce((product, digit) => product * parseInt(digit), 1);
};

/**
 * Reverses the digits of a number
 */
export const reverseDigits = (num: number): number => {
  const reversed = Math.abs(num).toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(num);
};

/**
 * Checks if a number is a palindrome
 */
export const isPalindrome = (num: number): boolean => {
  return num === reverseDigits(num);
};

/**
 * Gets the number of digits in a number
 */
export const digitCount = (num: number): number => {
  return Math.abs(num).toString().length;
};

/**
 * Gets the first digit of a number
 */
export const firstDigit = (num: number): number => {
  return parseInt(Math.abs(num).toString()[0]);
};

/**
 * Gets the last digit of a number
 */
export const lastDigit = (num: number): number => {
  return Math.abs(num) % 10;
}; 