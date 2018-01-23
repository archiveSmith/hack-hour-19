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
   let reg = /[a-zA-Z0-9\:\=\.\;\s]/g;
   input = input.split('').filter(x => !(x.match(reg)))
   input = input.join('');
   if (input === '()' || input === '[]' || input === '{}') {
     return true;
   }
   if (input.length === 2) {
     if (input !== '()' || input !== '[]' || input !== '{}') {
       return false;
     }
   }
   if (input.length % 2 === 1) {
     return false;
   }
   let first = input[0];
   let end = input[input.length - 1];
   if (first === '(' && input[input.indexOf(first) + 1] === ')') {
     return balancedParens(input.slice(2));
   }
   if (first === '[' && input[input.indexOf(first) + 1] === ']') {
     return balancedParens(input.slice(2));
   }
   if (first === '{' && input[input.indexOf(first) + 1] === '}') {
     return balancedParens(input.slice(2));
   }
   if (first === '(' && first !== '{' && first !== '[') {
     if (end === ')') {
       return balancedParens(input.slice(1,-1));
     }
   }
   if (first === '[' && first !== '(' && first !== '{') {
     if (end === ']') {
       return balancedParens(input.slice(1,-1));
     }
   }
   if (first === '{' && first !== '[' && first !== '(') {
     if (end === '}') {
       return balancedParens(input.slice(1,-1));
     }
   }
   return false;
 }


module.exports = balancedParens;
