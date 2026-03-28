import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../calculator';

describe('Calculator Functions with Vitest', () => {
  describe('Addition Tests', () => {
    it('should add 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    it('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    it('should add zero to a number', () => {
      expect(add(7, 0)).toBe(7);
    });

    it('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    it('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    it('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction Tests', () => {
    it('should subtract 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should subtract resulting in a negative number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    it('should subtract two negative numbers', () => {
      expect(subtract(-10, -3)).toBe(-7);
    });

    it('should subtract zero from a number', () => {
      expect(subtract(8, 0)).toBe(8);
    });

    it('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    it('should subtract decimal numbers', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });

    it('should subtract same number resulting in zero', () => {
      expect(subtract(42, 42)).toBe(0);
    });
  });

  describe('Multiplication Tests', () => {
    it('should multiply 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    it('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    it('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    it('should multiply two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    it('should multiply positive and negative numbers', () => {
      expect(multiply(6, -2)).toBe(-12);
    });

    it('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    it('should multiply large numbers', () => {
      expect(multiply(1000, 500)).toBe(500000);
    });
  });

  describe('Division Tests', () => {
    it('should divide 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    it('should divide resulting in a decimal', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    it('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    it('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    it('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    it('should divide positive by negative number', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    it('should throw error on division by zero', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('Division by zero is not allowed');
    });

    it('should throw error when dividing zero by zero', () => {
      expect(() => {
        divide(0, 0);
      }).toThrow('Division by zero is not allowed');
    });

    it('should divide decimal numbers', () => {
      expect(divide(10.5, 2)).toBe(5.25);
    });

    it('should divide large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Real-world Examples from Reference Image', () => {
    it('Example 1: 2 + 3 should equal 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('Example 2: 10 - 4 should equal 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('Example 3: 45 * 2 should equal 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    it('Example 4: 20 / 5 should equal 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle division by zero with proper error message', () => {
      expect(() => divide(100, 0)).toThrow();
      expect(() => divide(100, 0)).toThrow('Division by zero is not allowed');
    });

    it('should handle very small numbers in division', () => {
      expect(divide(0.001, 0.0001)).toBe(10);
    });

    it('should handle very large numbers', () => {
      expect(multiply(999999, 999999)).toBe(999998000001);
    });

    it('should handle negative division correctly', () => {
      expect(divide(-20, 4)).toBe(-5);
      expect(divide(20, -4)).toBe(-5);
      expect(divide(-20, -4)).toBe(5);
    });
  });
});
