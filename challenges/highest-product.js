/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let len = array.length;
  let arr = array.slice().sort(function(a, b) {
    return a-b;
  });
  console.log(arr);
  if (len < 4) {
    // can I assume 3 ints, if fewer should I just use all of them?, if empty should I return 1?
    let product = 1;
    for (a of arr) {
      product *= a;
    }
    return product;
  } else if (arr[len-1] >= 0) {
    // gonna maximize absolute val
    console.log('in here');
    let low = arr[0] * arr[1];
    console.log(low);
    let high = arr[len-2] * arr[len-3];
    console.log(high);
    let mult = Math.max(low, high);
    return arr[len-1] * mult;
  } else {
    // all neg, gonna minimize absolute value
    return arr[len-1] * arr[len-2] * arr[len-3];
  }
}

function tests() {
  console.log(highestProduct([1, 2, 3, 4, 5, 6, 7, 8]));
  console.log(highestProduct([1, 2, 3, 4, 5, 6, -7, -8]));
  console.log(highestProduct([1, 2, 3, 4, 5, -6, -7, -8]));
  console.log(highestProduct([-1, -2, -3, -4, -5, -6, -7, -8]));
  console.log(highestProduct([-1, -2, -3, -4, -5, -6, -7, 8]));
  console.log(highestProduct([-1, -2, -3, -4, -5, -6, 7, 8]));
}

//tests()

module.exports = highestProduct;
