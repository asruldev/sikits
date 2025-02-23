export const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(value, max));

export const roundTo = (value: number, decimals: number): number => {
    return Number(value.toFixed(decimals));
};

export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);

export const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

export const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

export const fibonacci = (n: number): number => {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};