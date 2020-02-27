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

//between parenthes



function balancedParens(input){
  let newInput = input.split('');
  let stack = [];
  let expected;

  let openingBrackets = ['[', '{', '('];
  let closingBrackets = [']', '}', ')'];

  for(let i = 0; i < newInput.length; i++) {
    let ch = newInput[i];
    
   if(openingBrackets.indexOf(ch) > -1) {
     stack.push(ch);
   } else if(closingBrackets.indexOf(ch) > -1) {
     stack.push(ch);

     expected = openingBrackets[closingBrackets.indexOf(ch)];
     if (stack.length === 0 || (stack.pop() !== expected)) {
       return false;
     }
  } else {
    continue;
  }
    
}

  return stack.length === 0;
}


module.exports = balancedParens;

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false