'use strict';

const insertShiftArray = require('./array-shift.js');

describe('Testing the insertShiftArray function', () => {
  it('should have a length that is one more than the original array', () => {
    let originalArr = ['a', 'b', 'c', 'd'];
    let newArr = insertShiftArray(originalArr, 'e');
    expect(newArr.length).toBe(originalArr.length + 1);
  });
  it(`if you pass ['a', 'b', 'c', 'd'] and 'e', it should return ['a', 'b', 'e', 'c', 'd']`, () => {
    let originalArr = ['a', 'b', 'c', 'd'];
    let newArr = insertShiftArray(originalArr, 'e');
    expect(newArr).toEqual(['a', 'b', 'e', 'c', 'd']);
  });
  it(`it should consider odd number of elements, if passing ['a', 'b', 'c', 'd', 'e']`, () => {
    let originalArr = ['a', 'b', 'c', 'd', 'e'];
    let newArr = insertShiftArray(originalArr, 'f');
    expect(newArr).toEqual(['a', 'b', 'c', 'f', 'd', 'e']);
  });
});