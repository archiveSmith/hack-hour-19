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

/*
* recursive, nested loops, with repeats
*/
const anagrams = str => {
  // base case:
  if (!str) return [];
  if (str.length === 1) return [str];

  // recursive case:
  const output = [];
  for (let i = 0; i < str.length; i++) {
    // let base = str[i]
    const endCombos = anagrams(str.slice(0, i) + str.slice(i + 1));

    for (let j = 0; j < endCombos.length; j++) {
      output.push(str[i] + endCombos[j]);
    }
  }

  return output;
};

/*
* recursive, no dupes
*/
function anagrams(string) {
  var results = makeAnagrams("", string);
  var noRepeats = results.reduce(function(obj, val, i) {
    obj[val] = 0;
    return obj;
  }, {});
  return Object.keys(noRepeats);
}

function makeAnagrams(head, rest) {
  var intermediate = [];
  if (rest.length === 0) {
    intermediate.push(head);
  }
  var prefix, suffix;
  for (var i = 0; i < rest.length; i++) {
    prefix = rest.slice(0, i);
    suffix = rest.slice(i + 1);
    intermediate = intermediate.concat(
      makeAnagrams(head + rest.charAt(i), prefix + suffix)
    );
  }
  return intermediate;
}

module.exports = anagrams;
