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

function findClosingIndex(char,input){
  if(char === '['){ return input.indexOf(']')}
  if(char === '{'){ return input.indexOf('}')}
  if(char === '('){ return input.indexOf(')')}
}

function balancedParens(input){
  input = input.replace(/[^\{\}\(\)\[\]]/g,'')
  
  if(input.length === 0){return true}
  
  let itr = input[0];
  if(itr === '}' || itr === ')' || itr === ']'){return false}
  
  let closingIndex = findClosingIndex(itr,input);
  if(closingIndex === -1){ return false }
  
  let insideParensValue = balancedParens(input.substring(1,closingIndex));
  if(!insideParensValue){return false}
  
  return balancedParens(input.substring(closingIndex+1))
}


module.exports = balancedParens;
