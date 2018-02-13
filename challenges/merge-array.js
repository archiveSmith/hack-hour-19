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
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;
  let merge = [];
  let i = 0;
  let j = 0;
  while (arr1[i] && arr2[j]) {
    if (arr1[i] <= arr2[j]) {
      merge.push(arr1[i]);
      i += 1;
    } else {
      merge.push(arr2[j]);
      j += 1;
    }
  }
  if (arr1[i]) {
    merge = merge.concat(arr1.slice(i));
  } else if (arr2[j]) {
    merge = merge.concat(arr2.slice(j));
  }
  arr1 = merge;
}

module.exports = mergeArrays;
