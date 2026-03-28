const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(7, 0)).toBe(7);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in a negative number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-10, -3)).toBe(-7);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(8, 0)).toBe(8);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });

    test('should subtract same number resulting in zero', () => {
      expect(subtract(42, 42)).toBe(0);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(6, -2)).toBe(-12);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 500)).toBe(500000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in a decimal', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide positive by negative number', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should throw error on division by zero', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should throw specific error message for division by zero', () => {
      expect(() => {
        divide(0, 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2)).toBe(5.25);
    });

    test('should divide large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Real-world examples from image', () => {
    test('Example 1: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('Example 2: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('Example 3: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('Example 4: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });
});
