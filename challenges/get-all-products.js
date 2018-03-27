/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (array.length === 0) return [0];
  //initialize bottom array, top array, and product array
  const productArray = [];
  const bottomArray = [];
  const topArray = [];
  //iterate to get all values of the bottom array
  let p = 1;
  for (let i = 0; i < array.length; i++) {
    bottomArray[i] = p;
    p *= array[i];
  }
  //iterate to get all values of top array
  p = 1;
  for (let f = array.length - 1; f >= 0; f--) {
    topArray[f] = p;
    p *= array[f];
  }
  bottomArray.forEach((e, i) => {
    productArray.push(bottomArray[i] * topArray[i]);
  });
  return productArray;
}

module.exports = getAllProducts;
