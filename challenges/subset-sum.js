/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 // Input: array of numbers
 // Return: boolean representing whether sum exists in it
function subsetSum(array, target) {
  array.sort();
  function isSubsetSum(index = 1, sum = array[0]) {
    if (sum === target) return true;
    if (sum > target || index === array.length) return false;
    if (sum < target) {
      const includeElementSum = isSubsetSum(index + 1, sum + array[index]);
      const skipElementSum = isSubsetSum(index + 1, sum);
      return includeElementSum || skipElementSum;
    }
  }
  return isSubsetSum();
}

console.log('Expect true --', subsetSum([3, 7, 4, 2], 5));
console.log('Expect true --', subsetSum([3, 34, 4, 12, 5, 12], 32));
console.log('Expect false --', subsetSum([8, 2, 4, 12], 13));
console.log('Expect true --', subsetSum([8, -2, 1, -3], 6));
module.exports = subsetSum;
