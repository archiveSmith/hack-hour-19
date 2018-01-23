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

function balancedParens(input){
    let output = [];
    for (let i = 0; i < input.length; i++) {
        switch(input[i]){
            case '(':
            case '{':
            case '[':
            output.push(input[i]);
            break;
            
            case ')':
            if(output.indexOf('(') === -1) return false;
            else output.splice(output.indexOf('('), 1);
            break;

            case '}':
            if(output.indexOf('{') === -1) return false;
            else output.splice(output.indexOf('{'), 1);
            break;
            
            case ']':
            if(output.indexOf('[') === -1) return false;
            else output.splice(output.indexOf('['), 1);
            break;
        }
    }
    return (output.length === 0) ? true : false;
    // console.log(output)
}       
console.log(balancedParens('([])[]{}'));

module.exports = balancedParens;
