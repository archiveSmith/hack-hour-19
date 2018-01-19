/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   function positive(b, p) {
     if (p === 0) {
       return 1;
     } else if (p === 1) {
       return b;
     } else {
       return b * positive(b, p-1);
     }
   }
   function negative(b, p) {
     if (p === -1) {
       return 1/b;
     } else {
       return 1/b * negative(b, p+1);
     }
   }
   if (power < 0) {
     return negative(base, power);
   } else {
     return positive(base, power);
   }
 }

module.exports = pow;
