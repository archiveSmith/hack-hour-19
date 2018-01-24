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
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  const openBrackets = ["(", "{", "["];
  const closedBrackets = ["]", "}", ")"];
  const openedBrackets = [];

  for (const i of input) {
    if (openBrackets.includes(i)) {
      openedBrackets.push(i);
    }
    if (closedBrackets.includes(i)) {
      if (i !== brackets[openedBrackets.pop()]) {
        return false;
      }
    }
  }
  return openedBrackets.length === 0;
}

module.exports = balancedParens;
