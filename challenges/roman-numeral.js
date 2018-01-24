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
    let arr = n.split('');
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'I') output.push(1);
        if(arr[i] === 'V') output.push(5);
        if(arr[i] === 'X') output.push(10);
        if(arr[i] === 'L') output.push(100);
        if(arr[i] === 'C') output.push(500);
        if(arr[i] === 'M') output.push(1000);
    }
    for (let j = 0; j < output.length; j++) {
        if(output[j] < output[j + 1]) output.splice(j, 2, output[j + 1] - output[j]);
    }
    return output.reduce((acc, val) => acc + val);
}
// console.log(romanNumeral('XVIX')) //24

module.exports = romanNumeral;
