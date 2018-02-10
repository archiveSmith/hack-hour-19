/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (array.length === 3) return array[0] * array[1] * array[2];

  const sortInt = (a, b) => a - b;
  let sorted = array.slice().sort(sortInt);  // O(nlogn);
  const negatives = [];

  // Where the positive numbers in the sorted array begin
  let positiveIndex = 0;
  for (let i = 0; i < sorted.length; i +=1) {
    if (sorted[i] < 0) {
      negatives.push(Math.abs(sorted[i]));
      positiveIndex += 1;
    } else break;
  }

  const positives = sorted.slice(positiveIndex);
  const nL = negatives.length;
  const pL = positives.length;

  // Calculate the highest product of two terms in the negative and positive arrays
  let negativeTwoProduct = negatives.length >= 2 ? negatives[nL- 1] * negatives[nL - 2] : 0;
  let positiveTwoProduct = positives.length >= 2 ? positives[pL- 1] * positives[pL- 2] : 0;

  let positive = true;
  let product;
  if (pL < 3) {
    sorted = sorted.map(int => Math.abs(int)).sort(sortInt);
    return -(sorted[0] * sorted[1] * sorted[2]);
  }
  // Start product as the product of the two largest integers
  if (positiveTwoProduct > negativeTwoProduct) {
    product = positiveTwoProduct;
  } else {
    product = negativeTwoProduct;
    positive = false;
  }

  if (positive) {
    if (positives[pL - 3]) product *= positives[pL - 3];
    else product *= -negatives[0];
  } else {
    if (pL > 0) product *= positives[pL - 1];
    else {
      product = -negatives[nL - 1] * -negatives[nL - 2] * -negatives[nL - 3];
    }
  }
  return product;
}

module.exports = highestProduct;
