'use strict';

const binarySearch = require('./../lib/array-binary-search.js');

describe('Testing if the binarySearch function works.', () => {
  const testArr = ['a', 'b', 'c', 'd'];

  it('should be a function that accepts an array as a parameter and a value as a parameter and should iterate through the array to find if it is there and what its index is.', () => {
    expect(binarySearch(testArr, 'a')).toBe(0);
  });
  describe('Testing if the first parameter is an array.', () => {
    it('should have an array as the first parameter.', () => {
      expect(() => binarySearch(32)).toThrow();
    });
  });
  describe('Testing if the second parameter is undefined', () => {
    it('the value is undefined.', () => {
      expect(() => binarySearch(testArr, undefined)).toThrow();
    });
  });
});
