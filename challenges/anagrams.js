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
  if (string.length===0) return [];
  if (string.length===1) return [string];
  
  const result = [];

  for (let i=0; i<string.length; i++) {
    // First letter can be any of them
    let first = string[i];
    // Find anagrams of the other, unchosen letters
    let otherAnagrams = anagrams(string.slice(0,i) + string.slice(i+1));

    // Add the first letter to each of the other anagrams
    for (let j=0; j<otherAnagrams.length; j++){
      result.push(first + otherAnagrams[j]);
    }
  }

  return result;
}

module.exports = anagrams;
