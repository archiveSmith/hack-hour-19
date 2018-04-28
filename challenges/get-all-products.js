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
  if (!Array.isArray(array)) return;
  if (!array.length) return 0;
  let numZeros = 0;
  let product = array.reduce((acc, curr) => {
    if (curr === 0) {
      numZeros++
      return acc;
    };
    return acc * curr;
  }, 1)
  return array.map((num, i) => {
    if (numZeros > 1) return 0;
    if (num === 0) return product;
    if (numZeros === 1) return 0;
    return product / num;
  })
}

function tests() {
  console.log(getAllProducts([1, 7, 3, 4]));
}

//tests();

module.exports = getAllProducts;
