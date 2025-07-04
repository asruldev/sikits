import {
  capitalize,
  camelCase,
  kebabCase,
  snakeCase,
  pascalCase,
  titleCase,
  reverse,
  truncate,
  removeWhitespace,
  replaceAll,
  countVowels,
  countConsonants,
  isStringPalindrome,
  toSlug,
  toInitials,
  toColorHex,
  toRandomEmoji,
  // Indonesian validation functions
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
  formatIndonesianVehiclePlate,
  isValidIndonesianPassport,
  isValidIndonesianDrivingLicense,
  isValidIndonesianFamilyCard,
  isValidIndonesianBirthCertificate,
  isValidIndonesianMarriageCertificate,
  isValidIndonesianDeathCertificate,
  // Indonesian transformation functions
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
} from '../src';

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

test("isStringPalindrome should check if string is palindrome", () => {
  expect(isStringPalindrome("madam")).toBe(true);
  expect(isStringPalindrome("hello")).toBe(false);
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

describe('Indonesian Validation Functions', () => {
  describe('isValidIndonesianPhone', () => {
    it('should validate Indonesian mobile numbers', () => {
      expect(isValidIndonesianPhone('08123456789')).toBe(true);
      expect(isValidIndonesianPhone('+628123456789')).toBe(true);
      expect(isValidIndonesianPhone('628123456789')).toBe(true);
      expect(isValidIndonesianPhone('8123456789')).toBe(true);
    });

    it('should validate Indonesian landline numbers', () => {
      expect(isValidIndonesianPhone('0212345678')).toBe(true);
      expect(isValidIndonesianPhone('+62212345678')).toBe(true);
      expect(isValidIndonesianPhone('62212345678')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidIndonesianPhone('123456789')).toBe(false);
      expect(isValidIndonesianPhone('08123456')).toBe(false); // too short
      expect(isValidIndonesianPhone('081234567890123')).toBe(false); // too long
    });
  });

  describe('formatIndonesianPhone', () => {
    it('should format phone numbers to standard format', () => {
      expect(formatIndonesianPhone('08123456789')).toBe('+628123456789');
      expect(formatIndonesianPhone('+628123456789')).toBe('+628123456789');
      expect(formatIndonesianPhone('628123456789')).toBe('+628123456789');
      expect(formatIndonesianPhone('8123456789')).toBe('+628123456789');
    });
  });

  describe('isValidIndonesianKTP', () => {
    it('validates a correct male KTP', () => {
      expect(isValidIndonesianKTP('3174050607890001')).toBe(true); // 06/07/89, laki-laki
    });
    it('validates a correct female KTP', () => {
      expect(isValidIndonesianKTP('3174054607890002')).toBe(true); // 06+40=46/07/89, perempuan
    });
    it('rejects KTP with invalid province', () => {
      expect(isValidIndonesianKTP('0014050607890001')).toBe(false);
    });
    it('rejects KTP with invalid day', () => {
      expect(isValidIndonesianKTP('3174050007890001')).toBe(false);
    });
    it('rejects KTP with invalid month', () => {
      expect(isValidIndonesianKTP('3174050613890001')).toBe(false);
    });
    it('rejects KTP with invalid nomor urut', () => {
      expect(isValidIndonesianKTP('3174050607890000')).toBe(false);
    });
    it('rejects KTP with wrong length', () => {
      expect(isValidIndonesianKTP('317405060789000')).toBe(false);
      expect(isValidIndonesianKTP('31740506078900011')).toBe(false);
    });
  });

  describe('parseIndonesianKTP', () => {
    it('should parse valid KTP numbers', () => {
      const result = parseIndonesianKTP('3203011503980001');
      expect(result).toEqual({
        provinceCode: '32',
        cityCode: '03',
        birthDate: '15/03/98',
        gender: 'male',
        randomDigits: '0001'
      });
    });

    it('should return null for invalid KTP', () => {
      expect(parseIndonesianKTP('123456789012345')).toBeNull();
    });
  });

  describe('isValidIndonesianNPWP', () => {
    it('should validate valid NPWP numbers', () => {
      expect(isValidIndonesianNPWP('12.345.678.9-123.456')).toBe(true);
      expect(isValidIndonesianNPWP('09.876.543.2-001.234')).toBe(true);
    });

    it('should reject invalid NPWP numbers', () => {
      expect(isValidIndonesianNPWP('12345678901234')).toBe(false); // too short
      expect(isValidIndonesianNPWP('1234567890123456')).toBe(false); // too long
    });
  });

  describe('formatIndonesianNPWP', () => {
    it('should format NPWP to standard format', () => {
      expect(formatIndonesianNPWP('123456789123456')).toBe('12.345.678.9-123.456');
      expect(formatIndonesianNPWP('098765432001234')).toBe('09.876.543.2-001.234');
    });

    it('should throw error for invalid NPWP', () => {
      expect(() => formatIndonesianNPWP('12345678901234')).toThrow();
    });
  });

  describe('isValidIndonesianPostalCode', () => {
    it('should validate valid postal codes', () => {
      expect(isValidIndonesianPostalCode('12345')).toBe(true);
      expect(isValidIndonesianPostalCode('12345 ')).toBe(true);
    });

    it('should reject invalid postal codes', () => {
      expect(isValidIndonesianPostalCode('1234')).toBe(false);
      expect(isValidIndonesianPostalCode('123456')).toBe(false);
      expect(isValidIndonesianPostalCode('1234a')).toBe(false);
    });
  });

  describe('isValidIndonesianBankAccount', () => {
    it('should validate valid bank account numbers', () => {
      expect(isValidIndonesianBankAccount('12345678')).toBe(true);
      expect(isValidIndonesianBankAccount('12345678901234567')).toBe(true);
    });

    it('should reject invalid bank account numbers', () => {
      expect(isValidIndonesianBankAccount('1234567')).toBe(false); // too short
      expect(isValidIndonesianBankAccount('123456789012345678')).toBe(false); // too long
    });
  });

  describe('isValidIndonesianCreditCard', () => {
    it('should validate valid credit card numbers', () => {
      expect(isValidIndonesianCreditCard('4532015112830366')).toBe(true); // Visa
      expect(isValidIndonesianCreditCard('5555555555554444')).toBe(true); // Mastercard
    });

    it('should reject invalid credit card numbers', () => {
      expect(isValidIndonesianCreditCard('4532015112830365')).toBe(false); // invalid checksum
      expect(isValidIndonesianCreditCard('1234567890123')).toBe(false); // too short
    });
  });

  describe('isValidIndonesianVehiclePlate', () => {
    it('should validate valid vehicle plates', () => {
      expect(isValidIndonesianVehiclePlate('B1234ABC')).toBe(true);
      expect(isValidIndonesianVehiclePlate('AB 1234 CD')).toBe(true);
      expect(isValidIndonesianVehiclePlate('B 1234 ABC 123')).toBe(true);
    });

    it('should reject invalid vehicle plates', () => {
      expect(isValidIndonesianVehiclePlate('1234ABC')).toBe(false);
      expect(isValidIndonesianVehiclePlate('B12ABC')).toBe(false);
    });
  });

  describe('formatIndonesianVehiclePlate', () => {
    it('should format vehicle plates correctly', () => {
      expect(formatIndonesianVehiclePlate('B1234ABC')).toBe('B 1234 ABC');
      expect(formatIndonesianVehiclePlate('AB1234CD')).toBe('AB 1234 CD');
    });

    it('should throw error for invalid format', () => {
      expect(() => formatIndonesianVehiclePlate('123ABC')).toThrow();
    });
  });

  describe('isValidIndonesianPassport', () => {
    it('should validate valid passport numbers', () => {
      expect(isValidIndonesianPassport('A1234567')).toBe(true);
      expect(isValidIndonesianPassport('AB1234567')).toBe(true);
    });

    it('should reject invalid passport numbers', () => {
      expect(isValidIndonesianPassport('A123456')).toBe(false); // too short
      expect(isValidIndonesianPassport('A12345678')).toBe(false); // too long
    });
  });

  describe('isValidIndonesianDrivingLicense', () => {
    it('should validate valid driving license numbers', () => {
      expect(isValidIndonesianDrivingLicense('A123456789012345')).toBe(true);
      expect(isValidIndonesianDrivingLicense('B123456789012345')).toBe(true);
    });

    it('should reject invalid driving license numbers', () => {
      expect(isValidIndonesianDrivingLicense('A12345678901234')).toBe(false); // too short
      expect(isValidIndonesianDrivingLicense('A1234567890123456')).toBe(false); // too long
    });
  });

  describe('isValidIndonesianFamilyCard', () => {
    it('should validate valid family card numbers', () => {
      expect(isValidIndonesianFamilyCard('1234567890123456')).toBe(true);
    });

    it('should reject invalid family card numbers', () => {
      expect(isValidIndonesianFamilyCard('123456789012345')).toBe(false); // too short
      expect(isValidIndonesianFamilyCard('12345678901234567')).toBe(false); // too long
    });
  });

  describe('isValidIndonesianBirthCertificate', () => {
    it('should validate valid birth certificate numbers', () => {
      expect(isValidIndonesianBirthCertificate('A1234567890')).toBe(true);
      expect(isValidIndonesianBirthCertificate('12345678901234567890')).toBe(true);
    });

    it('should reject invalid birth certificate numbers', () => {
      expect(isValidIndonesianBirthCertificate('A12345678')).toBe(false); // too short
      expect(isValidIndonesianBirthCertificate('A123456789012345678901')).toBe(false); // too long
    });
  });

  describe('isValidIndonesianMarriageCertificate', () => {
    it('should validate valid marriage certificate numbers', () => {
      expect(isValidIndonesianMarriageCertificate('A1234567890')).toBe(true);
      expect(isValidIndonesianMarriageCertificate('12345678901234567890')).toBe(true);
    });
  });

  describe('isValidIndonesianDeathCertificate', () => {
    it('should validate valid death certificate numbers', () => {
      expect(isValidIndonesianDeathCertificate('A1234567890')).toBe(true);
      expect(isValidIndonesianDeathCertificate('12345678901234567890')).toBe(true);
    });
  });
});

describe('Indonesian Transformation Functions', () => {
  describe('parseIndonesianCurrency', () => {
    it('should parse Indonesian currency format', () => {
      expect(parseIndonesianCurrency('Rp 1.000.000')).toBe(1000000);
      expect(parseIndonesianCurrency('Rp 1.000.000,50')).toBe(1000000.5);
      expect(parseIndonesianCurrency('1.000.000')).toBe(1000000);
    });
  });

  describe('formatIndonesianCurrency', () => {
    it('should format numbers to Indonesian currency', () => {
      expect(formatIndonesianCurrency(1000000)).toBe('Rp 1.000.000');
      expect(formatIndonesianCurrency(1500000)).toBe('Rp 1.500.000');
    });
  });

  describe('parseIndonesianDate', () => {
    it('should parse Indonesian date format', () => {
      const result = parseIndonesianDate('25/12/2023');
      expect(result).toBeInstanceOf(Date);
      expect(result?.getDate()).toBe(25);
      expect(result?.getMonth()).toBe(11); // December is 11 (0-indexed)
      expect(result?.getFullYear()).toBe(2023);
    });

    it('should return null for invalid dates', () => {
      expect(parseIndonesianDate('32/12/2023')).toBeNull();
      expect(parseIndonesianDate('25/13/2023')).toBeNull();
    });
  });

  describe('formatIndonesianDate', () => {
    it('should format Date to Indonesian format', () => {
      const date = new Date(2023, 11, 25); // December 25, 2023
      expect(formatIndonesianDate(date)).toBe('25/12/2023');
    });
  });

  describe('parseIndonesianTime', () => {
    it('should parse 12-hour time format', () => {
      expect(parseIndonesianTime('2:30 PM')).toBe('14:30');
      expect(parseIndonesianTime('2:30 AM')).toBe('02:30');
      expect(parseIndonesianTime('12:00 PM')).toBe('12:00');
      expect(parseIndonesianTime('12:00 AM')).toBe('00:00');
    });

    it('should handle 24-hour format', () => {
      expect(parseIndonesianTime('14:30')).toBe('14:30');
    });
  });

  describe('formatIndonesianTime', () => {
    it('should format time to 12-hour format', () => {
      expect(formatIndonesianTime('14:30')).toBe('2:30 PM');
      expect(formatIndonesianTime('02:30')).toBe('2:30 AM');
      expect(formatIndonesianTime('12:00')).toBe('12:00 PM');
      expect(formatIndonesianTime('00:00')).toBe('12:00 AM');
    });

    it('should format time to 24-hour format', () => {
      expect(formatIndonesianTime('14:30', false)).toBe('14:30');
    });
  });

  describe('formatIndonesianAddress', () => {
    it('should format Indonesian addresses', () => {
      expect(formatIndonesianAddress('jl sudirman no 123')).toBe('Jl. Sudirman No. 123');
      expect(formatIndonesianAddress('jalan  malioboro  no  456')).toBe('Jl. Malioboro No. 456');
    });
  });

  describe('formatIndonesianName', () => {
    it('should format Indonesian names', () => {
      expect(formatIndonesianName('dr budi santoso')).toBe('DR. Budi Santoso');
      expect(formatIndonesianName('muhammad ahmad s.e')).toBe('Muhammad Ahmad S.E');
      expect(formatIndonesianName('nur sari wati')).toBe('Nur Sari Wati');
    });
  });

  describe('toWhatsAppLink', () => {
    it('should create WhatsApp links', () => {
      expect(toWhatsAppLink('08123456789')).toBe('https://wa.me/628123456789');
      expect(toWhatsAppLink('08123456789', 'Hello')).toBe('https://wa.me/628123456789?text=Hello');
    });
  });

  describe('toTelegramLink', () => {
    it('should create Telegram links', () => {
      expect(toTelegramLink('08123456789')).toBe('https://t.me/628123456789');
      expect(toTelegramLink('08123456789', 'Hello')).toBe('https://t.me/628123456789?text=Hello');
    });
  });

  describe('maskIndonesianBankAccount', () => {
    it('should mask bank account numbers', () => {
      expect(maskIndonesianBankAccount('1234567890123456')).toBe('************3456');
      expect(maskIndonesianBankAccount('12345678')).toBe('****5678');
    });
  });

  describe('maskIndonesianCreditCard', () => {
    it('should mask credit card numbers', () => {
      expect(maskIndonesianCreditCard('4532015112830366')).toBe('************0366');
      expect(maskIndonesianCreditCard('1234567890123')).toBe('*********0123');
    });
  });

  describe('maskIndonesianKTP', () => {
    it('should mask KTP numbers', () => {
      expect(maskIndonesianKTP('1234567890123456')).toBe('************3456');
    });
  });

  describe('maskIndonesianNPWP', () => {
    it('should mask NPWP numbers', () => {
      expect(maskIndonesianNPWP('123456789012345')).toBe('***********2345');
    });
  });

  describe('formatIndonesianPostalCode', () => {
    it('should format postal codes', () => {
      expect(formatIndonesianPostalCode('12345')).toBe('12345');
      expect(formatIndonesianPostalCode('12345 ')).toBe('12345');
    });
  });
});
