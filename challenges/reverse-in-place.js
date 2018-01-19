'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array, last, first) {
	if (!last) {
		console.log('initializing');
		last = array.length - 1;
		first = 0;
	}
	if(last === 1) {
		return array;
	}
	let temp = array[first];
	array[first] = array[last];
	array[last] = temp;
	reverseInPlace(array, last - 1, first + 1);
}

//console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e']));

module.exports = reverseInPlace;
