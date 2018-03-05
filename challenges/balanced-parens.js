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
    let array = [];
    const open = {'{' : '}','[' : ']','(' : ')'};
    const close = {'}' : true, ']' : true, ')' : true}
    
    for (var i = 0; i < str.length; i++) {
      if (open[str[i]]) {
        array.push(str[i]);
      } else if (close[str[i]]) {
        if (open[array.pop()] !== str[i]) {
          return false;
        }
      }
    }
    return array.length === 0;
  };

  function balancedParens(input){
    var matches = {'[':']', '{':'}', '(':')'};
    var brackets = [];
    for (var i = 0; i < input.length; i++) {
      char = input[i];
      if (char in matches) {
        brackets.push(char);
      } else if (char === ']' || char === ')' || char === '}'){
        if (matches[brackets.pop()] !== char){
          return false;
        }
      }
    }
    return !brackets.length;
  }

module.exports = balancedParens;
