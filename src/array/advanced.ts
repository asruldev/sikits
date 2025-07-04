/**
 * Creates a range of numbers
 */
export const range = (start: number, end: number, step: number = 1): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};

/**
 * Creates a range of numbers in reverse order
 */
export const rangeReverse = (start: number, end: number, step: number = 1): number[] => {
  const result: number[] = [];
  for (let i = start; i >= end; i -= step) {
    result.push(i);
  }
  return result;
};

/**
 * Creates a range of numbers with specified length
 */
export const rangeLength = (start: number, length: number, step: number = 1): number[] => {
  const result: number[] = [];
  for (let i = 0; i < length; i++) {
    result.push(start + i * step);
  }
  return result;
};

/**
 * Creates a range of characters
 */
export const rangeChars = (start: string, end: string): string[] => {
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0);
  const result: string[] = [];
  
  for (let i = startCode; i <= endCode; i++) {
    result.push(String.fromCharCode(i));
  }
  
  return result;
};

/**
 * Creates a range of dates
 */
export const rangeDates = (start: Date, end: Date, stepDays: number = 1): Date[] => {
  const result: Date[] = [];
  const current = new Date(start);
  
  while (current <= end) {
    result.push(new Date(current));
    current.setDate(current.getDate() + stepDays);
  }
  
  return result;
};

/**
 * Creates a range of months
 */
export const rangeMonths = (start: Date, end: Date): Date[] => {
  const result: Date[] = [];
  const current = new Date(start);
  
  while (current <= end) {
    result.push(new Date(current));
    current.setMonth(current.getMonth() + 1);
  }
  
  return result;
};

/**
 * Creates a range of years
 */
export const rangeYears = (start: Date, end: Date): Date[] => {
  const result: Date[] = [];
  const current = new Date(start);
  
  while (current <= end) {
    result.push(new Date(current));
    current.setFullYear(current.getFullYear() + 1);
  }
  
  return result;
};

/**
 * Creates a range of weekdays
 */
export const rangeWeekdays = (start: Date, end: Date): Date[] => {
  const result: Date[] = [];
  const current = new Date(start);
  
  while (current <= end) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip weekends
      result.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  
  return result;
};

/**
 * Creates a range of weekends
 */
export const rangeWeekends = (start: Date, end: Date): Date[] => {
  const result: Date[] = [];
  const current = new Date(start);
  
  while (current <= end) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) { // Only weekends
      result.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  
  return result;
};

/**
 * Creates a range of business days (excluding weekends and holidays)
 */
export const rangeBusinessDays = (start: Date, end: Date, holidays: Date[] = []): Date[] => {
  const result: Date[] = [];
  const current = new Date(start);
  
  while (current <= end) {
    const dayOfWeek = current.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isHoliday = holidays.some(holiday => 
      holiday.getFullYear() === current.getFullYear() &&
      holiday.getMonth() === current.getMonth() &&
      holiday.getDate() === current.getDate()
    );
    
    if (!isWeekend && !isHoliday) {
      result.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  
  return result;
};

/**
 * Creates a range of Fibonacci numbers
 */
export const rangeFibonacci = (count: number): number[] => {
  const result: number[] = [];
  let a = 0, b = 1;
  
  for (let i = 0; i < count; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  
  return result;
};

/**
 * Creates a range of prime numbers
 */
export const rangePrimes = (count: number): number[] => {
  const result: number[] = [];
  let num = 2;
  
  while (result.length < count) {
    if (isPrime(num)) {
      result.push(num);
    }
    num++;
  }
  
  return result;
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
 * Creates a range of random numbers
 */
export const rangeRandom = (count: number, min: number = 0, max: number = 100): number[] => {
  const result: number[] = [];
  
  for (let i = 0; i < count; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  return result;
};

/**
 * Creates a range of random strings
 */
export const rangeRandomStrings = (count: number, length: number = 8): string[] => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    let str = '';
    for (let j = 0; j < length; j++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result.push(str);
  }
  
  return result;
};

/**
 * Creates a range of random colors
 */
export const rangeRandomColors = (count: number): string[] => {
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    result.push(`rgb(${r}, ${g}, ${b})`);
  }
  
  return result;
};

/**
 * Creates a range of random hex colors
 */
export const rangeRandomHexColors = (count: number): string[] => {
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    result.push(color);
  }
  
  return result;
};

/**
 * Creates a range of random emojis
 */
export const rangeRandomEmojis = (count: number): string[] => {
  const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠'];
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    result.push(emojis[randomIndex]);
  }
  
  return result;
}; 