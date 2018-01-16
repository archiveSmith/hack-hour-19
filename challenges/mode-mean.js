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
   //for a place to insert key/values as char/count..
   let charCount = {

   }
   //iterate through our array elements with array[i]
   for(let i = 0; i<array.length; i++) {
     //if charCount has the property array[i]
     if (charCount.hasOwnProperty(array[i])) {
       //increment that properties value by 1
       charCount[array[i]]++;
     }

     else {
       charCount[array[i]] = 1;
     }
     //pull all values out of charCount and sort;
     let values; //charCount.values??
     //im leaving off here for now... I still need to...
     //check if the last element and the second to last element are the same
     //if they arent, then we can return the property that the last value was assigned to.
     //else i need to find the key of last 2 values and compare... the biggest
     //will count as our mode.




   //to find the mean...
   //add all elements in array and strip off any decimal values
   //divide that by number of elements in the array
   let mean = Math.floor(array.reduce((a,b)=>{return a+b},0)/array.length)}

   // if mode is equivelant to mean return true
   // else return false
 }

module.exports = modemean;
