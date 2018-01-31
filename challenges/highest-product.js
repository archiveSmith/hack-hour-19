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
  if (array.length === 3) {
    return array.reduce((a,b) => a*b, 1);
  }
  if (largestNeg.length < 2) {
    return largePos * pos[pos.length-3];
  }
  if (largeNeg > largePos) {
    return largeNeg * pos[pos.length-1];
  }
  if (largePos > largeNeg) {
    return largePos * pos[pos.length-3];
  }
  if (largePos === largeNeg) {
    return largeNeg * pos[pos.length-1];
  }

}
 console.log('Expected 6..', 'Got: ', highestProduct([1,2,3]));
 console.log('Expected -6..', 'Got: ', highestProduct([-1,-2,-3]));
 console.log('Expected -900..', 'Got: ', highestProduct([-150,2,3]));
 console.log('Expected 600..', 'Got: ', highestProduct([-10,-20,3]));
 console.log('Expected -600..', 'Got: ', highestProduct([-1,20,30]));
 console.log('Expected 0..', 'Got: ', highestProduct([-1,-2]));
 console.log('Expected 0..', 'Got: ', highestProduct([2,3]));
 console.log('Expected 0..', 'Got: ', highestProduct([-15,0,20]));
 console.log('Expected 6..', 'Got: ', highestProduct([1,2,0,3]));
 console.log('Expected 6000..', 'Got: ', highestProduct([-20,-15,0,20,15]));
 console.log('Expected 0..', 'Got: ', highestProduct('five'));



module.exports = highestProduct;
