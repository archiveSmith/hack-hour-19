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

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let sub = s2;

  let n = 0;

  while (s1.indexOf(sub)===-1){
    n++;
    sub = sub.slice(1);
  }

  return s2.slice(n) + s2.slice(0,n) === s1;
}





module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

  //go through s2 until you find the END of s1. is there a "last index of"? YES
  //or just go through s2 until you find the beginning of s1.
  //find the place in s2 where the end of s1 meets the beginning of s1