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
  // digit by digit, convert each to Roman numerals
  // if A is 10x C and B is 5x C...
  // 9 -> CA, 8-6 -> BC(CC), 5 -> B, 4 -> CB, 3-1 -> C(CC)
  let roman = ''
  let numerals = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M', 'Z', 'Z']] // [A, B, C]
  let i = 0;
  while (n > 0) {
    let options = numerals[i]
    let digit = n % 10;
    let rom = '';
    if (digit === 9) {
      rom = rom + options[0] + options[2];
    } else if (digit >= 5) {
      rom += options[1]
      for (let j = 0; j < digit - 5; j ++) {
        rom += options[0];
      }
    } else if (digit === 4) {
      rom += options[0] + options[1];
    } else {
      for (let j = 0; j < digit; j ++) {
        rom += options[0];
      }
    }

    roman = rom + roman;
    i ++;
    n = Math.floor(n / 10);
  }
  return roman;

}

function tests() {
  for (let i = 1; i <= 1000; i ++) {
    console.log(i, romanNumeral(i));
  }
}

//tests()

module.exports = romanNumeral;
