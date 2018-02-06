/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   array = array.sort()
                .slice(array.length-3)
                .reduce((a,b)=> a*b,1

   return array;

   /*ok so I walk over to get some tea and henry points out to me...
   what about negative numbers?...
   holy shit. my mind just got blown... ... just breathe....


   */
 }


module.exports = highestProduct;
