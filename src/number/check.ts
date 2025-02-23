export const isEven = (n: number): boolean => n % 2 === 0;
export const isOdd = (n: number): boolean => n % 2 !== 0;
export const isInteger = (n: number): boolean => Number.isInteger(n);
export const isFloat = (n: number): boolean => !Number.isInteger(n);
export const isBetween = (
  n: number,
  min: number,
  max: number,
  inclusive: boolean = true
): boolean => {
  return inclusive ? n >= min && n <= max : n > min && n < max;
};
