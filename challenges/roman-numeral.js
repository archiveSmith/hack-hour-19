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

// function romanNumeral(n) {
//     //find nearest power of 10
//     if (n === 0) return '';
//     let nearestTen = Math.floor(Math.log10(n));
//     if (nearestTen === 0) return 'I'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen === 1) return 'X'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen === 2) return 'C'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen === 3) return 'M'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
// }

function romanNumeral(n) {
    let result = '';
    const romanPairs = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];
    let working = n;

    for (i=0; i<romanPairs.length; i+=2){
        while (working >= romanPairs[i]){
            result = result.concat(romanPairs[i+1]);
            working = working - romanPairs[i];
        }
    }
    return result;
}

module.exports = romanNumeral;
