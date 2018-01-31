/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // Permutations?
function highestProduct(array) {
  if (!array.length) return undefined;
  if (array.length === 1) return array[0];
  if (array.length === 2) return array[0] * array[1];

  array.sort((a, b) => Math.abs(a) - Math.abs(b));
  const len = array.length;
  const factors = [array[len - 3], array[len - 2], array[len - 1]];
  console.log('Factors:', factors);
  const numNegatives = factors.reduce((negs, num) => { 
    if (num < 0) return negs + 1;
    return negs; 
  }, 0);
  console.log('Num negatives:', numNegatives);
  if (numNegatives === 1) {
    if (array[len - 4]) {
      if (array[len - 4] > 0) factors[factors.findIndex(num => num < 0)] = array[len - 4];
      else factors[factors.findIndex(num => num > 0)] = array[len - 4];
    }
  }
  if (numNegatives === 3) {
    let pos = len - 4;
    while (pos >= 0 && array[pos] < 0) pos--;
    if (pos >= 0) {
      factors[0] = array[pos];
    } else {
      factors[0] = array[0];
      factors[1] = array[1];
      factors[2] = array[2];
    }
  }
  console.log("Final factors", factors);
  return factors[0] * factors[1] * factors[2];
}

// If all numbers in array are positive, highest product is product of largest three
// Look at the largest three by absolute value. If two are negative, you're cool. 
// If one is negative, look at the next smallest by absolute value
  // If it's positive, replace the negative one with that
  // If it's negative, keep the negative one and drop the smallest positive
// If three negatives
  // One positive will do it
// If all numbers are (zero or?) negative, drop  
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 4, 5, 5, 5];
const arr3 = [-2, 2, -5, 5, -6];
const arr4 = [-2, 3, -4, -5, -6];
const arr5 = [-2, -4, -5, -6];
const arr6 = [1, 2, 4, 5, -6];
const arr7 = [0, 0, -4, 5, -6];
const arr8 = [0, -1, -2, -3];
// console.log('Test 1 Expect 60:', highestProduct(arr1));
// console.log('Test 2 Expect 125:', highestProduct(arr2));
// console.log('Test 3 Expect 150:', highestProduct(arr3));
// console.log('Test 4 Expect 90:', highestProduct(arr4));
// console.log('Test 5 Expect -40:', highestProduct(arr5));
// console.log('Test 6 Expect 40:', highestProduct(arr6));
// console.log('Test 7 Expect 120:', highestProduct(arr7));
// console.log('Test 8 Expect 0:', highestProduct(arr7));
module.exports = highestProduct;
