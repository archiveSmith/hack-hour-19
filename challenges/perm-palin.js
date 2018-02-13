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


// Brute force way?? n^2

function permPalin(str) {
    const length = str.length;

    for (let i = 0; i < length; i++) {
        for (let v = i; v < length; v++) {
            const arr = str.split("");
            const temp = arr[i];
            arr[i] = arr[v];
            arr[v] = temp;
            const joined = arr.join("");
            const reversed = arr.join("").reverse();
            if (joined === reversed) return true;
        }
    }

    return false;
}

// Can we do better? 




module.exports = permPalin;