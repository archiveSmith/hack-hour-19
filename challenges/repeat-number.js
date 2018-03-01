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
  let obj = {};
  while (array.length != 0) {
    let val = array.pop();
    if (obj.hasOwnProperty(val)) {
      return val;
    } else {
      obj[val] = "holder";
    }
  }
  return undefined;
}

module.exports = repeatNumbers;
