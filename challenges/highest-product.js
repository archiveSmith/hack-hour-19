/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // Check if array has sufficient length
  if (array.length < 3) {
    return 'Array is too small. Need more numbers';
  }
  // Initialize 'product' and 'count' variables
  let product = 1;
  let count = 0;

  // Sort array
  const sortArr = array.sort((a, b) => {
    return a - b;
  });

  // Get the product of the 3 largest numbers in array
  for (let i = sortArr.length - 1; count < 3; i -= 1) {
    product *= sortArr[i];
    count += 1;
  }

  return product;
}

module.exports = highestProduct;
