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
  // O(n) time AND O(1) space
  let sumWithRepeated = 0;
  let sumWithoutRepeated = 0;
  for (let i = 0; i < array.length; i++) {
    sumWithoutRepeated += i;
    sumWithRepeated += array[i];
  }
  return sumWithRepeated - sumWithoutRepeated;
  /* O(n) time
  const tracker = {};
  for (let i = 0; i < array.length; i++) {
    if (!tracker[array[i]]) tracker[array[i]] = 1;
    else return array[i];
  }
  */

  /* BRUTE FORCE O(1) space
  for (let i = 1; i < array.length; i++) {
    if (array.indexOf(i) !== array.lastIndexOf(i)) return i;
  }
  */
}

module.exports = repeatNumbers;
