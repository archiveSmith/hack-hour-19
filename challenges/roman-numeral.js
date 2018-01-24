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
  let str = '';
  let low, mid, hi;
  const curr = parseInt(n.toString()[0]);
  const digits = n.toString().length;
  switch (digits) {
    case 1: {
      low = 'I';
      mid = 'V';
      hi = 'X';
      break;
    }
    case 2: {
      low = 'X';
      mid = 'L';
      hi = 'C';
      break;
    }
    case 3: {
      low = 'C';
      mid = 'D';
      hi = 'M';
      break;
    }
   case 4: {
     if (curr < 4) {
      str += 'M'.repeat(curr);
      break;
     }
   }
   default: return 'Too big for Roman numerals';
  }
  if (digits <= 3) {
    switch (curr) {
      case 1:
      case 2:
      case 3: 
        str += low.repeat(curr);
        break;
      case 4:
        str += low + mid;
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        str += mid + low.repeat(curr - 5); 
        break;
      case 9:
        str += low + hi;
        break;
    }
  }
  if (digits == 1) return str; 
  return str + romanNumeral(parseInt(n.toString().slice(1)));
}

module.exports = romanNumeral;
