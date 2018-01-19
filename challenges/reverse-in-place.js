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
    const originalLength = array.length;
    const doubleLength = originalLength * 2;
    for (let i = 0; i < originalLength; i++){
        array[doubleLength - 2 - i] = array[i];
    }
    array.splice(0, originalLength-1);
    return array;
    // OR extend the array by one, and continuously move. seems worse that way.
}

module.exports = reverseInPlace;
