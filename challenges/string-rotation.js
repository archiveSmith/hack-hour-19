
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

 function stringRotation(s1, s2) {
 /*
   I'm imagining an array of all of the options.

 */
 let arr = [];
 arr.push(s2);
 let myPush = () => {
   arr.push(s2.slice(1)+s2[0]);
   s2 = s2.slice(1)+s2[0];
 }
 for(let i = 0; i<s1.length; i++) {
   myPush();
 }

 function isSubstring() {
   for(let i = 0; i<arr.length; i++) {
     if (s1 === arr[i]) {
       return true;
     }
   }
 }

 if (isSubstring()) {return true;}
 else {return false;}
 }


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
