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
    input = input.split("")
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i].indexOf(")") !== -1) {
            return false
        } else {
            let newLength = input.slice(input.length / 2, input.length).reverse;
            for (let j = 0; j < newLength.length; j++) {
                if (newLength[j].indexOf(")") === input[i].indexOf("(")) {
                    return true;
                }
            }
        }

    }
    return false;
}




function balancedParens(input) {

}

module.exports = balancedParens;
