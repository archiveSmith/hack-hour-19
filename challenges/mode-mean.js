/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 function modemean(array) {
   let mean;
   mean = Math.floor(array.reduce((a, b) => {return a+b;},0)/array.length);
   return mean === calculateMode(array);
 }

 function calculateMode(array) {
   var numCount = {};
   for (var i = 0; i < array.length; i++) {
     let num = array[i];
     if (!numCount[num]) {
       numCount[num] = 1;
     } else {
       numCount[num]++;
     }
   }
   let maxOccurrence = 0;
   let maxValue = -Infinity;
   for (var key in numCount) {
     if (numCount[key] >= maxOccurrence) {
       maxOccurrence = numCount[key];
       if (Number(key) > maxValue) {
         maxValue = Number(key);
       }
     }
   }

   return maxValue;
 }



module.exports = modemean;
