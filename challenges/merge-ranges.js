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
  let copyArr = [];
  let resultArray = [];

  copyArr = array;
  copyArr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < copyArr.length; i += 1) {
    if (copyArr[i + 1][0] <  copyArr[i][1]) {
      let mergedArr = [copyArr[i][0], copyArr[i + 1][1]]
    }
  }

  return resultArray;
}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));

module.exports = mergeRanges;
