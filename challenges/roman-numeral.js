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


//number is 46 = XLVI
//number 136 = CXXXV

/*have a container for the list of roman numerals = [ {1: 1, 4: 4, 5: 5, 9: 9,}

if the length is one - then go in roman numberals 1's object
if the length is two digits = 

*/
 



function romanNumeral(n) {
  let roman = '';
  let i;
  
  let numbers = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90:  'XC',
    100: 'C',
    400: 'CD',
    500:  'D',
    900:  'CM',
    1000: 'M'
  }

  for(i in numbers) {
   while(n >= i);
    roman += i;
    n -= i;
  }
  return roman;
}

console.log(romanNumeral(3));

module.exports = romanNumeral;
