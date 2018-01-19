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
    const length = array.length;
    let start = 0;
    let end = length - 1;
    if (length === 1)return array;

    while (start < end) {
        let temp = array[start];
        array[start++] = array[end];
        array[end--] = temp;
    }
    
    return array;
}

module.exports = reverseInPlace;
