export const sum = (numbers: number[]): number =>
  numbers.reduce((acc, num) => acc + num, 0);
export const average = (numbers: number[]): number =>
  sum(numbers) / numbers.length;
export const median = (numbers: number[]): number => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};
export const mode = (numbers: number[]): number[] => {
  const freq: Record<number, number> = {};
  numbers.forEach((num) => (freq[num] = (freq[num] || 0) + 1));
  const maxFreq = Math.max(...Object.values(freq));
  return Object.keys(freq)
    .filter((key) => freq[Number(key)] === maxFreq)
    .map(Number);
};
export const range = (numbers: number[]): number =>
  Math.max(...numbers) - Math.min(...numbers);
