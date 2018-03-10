/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target, startIndex = 0, endIndex = arr.length) {
  console.log('Looking at array from index', startIndex, 'to', endIndex);
  if (startIndex >= endIndex - 1) {
    console.log('in here!')
    if (target === arr[startIndex]) return true;
    return false;
  }
  const midIndex = Math.floor((startIndex + endIndex)/2);
  if (target === arr[midIndex]) return true;
  if (target < arr[midIndex]) return findInOrderedSet(arr, target, startIndex, midIndex);
  else return findInOrderedSet(arr, target, midIndex + 1, endIndex);
}

module.exports = findInOrderedSet;
