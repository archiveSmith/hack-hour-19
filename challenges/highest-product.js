/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


//sort the array in descending order
// create a variable to product
// multiply the var by next integer

function highestProduct(array) {
  let product;

  if(array.length < 3) {
    return 0;
  } else if(!Array.isArray(array)) {
    return 0;
  }
  array.sort((a, b) => {
    return b - a;
  });

  let i = 0;
  while(i < 3) {
    if(product === undefined) {
      product = array[i];
    } else {
      product *= array[i];
    }
    i++;
  }

  return product;
}


module.exports = highestProduct;

let numbers1 = [-3, -6, -9];
let numbers2 = [-3, -6];
let numbers3 = [6, 5, 2, 7, 8 , 9];
console.log(highestProduct(numbers1))
console.log(highestProduct(numbers2))
console.log(highestProduct(numbers3))