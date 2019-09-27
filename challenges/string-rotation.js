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

// helper function
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

// rearrange s2
function stringRotation(s1, s2) {
  var head = s2.indexOf(s1[0]);

  if (s1.length !== s2.length || head < 0) return false;

  var s3 = s2.slice(head, s2.length).concat(s2.slice(0, head));
  return isSubstring(s1, s3);
}

// without rearranging
function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
}

// function isSubstring(s1, s2) {
//   return s1.indexOf(s2) >= 0;
// }

// function stringRotation(s1, s2) {
//   let firstCharOfString1 = 0;
//   let reorderedString2 = [];
//   if (s1.length !== s2.length) return false;

//   for (var i = 0; i < s2.length; i++) {
//     // console.log(s1[0],s2[i]);
//     if (s2[i] === s1[0]) {
//       firstCharOfString1 = i;
//       // console.log(firstCharOfString1)
//     }
//   }

//   for (var j = firstCharOfString1; j < s2.length; j++) {
//     reorderedString2.push(s2[j]);
//   }

//   for (var k = 0; k < firstCharOfString1; k++) {
//     reorderedString2.push(s2[k]);
//   }

//   // console.log(reorderedString2.join(''));
//   if (s1 === reorderedString2.join("")) {
//     return true;
//   }

//   return isSubstring(s1, reorderedString2.join(""));
// }

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
