export const toFixedNumber = (value: number, decimals: number): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};

export const parseNumber = (
  value: string,
  defaultValue: number = 0
): number => {
  const num = parseFloat(value);
  return isNaN(num) ? defaultValue : num;
};

export const formatCurrency = (
  num: number,
  locale = "id-ID",
  currency = "IDR"
): string =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(num);
