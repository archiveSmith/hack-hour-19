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
  let str = ''
  if(Math.floor(n/1000) > 0){ str = str + 'M'.repeat(Math.floor(n/1000)); n%=1000}
  if(Math.floor(n/900) > 0){ str = str + 'CM'.repeat(Math.floor(n/900)); n%=900}
  if(Math.floor(n/500) > 0){ str = str + 'D'.repeat(Math.floor(n/500)); n%=500}
  if(Math.floor(n/400) > 0){ str = str + 'CD'.repeat(Math.floor(n/400)); n%=400}
  if(Math.floor(n/100) > 0){ str = str + 'C'.repeat(Math.floor(n/100)); n%=100}
  if(Math.floor(n/90) > 0){ str = str + 'XC'.repeat(Math.floor(n/90)); n%=90}
  if(Math.floor(n/50) > 0){ str = str + 'L'.repeat(Math.floor(n/50)); n%=50}
  if(Math.floor(n/40) > 0){ str = str + 'XL'.repeat(Math.floor(n/40)); n%=40}
  if(Math.floor(n/10) > 0){ str = str + 'X'.repeat(Math.floor(n/10)); n%=10}
  if(Math.floor(n/9) > 0){ str = str + 'IX'.repeat(Math.floor(n/9)); n%=9}
  if(Math.floor(n/5) > 0){ str = str + 'V'.repeat(Math.floor(n/5)); n%=5}
  if(Math.floor(n/4) > 0){ str = str + 'IV'.repeat(Math.floor(n/4)); n%=4}
  if(Math.floor(n/1) > 0){ str = str + 'I'.repeat(Math.floor(n/1)); n%=1}
  
  return str

}

module.exports = romanNumeral;
