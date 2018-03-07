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
  if (string.length === 0 || string.length === 1) return [string];
  const results = [];
  const first = string[0];
  const rest = string.slice(1);
  const anagramsOfRest = anagrams(rest);
  anagramsOfRest.forEach(anagram => {
    // Insert first character into all positions
    for (let i = 0; i <= anagram.length; i++) {
      const newAnagram = anagram.substring(0, i) + first + anagram.substring(i, anagram.length);
      if (results.indexOf(newAnagram) === -1) results.push(newAnagram);
    }
  });
  return results;
}
var result = anagrams('aab');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = anagrams;
