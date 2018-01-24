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
 */

const conversions = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

function romanNumeral(n) {
  const factorArray = Object.keys(conversions).reverse();
  let romanNumeral = '';
  while (n > 0) {
    for (let i = 0; i < factorArray.length; i += 1) {
      const divisor = Math.floor(n / Number.parseInt(factorArray[i], 10));
      if (divisor > 0) {
        n -= divisor * Number.parseInt(factorArray[i], 10);
        romanNumeral += conversions[factorArray[i]].repeat(divisor);
        break;
      }
    }
  }
  return romanNumeral;
}

module.exports = romanNumeral;
