/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

//IN PROGRESS..... AFTER SEEING KUNALS 1 LINER, MY STRATEGY IS SUPER PISS

 function gcd(a, b) {

   //the following function can be run with arrayOfDivisors(a)
   //                                       arrayOfDivisors(b)
   function arrayOfDivisors(num) {
     let arr = [];
      for(let i = num-1; i>0; i--) {
        if (num % i === 0) {
          arr.push(i);
     }
   }
   return arr;
   }

   //now I need a function that finds the highest common number between two arrays...
   //the two input arrays can be the output of arrayOfDivisors(a) and arrayOfDivisors(b)


     let newPlan = arrayOfDivisors(a).concat(arrayOfDivisors(b)).sort((a,b)=>a-b)

     //new helper function to find the biggest double occurence in an array
     function biggestDouble() {
       let output = [];
       for(let i = newPlan.length-1; i > 0; i--) {
       if (newPlan[i] === newPlan[i-1]) {
         // output.push(newPlan[i]);
       }
       else {
         newPlan.pop();
         newPlan.pop();
       }
     }
     return output;
     }


   return biggestDouble();
 }

module.exports = gcd;
