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
  let allRotations = '';
  let letters = s1.split('');
  let offset = 0;
  for (let i = 0; i < letters.length; i ++) {
    for (let j = 0; j < letters.length; j ++) {
      allRotations += letters[(j+offset) % (letters.length)];
    }
    offset ++;
  }
  //console.log(allRotations);
  //console.log(s2);
  return isSubstring(allRotations, s2);
}

function tests() {
  console.log(stringRotation("hello", "hello"));
  console.log(stringRotation("hello", "llohe"));
  console.log(stringRotation("hello", "he"));
  console.log(stringRotation("hello", "ollhe"));
}

//tests()

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
