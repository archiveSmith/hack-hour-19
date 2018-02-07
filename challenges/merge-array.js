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
  // Verify arguments are of type 'array'
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Please pass in valid arguments'

  // Declare counter variables
  let i = 0;
  let j = 0;

  // Declare array to return
  let arr3 = [];

  // While the counters are within the length of their respective arrays
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    // Push the smaller of the elements into arr3
    arr1[i] <= arr2[j] ? arr3.push(arr1[i++]) : arr3.push(arr2[j++])
  }
  // Concant arr3 with the remainder of arr1 and arr2, one of which will be empty
  return arr3.concat(arr1.slice(i), arr2.slice(j));
}

function test() {
  console.log('Test 1: ', mergeArrays(my_array, another_array));
  console.log('Test 2: ', mergeArrays(another_array, my_array));
  console.log('Test 3: ', mergeArrays('another_array', my_array));
  console.log('Test 4: ', mergeArrays(another_array, 4));  
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

module.exports = mergeArrays;
