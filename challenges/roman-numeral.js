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
    //find nearest power of 10
    const pairing = {1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M'};
    let result = '';
    const romarray = [1,5,10,50,100,500,1000];
    let roman = 1;
    do {roman++} while (n > roman);
    result = result.concat(romarray[roman]);



    // if (n === 0) return '';
    // let nearestTen = Math.floor(Math.log10(n));
    // if (nearestTen === 0) return 'I'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
    // if (nearestTen === 1) return 'X'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
    // if (nearestTen === 2) return 'C'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
    // if (nearestTen === 3) return 'M'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
}

// function romanNumeral(n) {
//     const hLog = Math.log10(2);
//     if (n === 0) return '';
//     let nearestTen = Math.log10(n);
//     console.log(nearestTen);
//     console.log((Math.floor(Math.pow(10,nearestTen))));
//     console.log(n - Math.floor(Math.pow(10,nearestTen)));
//     if (nearestTen >= 0 && nearestTen < (1-hLog)) return 'I'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen >= (1-hLog) && nearestTen < 1) return 'V'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen >=1 && nearestTen < (2-hLog)) return 'X'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen >= (2-hLog) && nearestTen < 2) return 'L'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen >= 2 && nearestTen < (3-hLog)) return 'C'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen >= (3-hLog) && nearestTen < 3) return 'D'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
//     if (nearestTen >= 3) return 'M'.concat(romanNumeral(n - Math.floor(Math.pow(10,nearestTen))));
// }

console.log(romanNumeral(312));

module.exports = romanNumeral;
