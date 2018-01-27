/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 function subsetSum(array, target) {
   function subset(arra, arra_size) {
     var result_set = [],
     result;

     for(var x = 0; x < Math.pow(2, arra.length); x++) {
       result = [];
       i = arra.length - 1;
       do {
         if( (x & (1 << i)) !== 0) {
           result.push(arra[i]);
         }
       }  while(i--);

     if(result.length >= arra_size) {
       result_set.push(result);
     }
   }
    for (var i = 0; i < result_set.length; i++) {
      var combo = result_set[i];
      var reduced = combo.reduce((a,b) => a+b, 0);

      if (reduced === target) {
        return true;
      }
    }
    return false;
  }
  return subset(array, 1);
}

module.exports = subsetSum;
