'use strict';

module.exports = insertShiftArray;

function insertShiftArray (arr, value) {
  let middle = Math.ceil(arr.length/2);
  let newArr = [];
  let endPoint = arr.length;

  for (let i = 0; i < middle; i++) {
    newArr[i] = arr[i];
  }
  for (let i = middle; i < endPoint; i++) {
    newArr[i + 1] = arr[i];
  }
  newArr[middle] = value;

  return newArr;
}