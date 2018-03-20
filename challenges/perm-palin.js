/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let strArr = str.split('');
    let strArrReverse = str.split('').reverse();
    let result = [];
    if (str.length === 1) {
        return true;
    }
    let i = 0
    while (strArr[i]) {
        if (strArr[i] === strArrReverse[i] && strArr[i + 1] === strArrReverse[i + 1]) {
            result.push(strArrReverse[i]);
            i++
        } else {
            i++
        }
    }
    if (result.length > 1) {
        return true
    } else {
        return false
    }
}
console.log(permPalin('cbac'))

module.exports = permPalin;