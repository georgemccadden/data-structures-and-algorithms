'use strict';

function binarySearch(sortedArr, value) {
  
  if(!Array.isArray(sortedArr)) throw new Error('There must be an array passed in as the first parameter.');

  if(value === undefined) throw new Error('This value is undefined and cannot be used as the second parameter');

  for(let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === value) {
      return i;
    }
  }
  return -1;
}

module.exports = binarySearch;