export const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;
export const toDegrees = (radians: number): number => (radians * 180) / Math.PI;
export const toPercentage = (value: number, total: number, decimals: number = 2): string => {
    return ((value / total) * 100).toFixed(decimals) + '%';
};
export const fromPercentage = (value: string): number => parseFloat(value.replace('%', '')) / 100;
