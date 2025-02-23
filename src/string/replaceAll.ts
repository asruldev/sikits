export const replaceAll = (str: string, search: string, replacement: string): string =>
    str.split(search).join(replacement);