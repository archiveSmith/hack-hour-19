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
  var length = s1.length,
  first, rest;
  if (s1.length !== s2.length) false;
  while (!isSubstring(s1, s2) && Boolean(length)) {
    first = s2[s2.length-1];
    rest = s2.slice(0, -1);
    s2 = first+rest;
    length -= 1;
    if (s2 === s1) true;
  }
  return s1 === s2;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
