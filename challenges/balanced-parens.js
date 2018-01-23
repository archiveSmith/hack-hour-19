/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
    if (input==='') return false;
    if (typeof input === 'undefined') return false;
    let filtArr = input.split('').filter(char => (char === '[' || char === ']' || char === '(' || char === ')' || char === '{' || char === '}'));

    if (filtArr.length % 2 !== 0) return false;
    
    //for every closing bracket, the character right before it has to be the same type. if it is, remove both from the array and check again. if it isn't, return false.
    while (filtArr.length > 0) {
        let i = 0;
        while (filtArr[i] !== ')' && filtArr[i] !== ']' && filtArr[i] !== '}') {
            i++;
        }
        if (filtArr[i] === ')' && filtArr[i - 1] === '(') {
            filtArr.splice(i - 1, 2);
        } else if (filtArr[i] === '}' && filtArr[i - 1] === '{') {
            filtArr.splice(i - 1, 2);
        } else if (filtArr[i] === ']' && filtArr[i - 1] === '[') {
            filtArr.splice(i - 1, 2);
        } else {
            return false;
        }
    }

    return true;
}

module.exports = balancedParens;
