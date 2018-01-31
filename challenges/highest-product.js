/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let max = -Infinity;

  if (array.constructor !== Array || array.length < 3) {
    return 0;
  }

  for (let i = 0; i < array.length; i += 1) {
    const elementI = array[i];
    for (let j = i + 1; j < array.length; j += 1) {
      const elementJ = array[j];
      for (let k = j + 1; k < array.length; k += 1) {
        const elementK = array[k];
        const product = elementI * elementJ * elementK;
        if ((product) > max) {
          max = product;
        }
      }
    }
  }

  return max;
}

module.exports = highestProduct;
