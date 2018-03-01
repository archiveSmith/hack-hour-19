/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  if (!Array.isArray(array)) return;
  let total = -(array.length);
  let sum = 0;
  array.forEach((el, i) => {
    total += (i + 1);
    sum += el;
  })
  return (sum - total);
}

function tests() {
  let arr = [1, 3, 4, 8, 6, 5, 2, 7, 8];
  console.log(repeatNumbers(arr));
  console.log(repeatNumbers([1, 1]));
  console.log(repeatNumbers([2, 1, 2]));
}

//tests();

module.exports = repeatNumbers;
