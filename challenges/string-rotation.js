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
	let split = s2.split("");
	let arr2 = [];
	let postRotation; 
	let backToString; 
	if(isSubstring(s1, s2)){
		return true; 
	}
	for(let i=1; i<s2.length; i++){
		arr2.unshift(split.pop()); 
		postRotation = arr2.concat(split);
		backToString = postRotation.join(""); 
		
		if(isSubstring(s1, backToString)){
			return true;
		}
	}
	return false;
	
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
