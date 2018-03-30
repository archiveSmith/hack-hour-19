/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  // sort by element 0

  let result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i][0] > result[result.length - 1][1]) {
      result.push(array[i]);
    } else {
      result[result.length - 1][1] = array[i][1];
    }
  }
  return result;
}

module.exports = mergeRanges;
