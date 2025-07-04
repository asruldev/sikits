import React, { useState } from 'react';
import * as sikits from 'sikits';

type TabType = 'string' | 'number' | 'array' | 'object';

interface FunctionExample {
  name: string;
  description: string;
  example: string;
  category: TabType;
}

const functionExamples: FunctionExample[] = [
  // String functions
  {
    name: 'capitalize',
    description: 'Capitalizes the first letter of a string',
    example: 'capitalize("hello world")',
    category: 'string'
  },
  {
    name: 'camelCase',
    description: 'Converts a string to camelCase',
    example: 'camelCase("hello world")',
    category: 'string'
  },
  {
    name: 'kebabCase',
    description: 'Converts a string to kebab-case',
    example: 'kebabCase("Hello World")',
    category: 'string'
  },
  {
    name: 'snakeCase',
    description: 'Converts a string to snake_case',
    example: 'snakeCase("Hello World")',
    category: 'string'
  },
  {
    name: 'isStringPalindrome',
    description: 'Checks if a string is a palindrome',
    example: 'isStringPalindrome("madam")',
    category: 'string'
  },
  {
    name: 'isValidEmail',
    description: 'Validates if a string is a valid email',
    example: 'isValidEmail("test@example.com")',
    category: 'string'
  },
  {
    name: 'toSlug',
    description: 'Converts a string to URL-friendly slug',
    example: 'toSlug("Hello World!")',
    category: 'string'
  },
  {
    name: 'toInitials',
    description: 'Converts a string to initials',
    example: 'toInitials("John Doe")',
    category: 'string'
  },
  {
    name: 'toColorHex',
    description: 'Converts a string to a color hex',
    example: 'toColorHex("hello")',
    category: 'string'
  },
  {
    name: 'toRandomEmoji',
    description: 'Converts a string to a random emoji',
    example: 'toRandomEmoji("hello")',
    category: 'string'
  },

  // Indonesian Validation Functions
  {
    name: 'isValidIndonesianPhone',
    description: 'Validates Indonesian phone number format',
    example: 'isValidIndonesianPhone("08123456789")',
    category: 'string'
  },
  {
    name: 'formatIndonesianPhone',
    description: 'Formats Indonesian phone number to standard format',
    example: 'formatIndonesianPhone("08123456789")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianKTP',
    description: 'Validates Indonesian KTP (Identity Card) number',
    example: 'isValidIndonesianKTP("3174050607890001")',
    category: 'string'
  },
  
  {
    name: 'parseIndonesianKTP',
    description: 'Extracts information from Indonesian KTP number',
    example: 'parseIndonesianKTP("3203011503980001")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianNPWP',
    description: 'Validates Indonesian NPWP (Tax ID) number',
    example: 'isValidIndonesianNPWP("12.345.678.9-123.456")',
    category: 'string'
  },
  {
    name: 'formatIndonesianNPWP',
    description: 'Formats Indonesian NPWP to standard format',
    example: 'formatIndonesianNPWP("123456789123456")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianPostalCode',
    description: 'Validates Indonesian postal code',
    example: 'isValidIndonesianPostalCode("12345")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianBankAccount',
    description: 'Validates Indonesian bank account number',
    example: 'isValidIndonesianBankAccount("1234567890")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianCreditCard',
    description: 'Validates Indonesian credit card number',
    example: 'isValidIndonesianCreditCard("4532015112830366")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianVehiclePlate',
    description: 'Validates Indonesian vehicle registration number',
    example: 'isValidIndonesianVehiclePlate("B1234ABC")',
    category: 'string'
  },
  {
    name: 'formatIndonesianVehiclePlate',
    description: 'Formats Indonesian vehicle plate number',
    example: 'formatIndonesianVehiclePlate("B1234ABC")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianPassport',
    description: 'Validates Indonesian passport number',
    example: 'isValidIndonesianPassport("A1234567")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianDrivingLicense',
    description: 'Validates Indonesian driving license number',
    example: 'isValidIndonesianDrivingLicense("A123456789012345")',
    category: 'string'
  },
  {
    name: 'isValidIndonesianFamilyCard',
    description: 'Validates Indonesian family card number',
    example: 'isValidIndonesianFamilyCard("1234567890123456")',
    category: 'string'
  },

  // Indonesian Transformation Functions
  {
    name: 'parseIndonesianCurrency',
    description: 'Parses Indonesian currency format to number',
    example: 'parseIndonesianCurrency("Rp 1.000.000")',
    category: 'string'
  },
  {
    name: 'formatIndonesianCurrency',
    description: 'Formats number to Indonesian currency format',
    example: 'formatIndonesianCurrency(1000000)',
    category: 'string'
  },
  {
    name: 'parseIndonesianDate',
    description: 'Parses Indonesian date format (DD/MM/YYYY)',
    example: 'parseIndonesianDate("25/12/2023")',
    category: 'string'
  },
  {
    name: 'formatIndonesianDate',
    description: 'Formats Date to Indonesian date format',
    example: 'formatIndonesianDate(new Date())',
    category: 'string'
  },
  {
    name: 'parseIndonesianTime',
    description: 'Parses Indonesian time format',
    example: 'parseIndonesianTime("2:30 PM")',
    category: 'string'
  },
  {
    name: 'formatIndonesianTime',
    description: 'Formats time to Indonesian format',
    example: 'formatIndonesianTime("14:30")',
    category: 'string'
  },
  {
    name: 'formatIndonesianAddress',
    description: 'Formats Indonesian address to standard format',
    example: 'formatIndonesianAddress("jl sudirman no 123")',
    category: 'string'
  },
  {
    name: 'formatIndonesianName',
    description: 'Formats Indonesian name to title case',
    example: 'formatIndonesianName("dr budi santoso")',
    category: 'string'
  },
  {
    name: 'toWhatsAppLink',
    description: 'Creates WhatsApp link from Indonesian phone number',
    example: 'toWhatsAppLink("08123456789")',
    category: 'string'
  },
  {
    name: 'toTelegramLink',
    description: 'Creates Telegram link from Indonesian phone number',
    example: 'toTelegramLink("08123456789")',
    category: 'string'
  },
  {
    name: 'maskIndonesianBankAccount',
    description: 'Masks Indonesian bank account number',
    example: 'maskIndonesianBankAccount("1234567890123456")',
    category: 'string'
  },
  {
    name: 'maskIndonesianCreditCard',
    description: 'Masks Indonesian credit card number',
    example: 'maskIndonesianCreditCard("4532015112830366")',
    category: 'string'
  },
  {
    name: 'maskIndonesianKTP',
    description: 'Masks Indonesian KTP number',
    example: 'maskIndonesianKTP("1234567890123456")',
    category: 'string'
  },
  {
    name: 'maskIndonesianNPWP',
    description: 'Masks Indonesian NPWP number',
    example: 'maskIndonesianNPWP("123456789012345")',
    category: 'string'
  },
  {
    name: 'formatIndonesianPostalCode',
    description: 'Formats Indonesian postal code',
    example: 'formatIndonesianPostalCode("12345")',
    category: 'string'
  },

  // Number functions
  {
    name: 'toRoman',
    description: 'Converts a number to Roman numerals',
    example: 'toRoman(42)',
    category: 'number'
  },
  {
    name: 'fromRoman',
    description: 'Converts Roman numerals to a number',
    example: 'fromRoman("XLII")',
    category: 'number'
  },
  {
    name: 'toWords',
    description: 'Converts a number to words',
    example: 'toWords(1234)',
    category: 'number'
  },
  {
    name: 'toIndonesianWords',
    description: 'Converts a number to Indonesian words',
    example: 'toIndonesianWords(1234)',
    category: 'number'
  },
  {
    name: 'toBinary',
    description: 'Converts a number to binary',
    example: 'toBinary(42)',
    category: 'number'
  },
  {
    name: 'toHex',
    description: 'Converts a number to hexadecimal',
    example: 'toHex(255)',
    category: 'number'
  },
  {
    name: 'isPerfectSquare',
    description: 'Checks if a number is a perfect square',
    example: 'isPerfectSquare(16)',
    category: 'number'
  },
  {
    name: 'factorial',
    description: 'Calculates the factorial of a number',
    example: 'factorial(5)',
    category: 'number'
  },
  {
    name: 'fibonacci',
    description: 'Gets the Fibonacci number at given index',
    example: 'fibonacci(10)',
    category: 'number'
  },
  {
    name: 'sumOfDigits',
    description: 'Gets the sum of digits of a number',
    example: 'sumOfDigits(12345)',
    category: 'number'
  },

  // Array functions
  {
    name: 'arrayRange',
    description: 'Creates a range of numbers',
    example: 'arrayRange(1, 10)',
    category: 'array'
  },
  {
    name: 'rangeFibonacci',
    description: 'Creates a range of Fibonacci numbers',
    example: 'rangeFibonacci(10)',
    category: 'array'
  },
  {
    name: 'rangePrimes',
    description: 'Creates a range of prime numbers',
    example: 'rangePrimes(10)',
    category: 'array'
  },
  {
    name: 'rangeRandom',
    description: 'Creates a range of random numbers',
    example: 'rangeRandom(5, 1, 100)',
    category: 'array'
  },
  {
    name: 'rangeRandomEmojis',
    description: 'Creates a range of random emojis',
    example: 'rangeRandomEmojis(5)',
    category: 'array'
  },
  {
    name: 'unique',
    description: 'Removes duplicates from an array',
    example: 'unique([1, 2, 2, 3, 4, 4])',
    category: 'array'
  },
  {
    name: 'shuffle',
    description: 'Shuffles an array',
    example: 'shuffle([1, 2, 3, 4, 5])',
    category: 'array'
  },
  {
    name: 'chunk',
    description: 'Splits an array into chunks',
    example: 'chunk([1, 2, 3, 4, 5], 2)',
    category: 'array'
  },
  {
    name: 'sum',
    description: 'Sums all numbers in an array',
    example: 'sum([1, 2, 3, 4, 5])',
    category: 'array'
  },
  {
    name: 'average',
    description: 'Calculates the average of numbers in an array',
    example: 'average([1, 2, 3, 4, 5])',
    category: 'array'
  },

  // Object functions
  {
    name: 'deepClone',
    description: 'Creates a deep clone of an object',
    example: 'deepClone({a: 1, b: {c: 2}})',
    category: 'object'
  },
  {
    name: 'deepMerge',
    description: 'Deep merges multiple objects',
    example: 'deepMerge({a: 1}, {b: 2}, {c: 3})',
    category: 'object'
  },
  {
    name: 'pick',
    description: 'Picks specific properties from an object',
    example: 'pick({a: 1, b: 2, c: 3}, ["a", "c"])',
    category: 'object'
  },
  {
    name: 'omit',
    description: 'Omits specific properties from an object',
    example: 'omit({a: 1, b: 2, c: 3}, ["b"])',
    category: 'object'
  },
  {
    name: 'flatten',
    description: 'Flattens a nested object',
    example: 'flatten({a: {b: {c: 1}}})',
    category: 'object'
  },
  {
    name: 'unflatten',
    description: 'Unflattens a flattened object',
    example: 'unflatten({"a.b.c": 1})',
    category: 'object'
  },
  {
    name: 'deepEqual',
    description: 'Compares two objects deeply',
    example: 'deepEqual({a: 1, b: 2}, {a: 1, b: 2})',
    category: 'object'
  },
  {
    name: 'objectDiff',
    description: 'Gets the difference between two objects',
    example: 'objectDiff({a: 1, b: 2}, {a: 1, c: 3})',
    category: 'object'
  },
  {
    name: 'transformKeys',
    description: 'Transforms object keys using a function',
    example: 'transformKeys({a: 1, b: 2}, key => key.toUpperCase())',
    category: 'object'
  },
  {
    name: 'invert',
    description: 'Inverts an object (swaps keys and values)',
    example: 'invert({a: "x", b: "y"})',
    category: 'object'
  },
  {
    name: 'groupByKey',
    description: 'Groups array items by a key function',
    example: 'groupByKey([{type: "a", val: 1}, {type: "b", val: 2}], item => item.type)',
    category: 'object'
  },
  {
    name: 'countBy',
    description: 'Counts occurrences of values in an array',
    example: 'countBy(["a", "b", "a", "c"], item => item)',
    category: 'object'
  },
  {
    name: 'sumBy',
    description: 'Sums values in an array grouped by key',
    example: 'sumBy([{type: "a", val: 1}, {type: "a", val: 2}], item => item.type, item => item.val)',
    category: 'object'
  },
  {
    name: 'createLoggingProxy',
    description: 'Creates a proxy object that logs all property access',
    example: 'createLoggingProxy({a: 1, b: 2})',
    category: 'object'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('string');
  const [selectedFunction, setSelectedFunction] = useState<FunctionExample | null>(null);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const filteredFunctions = functionExamples.filter(fn => fn.category === activeTab);

  const executeFunction = () => {
    if (!selectedFunction) return;

    try {
      setError('');
      setResult('');

      // Debug: Log available functions
      console.log('Available functions:', Object.keys(sikits).filter(key => key.includes('Indonesian')));
      console.log('Looking for function:', selectedFunction.name);
      console.log('Function exists:', typeof (sikits as any)[selectedFunction.name]);

      const fn = (sikits as any)[selectedFunction.name];
      if (!fn) {
        setError(`Function ${selectedFunction.name} not found. Available Indonesian functions: ${Object.keys(sikits).filter(key => key.includes('Indonesian')).join(', ')}`);
        return;
      }

      let args: any[] = [];
      
      // Parse input based on function type
      if (selectedFunction.category === 'string') {
        args = [input];
      } else if (selectedFunction.category === 'number') {
        const num = parseFloat(input);
        if (isNaN(num)) {
          setError('Please enter a valid number');
          return;
        }
        args = [num];
      } else if (selectedFunction.category === 'array') {
        try {
          args = JSON.parse(input);
        } catch {
          setError('Please enter a valid JSON array');
          return;
        }
      } else if (selectedFunction.category === 'object') {
        try {
          args = JSON.parse(input);
        } catch {
          setError('Please enter a valid JSON object');
          return;
        }
      }

      const result = fn(...args);
      setResult(JSON.stringify(result, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleFunctionSelect = (fn: FunctionExample) => {
    setSelectedFunction(fn);
    setInput('');
    setResult('');
    setError('');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🚀 Sikits Playground</h1>
        <p>Explore and test 100+ utility functions for JavaScript and TypeScript</p>
      </div>

      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'string' ? 'active' : ''}`}
          onClick={() => setActiveTab('string')}
        >
          🔤 String Utils
        </div>
        <div 
          className={`tab ${activeTab === 'number' ? 'active' : ''}`}
          onClick={() => setActiveTab('number')}
        >
          🔢 Number Utils
        </div>
        <div 
          className={`tab ${activeTab === 'array' ? 'active' : ''}`}
          onClick={() => setActiveTab('array')}
        >
          📋 Array Utils
        </div>
        <div 
          className={`tab ${activeTab === 'object' ? 'active' : ''}`}
          onClick={() => setActiveTab('object')}
        >
          🏗️ Object Utils
        </div>
      </div>

      <div className="main-content">
        {/* Left Side - Function Selection */}
        <div className="function-sidebar">
          <h3>Available Functions</h3>
          <div className="function-list">
            {filteredFunctions.map((fn) => (
              <div 
                key={fn.name} 
                className={`function-item ${selectedFunction?.name === fn.name ? 'selected' : ''}`}
                onClick={() => handleFunctionSelect(fn)}
              >
                <h4>{fn.name}</h4>
                <p>{fn.description}</p>
                <code>{fn.example}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Testing Area */}
        <div className="testing-area">
          {selectedFunction ? (
            <div className="test-card">
              <h2>🧪 Test: {selectedFunction.name}</h2>
              <p className="function-description">{selectedFunction.description}</p>
              
              <div className="input-group">
                <label>Input:</label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Enter input for ${selectedFunction.name}...`}
                  rows={4}
                />
              </div>

              <button className="button" onClick={executeFunction}>
                🚀 Execute Function
              </button>

              {error && (
                <div className="error">
                  <strong>❌ Error:</strong> {error}
                </div>
              )}

              {result && (
                <div className="result">
                  <strong>✅ Result:</strong>
                  <pre>{result}</pre>
                </div>
              )}
            </div>
          ) : (
            <div className="welcome-card">
              <h2>👋 Welcome to Sikits Playground!</h2>
              <p>Select a function from the left sidebar to start testing.</p>
              <div className="welcome-features">
                <div className="feature">
                  <span>🔤</span>
                  <h4>String Utils</h4>
                  <p>Transform, validate, and manipulate strings</p>
                </div>
                <div className="feature">
                  <span>🔢</span>
                  <h4>Number Utils</h4>
                  <p>Format, convert, and calculate with numbers</p>
                </div>
                <div className="feature">
                  <span>📋</span>
                  <h4>Array Utils</h4>
                  <p>Generate, transform, and analyze arrays</p>
                </div>
                <div className="feature">
                  <span>🏗️</span>
                  <h4>Object Utils</h4>
                  <p>Manipulate, compare, and enhance objects</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 