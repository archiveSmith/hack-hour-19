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

// For each digit, divide by the base and compute the roman numeral for the result

function romanNumeral(n) {
  const arrRoman1 = ['I', 'V', 'X'];
  const arrRoman2 = ['X', 'L', 'C'];
  const arrRoman3 = ['C', 'D', 'M'];
  const arrRoman = [arrRoman1, arrRoman2, arrRoman3];
  const arr = ('' + n).split('');
  // let arr = [1]
  let romanNum = '';
  for (let i = 0; i < arr.length; i += 1) {
    let k = arr.length - i;
    if (arr[i] <= 3) {
      for (let j = 0; j < arr[i]; j += 1) {
        romanNum += arrRoman[k][0];
        // Let RN be...
      }
    } else if (arr[i] === 4) {
      romanNum += arrRoman[k][0] + arrRoman[k][1];
    } else if (arr[i] > 4 && arr[i] <= 8) {
      for (let j = 0; j < arr[i]; j += 1) {
        romanNum += arrRoman[k][0];
      }
    } else if (arr[i] === 9) {
      // Let RN be...
    } else if (arr[i] === 10) {
      // Let RN be...
    }
  }
}

module.exports = romanNumeral;
