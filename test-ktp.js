const sikits = require('./dist/index.js');

console.log('=== Testing Valid KTP ===');
const validKtp = '1221240908940001'; // Fixed: 24/09/08 instead of 09/24/08
console.log('Valid KTP result:', sikits.isValidIndonesianKTP(validKtp));

console.log('\n=== Testing Invalid KTP ===');
const invalidKtp = '1221092408940001'; // Invalid: 09/24/08 (month 24 is invalid)
console.log('Invalid KTP result:', sikits.isValidIndonesianKTP(invalidKtp));

console.log('\n=== Manual Analysis of Invalid KTP ===');
const cleanKTP = invalidKtp.replace(/\s+/g, '');
console.log('Invalid KTP:', invalidKtp);
console.log('Date part:', cleanKTP.substring(4, 8));
console.log('Day:', parseInt(cleanKTP.substring(4, 6)));
console.log('Month:', parseInt(cleanKTP.substring(6, 8)));
console.log('Year:', parseInt(cleanKTP.substring(8, 10))); 