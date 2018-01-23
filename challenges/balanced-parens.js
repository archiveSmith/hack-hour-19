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
  
  for (let i = 0; i < input.length; i += 1) {

    let closingIndex = 0;

    if (input.charAt(i) === '[') {
      closingIndex = input.indexOf(']', i);
    } else if (input.charAt(i) === '(') {
      closingIndex = input.indexOf(')', i);
    } else if (input.charAt(i) === '{') {
      closingIndex = input.indexOf('}', i);
    }
    if (closingIndex === 0) continue;
    const innerString = input.slice(i + 1, closingIndex);
    if (innerString.length === 0) {
      i = closingIndex;
      continue;
    }
    if (closingIndex === -1 || innerString.length % 2 !== 0) return false;
    if (!balancedParens(innerString)) return false;
    i = closingIndex;
  }
  return true;
}

module.exports = balancedParens;
