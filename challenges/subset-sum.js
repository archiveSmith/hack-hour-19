/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  let sumArray = [...array];
  for (let i = 0; i < array.length; i += 1) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j += 1) {
      sumArray.push(sum + array[j]);
    }
  }
}

// const test1 = subsetSum([3, 7, 4, 2], 5);
// const test2 = subsetSum([3, 34, 4, 12, 5, 12], 32);
// const test3 = subsetSum([8, 2, 4, 12], 13);
// const test4 = subsetSum([8, -2, 1, -3], 6);

// console.log(test1);
// console.log(test2);
// console.log(test3);
// console.log(test4);

module.exports = subsetSum;
