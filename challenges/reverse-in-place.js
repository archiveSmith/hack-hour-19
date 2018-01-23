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
    // let reverse = array.join("");
    // for (let i = reverse.length - 1; i >= 0; i--) {
    //     reverse += reverse[i];
    // }
    // return reverse.split("").slice(array.length, reverse.length);
    let arrLengthIndex = array.length - 1;
    let start = 0;
    while (arrLengthIndex > start) {
        if (arrLengthIndex < array.length / 2) {

            array[arrLengthIndex = array[start]]
        }
        array[start] = array[arrLengthIndex]
        arrLengthIndex--
        start++
    }
    return array
}
console.log(reverseInPlace(['a', 'b', 'c', 'd']))

module.exports = reverseInPlace;
