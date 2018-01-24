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
    const romanNumerals = {'1': 'I', '4': 'IV', '5': 'V', '9': 'IX', '10': 'X', '40': 'XL', '50': 'L', '90': 'XC', '100': 'CD', '400': 'D', '500': 'D', '900': 'CM', '1000': 'M' };
    
    const romanNumeralsNums = Object.keys(romanNumerals);
    let str = '';
    let firstGreater;
    
    if (n > 0){
    	let largeNumCheck = Math.floor(n / 1000);
      if (largeNumCheck > 0){
        n -= largeNumCheck * 1000;
        str += new Array(largeNumCheck).fill('M').join('');
      }
      while(n > 0){
        for (let i = 0; i < romanNumeralsNums.length; i++){
          if (n < parseInt(romanNumeralsNums[i])) {
            if(i - 1 >= 0) {
               str += romanNumerals[romanNumeralsNums[i-1]]; 
               n -= romanNumeralsNums[i-1];
               break;
            }
          }
        }
      }
    
     }
    return str;
}

module.exports = romanNumeral;
