/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort((a,b)=> a > b).slice(array.length-3).reduce((acc,cur)=>cur*acc)
}


module.exports = highestProduct;

