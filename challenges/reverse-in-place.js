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

function reverseInPlace(array) {
    let reverse = array.join("");
    for (let i = reverse.length - 1; i >= 0; i--) {
        reverse += reverse[i];
    }
    return reverse.split("").slice(array.length, reverse.length);
}
console.log(reverseInPlace(['a', 'b', 'c', 'd']))

module.exports = reverseInPlace;
