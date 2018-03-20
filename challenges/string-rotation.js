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
  s1 = s1.split("");
  s2 = s2.split("");
  let i = 0;
  while (i < s1.length && s2[i] !== undefined) {
    if (s1.indexOf(s2[i]) === s1.indexOf(s2[i + 1]) - 1) {
      i++
    } else {
      return false;
    }
  }
  return true;
}
console.log(stringRotation("hello", "llohe"))

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
