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

  let brackets = ['(', ')', '{', '}', '[', ']'];

  let bracketStack = [];
  let chars = input.split('');
  for (let i = 0; i < chars.length; i ++) {
    let c = chars[i];
    let x = brackets.indexOf(c);
    //console.log('c', c);
    //console.log('x', x);
    if (x > -1) {
      if (x % 2 === 0) {
        bracketStack.push(c)
      } else if (bracketStack.length === 0 || bracketStack.pop() !== brackets[x-1]){
        return false;
      }
    }
  }

  return (bracketStack.length === 0);
}

function tests() {
  console.log(balancedParens('('));
  console.log(balancedParens('()'));
  console.log(balancedParens(')('));

  console.log(balancedParens('(())'));
  console.log(balancedParens('[](){}'));
  console.log(balancedParens('[(]{)}'));

  console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
  console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
  console.log(balancedParens('[({[({})]var hubble = function({{}[]}) { telescopes.awesome() };})]'));



}

//tests()

module.exports = balancedParens;
