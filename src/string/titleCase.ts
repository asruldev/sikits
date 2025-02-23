export const titleCase = (str: string): string =>
    str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());