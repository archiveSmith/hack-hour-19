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

function balancedParens(input) {
  const winrarPairs = [["[", "]"], ["(", ")"], ["<", ">"], ["{", "}"]];
  if (
    input.length === 1 ||
    input.length % 2 === 1 ||
    /\d/.test(input) ||
    !/^[A-Za-z]+$/.test(input)
  ) {
    return false;
  }
  if (input.length === 2) {
    for (let i = 0; i < winrarPairs.length; i++) {
      if (
        input.charAt(0) === winrarPairs[i][0] &&
        input.charAt(1) !== winrarPairs[i][1]
      ) {
        return false;
      }
    }
    return true;
  }
  for (
    let i = 0, j = input.length - 1;
    i < input.length - 1 && j > input.length / 2;
    i++, j--
  ) {
    for (let k = 0; k < winrarPairs.length; k++) {
      if (
        //pairs
        input.charAt(i) === winrarPairs[k][0] &&
        input.charAt(j) !== winrarPairs[k][1] &&
        //adjacent
        (input.charAt(i) === winrarPairs[k][0] &&
          input.charAt(i + 1) !== winrarPairs[k][1])
      ) {
        return false;
      }
    }
    return true;
  }
}

// console.log("false: ", balancedParens("("));
// console.log("true: ", balancedParens("()"));
// console.log("false: ", balancedParens("))("));
// console.log("true: ", balancedParens("(())"));
// console.log("true: ", balancedParens("[](){}"));
// console.log("true: ", balancedParens("[({})]"));
// console.log("false: ", balancedParens("[(]{)}"));
console.log("false: ", balancedParens("[]<6"));
console.log("false: ", balancedParens("[]<s"));

module.exports = balancedParens;
