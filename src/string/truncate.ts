export const truncate = (str: string, length: number, suffix = '...'): string =>
    str.length > length ? str.slice(0, length) + suffix : str;