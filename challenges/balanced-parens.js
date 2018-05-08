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
   let storage = [];
   if (input.length === 1 || input.length === 0) return false;
   for (let i = 0; i < input.length; i++) {
     if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
       storage.push(input[i]);
     } else if (input[i] === ')') {
       if (storage[storage.length-1] === '(') {
         storage.pop();
       }
     } else if (input[i] === '}') {
       if (storage[storage.length-1] === '{') {
         storage.pop();
       }
     } else if (input[i] === ']') {
       if (storage[storage.length-1] === '[') {
         storage.pop();
       }
     }
   }
   return storage.length === 0;
 }


module.exports = balancedParens;
