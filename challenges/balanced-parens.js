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

function balancedParens (input) {
	let strArr = input.split('');
	let balancedStuff = false;
    let stringPairs = ['()', '[]', '{}'];
	
  for (let i = 0; i < stringPairs.length; i++) {
      let open = strArr.filter(str => str === stringPairs[i].charAt(0));
      let closed = strArr.filter(str => str === stringPairs[i].charAt(1));
      if (open.length !== closed.length) return false;  
  } 
  return true;
}

module.exports = balancedParens;
