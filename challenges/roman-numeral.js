/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

 function romanNumeral(n) {
   let romanNumeralDigitPairs = {
     1: "I",
     5: "V",
     10: "X",
     50: "L",
     100: "C",
     500: "D",
     1000:"M",
   }
   /*
   We will take a number as input and have to output a string.

   The easiest solution would be if the number given
   happens to correspond directly with a value in our VALUES obj
   This case gets dealt with first.
   */

   /* */
   let keys = Object.keys(romanNumeralDigitPairs);
   let values = Object.values(romanNumeralDigitPairs)
   keys.forEach((x,i)=>{
     if (n === Number(x)) {

       output = values[i]
     }});

   return output
 }

module.exports = romanNumeral;
