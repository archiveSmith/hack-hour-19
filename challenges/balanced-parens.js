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

<<<<<<< HEAD
function balancedParens (input) {
    var stack = [];
    var open = { '{': '}', '[': ']', '(': ')' };
    var closed = { '}': true, ']': true, ')': true };
    
    for (var i = 0; i < input.length; i ++) {
      var chr = input[i];
      if (open[chr]) {
        stack.push(chr);
      } else if (closed[chr]) {
        if (open[stack.pop()] !== chr) return false;
      }
    }
    
    return stack.length === 0;
  };
=======
function balancedParens(input){

}
>>>>>>> ec0683332cd9ad8f15bb9ab7d6f64d9fba61abec

module.exports = balancedParens;
