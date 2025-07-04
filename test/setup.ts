// Test setup file
import '@testing-library/jest-dom';

// Mock console methods to reduce noise in tests
const originalConsole = { ...console };

beforeAll(() => {
  console.log = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.log = originalConsole.log;
  console.warn = originalConsole.warn;
  console.error = originalConsole.error;
});

// Global test utilities
global.testUtils = {
  // Helper to create test data
  createTestArray: (length: number) => Array.from({ length }, (_, i) => i),
  
  // Helper to create test object
  createTestObject: (keys: string[]) => 
    keys.reduce((obj, key, index) => ({ ...obj, [key]: index }), {}),
  
  // Helper to wait for async operations
  wait: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Helper to create random string
  randomString: (length: number = 10) => 
    Math.random().toString(36).substring(2, length + 2),
  
  // Helper to create random number
  randomNumber: (min: number = 0, max: number = 100) => 
    Math.floor(Math.random() * (max - min + 1)) + min
};

// Extend global types
declare global {
  var testUtils: {
    createTestArray: (length: number) => number[];
    createTestObject: (keys: string[]) => Record<string, number>;
    wait: (ms: number) => Promise<void>;
    randomString: (length?: number) => string;
    randomNumber: (min?: number, max?: number) => number;
  };
} 