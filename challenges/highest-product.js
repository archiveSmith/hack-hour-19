/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

/*
  Note:
  Did research online to see what the possible "edge" cases might be.
  The edge case was that there might be 2 negative numbers and each of them
  might be larger in Math.abs compared to the 2 of the largest positive numbers.
*/

function highestProduct(array) {

  if (!Array.isArray(array) || array.length < 3) return 0;

  const length = array.length;
  const sorted = array.sort((a, b) => {
    return a - b;
  });

  if (array[0] >= 0 && array[1] >= 0) return array[length - 3] * array[length - 2] * array[length - 1];

  const minVal1 = array[0];
  const minVal2 = array[1];

  const maxVal1 = array[length - 3];
  const maxVal2 = array[length - 2];
  const maxVal3 = array[length - 1];

  const postMax1 = minVal1 * minVal2 * maxVal3;
  const postMax2 = maxVal1 * maxVal2 * maxVal3;

  return (postMax1 > postMax2)? postMax1: postMax2;

}


module.exports = highestProduct;
