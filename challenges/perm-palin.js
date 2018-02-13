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
<<<<<<< HEAD
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
=======
	
}
>>>>>>> 57b5518db5c6cec4fcf88cde443e276cf9f42271

module.exports = permPalin;