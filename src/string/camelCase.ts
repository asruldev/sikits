export const camelCase = (str: string): string =>
    str.replace(/(?:^|\s)([a-z])/g, (_, char) => char.toUpperCase()).replace(/\s+/g, "");