/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   array = array.sort()
                .slice(array.length-3)
                .reduce((a,b)=> a*b,1);

   return array;
 }


module.exports = highestProduct;
