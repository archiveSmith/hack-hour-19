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
  const combo = [];
  // possible permutations
  // abc
  // bac
  // cab
  // bac
  // acb
  // cba

  for (let i = 0; i < string.length; i++) {
    const stringArr = string.split("");

    for (let v = i; v < string.length - 1; v++) {
      const temp = stringArr[i];
      stringArr[i] = stringArr[v];
      stringArr[v] = stringArr[i];
      const newAnagram = stringArr.join("");
      combo.push(newAnagram);
    }
  }

  return combo;
}



module.exports = anagrams;
