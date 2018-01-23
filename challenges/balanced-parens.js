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
  const parens = [];     // ()
  const brackets = [];   // []
  const curly = [];      // {}
  let last = '';

  if (!input) return false;

  const inputArr = input.split('');

  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === '(') {
        parens.push(inputArr[i]);
    } else if (inputArr[i] === ')') {
        if (parens.length === 0) return false;
        else parens.pop();
    } else if (inputArr[i] === '[') {
        brackets.push(inputArr[i]);
    } else if (inputArr[i] === ']') {
        if (brackets.length === 0) return false;
        else brackets.pop();
    } else if (inputArr[i] === '{') {
        curly.push(inputArr[i]);
    } else if (inputArr[i] === '}') {
        if (curly.length === 0) return false;
        else curly.pop();
    }

  }
  return parens.length === 0 && brackets.length === 0 && curly.length === 0;
}

module.exports = balancedParens;
