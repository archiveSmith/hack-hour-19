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
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (!isSubstring(s1,s2[i])) {
      return false;
    }
  }

  let index = s1.indexOf(s2[0]);

  for (let i = index, j = 0; j < s1.length; i++, j++) {
    let one = s1[i% s1.length];
    let two = s2[j];

    if (s1[i% s1.length] !== s2[j]) {
      return false;
    }
  }

  return true;

}
// console.log(stringRotation("hello", "hello"));
// console.log(stringRotation("hello", "llohe"));
// console.log(stringRotation("hello", "he"));
// console.log(stringRotation("hello", "ollhe"));
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
