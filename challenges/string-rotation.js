/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

  //find the first letter of string1 and set to 0;
 // loop though s2 and find the indexof the character that matches with s1firstcharacter
 // set a var = slice s2 from that index until the end
 // set a var = slice from beginning to that index of the first char of s1 in s2
 // compare the values if they are the same - it's true


function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let checkString = "";

  if(s1.length !== s2.length) {
    return false;
  }
  
  for(let i = 0; i < s2.length; i++) {
    if(s1[0] === s2[i]) {
      let endSlice = s2.slice(i);
      let beginSlice = s2.slice(0, i);
      checkString = endSlice.concat(beginSlice);
    }
  }
  return isSubstring(s1, checkString);
}



// console.log(stringRotation("hello", "hello")) //-> true
console.log(stringRotation("hello", "llohe")) //-> true

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
