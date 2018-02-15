/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let len = array.length;
  let arr = array.slice().sort(function(a, b) {
    return a-b;
  });
  //console.log(arr);
  if (len < 3) {
    // can I assume 3 ints, if fewer should I just use all of them?, if empty should I return 1?
    // turns out I should return 0
    return 0;
  }

  let x = arr[0] * arr[1] * arr[len-1];
  let y = arr[len-3] * arr[len-2] * arr[len-1];
  return Math.max(x, y);
}

function tests() {
  console.log(highestProduct([1, 2, 3, 4, 5, 6, 7, 8]));
  console.log(highestProduct([1, 2, 3, 4, 5, 6, -7, -8]));
  console.log(highestProduct([1, 2, 3, 4, 5, -6, -7, -8]));
  console.log(highestProduct([-1, -2, -3, -4, -5, -6, -7, -8]));
  console.log(highestProduct([-1, -2, -3, -4, -5, -6, -7, 8]));
  console.log(highestProduct([-1, -2, -3, -4, -5, -6, 7, 8]));
  console.log(highestProduct({a: 1, b: 2, c: 3, d: 4}));
  console.log(highestProduct([-1, -2]));
}

//tests()

module.exports = highestProduct;
