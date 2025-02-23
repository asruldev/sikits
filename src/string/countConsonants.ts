export const countConsonants = (str: string): number =>
    (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;