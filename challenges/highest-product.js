/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array) || (array.length === 3 && array.indexOf(0) > 0)) {
    return 0;
  }
  let negs = array.filter(x => x<0);
  let largestNeg = negs.map(Math.abs).sort();
  let largeNeg = largestNeg.slice(-2).reduce((a,b) => a*b, 1);
  let pos = array.filter(x => x >= 0).sort();
  let largePos = pos.slice(-2).reduce((a,b) => a*b, 1);
  return largeNeg * pos[pos.length-1];

}


module.exports = highestProduct;
