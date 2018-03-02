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
  if (!Array.isArray(array)) return;
  if (!array.length) return;
  let arr = array.sort(function(a, b) {
    return a[0] - b[0];
  });
  // console.log(arr);
  let start = [];
  start.push(arr[0]);
  // console.log(start);
  return arr.reduce((acc, curr) => {
    if (!acc) return [[curr]];
    // console.log('acc', acc);
    // console.log('curr', curr);
    if (curr[0] > acc[acc.length-1][1]) {
      acc.push(curr);
      // console.log('xx');
    } else if (acc[acc.length-1][1] < curr[1]){
      acc[acc.length-1][1] = curr[1];
    }
    return acc;
  }, start);
}

function tests() {
  var times = [[0, 1], [3, 5], [10, 12], [4, 8], [9, 10]]

  console.log(mergeRanges(times));
}

//tests();

module.exports = mergeRanges;
