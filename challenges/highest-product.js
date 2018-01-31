/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length<3) return 0;
  if (!Array.isArray(array)) return 0;

  //compare the products of the largest 2 positives and largest 2 negatives
  let posArray = array.slice();
  let bigPos1 = Math.max(...posArray);
  posArray.splice(posArray.indexOf(bigPos1), 1);
  let bigPos2 = Math.max(...posArray);
  posArray.splice(posArray.indexOf(bigPos2), 1);
  let posProd = bigPos1 * bigPos2;
  
  let negArray = array.slice();
  let bigNeg1 = Math.min(...negArray);
  negArray.splice(negArray.indexOf(bigNeg1), 1);
  let bigNeg2 = Math.min(...negArray);
  negArray.splice(negArray.indexOf(bigNeg2), 1);
  let negProd = bigNeg1 * bigNeg2;
  
  //if the product of negatives is bigger, multiply by the greatest number
  //if the produce of positives is bigger, multiply by the third greatest number
  if (negProd >= posProd){
    return negProd * Math.max(...array);
  } else {
    return posProd * Math.max(...posArray);
  }
}

module.exports = highestProduct;
