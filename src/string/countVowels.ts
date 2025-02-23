export const countVowels = (str: string): number =>
    (str.match(/[aeiou]/gi) || []).length;