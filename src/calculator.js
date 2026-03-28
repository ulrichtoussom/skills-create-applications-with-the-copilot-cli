#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports four basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 */

// Core calculator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

// CLI execution - only run when called directly, not when imported
if (require.main === module) {
  const args = process.argv.slice(2);

  // Display help information
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Calculator - Basic Arithmetic Operations

Usage: node calculator.js <operation> <number1> <number2>

Operations:
  add, +        Addition
  subtract, sub Subtraction
  multiply, mul Multiplication
  divide, div   Division

Examples:
  node calculator.js add 5 7       # Output: 12
  node calculator.js sub 10 4      # Output: 6
  node calculator.js mul 3 3       # Output: 9
  node calculator.js div 8 2       # Output: 4

Options:
  --help, -h    Show this help message
  `);
    process.exit(0);
  }

  // Parse arguments
  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  // Validate input
  if (args.length < 3) {
    console.error('Error: Missing arguments. Expected <operation> <number1> <number2>');
    process.exit(1);
  }

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Invalid numeric arguments. Please provide valid numbers.');
    process.exit(1);
  }

  // Execute operation
  let result;

  try {
    switch (operation.toLowerCase()) {
      case 'add':
      case '+':
        result = add(num1, num2);
        break;
      case 'subtract':
      case 'sub':
      case '-':
        result = subtract(num1, num2);
        break;
      case 'multiply':
      case 'mul':
      case '*':
      case 'x':
        result = multiply(num1, num2);
        break;
      case 'divide':
      case 'div':
      case '/':
        result = divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'. Use --help for available operations.`);
        process.exit(1);
    }

    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide };
