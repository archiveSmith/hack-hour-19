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
  const roman = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C',
    400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'}
  const keys = Object.keys(roman).reverse()
  let chunks = [];
  let remainder = n;

  while (remainder !== 0) {
    for (var i = 0; i < keys.length; i++) {
      if (remainder - keys[i] >= 0) {
        chunks.push(roman[keys[i]]);
        remainder = remainder - keys[i];
        break;
      }
    }
  }
  return chunks.join('');
}

module.exports = romanNumeral;
