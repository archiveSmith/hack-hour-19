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
/*eslint-disable*/

function balancedParens(input){
  let leftCount = 0;
  let rightCount = 0;
  let arr = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '[' ||
        input[i] === '{' ||
        input[i] === '(') {
      arr.push(input[i]);
      leftCount += 1;
      continue;
    }
    if (input[i] === ']' || 
        input[i] === '}' || 
        input[i] === ')') {
      if (input[i] === ']') {
        if (arr[arr.length - 1] !== '[') {
          return false;
        }
      } else if (input[i] === '}') {
        if (arr[arr.length - 1] !== '{') {
          return false;
        } 
      } else if (input[i] === ')') {
        if (arr[arr.length - 1] !== '(') {
          return false;
        }
      } 
      if (arr.length > 0) {
        arr.pop();
        leftCount -= 1;
      } else {
        leftCount -= 1;
      }
    }
  }
  return leftCount === rightCount;
}

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
