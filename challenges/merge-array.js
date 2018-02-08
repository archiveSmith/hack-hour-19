/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;

  let arr = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      arr.push(arr1[i1]);
      i1 ++;
    } else {
      arr.push(arr2[i2]);
      i2 ++
    }
  }
  arr = arr.concat(arr1.slice(i1), arr2.slice(i2));
  return arr;
}

function tests() {
  var my_array = [3,4,6,10,11,15,21];
  var another_array = [1,5,8,12,14,19];
  console.log(mergeArrays(my_array, another_array));
  console.log(mergeArrays(another_array, my_array));
  console.log(mergeArrays(another_array, 'my_array'));
}

//tests();

module.exports = mergeArrays;
