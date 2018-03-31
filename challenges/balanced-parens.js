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
  const tracker = [];
  const match = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') tracker.push(input[i]);
    if (input[i] === ')' || input[i] === '}' || input [i] === ']') {
      if (tracker[tracker.length - 1] === match[input[i]]) tracker.pop();
      else return false;
    } 
   }
  return tracker.length === 0;
}

console.log("hello");

module.exports = balancedParens;
