/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


//sort the array in descending order
// create a variable to product
// multiply the var by next integer

function highestProduct(array) {
  let product = 1;

  array.sort((a, b) => {
    return b - a;
  });

  let i = 0;
  while(i < 3) {
    product *= array[i];
    i++;
  }

  return product;
}


module.exports = highestProduct;

let numbers = [3, 6, 4, 7, 8, 9];
console.log(highestProduct(numbers))