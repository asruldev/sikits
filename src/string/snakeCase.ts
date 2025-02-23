export const snakeCase = (str: string): string =>
    str.replace(/\s+/g, "_").toLowerCase();