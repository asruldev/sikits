export const kebabCase = (str: string): string =>
  str.replace(/\s+/g, "-").toLowerCase();
