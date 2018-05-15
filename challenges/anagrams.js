/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  let num = string.length
  let result = [];
  function factoral(num) {
    if (num === 0) {
      return 1
    } else {

      return num * factoral(num - 1)
    }
  }
  if (result.indexOf())
    for (let i = 0; i < string.length; i++) {

    }
}

module.exports = anagrams;
