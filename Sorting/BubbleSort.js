"use strict";
// Bubble sort algorithm
/**
 *
 * Simple and easy for small datasets
 *
 * worst case - O(n^2), Best case - O(n)
 */
const BubbleSort = function(inputArr) {
  let loop = inputArr.length;
  for (let i = 0; i < loop; i++) {
    for (let j = 0; j < loop; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
      }
    }
  }
  return inputArr;
};

module.exports = BubbleSort;
