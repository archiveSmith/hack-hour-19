/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
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
  // Option 1: concat, then sort. not 0(n) probably.
  // Actually I just looked it up and merge sort is O(nlogn), which is even better...
  let result = arr1.concat(arr2);
  result = result.sort((a,b) => (a-b));
  return result;

  // Option 2: compare two values, then shift the lower one into a new array
  // Recursion (doesn't work...)
  // if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
  // if (!arr1 && !arr2) return undefined;
  // if (!arr1) return arr2;
  // if (!arr2) return arr1;

  // if (arr1[0] <= arr2[0]) {
  //   arr1 = arr1[0].concat(mergeArrays(arr1.slice(1), arr2));
  // } else {
  //   arr2 = arr2[0].concat(mergeArrays(arr1, arr2.slice(1)));
  // }
  // return the larger array...
}

module.exports = mergeArrays;
