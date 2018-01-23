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
    let container = [];
    let inputItems = input.trim().split('');
    let balancedItems = true;
    
    inputItems.forEach((item) => {
      
      if (item === '(' || item === '[' || item === '{') {
        container.push(item);
      }
    
      if (item === ')') {
      balancedItems = (container.pop() === '(') ? true : false;
      }
      else if (item === ']') {
        balancedItems = (container.pop() === '[') ? true : false;
      }
      else if (item === '}') {
        balancedItems = (container.pop() === '{') ? true : false;
      }
    });
    return balancedItems;
}

module.exports = balancedParens;
