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

  if (typeof string !== 'string') return;

  let charArr = string.split('');
  let store = {};
  charArr.forEach(function(char, i) {
    if(store[char]) { store[char] ++}
    else {store[char] = 1;}
  })

  //console.log(store);

  function anagramHelper(gram, store) {
    let chars = Object.keys(store);
    //console.log('keys', chars);

    if (!chars.length) return [gram];

    let grams = [];

    chars.forEach(function(char, i) {
      let nextGram = gram + char;
      let nextStore = {...store};
      nextStore[char] --;
      if (!nextStore[char]) { delete nextStore[char]}
      grams = grams.concat(anagramHelper(nextGram, nextStore));
    })

    return grams;
  }
  return anagramHelper('', store);
}

function tests() {
  console.log(anagrams(123))
  console.log(anagrams('abc'))
  console.log(anagrams('abca'));
  console.log(anagrams('aaaaaaa'));
}

//tests()

module.exports = anagrams;
